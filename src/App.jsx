import "./App.css";

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
          <div className="archivo-black-regular text-7xl gradient-text">
            GRADIENTEXT
          </div>
          <div className="text-center mt-4 font-extrabold text-2xl">
            A css guide for your gradient texts
          </div>
          <div>
            <a href="">
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="h-96 bg-black"></div>
    </>
  );
}

export default App;
