const gradients = [
  {
    name: "gradientext",
    className: "gradientext",
    code: `.gradientext {
    background-color: red;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
}`,
  },
  {
    name: "sharp-blues",
    className: "sharp-blues",
    code: `.sharp-blues{
    background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;    
}`,
  },
  {
    name: "aqua-splash",
    className: "aqua-splash",
    code: `.aqua-splash {
    background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "love-kiss",
    className: "love-kiss",
    code: `.love-kiss {
        background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
      }`,
  },
  {
    name: "summer-games",
    className: "summer-games",
    code: `.summer-games {
        background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
      }`,
  },
  {
    name: "phoenix-start",
    className: "phoenix-start",
    code: `.phoenix-start {
        background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
      }`,
  },
  {
    name: "october-silence",
    className: "october-silence",
    code: `.october-silence {
        background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
      }`,
  },
  {
    name: "warm-flame",
    className: "warm-flame",
    code: `.warm-flame {
    background-image: linear-gradient(
        45deg,
        #ff9a9e 0%,
        #fad0c4 99%,
        #fad0c4 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
}`,
  },
  {
    name: "night-fade",
    className: "night-fade",
    code: `.night-fade {
    background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
}`,
  },
  {
    name: "juicy-peach",
    className: "juicy-peach",
    code: `.juicy-peach {
    background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
}`,
  },
  {
    name: "young-passion",
    className: "young-passion",
    code: `.young-passion {
    background-image: linear-gradient(
        to right,
        #ff8177 0%,
        #ff867a 0%,
        #ff8c7f 21%,
        #f99185 52%,
        #cf556c 78%,
        #b12a5b 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
}`,
  },
  {
    name: "lady-lips",
    className: "lady-lips",
    code: `.lady-lips {
    background-image: linear-gradient(
        to top,
        #ff9a9e 0%,
        #fecfef 99%,
        #fecfef 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
}`,
  },
  {
    name: "sunny-morning",
    className: "sunny-morning",
    code: `.sunny-morning {
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
}`,
  },
  {
    name: "rainy-ashville",
    className: "rainy-ashville",
    code: `.rainy-ashville {
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
}`,
  },
  {
    name: "frozen-dreams",
    className: "frozen-dreams",
    code: `.frozen-dreams {
    background-image: linear-gradient(
        to top,
        #fdcbf1 0%,
        #fdcbf1 1%,
        #e6dee9 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
}`,
  },
  {
    name: "winter-neva",
    className: "winter-neva",
    code: `.winter-neva {
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
}`,
  },
  {
    name: "dusty-grass",
    className: "dusty-grass",
    code: `.dusty-grass {
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
}`,
  },
  {
    name: "spring-warmth",
    className: "spring-warmth",
    code: `.spring-warmth {
    background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
}`,
  },
  {
    name: "sweet-period",
    className: "sweet-period",
    code: `.sweet-period {
    background-image: linear-gradient(
        to top,
        #3f51b1 0%,
        #5a55ae 13%,
        #7b5fac 25%,
        #8f6aae 38%,
        #a86aa4 50%,
        #cc6b8e 62%,
        #f18271 75%,
        #f3a469 87%,
        #f7c978 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "tempting-azure",
    className: "tempting-azure",
    code: `.tempting-azure {
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
}`,
  },
  {
    name: "wide-matrix",
    className: "wide-matrix",
    code: `.wide-matrix {
    background-image: linear-gradient(
        to top,
        #fcc5e4 0%,
        #fda34b 15%,
        #ff7882 35%,
        #c8699e 52%,
        #7046aa 71%,
        #0c1db8 87%,
        #020f75 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "soft-cherish",
    className: "soft-cherish",
    code: `.soft-cherish {
    background-image: linear-gradient(
        to top,
        #dbdcd7 0%,
        #dddcd7 24%,
        #e2c9cc 30%,
        #e7627d 46%,
        #b8235a 59%,
        #801357 71%,
        #3d1635 84%,
        #1c1a27 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "red-salvation",
    className: "red-salvation",
    code: `.red-salvation {
    background-image: linear-gradient(to top, #f43b47 0%, #453a94 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "night-party",
    className: "night-party",
    code: `.night-party {
    background-image: linear-gradient(to top, #0250c5 0%, #d43f8d 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "sky-glider",
    className: "sky-glider",
    code: `.sky-glider {
    background-image: linear-gradient(to top, #88d3ce 0%, #6e45e2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "purple-division",
    className: "purple-division",
    code: `.purple-division {
    background-image: linear-gradient(to top, #7028e4 0%, #e5b2ca 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },

];

export default gradients;
