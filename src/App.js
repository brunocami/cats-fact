import React, {Suspense} from 'react'
import './App.css';
import './styles/ModelViewer.css'
import Cats from './components/Cats';
import Header from './components/Header';
import House from './components/House/House';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei'; 

function App() {
  return (
    <div className='App'>
      <Header />
      <div className="container">
        <Cats />
      </div>
      <div className="model_container">
        <Canvas camera={{ zoom: 1, position: [15, 20, 15] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[35,35,0]} intensity={0.4}/>
          <pointLight position={[-35,35,0]} intensity={0.4}/>
          <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />

          <Suspense fallback={null}>
            <House />
          </Suspense>

          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}


/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export default function Kiwi({ ...props }) {
//   const group = useRef()
//   const { nodes, materials } = useGLTF('/food_kiwi_01_4k.gltf')
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2,0,0]}>
//         <group rotation={[Math.PI / 2,0,0]}>
//           <group scale={10}>
//             <mesh geometry={nodes.food_kiwi_01.geometry} material={materials.food_kiwi_01} />
//           </group>
//         </group>
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/food_kiwi_01_4k.gltf')

export default App;
