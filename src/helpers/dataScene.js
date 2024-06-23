import insideOne from '../images/1.jpg'
import insideTwo from '../images/2.jpg'
import insideThree from '../images/3.jpg'
const Scene = {
    insideOne: {
        title: 'Interior 1',
        image: insideOne,
        pitch: -15.5,
        yaw: -59.8,
        // puntos de la escena 1
        hotSpots:{
            silla:{
                type:'custom',
                pitch: -20.8,
                yaw: -52.8,
                nameModel: 'silla',
                cssClass: 'hotSpotElement'
            },
            logo:{
                type: 'custom',
                pitch: 8.15,
                yaw: 24.9,
                cssClass: 'hotSpotElement'
            },
            mesa:{
                type: 'custom',
                pitch: -5.84,
                yaw: -25.29,
                cssClass: 'hotSpotElement'
            },
            nextScene:{
                type: 'custom',
                pitch: 2,
                yaw: 190,
                cssClass: 'moveScene',
                scene: 'insideTwo'
            }
        }
    },
    insideTwo:{
        title: 'Interior 2',
        image: insideTwo,
        pitch: 2,
        yaw: 190,
        hotSpots:{
            nextScene:{
                type: 'custom',
                pitch: 2,
                yaw: 180,
                cssClass: 'moveScene',
                scene: 'insideOne'
            },
            otherScene:{
                type: 'custom',
                pitch: 0.33,
                yaw: -3.76,
                cssClass: 'otherScene',
                scene: 'insideThree'
            }
        } 
    },
    insideThree:{
        title: 'Interior 3',
        image: insideThree,
        pitch: 2,
        yaw: 190,
        hotSpots:{
            Scene3:{
                type: 'custom',
                pitch: 0.67,
                yaw: 172,
                cssClass: 'moveScene',
                scene: 'insideTwo'
            }
        }
    }
};

export default Scene;