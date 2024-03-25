import { useState, useEffect } from "react";

export default function CodeCard({ indx = 0, code = "", className = "" }) {
  const [showSecondSVG, setShowSecondSVG] = useState(false);

  useEffect(() => {
    let timer;
    if (showSecondSVG) {
      timer = setTimeout(() => {
        setShowSecondSVG(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [showSecondSVG]);

  const handleButtonClick = () => {
    if (!showSecondSVG) {
      navigator.clipboard.writeText(code);
    }
    setShowSecondSVG(!showSecondSVG);
  };

  return (
    <div className="text-center flex my-12">
      <div className="bg-[#2B2B2B] text-white w-full max-w-64 py-20 px-12 rounded-tl-2xl rounded-bl-2xl flex justify-center items-center relative">
        <span className={`archivo-black-regular text-7xl ${className}`}>
          {indx}.
        </span>
      </div>
      <div className="bg-[#19191a] overflow-auto text-left p-4 w-full rounded-tr-2xl rounded-br-2xl flex items-center relative">
        <pre>
          <code className={className}>{code}</code>
        </pre>
        <div className="absolute top-0 right-0 mr-4 mt-4 z-10">
          <button
            className="bg-[#2B2B2B] text-white p-2 rounded hover:bg-gray-700 transition-all ease-in-out"
            onClick={() => {setShowSecondSVG(true); handleButtonClick()}}
          >
            {showSecondSVG ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
