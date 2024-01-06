import {motion, transform,useAnimationControls} from 'framer-motion';
import { useState } from "react";


const TextSpan = ({children})=>{
   const  constrols = useAnimationControls()
   const [isPlaying,setIsPlaying] = useState(false)

     const rubberBand = ()=>{
        constrols.start({
            transform: [
                "scale3d(1,1,1)",
                "scale3d(1.4,.55,1)",
                "scale3d(.75,1.25,1)",
                "scale3d(1.24,.85,1)",
                "scale3d(.9,1.06,1)",
                "scale3d(1,1,1)"
        
            ],
          
        })
        setIsPlaying(true)
     }
 

    return (
        <motion.h1 className='motion' animate={constrols}
        onMouseOver={()=> {
           if (!isPlaying) {
            rubberBand()
           }
         }} onAnimationComplete={()=> {setIsPlaying(false)}}>
            {children}
        </motion.h1>
    )
}
export default TextSpan