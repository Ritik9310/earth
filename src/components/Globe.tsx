import React, { useEffect, useRef } from 'react';
import * as Cesium from 'cesium';

// Set Cesium configuration
window.CESIUM_BASE_URL = '/cesium/';

const Globe: React.FC = () => {
  const cesiumContainer = useRef<HTMLDivElement>(null);
  const viewer = useRef<Cesium.Viewer | null>(null);

  useEffect(() => {
    if (!cesiumContainer.current) return;

    // Initialize Cesium viewer
    viewer.current = new Cesium.Viewer(cesiumContainer.current, {
      terrain: Cesium.Terrain.fromWorldTerrain(),
      homeButton: false,
      sceneModePicker: false,
      baseLayerPicker: false,
      navigationHelpButton: false,
      animation: false,
      timeline: false,
      fullscreenButton: false,
      vrButton: false,
      geocoder: false,
      infoBox: false,
      selectionIndicator: false,
      shadows: true,
      shouldAnimate: true,
    });

    // Enable lighting
    viewer.current.scene.globe.enableLighting = true;

    // Set initial camera position (slightly tilted view of Earth)
    viewer.current.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(77.2090, 28.6139, 20000000),
      orientation: {
        heading: 0.0,
        pitch: -Cesium.Math.PI_OVER_FOUR,
        roll: 0.0,
      },
    });

    // Add New Delhi marker
    const newDelhiPosition = Cesium.Cartesian3.fromDegrees(77.2090, 28.6139, 0);
    
    viewer.current.entities.add({
      name: 'New Delhi, India',
      position: newDelhiPosition,
      point: {
        pixelSize: 15,
        color: Cesium.Color.RED,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 2,
        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
        scaleByDistance: new Cesium.NearFarScalar(1.5e2, 1.0, 1.5e7, 0.5),
      },
      label: {
        text: 'New Delhi',
        font: '14pt sans-serif',
        pixelOffset: new Cesium.Cartesian2(0, -50),
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        scaleByDistance: new Cesium.NearFarScalar(1.5e2, 1.0, 1.5e7, 0.0),
      },
    });

    // Cleanup function
    return () => {
      if (viewer.current) {
        viewer.current.destroy();
        viewer.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={cesiumContainer}
      className="w-full h-full rounded-lg overflow-hidden shadow-2xl"
      style={{ minHeight: '400px' }}
    />
  );
};

export default Globe;