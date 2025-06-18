export const ModelPaths = {
  // Model file paths relative to the models directory
  PLAYER: 'player.glb',
  CAR: 'vehicles/car.glb',
  HELICOPTER: 'vehicles/helicopter.glb',
  PLANE: 'vehicles/plane.glb',
  GHOST_BOX: 'ghosts/box.glb',
  GHOST_SPHERE: 'ghosts/sphere.glb',
  GHOST_CYLINDER: 'ghosts/cylinder.glb'
}

export const getModelUrl = (modelPath, isProduction = false, isClient = true) => {
  if (isClient) {
    // Client always uses public directory
    return `/models/${modelPath}`
  } else {
    // Server uses different URLs for dev/prod
    const baseUrl = isProduction 
      ? 'https://thecoop.group/models'
      : 'http://localhost:3000/models'
    return `${baseUrl}/${modelPath}`
  }
}
