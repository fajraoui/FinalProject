import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import '../App.css';

export default function CardCharity({Charity}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <AnimateSharedLayout>
      <motion.ul className="ul" layout initial={{ borderRadius: 25 }}>
        <motion.li className="li" layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
         
          <motion.div className="avatar" layout><span>{Charity&&Charity.FullName.charAt(0)}</span> </motion.div>
          <h1 style={{color:"mediumslateblue"}}>{Charity&&Charity.FullName}</h1>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h5>Phone:{Charity&&Charity.phone}</h5>
                <h5>City:{Charity&&Charity.city}</h5>
                <h5>Street:{Charity&&Charity.street}</h5>
                <h5>PostalCode:{Charity&&Charity.postalCode}</h5>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.li>
      </motion.ul>
    </AnimateSharedLayout>
  );
}