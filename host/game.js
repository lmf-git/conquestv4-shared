import RAPIER from '@dimforge/rapier3d-compat';

export class GameConstants {
  static TICK_RATE = 60;
}

export class PlayerConstants {
  static RADIUS = 0.3;
  static HEIGHT = 1.8; // Standard FPS height
  static SPEED = 5.0;
  static JUMP_FORCE = 8.0;
  static MOUSE_SENSITIVITY = 0.002;
  static MAX_HEALTH = 100;
}

export class WeaponConstants {
  static FIRE_RATE = 0.1; // seconds between shots
  static PROJECTILE_SPEED = 50;
  static PROJECTILE_DAMAGE = 20;
  static PROJECTILE_RADIUS = 0.05;
}

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