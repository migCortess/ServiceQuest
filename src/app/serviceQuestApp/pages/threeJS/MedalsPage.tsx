/* eslint-disable */
import * as THREE from "three";
import { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, Stage } from "@react-three/drei";
import { CorchoA } from "./modelComponent.tsx/CorchoA";
import { CorchoD } from "./modelComponent.tsx/CorchoD";
import { CorchoN } from "./modelComponent.tsx/CorchoN";
import { CorchoR } from "./modelComponent.tsx/CorchoR";
import { CorchoV } from "./modelComponent.tsx/CorchoV";

export const MedalsPage = () => {

  // Se necesita servicio que obtenga las medallas por equipo
  const ListOfMedals = [
    {
      type: "a",
    },
    {
      type: "b",
    },
    {
      type: "c",
    },
    {
      type: "d",
    },
    {
      type: "e",
    },
  ];

  return (
    <>
      <div className="card text-3xl font-semibold flex justify-center items-center my-2 p-2 bg-white/50 border-2 border-skin-primary/30">
        Medallas obtenidas
      </div>
      <div className="grid justify-center items-center h-[80vh] grid-cols-2 ">
        {ListOfMedals.length > 0 &&
          ListOfMedals.map((x: any) => {
            return <Medals type={x.type} />;
          })}
      </div>
    </>
  );
};

interface Props {
  type: string;
}

const Medals = ({ type }: Props) => {
  const RefA = useRef<any>(null!);

  const SelectMedal = (): any => {
    switch (type) {
      case "a":
        return <CorchoA />;
      case "b":
        return <CorchoD />;
      case "c":
        return <CorchoN />;
      case "d":
        return <CorchoV />;
      case "e":
        return <CorchoR />;
    }
  };

  return (
    <>
      <Canvas
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
      >
        <Suspense fallback={null}>
          <Stage
            preset="rembrandt"
            intensity={0.5}
            shadows={false}
            environment="city"
          >
            {SelectMedal()}
          </Stage>
        </Suspense>
        <OrbitControls ref={RefA} autoRotate />
      </Canvas>
    </>
  );
};
