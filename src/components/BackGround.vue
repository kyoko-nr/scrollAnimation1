<template>
  <div class="background"></div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import * as THREE from 'three'
import ClockRing from '../three/clockRing'
import BackShapes from '../three/backShapes'
import TimeKeeper from '../utils/timeKeeper'
import ScaleManager from '../utils/scaleManager'

export default class BackGround extends Vue {
  /**
   * data.
   * initialize members on init() method because
   * members don't work when you initialize members here.
   */
  size = {width: 0, height: 0}
  scene!: THREE.Scene
  renderer!: THREE.WebGLRenderer
  camera!: THREE.PerspectiveCamera
  clockRing!: ClockRing
  backShapes!: BackShapes
  timeKeeper = new TimeKeeper()
  scaleManager = new ScaleManager()

  /**
   * mounted.
   */
  mounted(): void {
    this.init()
    this.draw()
    window.addEventListener('resize', this.onResize)
    window.addEventListener('scroll', this.onScroll)
  }

  /**
   * initialize members.
   */
  init(): void {
    this.size.width = window.innerWidth
    this.size.height = window.innerHeight

    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.Fog(0xE5B6B7, 50, 200)

    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
    const background = document.querySelector('div.background')
    background?.appendChild(this.renderer.domElement)
    this.renderer.setSize(this.size.width, this.size.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 300)
    this.camera.position.set(0, 0, 100)

    this.clockRing = new ClockRing()
    this.scene.add(this.clockRing.getMesh())

    this.backShapes = new BackShapes()
    this.scene.add(this.backShapes.getMesh())
  }

  /**
   * render.
   */
  draw(): void {
    this.renderer.render(this.scene, this.camera)

    // for animation
    const scale = this.scaleManager.getScrollScale(0.4)
    const time = this.timeKeeper.getTime()

    // clock ring animation.
    this.clockRing.animate(time, scale)

    // back shapes animation.
    this.backShapes.animate(time, scale)

    window.requestAnimationFrame(this.draw)
  }

  /**
   * on window resize.
   */
  onResize(): void {
    this.size.width = window.innerWidth
    this.size.height = window.innerHeight
    this.camera.aspect = this.size.width / this.size.height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.size.width, this.size.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  /**
   * constroll animation on scroll.
   */
  onScroll(): void {
    this.scaleManager.setDestination(window.scrollY)

    if(window.scrollY < 200) {
      if(this.backShapes.isReverse()){
        this.backShapes.toForward()
        this.clockRing.toForward()
      }
    } else {
      if(this.backShapes.isForward()) {
        this.backShapes.toReverse()
        this.clockRing.toReverse()
      }
    }
  }

}
</script>

<style scoped>
.background {
  background: linear-gradient(115.58deg, #00FC19 0%, #1700A4 100.22%),
              radial-gradient(92.72% 100% at 50% 0%, #EBFFCB 0%, #651200 100%),
              radial-gradient(92.72% 100% at 50% 0%, #2bff00 0%, #820000 100%),
              radial-gradient(109.21% 213.32% at 100% 0%, #FF4D00 0%, #00C2FF 100%),
              linear-gradient(127.43deg, #D50000 0%, #6CBAD8 100%);
  background-blend-mode: lighten, overlay, lighten, screen, normal;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>