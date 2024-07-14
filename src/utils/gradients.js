const gradients = [
  {
    name: "morning",
    className: "morning",
    code: `.morning {
    background-color: red;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    -webkit-background-clip: text;
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
  {
    name: "grown-early",
    className: "grown-early",
    code: `.grown-early {
    background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "light-blue",
    className: "light-blue",
    code: `.light-blue {
    background-image: linear-gradient(-225deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "frozen-heat",
    className: "frozen-heat",
    code: `.frozen-heat {
    background-image: linear-gradient(-225deg, #FF057C 0%, #7C64D5 48%, #4CC3FF 100%);  
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "night-call",
    className: "night-call",
    code: `.night-call {
    background-image: linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "soft-lipstick",
    className: "soft-lipstick",
    code: `.soft-lipstick {
    background-image: linear-gradient(-225deg, #B6CEE8 0%, #F578DC 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "sunroof",
    className: "sunroof",
    code: `.sunroof {
    background: rgb(238,174,202);
    background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(255,211,31,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "perfect-white",
    className: "perfect-white",
    code: `.perfect-white {
    background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "angel-care",
    className: "angel-care",
    code: `.angel-care {
    background-image: linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "grass-shampoo",
    className: "grass-shampoo",
    code: `.grass-shampoo {
    background-image: linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "landing-aircraft",
    className: "landing-aircraft",
    code: `.landing-aircraft {
    background-image: linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "sea-lord",
    className: "sea-lord",
    code: `.sea-lord {
    background-image: linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "sand-strike",
    className: "sand-strike",
    code: `.sand-strike {
    background-image: linear-gradient(to right, #c1c161 0%, #c1c161 0%, #d4d4b1 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "juicy-cake",
    className: "juicy-cake",
    code: `.juicy-cake {
    background-image: linear-gradient(to top, #e14fad 0%, #f9d423 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "millenium-pine",
    className: "millenium-pine",
    code: `.millenium-pine {
    background-image: linear-gradient(to top, #50cc7f 0%, #f5d100 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "north-miracle",
    className: "north-miracle",
    code: `.north-miracle {
    background-image: linear-gradient(to right, #2dc449 0%, #fc00ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "baby",
    className: "baby",
    code: `.baby {
    background: rgb(238,174,202);
    background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(31,201,255,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "marble-wall",
    className: "marble-wall",
    code: `.marble-wall {
    background-image: linear-gradient(to top, #bdc2e8 0%, #bdc2e8 1%, #e6dee9 100%);
    background-blend-mode: normal,color-burn;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "chemic-aqua",
    className: "chemic-aqua",
    code: `.chemic-aqua {
    background-color: #CDDCDC;
    background-image: radial-gradient(at 50% 100%, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(0,0,0,0.25) 100%);
    background-blend-mode: screen, overlay;
    background-blend-mode: normal,color-burn;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "hidden-jaguar",
    className: "hidden-jaguar",
    code: `.hidden-jaguar {
    background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "princess",
    className: "princess",
    code: `.princess {
    background-image: linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%);
    background-blend-mode: normal,color-burn;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "amour",
    className: "amour",
    code: `.amour {
    background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "sky-santuary",
    className: "sky-santuary",
    code: `.sky-santuary {
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "pink-nebula",
    className: "pink-nebula",
    code: `.pink-nebula {
    background-image: radial-gradient( circle farthest-corner at 10.2% 55.8%,  rgba(252,37,103,1) 0%, rgba(250,38,151,1) 46.2%, rgba(186,8,181,1) 90.1% );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;  
}`,
  },
  {
    name: "wild-breath",
    className: "wild-breath",
    code: `.wild-breath {
    background: rgb(104,48,23);
    background: linear-gradient(90deg, rgba(104,48,23,1) 0%, rgba(219,224,59,1) 50%, rgba(1,255,0,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
}`,
  },
  

];

export default gradients;
