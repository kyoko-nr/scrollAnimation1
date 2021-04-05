import * as THREE from 'three'
import Shape from './shape'

export default class Sphere extends Shape {
  /** mesh. */
  mesh: THREE.Object3D
  /** speed of rotate and fall. */
  speed: number

  /**
   * Constructor.
   * @param radius radius
   * @param color color
   * @param position first position
   * @param speed moving speed
   */
  constructor(radius: number, color: THREE.Color, position: THREE.Vector3, speed: number) {
    super()
    const geom = new THREE.IcosahedronBufferGeometry(radius, 0)
    const mat = new THREE.MeshBasicMaterial({color: color, wireframe: true})
    this.mesh = new THREE.Mesh(geom, mat)
    this.mesh.position.copy(position)
    this.speed = speed
  }

}