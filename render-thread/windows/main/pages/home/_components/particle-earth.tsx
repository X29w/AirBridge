import { useRef, useMemo, ReactNode } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

interface ParticleEarthProps {}

const IcoSpherePoints: React.FC<{ index: number }> = ({ index }) => {
  const ref = useRef<THREE.Points>(null);

  const offset = index * 0.01;
  let elapsedTime = 0;
  useFrame((_, dTime) => {
    elapsedTime += dTime * 0.2;
    if (ref.current) {
      ref.current.rotation.x = elapsedTime + offset;
      ref.current.rotation.y = elapsedTime + offset;
    }
  });

  // 创建白色圆形纹理
  const sprite = useMemo(() => {
    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;

    // 白色圆点
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fill();

    // 创建 Three.js 纹理
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
  }, []);

  const icoGeo = new THREE.IcosahedronGeometry(2, 4);
  const colors: number[] = [];
  const col = new THREE.Color();
  const icoVerts = icoGeo.attributes.position;
  const p = new THREE.Vector3();

  for (let i = 0; i < icoVerts.count; i++) {
    p.fromBufferAttribute(icoVerts, i);

    let light = (p.y + 1) / 2;
    light = 0.1 + light * 0.3;

    const { r, g, b } = col.setHSL(0, 0, light); // 黑白灰
    colors.push(r, g, b);
  }

  const colorsBuffer = new Float32Array(colors);
  const size = index * 0.0015;

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={icoVerts.count}
          array={icoVerts.array}
          itemSize={3}
          args={[icoVerts.array, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={icoVerts.count}
          array={colorsBuffer}
          itemSize={3}
          args={[colorsBuffer, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={size}
        map={sprite}
        alphaTest={0.5}
        transparent={true}
        depthWrite={false}
      />
    </points>
  );
};

const PointsGroup: React.FC = () => {
  const children: ReactNode[] = [];
  for (let i = 0; i < 40; i++) {
    children.push(<IcoSpherePoints index={i} key={i} />);
  }
  return <group>{children}</group>;
};

const ParticleEarth: React.FC<ParticleEarthProps> = () => (
  <Canvas gl={{ toneMapping: THREE.NoToneMapping }}>
    <EffectComposer>
      <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
    </EffectComposer>
    <PointsGroup />
    <hemisphereLight args={[0xffffff, 0x000000, 1.0]} />
    <OrbitControls />
  </Canvas>
);

export default ParticleEarth;
