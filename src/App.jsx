import "./App.css";
import "./utils/gradients.css"

import Codecard from "./components/codeCard";
import gradients from "./utils/gradients";
import { useEffect, useState } from "react";

function App() {

  const [fontColor, setFontColor] = useState('archivo');

  useEffect(() => {
    console.log("v1." + Month + "." + Year);
    const fontColors = ['love-kiss',
      'october-silence',
      'phoenix-start',
      'winter-neva',
      'summer-games',
      'grown-early',
      'grown-early',
      'pink-nebula',
      'chemic-aqua',
      'hidden-jaguar',
      'amour',
      'light-blue',
      'angel-care',
      'grass-shampoo',
      'sea-lord',
      'juicy-cake',
    ];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setFontColor(fontColors[currentIndex]);
      currentIndex = (currentIndex + 1) % fontColors.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fechaActual = new Date();
  const MonthId = fechaActual.getMonth();
  const YearId = fechaActual.getFullYear();
  const Month = MonthId + 1;
  const Year = YearId.toString().slice(-2);


  return (
    
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
        rel="stylesheet"
      ></link>
      <div className=" bg-blue-brand text-white">
        <nav className="py-8 px-8 lg:px-16 flex">
          <div className="archivo-black-regular w-full">
            <span className="text-xl lg:text-2xl summer-games">GradienText</span> 
          </div>
          <div>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Avalojandro/GradienText">
              <svg
                viewBox="0 0 1024 1024"
                fill="white"
                height="2em"
                width="2em"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              </svg>
            </a>
          </div>
        </nav>
        <div className="flex h-80  items-center">
          <div className="px-16 flex items-center w-full">
            <div className="w-full text-center lg:text-left">
              <p className="text-gray-400 text-sm">50 styles &#x2022; Open Source &#x2022; Free</p>
              <h2 className="font-bold text-3xl lg:text-5xl">Enhance Your Web Text with <span className=" text-yellow-500">Stunning</span> CSS Gradients</h2>
              <div className="pt-4">By <a href="https://github.com/Avalojandro" target="_blank" rel="noopener noreferrer" className="text-[#ff4800]">Avalojandro</a></div>
            </div>
            <div className={`hidden lg:inline text-center w-full text-[200px] transform ease-in-out love-kiss drop-shadow-2xl font-bold ${fontColor}`}>
              Aa
            </div>

          </div>
        </div>
        <br /><br /><br />
      </div>
      <div className=" bg-slate-950 justify-center flex">
        <div className="max-w-[98] sm:max-w-[90%] md:max-w-[75%] xl:max-w-[55%] w-full py-8">
          {gradients.map((gradient, index) => (
            <Codecard key={index} indx={index + 1} className={gradient.className} code={gradient.code} />
          ))}
        </div>
      </div>
      <div className="bg-gray-900 p-8 flex justify-center text-white space-x-1">
        <span>Made with</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
        <div>By <a target="_blank" rel="noopener noreferrer" href="https://github.com/Avalojandro" className="text-[#ff4800]">Avalojandro</a></div>
      </div>
    </>
  );
}

export default App;
