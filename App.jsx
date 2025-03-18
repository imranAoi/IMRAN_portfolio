import React, { useEffect, useRef } from 'react';
import { runMatter } from './matter';
import Header from '../src/components/Header'; // Correct import
import Nav from './components/Nav';
import Latest from './components/Latest';
import Footer from './components/Footer';
import Upper from './components/Upper';
import Slider from './components/Slider';


function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const matterInstance = runMatter(canvas);

    return () => {
      matterInstance.stop();
    };
  }, []);

  return (
    <>
      <div className="bg-black min-h-screen relative">
        <canvas
          ref={canvasRef}
          className="w-full h-screen absolute top-0 left-0 z-0"
        />
        <div className="relative z-10 p-2 text-white">
          <div className='flex flex-col justify-between h-screen'>
            <Header/> {/* Correct usage */}
            <Nav/>
            <div className="relative hover:scale-105 ease-in-out duration-100 group w-34 mx-auto ">
            <button className=" mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Latest Works</button>
            <svg className='w-7 h-7 absolute top-1/2 -translate-y-14 translate-x-14 group-hover:translate-y-20  ease-in-out duration-100 rotate-90  s' stroke='currentColor' stroke-width="2" fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 330 330" xml:space="preserve">
<path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"/>
</svg>
            </div>
           
          </div>
          <Latest/>
          <Slider/>
          <Upper className="mt-10"/>
          <Footer/>
          
        </div>
      </div>
    </>
  );
}

export default App;
/*<div className="absolute lg:left-1/4 left-6 transform  bottom-20 ">
<h1 className="lg:text-6xl text-4xl font-bold text-white mb-4">MOHD <span className='text-blue-400'>I</span>MRAN</h1>
<h2 className="lg:text-2xl text-xl font-semibold text-blue-500 mb-6">
  I am <span className="text-white">{role}</span>
</h2>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  About Me
</button>
</div>*/