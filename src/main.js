// Variables globales para los objetos de Three.js
var renderer = null,
    scene = null,
    camera = null,
    box = null,
    cylinder = null,
    dodecahedron = null,
    icosahedron = null,
    sphere = null,
    torus = null,
    num_material = 0, // Índice del material actual
    animating = true; // Cambiado a true para que la animación comience automáticamente

// Variables globales para los materiales
var material0, material1, material2;

function onLoad() {
    // Obtener el contenedor
    var container = document.getElementById("container");

    // Crear un nuevo escenario Three.js
    scene = new THREE.Scene();

    // Colocar una cámara
    camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 1, 4000);
    camera.position.set(0, 0, 10);

    // Crear el renderizador Three.js y añadirlo a nuestro div
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    // Crear una luz direccional para mostrar el objeto
    var light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.set(0, 0, 1);
    scene.add(light);

    // Crear texturas
    var mapUrl = "./images/Homero-simpson-2.webp";
    var texture = new THREE.TextureLoader().load(mapUrl);

    // Crear materiales
    material0 = new THREE.MeshBasicMaterial({ map: texture });
    material1 = new THREE.MeshStandardMaterial({ map: texture });
    material2 = new THREE.MeshPhongMaterial({ map: texture });

    // Crear figuras geométricas
    const boxGeometry = new THREE.BoxGeometry(1.0, 1.0, 1.0);
    const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1);
    const dodecahedronGeometry = new THREE.DodecahedronGeometry();
    const icosahedronGeometry = new THREE.IcosahedronGeometry();
    const sphereGeometry = new THREE.SphereGeometry(1);
    const torusGeometry = new THREE.TorusGeometry(0.8, 0.2, 100, 200);

    // Crear mallas con geometría y material
    box = new THREE.Mesh(boxGeometry, material0);
    cylinder = new THREE.Mesh(cylinderGeometry, material0);
    dodecahedron = new THREE.Mesh(dodecahedronGeometry, material0);
    icosahedron = new THREE.Mesh(icosahedronGeometry, material0);
    sphere = new THREE.Mesh(sphereGeometry, material0);
    torus = new THREE.Mesh(torusGeometry, material0);

    // Posiciones
    box.position.set(-4, 2, 0);
    cylinder.position.set(0, 2, 0);
    dodecahedron.position.set(4, 2, 0);
    icosahedron.position.set(-4, -2, 0);
    sphere.position.set(0, -2, 0);
    torus.position.set(4, -2, 0);

    // Agregar objetos al escenario
    scene.add(box);
    scene.add(cylinder);
    scene.add(dodecahedron);
    scene.add(icosahedron);
    scene.add(sphere);
    scene.add(torus);

    // Agregar manejador de eventos para el clic del mouse
    addMouseHandler();

    // Ejecutar bucle de renderizado
    run();
}

function run() {
    // Renderizar el escenario
    renderer.render(scene, camera);

    // Rotar los objetos
    box.rotation.x += 0.02;
    box.rotation.y += 0.01;
    box.rotation.z += 0.01;

    cylinder.rotation.x += 0.02;
    cylinder.rotation.y += 0.01;
    cylinder.rotation.z += 0.01;

    dodecahedron.rotation.x += 0.02;
    dodecahedron.rotation.y += 0.01;
    dodecahedron.rotation.z += 0.01;

    icosahedron.rotation.x += 0.02;
    icosahedron.rotation.y += 0.01;
    icosahedron.rotation.z += 0.01;

    sphere.rotation.x += 0.02;
    sphere.rotation.y += 0.01;
    sphere.rotation.z += 0.01;

    torus.rotation.x += 0.02;
    torus.rotation.y += 0.01;
    torus.rotation.z += 0.01;

    // Solicitar otro frame
    requestAnimationFrame(run);
}

function addMouseHandler() {
    var dom = renderer.domElement;
    dom.addEventListener('mouseup', onMouseUp, false);
}

function onMouseUp(event) {
    event.preventDefault();

    // Incrementar el índice del material
    num_material = (num_material + 1) % 3;

    // Cambiar materiales para todos los objetos
    switch (num_material) {
        case 0:
            box.material = material0;
            cylinder.material = material0;
            dodecahedron.material = material0;
            icosahedron.material = material0;
            sphere.material = material0;
            torus.material = material0;
            break;
        case 1:
            box.material = material1;
            cylinder.material = material1;
            dodecahedron.material = material1;
            icosahedron.material = material1;
            sphere.material = material1;
            torus.material = material1;
            break;
        case 2:
            box.material = material2;
            cylinder.material = material2;
            dodecahedron.material = material2;
            icosahedron.material = material2;
            sphere.material = material2;
            torus.material = material2;
            break;
    }
}
