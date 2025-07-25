import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const fullName = "Mpiloenhle Thandolwethu Ntanda";

function NameReveal({ onNext }) {
  const lettersRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      lettersRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <div className="text-3xl font-mono mb-6">
        {fullName.split('').map((char, i) => (
          <span key={i} ref={el => (lettersRef.current[i] = el)}>
            {char}
          </span>
        ))}
      </div>
      <button
        onClick={onNext}
        className="px-6 py-2 bg-white text-black rounded hover:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
}

export default NameReveal;
