import * as THREE from 'three'
import Shape from './shape'
import Cube from './cube'
import Octa from './octa'
import Cone from './cone'

export default class BackShapes {

  /** group. */
  private group: THREE.Group
  /** shapes. */
  private shapeAry: Array<Shape> = []

  /**
   * Constructor.
   */
  constructor() {
    this.group = new THREE.Group()

    const color = new THREE.Color(0xCDFAF2)

    // Cubes
    const cubeNum = 10
    for(let i = 0; i < cubeNum; i ++) {
      const position = new THREE.Vector3(
        Math.random() * 180 - 90,
        Math.random() * 180 - 90,
        Math.random() * 40 - 60)
      const cube = new Cube(Math.random() * 2 + 1, color, position, Math.random() * .2 + .1)
      this.group.add(cube.getMesh())
      this.shapeAry.push(cube)
    }
    // Octahedrons
    const octNum = 10
    for(let i = 0; i < octNum; i ++) {
      const position = new THREE.Vector3(
        Math.random() * 180 - 90,
        Math.random() * 180 - 90,
        Math.random() * 40 - 60)
      const octa = new Octa(Math.random() * 2.5 + 1, color, position, Math.random() * .2 + .1)
      this.group.add(octa.getMesh())
      this.shapeAry.push(octa)
    }
    // Cones
    const coneNum = 10
    for(let i = 0; i < coneNum; i ++) {
      const position = new THREE.Vector3(
        Math.random() * 180 - 90,
        Math.random() * 180 - 90,
        Math.random() * 40 - 60)
      const cone = new Cone(Math.random() * 2 + 1, color, position, Math.random() * .2 + .1)
      this.group.add(cone.getMesh())
      this.shapeAry.push(cone)
    }
  }

  /**
   * getter.
   * @returns group
   */
  getMesh(): THREE.Object3D {
    return this.group
  }

  /**
   * animate shapes.
   */
  animate(time: number, scale: number): void {
    for(const shape of this.shapeAry) {
      shape.animate(time, scale)
    }
  }

  /**
   * set move to reverse.
   */
  toReverse(): void {
    for(const shape of this.shapeAry) {
      shape.setReverseFlg()
    }
  }

  /**
   * set move to forward.
   */
  toForward(): void {
    for(const shape of this.shapeAry) {
      shape.setForwardFlg()
    }
  }

  /**
   * Returns if its in reverse move.
   * @returns boolean
   */
  isReverse(): boolean {
    return !this.shapeAry[0].isForward()
  }

  /**
   * Returns if its in forward move.
   * @returns boolean
   */
  isForward(): boolean {
    return this.shapeAry[0].isForward()
  }

}