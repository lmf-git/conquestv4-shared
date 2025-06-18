export * from './core/network.js';
export * from './core/physics.js';
export * from './entity/players.js';
export * from './entity/weapons.js';

// Re-export game constants
export const GameConstants = {
  TICK_RATE: 60
};

// Helper for vector interpolation
export const Vector = {
  lerpVector3(a, b, t) {
    return {
      x: a.x + (b.x - a.x) * t,
      y: a.y + (b.y - a.y) * t,
      z: a.z + (b.z - a.z) * t
    };
  }
};
