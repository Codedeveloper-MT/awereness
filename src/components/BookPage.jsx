import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function BookPage() {
  const leftRef = useRef();
  const rightRef = useRef();

  useEffect(() => {
    gsap.fromTo(leftRef.current, { rotateY: 0 }, { rotateY: -90, duration: 1 });
    gsap.fromTo(rightRef.current, { rotateY: 0 }, { rotateY: 90, duration: 1 });
  }, []);

  return (
    <div className="h-full w-full bg-black flex items-center justify-center">
      <div className="relative w-4/5 h-2/3 perspective">
        <div
          ref={leftRef}
          className="absolute w-1/2 h-full bg-white text-black p-6 left-0 origin-left"
        >
          <h2 className="text-xl font-bold">📝 About Me</h2>
          <p className="mt-2">I'm a passionate developer named Mpiloenhle Thandolwethu Ntanda...</p>
        </div>
        <div
          ref={rightRef}
          className="absolute w-1/2 h-full bg-white text-black p-6 right-0 origin-right"
        >
          <h2 className="text-xl font-bold">📁 Projects</h2>
          <p className="mt-2">Coming soon: my Java, web, and Linux projects!</p>
        </div>
      </div>
    </div>
  );
}

export default BookPage;
