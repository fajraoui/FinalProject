import  React from 'react';
import {motion} from 'framer-motion';
import './Ball.css'


function Ball() {
  return (
    <motion.div transition={{
        y: {
          duration: 1,
          yoyo: Infinity,  
          ease: "easeIn",
        }
      }}
      animate={{ y: ["10px", "400px"] }}>
      <div className="ball"></div>
    </motion.div>
  );
}
export default Ball
