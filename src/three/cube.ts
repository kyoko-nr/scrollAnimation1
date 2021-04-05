import * as THREE from 'three'
import Shape from './shape'

export default class Cube extends Shape {
  /** mesh. */
  mesh: THREE.Object3D
  /** speed of rotate and fall. */
  speed: number

  /**
   * Constructor
   * @param size size
   * @param color color
   * @param position first position
   * @param speed moving speed
   */
  constructor(size: number, color: THREE.Color, position: THREE.Vector3, speed: number) {
    super()
    const geom = new THREE.BoxBufferGeometry(size, size, size)
    const mat = new THREE.MeshBasicMaterial({color: color, wireframe: true})
    this.mesh = new THREE.Mesh(geom, mat)
    this.mesh.position.copy(position)
    this.speed = speed
  }

}