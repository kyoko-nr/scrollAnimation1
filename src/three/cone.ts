import * as THREE from 'three'
import Shape from './shape'

export default class Cone extends Shape {
  /** mesh. */
  mesh: THREE.Object3D
  /** speed of rotate and fall. */
  speed: number

  /**
   * Constructor.
   * @param size size
   * @param color color
   * @param position first position
   * @param speed moving speed
   */
  constructor(size: number, color: THREE.Color, position: THREE.Vector3, speed: number) {
    super()
    const geom = new THREE.ConeBufferGeometry(size, size * 1.5, 6)
    const mat = new THREE.MeshBasicMaterial({color: color, wireframe: true})
    this.mesh = new THREE.Mesh(geom, mat)
    this.mesh.position.copy(position)
    this.speed = speed
  }

  /**
   * rotate shape
   * @param time second
   */
  public rotate(time: number) {
    this.mesh.rotation.y += time + (this.speed * .3)
    this.mesh.rotation.z += time + (this.speed * .2)
  }

  // /**
  //  * animate forward (override)
  //  */
  // public animateFwd(): void {
  //   this.mesh.position.y -= this.speed
  //   if(this.mesh.position.y < -100) {
  //     this.mesh.position.y = 100
  //   }
  //   this.mesh.rotation.x += this.speed / 4
  //   this.mesh.rotation.z += this.speed / 4
  // }

}