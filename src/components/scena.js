import React, {useState} from "react";
import { Pannellum } from "pannellum-react";
import Modal from "../components/modal";
import dataScene from '../helpers/dataScene'
import  useModal  from "../hooks/useModal";
// import ModelContainer from "./modelContainer";

export default function Scene(){

    const {isOpen, openModal, closeModal} = useModal(false);
    const [scene, setScene] = useState(dataScene['insideOne']);


    const hotSpots = (Element, i)=>{
        if(Element.cssClass === 'hotSpotElement') return(
            <Pannellum.HotSpot
                    key={i}
                    type={Element.type}
                    yaw={Element.yaw}
                    pitch={Element.pitch}
                    cssClass={Element.cssClass}
                    handleClick={() => {
                        openModal()
                    }}
                />
            );
        
        else if(Element.cssClass === 'moveScene') return(
            <Pannellum.HotSpot
            key={i}
            type={Element.type}
            yaw={Element.yaw}
            pitch={Element.pitch}
            cssClass={Element.cssClass}
            handleClick = {
                // ()=>alert('Mover escena')
                ()=> setScene(dataScene[Element.scene])
            }
        />
        );
        else if(Element.cssClass === 'otherScene') return(
            <Pannellum.HotSpot
            key={i}
            type={Element.type}
            yaw={Element.yaw}
            pitch={Element.pitch}
            cssClass={Element.cssClass}
            handleClick = {
                // ()=>alert('Mover escena')
                ()=> setScene(dataScene[Element.scene])
            }
        />
        );
    }

    return(
        <>
            <Pannellum
                width = '100%'
                height = '100vh'
                title = {scene.title}
                image = {scene.image}
                pitch={scene.pitch}
                yaw={scene.yaw}
                hfov={110}
                autoLoad
                showZoomCtrl = {false}
                showFullscreenCtrl = {false}
                //para saber donde ubicar los puntos, lo ves en la consola del navegador pitch = {2} yaw = {190} 
                hotspotDebug = {false}  
            >
            
            
            {/* <Pannellum.Hotspot type = 'custom' pitch = {-20.8} yaw = {-52.8} handleClick = {()=>alert('click')}/> */}
            {/* arreglar 31 */}
            {Object.values(scene.hotSpots).map((Element, i) => hotSpots(Element, i))}
            </Pannellum>

            <Modal isOpen={isOpen} close ={()=>closeModal()}>
            </Modal>
        </>
    )
}