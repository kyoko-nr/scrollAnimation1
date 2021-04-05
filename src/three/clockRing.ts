import * as THREE from 'three'

export default class ClockRing {

  /** group. */
  private group: THREE.Object3D
  /** sphere1. */
  private sphere1: THREE.Object3D
  /** sphere2. */
  private sphere2: THREE.Object3D
  /** sphere3. */
  private sphere3: THREE.Object3D
  /** forward move flag */
  private forward = true;

  /**
   * Coustructor.
   */
  constructor() {
    this.group = new THREE.Group()

    // Rings
    const mat = new THREE.MeshBasicMaterial({color: 0xffffff})
    // Ring1
    const ring1 = new THREE.Mesh(new THREE.RingGeometry(31.9, 32, 128), mat)
    ring1.position.set(-.3, 1.4, 2)
    this.group.add(ring1)
    // Ring2
    const ring2 = new THREE.Mesh(new THREE.RingGeometry(30.9, 31, 128), mat)
    ring2.position.set(1, 0, 2)
    this.group.add(ring2)
    // Ring3
    const ring3 = new THREE.Mesh(new THREE.RingGeometry(29.9, 30, 128), mat)
    ring3.position.set(.7, 4.6, 2)
    this.group.add(ring3)

    // Spheres
    const sMat = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true})
    // Sphere1
    this.sphere1 = new THREE.Mesh(new THREE.SphereBufferGeometry(3, 8, 8), sMat)
    this.sphere1.position.set(28.8, 11.5, 5)
    this.group.add(this.sphere1)
    // Sphere2
    this.sphere2 = new THREE.Mesh(new THREE.SphereBufferGeometry(1.6, 6, 6), sMat)
    this.sphere2.position.set(-28.2, 6.6, 5)
    this.group.add(this.sphere2)
    // Sphere3
    this.sphere3 = new THREE.Mesh(new THREE.SphereBufferGeometry(1.4, 6, 6), sMat)
    this.sphere3.position.set(-8.4, -28.5, 5)
    this.group.add(this.sphere3)

  }

  /**
   * getter.
   * @returns group
   */
  getMesh(): THREE.Object3D {
    return this.group
  }

  /**
   * controll move.
   * @param time time
   * @param scale scroll scale
   */
  animate(time: number, scale: number): void {
    if(this.forward) {
      this.clockwise(time)
    } else {
      this.counterClockwise(time, scale)
    }
  }

  /**
   * clock wise move.
   * @param time time
   */
  clockwise(time: number): void {
    this.group.rotation.z   -= time * .5
    this.sphere1.rotation.x -= time * 3.5
    this.sphere1.rotation.y -= time * 3
    this.sphere2.rotation.x -= time * 2.5
    this.sphere2.rotation.y -= time * 2
    this.sphere3.rotation.x -= time * 1.5
    this.sphere3.rotation.y -= time * 1
  }

  /**
   * counter-clockwise move.
   * @param scale scroll scale
   */
  counterClockwise(time: number, scale: number) {
    this.group.rotation.z   += (time * .5) + (scale * .002)
    this.sphere1.rotation.x += (time * 3.5) + (scale * .005)
    this.sphere1.rotation.y += (time * 3) + (scale * .005)
    this.sphere2.rotation.x += (time * 2.5) + (scale * .005)
    this.sphere2.rotation.y += (time * 2) + (scale * .005)
    this.sphere3.rotation.x += (time * 1.5) + (scale * .005)
    this.sphere3.rotation.y += (time * 1) + (scale * .005)
  }

  /**
   * set forward flag to true.
   */
  toForward(): void {
    this.forward = true;
  }

  /**
   * set forward flag to false.
   */
  toReverse(): void {
    this.forward = false
  }

}