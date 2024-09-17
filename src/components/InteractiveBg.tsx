// InteractiveDots.tsx
import React, { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { MathUtils } from "three";
import { Points as ThreePoints } from "three";

type PointsRef = React.MutableRefObject<ThreePoints | null>;

function PointsComponent({ pointsRef }: { pointsRef: PointsRef }) {
  // Continuous slow rotation effect for points
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0005; // Slow continuous rotation
      pointsRef.current.rotation.y += 0.0005;
    }
  });

  // Float32Array - for handling large amounts of data in 3D, random positions -5 to 5
  const generateDots = useCallback((count: number) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = Math.random() * 10 - 5;
      positions[i * 3 + 1] = Math.random() * 10 - 5;
      positions[i * 3 + 2] = Math.random() * 10 - 5;
    }
    return positions;
  }, []);

  const positions = useMemo(() => generateDots(1000), [generateDots]);

  return (
    <Points ref={pointsRef} positions={positions} scale={1}>
      <PointMaterial
        transparent
        color="rgba(44,44,44,10)"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function InteractiveBg() {
  const pointsRef = useRef<ThreePoints | null>(null);

  // Handle mouse movement for subtle interactivity
  const handlePointerMove = useCallback((e: any) => {
    if (pointsRef.current) {
      const deltaX = MathUtils.lerp(0, e.movementX * 0.0005, 0.1);
      const deltaY = MathUtils.lerp(0, e.movementY * 0.0005, 0.1);
      pointsRef.current.rotation.x += deltaY;
      pointsRef.current.rotation.y += deltaX;
    }
  }, []);

  return (
    <div className="relative h-full w-full">
      <Canvas
        className="absolute left-0 top-0 h-full w-full"
        onPointerMove={handlePointerMove}
      >
        <PointsComponent pointsRef={pointsRef} />
      </Canvas>
    </div>
  );
}
