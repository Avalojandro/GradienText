import "./App.css";

import IconGithub from './assets/icons/github'

function App() {


  const test = `.gradient-text { 
    background-color: red;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }`

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
          <div className="archivo-black-regular text-7xl gradient-text">
            GRADIENTEXT
          </div>
          <div className="text-center mt-4 font-extrabold text-2xl">
            A CSS guide for your gradient texts
          </div>
          <div className="text-center flex my-4 justify-center gap-4">
            <a className="bg-cyan-500 px-4 py-2 rounded-lg">
              Github
            </a>
            <a className="bg-cyan-500 px-4 py-2 rounded-lg">
              About
            </a>
          </div>
        </div>
      </div>
      <div className=" bg-black justify-center flex">
      <div className="max-w-[50%] w-full py-8">
      

        <div className="text-center flex my-12">
            <div className="bg-[#2B2B2B] text-white w-full max-w-64 py-20 px-12 rounded-tl-2xl rounded-bl-2xl">
              <span className="archivo-black-regular text-7xl gradient-text">1.</span>
            </div>
            <div className="bg-[#19191a] overflow-y-auto text-left p-4 w-full rounded-tr-2xl rounded-br-2xl">
              <pre>
              <code className="gradient-text">
                {test}
              </code>
              </pre>
            </div>
        </div>


        
        
      </div>
      </div>
    </>
  );
}

export default App;
