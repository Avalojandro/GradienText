import "./App.css";
import "./utils/gradients.css"

import Codecard from "./components/codeCard";
import gradients from "./utils/gradients";

function App() {

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
        rel="stylesheet"
      ></link>
      <div className=" h-96 bg-blue-brand text-white flex justify-center items-center">
        <div>
          <div className="archivo-black-regular text-7xl phoenix-start">
            GRADIENTEXT
          </div>
          <div className="winter-neva text-center mt-4 font-extrabold text-2xl">
            A CSS guide for your gradient texts
          </div>
          <div className="text-center flex my-4 justify-center gap-4">
            <button className="bg-cyan-500 font-bold px-4 py-2 rounded-lg">Github</button>
            <button className="bg-cyan-500 font-bold px-4 py-2 rounded-lg">About</button>
          </div>
        </div>
      </div>
      <div className=" bg-black justify-center flex">
        <div className="max-w-[98] sm:max-w-[90%] md:max-w-[75%] xl:max-w-[55%] w-full py-8">
          {gradients.map((gradient, index) => (
            <Codecard key={index} indx={index + 1} className={gradient.className} code={gradient.code} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
