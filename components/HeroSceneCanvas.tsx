"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree, type ThreeElements } from "@react-three/fiber";
import { Float, ContactShadows, OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";

const COLORS = {
  accent: "#D9551F",
  gold: "#E8A33D",
  green: "#1F4D32",
  greenLight: "#4a8f5e",
  navy: "#303e63",
  steel: "#d9dce1",
  dark: "#242019",
  charcoal: "#1c1812",
  body: "#e2ddd0",
  paper: "#f7f4ee",
  screen: "#8fd8e0",
};

const INK_COLORS = ["#1a1a1a", "#f0c419", "#c0397a", "#2b8fb3"];

// gradient map สองสี ทำให้แสง/เงาตัดกันชัดแบบ flat/toon แทนไล่เฉดสมจริง
function useToonGradient() {
  return useMemo(() => {
    const tex = new THREE.DataTexture(new Uint8Array([90, 255]), 2, 1, THREE.RedFormat);
    tex.needsUpdate = true;
    tex.minFilter = THREE.NearestFilter;
    tex.magFilter = THREE.NearestFilter;
    tex.generateMipmaps = false;
    tex.unpackAlignment = 1;
    return tex;
  }, []);
}

function Toon({
  color,
  emissive,
  emissiveIntensity,
  side,
  toonRef,
  gradientMap,
}: {
  color: string;
  emissive?: string;
  emissiveIntensity?: number;
  side?: THREE.Side;
  toonRef?: React.Ref<THREE.MeshToonMaterial>;
  gradientMap: THREE.DataTexture;
}) {
  return (
    <meshToonMaterial
      ref={toonRef}
      color={color}
      gradientMap={gradientMap}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      side={side}
    />
  );
}

/** เครื่องพิมพ์ไวนิลแบบม้วน (wide-format solvent printer) */
function VinylPrinter(props: ThreeElements["group"]) {
  const g = useToonGradient();
  return (
    <group {...props}>
      {/* stand posts */}
      {[-0.78, 0.78].map((x) => (
        <mesh key={x} position={[x, -0.55, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.8, 10]} />
          <Toon color={COLORS.charcoal} gradientMap={g} />
        </mesh>
      ))}
      {/* base rail */}
      <mesh position={[0, -0.92, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 1.56, 10]} />
        <Toon color={COLORS.charcoal} gradientMap={g} />
      </mesh>
      {/* take-up roller bar */}
      <mesh position={[0, -0.58, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.045, 0.045, 1.6, 14]} />
        <Toon color={COLORS.dark} gradientMap={g} />
      </mesh>
      {[-0.82, 0.82].map((x) => (
        <mesh key={x} position={[x, -0.58, 0]}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <Toon color={COLORS.dark} gradientMap={g} />
        </mesh>
      ))}

      {/* hanging vinyl sheet */}
      <mesh position={[0, -0.32, 0.32]} rotation={[-0.08, 0, 0]}>
        <planeGeometry args={[1.3, 1.1]} />
        <Toon color={COLORS.paper} side={THREE.DoubleSide} gradientMap={g} />
      </mesh>
      {/* side guide rails */}
      {[-0.78, 0.78].map((x) => (
        <mesh key={x} position={[x, 0.08, 0.27]}>
          <boxGeometry args={[0.05, 0.55, 0.05]} />
          <Toon color={COLORS.charcoal} gradientMap={g} />
        </mesh>
      ))}

      {/* body (white/gray) */}
      <mesh position={[0, 0.12, 0]}>
        <boxGeometry args={[1.62, 0.42, 0.55]} />
        <Toon color={COLORS.body} gradientMap={g} />
      </mesh>
      {/* ink cartridge bay */}
      {INK_COLORS.map((c, i) => (
        <mesh key={c} position={[0.78, 0.18, -0.18 + i * 0.12]}>
          <boxGeometry args={[0.1, 0.2, 0.09]} />
          <Toon color={c} gradientMap={g} />
        </mesh>
      ))}

      {/* print-head rail strip */}
      <mesh position={[0, 0.34, 0.22]}>
        <boxGeometry args={[1.5, 0.035, 0.08]} />
        <Toon color={COLORS.gold} emissive={COLORS.gold} emissiveIntensity={0.2} gradientMap={g} />
      </mesh>

      {/* top hood (navy) */}
      <mesh position={[0, 0.5, -0.02]}>
        <boxGeometry args={[1.66, 0.3, 0.5]} />
        <Toon color={COLORS.navy} gradientMap={g} />
      </mesh>
      {/* small control panel */}
      <mesh position={[0.68, 0.68, 0.1]}>
        <boxGeometry args={[0.2, 0.1, 0.14]} />
        <Toon color={COLORS.charcoal} gradientMap={g} />
      </mesh>
      <mesh position={[0.68, 0.68, 0.18]}>
        <planeGeometry args={[0.12, 0.06]} />
        <Toon color={COLORS.screen} emissive={COLORS.screen} emissiveIntensity={0.6} gradientMap={g} />
      </mesh>
    </group>
  );
}

/** CNC Router แบบโต๊ะแกน gantry */
function CncMachine(props: ThreeElements["group"]) {
  const g = useToonGradient();
  const spindle = useRef<THREE.Mesh>(null);
  const carriage = useRef<THREE.Group>(null);
  useFrame(({ clock }, delta) => {
    if (spindle.current) spindle.current.rotation.y += delta * 6;
    if (carriage.current) carriage.current.position.x = Math.sin(clock.getElapsedTime() * 0.8) * 0.55;
  });

  return (
    <group {...props}>
      {/* cabinet base */}
      <mesh position={[0, -0.58, 0]}>
        <boxGeometry args={[1.8, 0.42, 1.05]} />
        <Toon color={COLORS.body} gradientMap={g} />
      </mesh>
      {[-0.9, 0.9].map((x) => (
        <mesh key={x} position={[x, -0.58, 0]}>
          <boxGeometry args={[0.1, 0.42, 1.05]} />
          <Toon color={COLORS.green} gradientMap={g} />
        </mesh>
      ))}
      {/* e-stop */}
      <mesh position={[-0.6, -0.48, 0.53]}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <Toon color="#b02a1f" gradientMap={g} />
      </mesh>

      {/* slatted bed */}
      <mesh position={[0, -0.33, 0]}>
        <boxGeometry args={[1.72, 0.08, 0.98]} />
        <Toon color={COLORS.charcoal} gradientMap={g} />
      </mesh>
      {[-0.3, -0.1, 0.1, 0.3].map((z) => (
        <mesh key={z} position={[0, -0.285, z]}>
          <boxGeometry args={[1.66, 0.02, 0.05]} />
          <Toon color={COLORS.dark} gradientMap={g} />
        </mesh>
      ))}

      {/* gantry towers */}
      {[-0.82, 0.82].map((x) => (
        <mesh key={x} position={[x, 0.02, 0]}>
          <boxGeometry args={[0.16, 0.56, 1.0]} />
          <Toon color={COLORS.body} gradientMap={g} />
        </mesh>
      ))}
      {/* gantry beam */}
      <mesh position={[0, 0.33, 0]}>
        <boxGeometry args={[1.82, 0.16, 0.22]} />
        <Toon color={COLORS.green} emissive={COLORS.greenLight} emissiveIntensity={0.08} gradientMap={g} />
      </mesh>

      {/* z-axis carriage + spindle */}
      <group ref={carriage} position={[0, 0, 0]}>
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[0.22, 0.38, 0.2]} />
          <Toon color={COLORS.greenLight} gradientMap={g} />
        </mesh>
        <mesh ref={spindle} position={[0, -0.22, 0]}>
          <cylinderGeometry args={[0.045, 0.06, 0.26, 14]} />
          <Toon color={COLORS.steel} emissive={COLORS.gold} emissiveIntensity={0.1} gradientMap={g} />
        </mesh>
      </group>
    </group>
  );
}

/** เครื่องพิมพ์ 3 มิติแบบ gantry คู่ (cantilever CoreXY) */
function Printer3D(props: ThreeElements["group"]) {
  const g = useToonGradient();
  const gantry = useRef<THREE.Group>(null);
  const toolhead = useRef<THREE.Mesh>(null);
  const screen = useRef<THREE.MeshToonMaterial>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const gy = 0.05 + Math.sin(t * 0.9) * 0.42;
    if (gantry.current) gantry.current.position.y = gy;
    if (toolhead.current) toolhead.current.position.x = Math.sin(t * 2.1) * 0.2;
    if (screen.current) screen.current.emissiveIntensity = 0.5 + Math.sin(t * 3) * 0.2;
  });

  return (
    <group {...props}>
      {/* vertical posts */}
      {[-0.34, 0.34].map((x) => (
        <mesh key={x} position={[x, 0.08, -0.32]}>
          <boxGeometry args={[0.1, 1.6, 0.1]} />
          <Toon color={COLORS.steel} gradientMap={g} />
        </mesh>
      ))}
      {/* top brace */}
      <mesh position={[0, 0.9, -0.32]}>
        <boxGeometry args={[0.78, 0.07, 0.1]} />
        <Toon color={COLORS.steel} gradientMap={g} />
      </mesh>
      {/* feet */}
      {[-0.34, 0.34].map((x) => (
        <mesh key={x} position={[x, -0.75, -0.32]}>
          <cylinderGeometry args={[0.13, 0.13, 0.04, 14]} />
          <Toon color={COLORS.dark} gradientMap={g} />
        </mesh>
      ))}

      {/* print bed (slides toward viewer) */}
      <mesh position={[0, -0.63, 0.22]}>
        <boxGeometry args={[1.05, 0.045, 0.85]} />
        <Toon color={COLORS.charcoal} gradientMap={g} />
      </mesh>
      <mesh position={[0, -0.71, 0.12]}>
        <boxGeometry args={[0.16, 0.12, 0.76]} />
        <Toon color={COLORS.steel} gradientMap={g} />
      </mesh>

      {/* gantry bar (z-axis) carrying the toolhead */}
      <group ref={gantry}>
        <mesh position={[0, 0, -0.25]}>
          <boxGeometry args={[0.82, 0.16, 0.16]} />
          <Toon color={COLORS.steel} gradientMap={g} />
        </mesh>
        <mesh ref={toolhead} position={[0, -0.17, -0.1]}>
          <boxGeometry args={[0.2, 0.24, 0.22]} />
          <Toon color={COLORS.dark} gradientMap={g} />
        </mesh>
        <mesh position={[0.12, -0.02, -0.17]} rotation={[0.3, 0, 0.2]}>
          <cylinderGeometry args={[0.014, 0.014, 0.26, 8]} />
          <Toon color={COLORS.accent} emissive={COLORS.accent} emissiveIntensity={0.3} gradientMap={g} />
        </mesh>
      </group>

      {/* side control panel */}
      <group position={[0.76, -0.3, 0.4]} rotation={[0, -0.4, 0]}>
        <mesh>
          <boxGeometry args={[0.22, 0.3, 0.05]} />
          <Toon color={COLORS.dark} gradientMap={g} />
        </mesh>
        <mesh position={[0, 0.05, 0.03]}>
          <planeGeometry args={[0.16, 0.14]} />
          <Toon
            toonRef={screen}
            color={COLORS.screen}
            emissive={COLORS.screen}
            emissiveIntensity={0.5}
            gradientMap={g}
          />
        </mesh>
        <mesh position={[0, -0.09, 0.03]}>
          <cylinderGeometry args={[0.03, 0.03, 0.01, 16]} />
          <Toon color={COLORS.accent} emissive={COLORS.accent} emissiveIntensity={0.4} gradientMap={g} />
        </mesh>
      </group>
    </group>
  );
}

function Rig() {
  const rig = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!rig.current) return;
    rig.current.rotation.y = THREE.MathUtils.lerp(rig.current.rotation.y, state.pointer.x * 0.2, 0.04);
  });

  return (
    <group ref={rig}>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.6} floatingRange={[-0.07, 0.07]}>
        <VinylPrinter position={[-5.5, -7.5, 0]} scale={1.3} />
      </Float>
      <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.06, 0.06]}>
        <CncMachine position={[7.3, 5.2, 0]} scale={1.4} />
      </Float>
      <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.55} floatingRange={[-0.06, 0.06]}>
        <Printer3D position={[6.0, -2.2, 0]} scale={1.7} />
      </Float>

      <ContactShadows position={[0, -2.12, 0]} opacity={0.4} scale={11} blur={2.8} far={3} color="#000000" />
    </group>
  );
}

// ซูมออกอัตโนมัติบนจอแคบ (มือถือ) ไม่งั้นเครื่องที่อยู่มุมจอจะโดนตัดขอบ
function ResponsiveCamera() {
  const width = useThree((state) => state.size.width);
  const zoom = Math.min(48, width / 18.5);
  return (
    <OrthographicCamera
      makeDefault
      position={[6.5, 5, 6.5]}
      zoom={zoom}
      near={0.1}
      far={50}
      onUpdate={(cam) => cam.lookAt(0, -1.9, 0)}
    />
  );
}

export default function HeroSceneCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      className="!touch-auto"
      eventSource={typeof document !== "undefined" ? document.body : undefined}
    >
      <ResponsiveCamera />
      <ambientLight intensity={0.85} />
      <hemisphereLight args={["#ffece0", "#1c1917", 0.5] as [string, string, number]} />
      <directionalLight position={[4, 6, 3]} intensity={0.8} color="#fff3e6" />
      <directionalLight position={[-3, 2, -4]} intensity={0.3} color="#cfe8da" />
      <Rig />
    </Canvas>
  );
}
