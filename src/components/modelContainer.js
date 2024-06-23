import React, { useEffect, useRef } from "react";
import * as THREE from 'three';
import Model from '../hooks/loadModel'

export default function ModelContainer(){
    const mountRef = useRef(null);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 30);
    const renderer = new THREE.WebGLRenderer({alpha: false, powerPreference: 'high-performance', precision: 'lowp', animation: true});

    let currentRef;

    useEffect(()=>{
        currentRef = mountRef.current();

    }, [])

    const createScene = ()=>{
        const ambientLight = new THREE.AmbientLight(0xeeeeee,0.8);
        const pointLight = new THREE.PointLight(0xffffff, 0.5)

        scene.add(ambientLight);
        scene.add(pointLight);
        scene.add(camera);
    }

    return(
        <div className='container3d' ref={mountRef}>

        </div>
    )
}