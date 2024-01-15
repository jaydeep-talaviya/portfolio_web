import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Cursor.css';

function Cursor(props) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 25,
      width: 25,
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      backgroundColor: "white",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");


  return (
    <div className="Cursor" onMouseEnter={textEnter} onMouseLeave={textLeave} >
            {props.children}
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
}

export default Cursor;