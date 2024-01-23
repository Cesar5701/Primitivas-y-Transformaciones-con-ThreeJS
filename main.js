import * as THREE from './node_modules/three/build/three.module.js';

//Creación de Escena en Color Negro 

const scene = new THREE.Scene();
scene.background = new THREE.Color(0, 0, 0);

//Posición de la Cámara

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);

//Renderizado

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Material

const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
//const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
//const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
//const dodecahedronMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff });
//const icosahedronMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
//const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
//const torusMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

// Creación de las Figuras

// BoxGeometry
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const box = new THREE.Mesh(boxGeometry, material);

// CylinderGeometry
const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1);
const cylinder = new THREE.Mesh(cylinderGeometry, material);

// DodecahedronGeometry
const dodecahedronGeometry = new THREE.DodecahedronGeometry();
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, material);

// IcosahedronGeometry
const icosahedronGeometry = new THREE.IcosahedronGeometry();
const icosahedron = new THREE.Mesh(icosahedronGeometry, material);

// SphereGeometry
const sphereGeometry = new THREE.SphereGeometry(1);
const sphere = new THREE.Mesh(sphereGeometry, material);

// TorusGeometry
const torusGeometry = new THREE.TorusGeometry(0.8, 0.2, 100, 200);
const torus = new THREE.Mesh(torusGeometry, material);

// Posiciones
box.position.set(-4, 2, 0);
cylinder.position.set(0, 2, 0);
dodecahedron.position.set(4, 2, 0);
icosahedron.position.set(-4, -2, 0);
sphere.position.set(0, -2, 0);
torus.position.set(4, -2, 0);

function rotation() {
    // Rotación Caja
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    // Rotación Cilindro
    cylinder.rotation.x += 0.01;
    //cylinder.rotation.y += 0.01;
    cylinder.rotation.z += 0.01;

    // Rotación Dodecaedro
    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;

    // Rotación Icosaedro
    icosahedron.rotation.x += 0.01;
    icosahedron.rotation.y += 0.01;

    // Rotación Esfera
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    // Rotación Torus
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
}

// Añadir luz ambiente y luz direccional para el MeshMaterial

const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
scene.add(directionalLight);

// Añadir a la Escena

scene.add(box);
scene.add(cylinder);
scene.add(dodecahedron);
scene.add(icosahedron);
scene.add(sphere);
scene.add(torus);

// Loop de Renderizado

function animate() {
    requestAnimationFrame(animate);
    rotation();
    renderer.render(scene, camera);
}

animate();