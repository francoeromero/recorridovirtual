import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Model() {


    const silla = (scene) => {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('./chair/chair.gltf', (model) => {
            console.log('Modelo cargado');
            scene.add(model.scene);
        }, (progreess) => {
            // progreess.stopPropagation();
            console.log('Loading model')
        }, (err) => {
            console.log('Error al cargar el modelo');
        });
    }

    return { silla }

}