import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import '../App.css';

export default function Cards({post}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <AnimateSharedLayout>
      <motion.ul className="ul" layout initial={{ borderRadius: 25 }}>
        <motion.li className="li" layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
         
          <motion.div className="avatar" layout><span>Food</span> </motion.div>
          <h2 style={{color:"rosybrown"}}>{post&&post.title}</h2>
          <h4 style={{color:"rosybrown"}}>Quantity:{post&&post.quantity}</h4>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
               <h4>Description:{post&&post.description}</h4>
               <h4>Day:{post&&post.createdAt.slice(0,10)}</h4>
                <h4>Hour:{post&&post.createdAt.slice(11,16)}</h4>
                <h4>Posted By:{post&&post.Author&&post.Author.FullName}</h4>
                <h4>Phone:{post&&post.Author&&post.Author.phone}</h4>
                <h4>Company:{post&&post.Author&&post.Author.companyName}</h4>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.li>
      </motion.ul>
    </AnimateSharedLayout>
  );
}