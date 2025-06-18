import RAPIER from '@dimforge/rapier3d-compat';
import { PlayerConstants } from '../entity/players.js';

export class PhysicsConstants {
  static TIMESTEP = 1 / 60;
  static GRAVITY = { x: 0, y: -9.81, z: 0 };
}

export class Physics {
  static vector3ToRapier(v) {
    return new RAPIER.Vector3(v.x, v.y, v.z);
  }

  static rapierToVector3(v) {
    return { x: v.x, y: v.y, z: v.z };
  }

  static createPlayerColliderDesc() {
    return RAPIER.ColliderDesc.capsule(PlayerConstants.HEIGHT / 2, PlayerConstants.RADIUS);
  }

  static createGroundColliderDesc(width = 50, height = 0.5, depth = 50) {
    return RAPIER.ColliderDesc.cuboid(width, height, depth);
  }

  static createPlayerRigidBody(world, RAPIER, position = { x: 0, y: 5, z: 0 }) {
    const rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(position.x, position.y, position.z)
      .setLinearDamping(0.5);
    return world.createRigidBody(rigidBodyDesc);
  }

  static isGrounded(rigidBody, groundLevel = 1, tolerance = 0.1) {
    return Math.abs(rigidBody.translation().y - groundLevel) < tolerance;
  }
}
