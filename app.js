// Add To HTML Head
const BODY = document.body;

const HEAD = document.head;

let StylePackage = (element) => {
  return window.getComputedStyle(element);
};

let styleFile = document.createElement("style");

styleFile.id = "main-style";

let changeAndTypingAnimationStylingFile = document.createElement("style");

changeAndTypingAnimationStylingFile.id = "name-change-animation-style";
let dynamicFontSize = "1rem";

let mainTextColor = `#fff`;

let mainSecondaryColor = `#186ca4`;

// Background Colors

const background_White_Color = `rgba(255 , 255 , 255 , 0.7 )`;

const background_blue_Color = `rgba(30 , 56 , 103 , 0.7 )`;

// Styling Body

BODY.style.minHeight = "100vh";

// Add Bac

// BODY.style.backgroundSize = "100% 00vh";

const document_width = document.documentElement.clientWidth;

// Element Genaration Class

class ELEMENT {
  constructor(type, id, clas, parent, content, style, customStyle, styleFile) {
    this.type = type;

    this.id = id;

    this.clas = clas;

    this.parent = parent;

    this.content = content;

    this.style = style;

    this.customStyle = customStyle;

    this.styleFile = styleFile;

    this.createdElement = null;
  }

  createElement() {
    const element = document.createElement(this.type);

    element.id = this.id;

    element.className = this.clas;

    if (this.content) {
      element.innerHTML = this.content;
    }
    this.parent.appendChild(element);

    element.style.cssText = this.style;

    setTimeout(() => {
      if (this.customStyle) this.styleFile.innerHTML += this.customStyle;
      if (this.styleFile) HEAD.appendChild(this.styleFile);
    }, 1);

    this.createdElement = element;
  }
  getCreatedElement() {
    return this.createdElement;
  }
}

function addStyleToPsoudoElement(style, file) {
  return setTimeout(() => {
    file.innerHTML += style;

    HEAD.appendChild(styleFile);
  }, 1);
}

// Reset Elements Positions
let = webLangWords = new Object({
  arabic: {
    header: {
      animationNames: [
        "مصمم واجهات امامية",

        "ألاموي المكود",

        "سوريا حرا",

        "صانع محتوي",

        "عبدالرحمن الدباس",
      ],
      mainName: "عبدالرحمن الدباس",

      themesColors: ["أحمر", "أخضر", "أزرق", "بنفسجي", "برتقالي", "داكن"],

      languages: ["أجنبي", "عربي"],

      downloadFiles: [],

      information: [],

      directoris: [
        "الرئيسية",
        "الخدمات",
        "المعرض",
        "وسائل التواصل الاجتماعي",
        "اتصل بنا",
        "عنا",
        "خارطة الطريق",
      ],
    },
    landing: {
      disc: `مرحبًا بالجميع<br>
أنا عبد الرحمن الدباس<br>
أعمل كمطوّر واجهة أمامية<br>
أنا من سوريا دمشق<br>
هذا موقع شخصي بسيط<br>
قمت بتطويره باستخدام JavaScript فقط<br>
`,
      arabicNumbersForLooping: [
        "٠",
        "١",
        "٢",
        "٣",
        "٤",
        "٥",
        "٦",
        "٧",
        "٨",
        "٩",
        "١٠",
        "١١",
        "١٢",
        "١٣",
        "١٤",
        "١٥",
        "١٦",
        "١٧",
        "١٨",
        "١٩",
        "٢٠",
        "٢١",
        "٢٢",
        "٢٣",
        "٢٤",
        "٢٥",
        "٢٦",
        "٢٧",
        "٢٨",
        "٢٩",
        "٣٠",
        "٣١",
        "٣٢",
        "٣٣",
        "٣٤",
        "٣٥",
        "٣٦",
        "٣٧",
        "٣٨",
        "٣٩",
        "٤٠",
        "٤١",
        "٤٢",
        "٤٣",
        "٤٤",
        "٤٥",
        "٤٦",
        "٤٧",
        "٤٨",
        "٤٩",
        "٥٠",
        "٥١",
        "٥٢",
        "٥٣",
        "٥٤",
        "٥٥",
        "٥٦",
        "٥٧",
        "٥٨",
        "٥٩",
        "٦٠",
        "٦١",
        "٦٢",
        "٦٣",
        "٦٤",
        "٦٥",
        "٦٦",
        "٦٧",
        "٦٨",
        "٦٩",
        "٧٠",
        "٧١",
        "٧٢",
        "٧٣",
        "٧٤",
        "٧٥",
        "٧٦",
        "٧٧",
        "٧٨",
        "٧٩",
        "٨٠",
        "٨١",
        "٨٢",
        "٨٣",
        "٨٤",
        "٨٥",
        "٨٦",
        "٨٧",
        "٨٨",
        "٨٩",
        "٩٠",
        "٩١",
        "٩٢",
        "٩٣",
        "٩٤",
        "٩٥",
        "٩٦",
        "٩٧",
        "٩٨",
        "٩٩",
        "١٠٠",
      ],
    },
    services: {},
    portfolio: {
      types: ["الــكل", "المـــواقع", "الألــعاب"],
      card: {
        dev: "تطوير",
        typeOfProject: "نوع المشــروع",
        technologies: "التقنيات",
        hosting: "الاستضافة",
        language: "اللغة",
        sourceIdea: "مصدر الفكرة",
        rete: "التصنيف",
        discription: "الوصف",
      },
    },
  },
});

function massege(msg) {
  if (document.querySelector(".massege-box")) {
    document.querySelector(".massege-box").remove();
  }
  let massegeBox = document.createElement("div");

  let textNode = document.createTextNode(msg);

  massegeBox.appendChild(textNode);

  massegeBox.classList.add("massege-box");

  BODY.prepend(massegeBox);

  massegeBox.style.animation = `msg 3s ease-in-out 1 backwards`;
}

const lockPageDiv = document.getElementById("lock-page");

const ExplainToUnlock = document.getElementById("unlock-text");

const drawArea = document.getElementById("draw-area");

/// - - - - - --- - - - - - -- - - - - -

// Get Sound

const successSound = document.getElementById("unlock-sound");

successSound.src =
  "./sounds/short-success-sound-glockenspiel-treasure-video-game-6346.mp3";

let counterToUnlock;

let unlockStatus = 0;

let minusCounterFunction;

let minusCounter;

let minusToCounter;

drawArea.addEventListener("mouseover", () => {
  clearInterval(minusCounter);

  clearTimeout(minusToCounter);

  if (unlockStatus < 100) {
    counterToUnlock = setInterval(() => {
      unlockStatus++;

      setTimeout(() => {
        styleFile.innerHTML += `#range::before{
    content:"";
    width:${unlockStatus}%;}
  #range::after{
    content:'${unlockStatus}%';}`;
      }, 0);

      console.log(unlockStatus);

      if (unlockStatus >= 100) {
        clearInterval(counterToUnlock);

        // containerDiv.prepend(HEADER);

        theLockHead.style.cssText += `transform:translate(${
          parseInt(window.getComputedStyle(theLockHead).width) -
          parseInt(window.getComputedStyle(theLockHead).borderWidth)
        }px) rotateY(160deg);box-shadow:none;`;
        successSound.play();

        styleFile.innerHTML += disibledAnimation;
        setTimeout(() => {
          lockPageDiv.remove();

          HEADER.style.top = "0";
        }, 1000);
      }
    }, 10);
  }
});

const range = document.getElementById("range");

drawArea.addEventListener("mouseout", () => {
  minusCounterFunction = () => {
    minusCounter = setInterval(() => {
      if (unlockStatus > 0) unlockStatus--;

      styleFile.innerHTML += `#range::before{
    content:"";
    width:${unlockStatus}%;
  }
  #range::after{
    content:'${unlockStatus}%';}
  `;
    }, 1000);
  };

  minusToCounter = setTimeout(() => {
    minusCounterFunction();
  }, 5000);

  HEAD.appendChild(styleFile);

  clearInterval(counterToUnlock);
});

let headerNames = [
  "FRONT END DEVELOPER",

  "ALOMAWY CODER",

  "FREE SYRIA",

  "CONTENT CREATEOR",

  "ABDALRAHMAN ALDABBAS",
];

const HEADER = document.getElementById("header");

// Header Styling

let landing = document.querySelector(".landing-cover");

landing.style.minHeight = `calc(100vh - ${parseInt(
  StylePackage(HEADER).height
)}PX)`;

// Styling Website Logo Text Psoudo Element

let logoText = document.getElementById("logo-text");

logoText.innerText = "FREE PALESTINE 🏴";

let animationFile = document.createElement("style");

animationFile.id = "animation-style";

animationFile.innerHTML = `
@keyframes typing {
  60%,
  70% {
    left: 100%;
  }
  0%  , 100%{
    left: 0%;
  }
}


@keyframes cursor-typing {
  10%,
  20%,
  30%,
  40%,
  50%,
  60%,
  70%,
  80%,
  90%,
  100% {
    opacity: 1;
  }
  0%,
  5%,
  15%,
  25%,
  35%,
  45%,
  55%,
  65%,
  75%,
  85%,
  95% {
    opacity: 0;
  }

  60%,
  70% {
    left: 100%;
  }
  100% {
    left: 0%;
    opacity: 1;
  }
}

#logo-text::before{
  content:"";
  animation:typing 5s steps(${logoText.innerHTML.length}) infinite;
  z-index:99998;
}
#logo-text::after{
  content:'';
  animation:cursor-typing 5s steps(${logoText.innerHTML.length}) infinite;

}
`;

HEAD.appendChild(animationFile);

function changeName() {
  let count = 0;

  setInterval(() => {
    logoText.innerHTML = headerNames[count];
    animationFile.innerHTML += `#logo-text::before{
  content:"";
  animation:typing 5s steps(${logoText.innerHTML.length}) infinite;
  z-index:99998;
}
#logo-text::after{
  content:'';
  animation:cursor-typing 5s steps(${logoText.innerHTML.length}) infinite;

}`;

    HEAD.appendChild(animationFile);

    headerNames[count] != headerNames[headerNames.length - 1]
      ? count++
      : (count = 0);
  }, 5100);

  let typingAnimation_CSS = ` 

    @keyframes typing {
  60%,
  70% {
    left: 100%;
  }
  0% , 100% {
    left: 0%;
  }
}


@keyframes cursor-typing {
  10%,
  20%,
  30%,
  40%,
  50%,
  60%,
  70%,
  80%,
  90%,
  100% {
    opacity: 1;
  }
  0%,
  5%,
  15%,
  25%,
  35%,
  45%,
  55%,
  65%,
  75%,
  85%,
  95% {
    opacity: 0;
  }

  60%,
  70% {
    left: 100%;
  }
  100% {
    left: 0%;
    opacity: 1;
  }
}

#logo-text::before{
  content:"";
  animation:typing 5s steps(${logoText.innerHTML.length}) infinite;
  z-index:99998;
}
#logo-text::after{
  content:'';
  animation:cursor-typing 5s steps(${logoText.innerHTML.length}) infinite;

}
`;

  animationFile.innerHTML = typingAnimation_CSS;
}

changeName();

// Onload Actions

window.addEventListener("load", () => {
  // It Is Set The Select Theme If The User Changed The Default Theme
  localStorage.getItem("theme")
    ? applyTheme(localStorage.getItem("theme"))
    : applyTheme("blue");
});

// jS Editing Style

let js_StyleFile = document.createElement("style");

js_StyleFile.id = "js-file";

HEAD.appendChild(js_StyleFile);

// }`;

// Create Theme CSS File &  Add Theme To File

let themeStyleFile = document.createElement("style");

themeStyleFile.id = "theme-js";

HEAD.appendChild(themeStyleFile);

// Changr Theme Code
const changeMode = document.getElementById("change-mode");

changeMode.addEventListener("click", (e) => {
  changeThemeContainer.style.right = "0";

  let tapsLis = Array.from(changeThemeContainer.children);

  onOpenPopup(tapsLis);
});

let changeThemeContainer = document.querySelector(".select-themes");

let themeBtn = Array.from(document.querySelectorAll(".theme-btn"));

themeBtn.forEach((e) => {
  e.innerHTML = e.parentNode.id;

  e.addEventListener("click", () => {
    let color = e.parentNode.id;

    applyTheme(color);

    massege(`Theme Changed to '${color}'`);

    exit(changeThemeContainer);
  });
});

close(changeThemeContainer);

//  Change Language Code

let changeLanguageBtn = document.getElementById("change-language");

let languagesContainer = document.querySelector(".select-language");

changeLanguageBtn.addEventListener("click", () => {
  languagesContainer.style.right = "0";

  onOpenPopup([...languagesContainer.children]);
});

[...languagesContainer.children].forEach((e) => {
  e.children[0].innerHTML = e.id;

  let language = e.id;
  e.addEventListener("click", () => {
    applyLanguage(language);
    massege(`Language Changed to '${language}'`);
    exit(languagesContainer);
  });
});

close(languagesContainer);

//  Downloads Code

let selectDownloadFileBtn = document.getElementById("download-btn");

let selectDownloadContainer = document.querySelector(".select-download");

selectDownloadFileBtn.addEventListener("click", () => {
  selectDownloadContainer.style.right = "0";

  onOpenPopup(Array.from(selectDownloadContainer.children));
});

[...selectDownloadContainer.children].forEach((e) => {
  e.children[0].innerHTML = e.id;

  e.addEventListener("click", () => {
    exit(selectDownloadContainer);
    massege(`جار تنزيل الملف ${e.innerText.toUpperCase()}`);
  });
});

close(selectDownloadContainer);

// Info Section Code

let infoBtn = document.getElementById("get-info");

let infoContainer = document.querySelector(".select-info");

infoBtn.addEventListener("click", (clc) => {
  infoContainer.style.right = "0";

  onOpenPopup([...infoContainer.children]);
});

[...infoContainer.children].forEach((e) => {
  e.children[0].innerHTML = e.id;

  e.addEventListener("click", () => {
    exit(infoContainer);
    massege(`جار احضار الملف ${e.innerText.toUpperCase()}`);
  });
});

close(infoContainer);

// Menu Code

const menu = document.getElementById("menu-btn");

let showIcons = document.querySelector(".show-icons");

let headIconsContainer = document.querySelector(".header-icons");

if (document_width < 800) {
  menu.remove();

  HEADER.appendChild(menu);

  menu.style.width = "40px";

  menu.style.height = "40px";

  js_StyleFile.innerHTML += `
  #menu-btn {
    width:40px;
    height:40px;
    position:absolute;
    right:20px;
    top:50%;
    transform:translateY(-50%);
  }
  
  // .header-icons {
  //   left:-${StylePackage(headIconsContainer).width} ;
  // }
  
  .left-side{
    left:0 !important;
  }`;

  headIconsContainer.style.left = `-${StylePackage(headIconsContainer).width}`;
}

showIcons.addEventListener("click", () => {
  headIconsContainer.classList.toggle("left-side");
});

const menuRow = document.querySelector("menu-row");

const firstRow = document.getElementById("menu-row-1"),
  secondaryRow = document.getElementById("menu-row-2"),
  lastRow = document.getElementById("menu-row-3");

menu.addEventListener("click", () => {
  let tapsStyle = window.getComputedStyle(menuTaps);

  if (tapsStyle.right != "0px") {
    menuTaps.style.right = "0px";
  }

  let lis = Array.from(document.querySelectorAll(".nav-link"));

  lis.forEach((e, i) => {
    let time = 200;

    let liPosition = StylePackage(e).right;

    let timer = setTimeout(() => {
      if (liPosition != "0px") {
        e.style.right = "0px";
      }
    }, i * (time / 2));
  });
});

const menuTaps = document.querySelector(".taps");

close(document.querySelector(".taps"));

const landingSkills = document.getElementById("my-skills");

const mySkills = ["HTML", "CSS", "JAVASCRIPT", "GITHUB", "COMANDLINE", "OOP"];

mySkills.forEach((skill, index) => {
  const mySkill = document.createElement("li");

  mySkill.id = `my-skill-${index + 1}`;

  mySkill.classList.add("my-skill");

  mySkill.innerHTML = `${index + 1} - ${skill}`;

  landingSkills.appendChild(mySkill);
});

// Start Services Section

// Request Data From File

async function requestServices() {
  try {
    let response = await fetch("api/services.json");

    let data = await response.json();

    data.forEach((card, index) => {
      // Create Card Div

      const CRT_ServicesCard = new ELEMENT(
        "div",
        `service-card-${index + 1}`,
        "service-card",
        document.querySelector(".services-body"),
        ``
      );

      CRT_ServicesCard.createElement();

      const ServicesCard = CRT_ServicesCard.getCreatedElement();

      // Create Icon Container

      const CRT_cardIcon = new ELEMENT(
        "span",
        "serv-icon",
        "serv-icon",
        ServicesCard,
        card["icon"]
      );

      CRT_cardIcon.createElement();

      const cardIcon = CRT_cardIcon.getCreatedElement();

      // Create Title Container

      const CRT_cardTitle = new ELEMENT(
        "h2",
        "serv-title",
        "serv-title",
        ServicesCard,
        card["service"]
      );

      CRT_cardTitle.createElement();

      const cardTitle = CRT_cardTitle.getCreatedElement();

      // Create Discription Container

      const CRT_cardDiscription = new ELEMENT(
        "span",
        "serv-dis",
        "serv-disc",
        ServicesCard,
        card["explain"]
      );

      CRT_cardDiscription.createElement();

      const cardDiscription = CRT_cardDiscription.getCreatedElement();
    });
  } catch (Error) {}
}

requestServices();

// Request Servidawces Data

let servPrevBtn = document.getElementById("serv-prev");

let servNextBtn = document.getElementById("serv-next");

let servicesContainer = document.querySelector(".services-body");

if (servicesContainer.clientWidth >= servicesContainer.scrollWidth) {
  servPrevBtn.style.display = "none";

  servNextBtn.style.display = "none";
}

servNextBtn.onclick = () => {
  scrollFunc(
    servicesContainer,
    "next",
    20
    // servPrevBtn
  );
};
servPrevBtn.onclick = () => {
  scrollFunc(
    servicesContainer,
    "prev",
    0
    // ,
    // servPrevBtn
  );
};

hideBtns(servicesContainer, servPrevBtn, servNextBtn);

hidePrevBtn(servicesContainer, servPrevBtn);
// End Services Section

// Scrolling Buttons Start

const projectsBox = document.getElementById("projects-box");

async function RequestProjectsData(link) {
  try {
    let response = await fetch(link);

    let data = await response.json();

    projectsBox.style.gridTemplateColumns = `repeat(${
      data.length
    }, calc(100% / 3 - ${parseInt(StylePackage(projectsBox).gap)}px)`;

    // Initialize Portfolio Cards

    for (let i = 0; i < data.length; i++) {
      let color = data[i]["color"];

      switch (color) {
        case "green":
          color = "#51ad24";
          break;
        case "purple":
          color = "#673AB7";
          break;
        case "orange":
          color = "#ff9800";
          break;
        case "blue":
          color = mainSecondaryColor;
          break;
        case "skyblue":
          color = "#2196f3";
          break;
        case "red":
          color = "#ff5722";
          break;
      }
      let colorOpacity = color + "20";

      let projectDataStyle = `font-size:.70rem;
        color:${color}; text-shadow:0 0 20px ${color};`;

      const CRT_projectCard = new ELEMENT(
        "div",
        `project-${data[i]["id"]}`,
        "project-card",
        projectsBox,
        "",
        `
        border:1px solid ${color};
        border-bottom:10px solid ${color};
        background-color: ${colorOpacity};        
        `,
        `
       #project-${data[i]["id"]}:hover{
          box-shadow:-7px -7px 0  ${color};
        }`,
        styleFile
      );

      CRT_projectCard.createElement();

      const projectCard = CRT_projectCard.getCreatedElement();

      projectCard.dataset = data[i]["type"];

      projectCard.setAttribute("datatype", data[i]["type"].toLowerCase());

      const CRT_card_head = new ELEMENT(
        "div",
        `card-head`,
        `card-head`,
        projectCard,
        ""
      );
      CRT_card_head.createElement();

      const card_head = CRT_card_head.getCreatedElement();

      const CRT_cardTitle = new ELEMENT(
        "h3",
        `title-${i + 1}`,
        `title`,
        card_head,
        data[i]["name"],
        `color:${color};
        text-shadow:0 0 20px ${color};`
      );
      CRT_cardTitle.createElement();

      const cardTitle = CRT_cardTitle.getCreatedElement();

      const CRT_projectId = new ELEMENT(
        "p",
        `project-id`,
        "project-id",
        card_head,
        data[i]["id"],
        `color:${color};`
      );

      CRT_projectId.createElement();

      const projectId = CRT_projectId.getCreatedElement();

      const CRT_cardPicture = new ELEMENT(
        "img",
        `img-${i}`,
        `project-image`,
        projectCard,
        "",
        `border: 0.5px solid ${color}`
      );
      CRT_cardPicture.createElement();

      const cardPicture = CRT_cardPicture.getCreatedElement();

      cardPicture.setAttribute("loading", "lazy");

      cardPicture.setAttribute("alt", "project-landing-screen");

      cardPicture.src = data[i]["picture"];

      const CRT_project_Info = new ELEMENT(
        "div",
        `project-info`,
        "project-info",
        projectCard,
        ``
      );

      CRT_project_Info.createElement();

      const projectInfo = CRT_project_Info.getCreatedElement();

      const CRT_project_Developer = new ELEMENT(
        "p",
        `project-developer`,
        "project-developer",
        projectInfo,
        `Developed By : <span style="${projectDataStyle}">${data[i]["developer"]}</span>`
      );

      CRT_project_Developer.createElement();

      const project_Developer = CRT_project_Developer.getCreatedElement();

      const CRT_project_Type = new ELEMENT(
        "p",
        `wordType-${i}`,
        "wordType",
        projectInfo,
        `Type  :<span style="${projectDataStyle}">${data[i]["type"]}</span>`
      );

      CRT_project_Type.createElement();

      const project_Type = CRT_project_Type.getCreatedElement();

      const CRT_projectTechnolojes = new ELEMENT(
        "P",
        "technolojes",
        "technolojes",
        projectInfo,
        `technologies : <span style="${projectDataStyle}">${data[i]["technologies"]}</span>`
      );

      CRT_projectTechnolojes.createElement();

      const projectTechnolojes = CRT_projectTechnolojes.getCreatedElement();

      const CRT_projectHosting = new ELEMENT(
        "P",
        "project-hosting",
        "project-hosting",
        projectInfo,
        `Hosting : <span style="${projectDataStyle}">${data[i]["hosting"]}</span>`
      );

      CRT_projectHosting.createElement();

      const projectHosting = CRT_projectHosting.getCreatedElement();

      const CRT_projectLanguage = new ELEMENT(
        "P",
        "project-languages",
        "project-languages",
        projectInfo,
        `Languages : <span style="${projectDataStyle}">${data[i]["language"]}</span>`
      );

      CRT_projectLanguage.createElement();

      const projectLanguage = CRT_projectLanguage.getCreatedElement();

      const CRT_projectsource = new ELEMENT(
        "P",
        "project-source",
        "project-source",
        projectInfo,
        `Idea Source : <span style="${projectDataStyle}">${data[i]["source"]}</span>`
      );

      CRT_projectsource.createElement();

      const projectsource = CRT_projectsource.getCreatedElement();

      // Create Reteing Container

      let retingStars = `<i class="fa-solid fa-star fa-xs" style="color:#fff;"></i>`;

      const CRT_projectRete = new ELEMENT(
        "p",
        "project-rete",
        "project-rete",
        projectInfo,
        `Rete Is : <span id="project-rate${i}" style="${projectDataStyle}">${retingStars.repeat(
          data[i]["rete"].slice(-1)
        )}</span>`
      );

      CRT_projectRete.createElement();

      const projectRete = CRT_projectRete.getCreatedElement();

      [...document.getElementById(`project-rate${i}`).children].forEach(
        (star, index) => {
          if (index > data[i]["rete"].slice(0, 1)) {
            star;
          } else {
            star.style.color = color;
          }
        }
      );
      styleFile.innerHTML += `
       .project-card:nth-child(${i + 1}) p::-webkit-scrollbar-track {
      background-color: ${colorOpacity};
      }
       .project-card:nth-child(${i + 1}) p::-webkit-scrollbar-thumb {
       background-color: ${color};
      }`;

      const CRT_projectDiscription = new ELEMENT(
        "p",
        "project-discription",
        "project-discription",
        projectInfo,
        `Discription : <span style="${projectDataStyle} font-size: 0.7rem;">${data[i]["discription"]} </span>`
      );

      CRT_projectDiscription.createElement();

      const projectDiscription = CRT_projectDiscription.getCreatedElement();

      let activeStars = data[i]["rete"].substr(0, 1);

      const CRT_projectVisiting = new ELEMENT(
        "button",
        "project-visiting",
        "project-visiting",
        projectCard,
        `<a class="visit-link" href="${data[i]["url"]}" style="color:${mainTextColor}; letter-spacing:4px; text-transform:uppercase;" target="_blank">Visit</a>`,
        `background-color: ${color};`
      );

      CRT_projectVisiting.createElement();

      const projectVisiting = CRT_projectVisiting.getCreatedElement();
    }
  } catch {
    console.error(error);
  }
}
RequestProjectsData("api/projects.json");

let filtersProjects = Array.from(document.querySelectorAll(`form div input`));
filtersProjects.forEach((fil) => {
  fil.addEventListener("click", (e) => {
    let filterType = fil.value;

    projectsBox.scrollTo({ behavior: "smooth", left: "start" });

    console.log(filterType);
    let projectCards = [...document.querySelectorAll(".project-card")];
    projectCards.forEach((card) => {
      console.log(card.getAttribute("datatype"));
    });
    if (filterType == "all") {
      projectCards.forEach((card) => {
        card.style.display = "flex";
        card.parentNode.classList.remove("no-scroll-bar");
        controlBtns(portfolioNextBtn, "flex", portfolioPrevBtn, "flex");
      });
    } else {
      projectCards.forEach((card) => {
        if (card.getAttribute("datatype") == filterType) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";

          if (checkNumberOfChildrens(card.parentNode) <= 3) {
            card.parentNode.classList.add("no-scroll-bar");
            controlBtns(portfolioNextBtn, "none", portfolioPrevBtn, "none");
          } else {
            card.parentNode.classList.remove("no-scroll-bar");
          }
        }
      });
    }
  });
});

window.addEventListener("load", () => {
  responsiveCardsWithGrid(
    projectsBox,
    [...document.querySelectorAll(".project-card")].length,
    2,
    1,
    1
  );
  console.log([...document.querySelectorAll(".project-card")]);
});

let portfolioPrevBtn = document.getElementById("portfolio-prev");

let portfolioNextBtn = document.getElementById("portfolio-next");

let portfolioContainer = document.querySelector(".portfolio-body");

// Social Media Section

let socialMediaBox = document.getElementById("social-media-box");

let socialPrevBtn = document.getElementById("social-prev");

let socialNextBtn = document.getElementById("social-next");

/// /// - -d-sa-d-aew--asda-e-we-

async function RequestSocialMediaData(link) {
  try {
    let response = await fetch(link);

    let data = await response.json();

    let numberOfCards = data.length;

    // Initialize Portfolio Cards

    for (let i = 0; i < data.length; i++) {
      if (data[i]["status"] == "active") {
        // initialize Color Variable

        let color = data[i]["color"]["color"];

        let colorType = data[i]["color"]["type"];

        let textColor = data[i]["color"]["color"];

        let colorOpacity = color + "30";

        let greyColor = "#484848";

        colorType == "dark" ? (textColor = greyColor) : (textColor = textColor);

        console.log(colorType);

        // Add Opacity To Color

        // Initialize Style For Titles
        let socialTitlesStyle = `font-size:.85rem;
        color:${textColor}; text-shadow:0 0 20px ${color};`;

        const CRT_socialCard = new ELEMENT(
          "div",
          `social-card-${i}`,
          "social-card",
          socialMediaBox,
          "",
          `
        border:1px solid transparent;
        border-color: transparent ${textColor} transparent ${textColor}  ;
        background-color: ${colorOpacity};        
        `,
          `
       #social-card-${i}:hover{
          box-shadow:0px 0px 20px  ${color};
        }`,
          styleFile
        );

        CRT_socialCard.createElement();

        const socialCard = CRT_socialCard.getCreatedElement();

        const CRT_card_head = new ELEMENT(
          "div",
          `card-head`,
          `card-head`,
          socialCard,
          ""
        );
        CRT_card_head.createElement();

        const card_head = CRT_card_head.getCreatedElement();

        const CRT_cardTitle = new ELEMENT(
          "h3",
          `title-${i + 1}`,
          `title`,
          card_head,
          data[i]["appName"],
          `background-color:${color};`
        );
        CRT_cardTitle.createElement();

        const cardTitle = CRT_cardTitle.getCreatedElement();

        const CRT_cardPicture = new ELEMENT(
          "img",
          `img-${i}`,
          `card-image`,
          card_head,
          ""
        );
        CRT_cardPicture.createElement();

        const cardPicture = CRT_cardPicture.getCreatedElement();

        cardPicture.setAttribute("loading", "lazy");

        cardPicture.setAttribute("alt", "social-media-logo");

        cardPicture.src = data[i]["logo"];

        const CRT_Details_Info = new ELEMENT(
          "div",
          `details-info`,
          "details-info",
          socialCard,
          ``
        );

        CRT_Details_Info.createElement();

        const Details_Info = CRT_Details_Info.getCreatedElement();

        const CRT_people = new ELEMENT(
          "div",
          `card-people`,
          "card-people",
          Details_Info,
          `<span>${
            data[i]["people"]["type"]
          }</span> <span style="${socialTitlesStyle}">${
            data[i]["people"][data[i]["people"]["type"]]
          }</span>`
        );

        console.log(data[i]["people"]["type"]);

        CRT_people.createElement();

        const people = CRT_people.getCreatedElement();

        const CRT_posts = new ELEMENT(
          "div",
          `posts`,
          "posts",
          Details_Info,
          `<span>Posts</span><span style="${socialTitlesStyle}">${data[i]["posts"]}</span>`
        );

        CRT_posts.createElement();

        const posts = CRT_posts.getCreatedElement();

        const CRT_userName = new ELEMENT(
          "div",
          `user-name-${i}`,
          "user-name",
          Details_Info,
          `<span>User Name</span> <span class="user-name" style="${socialTitlesStyle}">${data[i]["userName"]}</span>`
        );

        CRT_userName.createElement();

        const userName = CRT_userName.getCreatedElement();

        const CRT_Content = new ELEMENT(
          "div",
          "content",
          "content",
          Details_Info,
          `<span>${"Content"}</span><span style="${socialTitlesStyle}">${
            data[i]["content"]
          }</span>`
        );

        CRT_Content.createElement();

        const content = CRT_Content.getCreatedElement();

        // styleFile.innerHTML += `
        //  .project-card:nth-child(${i + 1}) p::-webkit-scrollbar-track {
        // background-color: ${colorOpacity};
        // }
        //  .project-card:nth-child(${i + 1}) p::-webkit-scrollbar-thumb {
        //  background-color: ${color};
        // }`;

        // Initialize Visiting Button

        const CRT_Visiting = new ELEMENT(
          "button",
          "social-visiting",
          "social-visiting",
          socialCard,
          `<a class="visit-link" href="${data[i]["link"]}" style="color:${mainTextColor}; letter-spacing:4px; text-transform:uppercase;" target="_blank">Visit</a>`,
          `background-color: ${color};`
        );

        CRT_Visiting.createElement();

        const Visiting = CRT_Visiting.getCreatedElement();
      } else {
        numberOfCards--;
      }
      socialMediaBox.style.gridTemplateColumns = `repeat(${numberOfCards}, calc(100% / 4 - ${parseInt(
        StylePackage(socialMediaBox).gap
      )}px )`;
    }
  } catch {
    console.error(error);
  }
}
RequestSocialMediaData("api/social-media.json");

window.addEventListener("load", () => {
  responsiveCardsWithGrid(
    socialMediaBox,
    document.querySelectorAll(".social-card").length,
    3,
    2,
    1
  );
});

// Apply Function

socialNextBtn.addEventListener("click", () => {
  scrollFunc(
    socialMediaBox,
    "next",
    parseInt(StylePackage(socialMediaBox).gap) +
      parseInt(
        StylePackage(document.querySelector(".social-card")).borderWidth
      ),
    socialNextBtn
  );
});

socialPrevBtn.addEventListener("click", () => {
  scrollFunc(
    socialMediaBox,
    "prev",
    parseInt(StylePackage(socialMediaBox).gap) +
      parseInt(
        StylePackage(document.querySelector(".social-card")).borderWidth
      ),
    socialPrevBtn
  );
});

// if (socialMediaBox.clientWidth >= socialMediaBox.scrollWidth) {
//   socialPrevBtn.style.display = "none";

//   socialNextBtn.style.display = "none";
// }

hideBtns(socialMediaBox, socialPrevBtn, socialNextBtn);

hidePrevBtn(socialMediaBox, socialPrevBtn);

/// /// - -d-sa-d-aew--asda-e-we-

// Contact Us Section

let sendMassageBtn = document.getElementById("send-massage"),
  nameInput = document.getElementById("name"),
  emailInput = document.getElementById("email"),
  massageArea = document.getElementById("massage-area");

console.log(sendMassageBtn);

sendMassageBtn.parentNode.onsubmit = (e) => {
  e.preventDefault();
  sendEmail();
};

sendMassageBtn.addEventListener("click", () => {
  massege("adewqeqwewsaed");
});
sendMassageBtn.addEventListener("click", () => {
  massege("adewqeqwewsaed");
});
// function sendEmail() {
//   let params = {
//     from_name: nameInput.value,
//     email_id: emailInput.value,
//     massege: massageArea.value,
//   };
//   emailjs.send("service_ye55eu7","template_og68n3e",params).then(
//   res =>{
//     massege(res.status)
//     // alert(`Your Massage Has Been Sent Successfully ${res}`);
//     emailInput.value = ""
//     nameInput.value = ""
//     massageArea.value = ""
// })
// }

function sendEmail() {
  let params = {
    from_name: nameInput.value,
    email_id: emailInput.value,
    massege: massageArea.value,
  };

  emailjs
    .send("service_ye55eu7", "template_og68n3e", params)
    .then((res) => {
      massege(res.status); // Corrected function name
      // alert(`Your Massage Has Been Sent Successfully ${res}`);
      emailInput.value = "";
      nameInput.value = "";
      massageArea.value = "";
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      massege("Error sending email."); // You can handle errors in the 'catch' block
    });
}

let contactUsPopupsBox = document.getElementById("contact-popups-box");

contactUsPopupsBox.style.height = contactUsPopupsBox.clientWidth + "px";

setTimeout(() => {}, 1412);
let responsiveStyle = document.createElement("style");

responsiveStyle.id = "respownsive-JS";

HEAD.appendChild(responsiveStyle);

// About Section

// let year = ;

function getAge(YourDate, type) {
  let myDate = new Date(YourDate).getTime();

  let nowDate = new Date(Date.now()).getTime();

  let diff = new Date(nowDate - myDate);

  let startDate = new Date(0);

  console.log(myDate);

  console.log(nowDate);

  console.log(diff.getUTCFullYear() - startDate.getUTCFullYear());

  return type == "year"
    ? diff.getUTCFullYear() - 1970
    : type == "month"
    ? getAge(YourDate, "year") * 12
    : type == "day"
    ? getAge(YourDate, "month") * 30
    : "";
}

let ageLabel = document.querySelector(
  ".information .text-container .age span "
);
console.log(ageLabel);

ageLabel.innerHTML = `Years : ${getAge(
  "06/22/2005",
  "year"
)} , Months : ${getAge("06/22/2005", "month")} , Days : ${getAge(
  "06/22/2005",
  "day"
)} `;

let skillsLabel = document.querySelector(
  ".information .text-container .skills-container p"
);

let skillsArray = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "OOP",
  "SASS",
  "TYPESCRIPT",
  "Git & GitHub",
  "commandline",
];

skillsArray.forEach((skill) => {
  let skills = document.createElement("span");

  skills.classList.add("skill");

  let skillText = document.createTextNode(skill);

  skills.appendChild(skillText);

  skillsLabel.appendChild(skills);
});

let animationArea = document.querySelector(".animation-area");

console.log(animationArea);

if (animationArea.clientHeight > animationArea.clientWidth) {
  animationArea.style.width = animationArea.clientHeight + "px";
} else if (animationArea.clientWidth > animationArea.clientHeight) {
  animationArea.style.height = animationArea.clientWidth + "px";
}

// let animationBall = document.querySelector(".animation-ball");

// if (animationBall.clientHeight > animationBall.clientWidth) {
//   animationBall.style.width = animationBall.clientHeight + "px";
// } else if (animationBall.clientWidth > animationBall.clientHeight) {
//   animationBall.style.height = animationBall.clientWidth + "px";
// }

function responsiveCardsWithGrid(
  target,
  cardsLength,
  max_1450,
  max_600,
  max_450
) {
  cardsLength = cardsLength;

  if (document_width <= 1450 && document_width > 600) {
    target.style.gridTemplateColumns = `repeat(${cardsLength},calc(100% / ${max_1450} - ${
      parseInt(StylePackage(target).gap) / 2
    }px) )`;
  } else if (document_width <= 600 && document_width > 450) {
    target.style.gridTemplateColumns = `repeat(${cardsLength},calc(100% / ${max_600} )`;
  } else if (document_width <= 450) {
    target.style.gridTemplateColumns = `repeat(${cardsLength},calc(100% / ${max_450} )`;
  }
}

portfolioNextBtn.onclick = () => {
  scrollFunc(
    projectsBox,
    "next",
    parseInt(StylePackage(projectsBox).gap) +
      parseInt(
        StylePackage(document.querySelector(".project-card")).borderWidth
      ),
    portfolioPrevBtn
  );
};
portfolioPrevBtn.onclick = () => {
  scrollFunc(
    projectsBox,
    "prev",
    parseInt(StylePackage(projectsBox).gap) +
      parseInt(
        StylePackage(document.querySelector(".project-card")).borderWidth
      ),
    portfolioPrevBtn
  );
};

// End Portfolio

hideBtns(projectsBox, portfolioPrevBtn, portfolioNextBtn);

hidePrevBtn(projectsBox, portfolioPrevBtn);

// Function For Menu & Popups

function close(parent) {
  let closeBtn = document.createElement("button");

  closeBtn.innerHTML = `<i class="fa-solid fa-xmark "></i>`;

  parent.appendChild(closeBtn);

  closeBtn.classList.add("close-btn");

  closeBtn.addEventListener("click", () => {
    closeBtn.parentNode.style.right = "-200%";

    lis.forEach((e) => {
      e.style.right = "-2500px";
    });
  });

  let lis = Array.from(
    document.querySelectorAll(`.${closeBtn.previousElementSibling.className}`)
  );
}

//  Functions For Btns

function hideBtns(p, btn1, btn2) {
  p.addEventListener("scroll", () => {
    if (
      -5 + p.scrollWidth - p.scrollLeft <= p.clientWidth &&
      p.scrollWidth - p.scrollLeft >= p.clientWidth
    ) {
      controlBtns(btn1, "flex", btn2, "none");
    } else if (p.scrollLeft <= 5) {
      controlBtns(btn1, "none", btn2, "flex");
    } else {
      controlBtns(btn1, "flex", btn2, "flex");
    }
  });
}

function controlBtns(btn1, displayType1, btn2, displayType2) {
  btn1.style.display = displayType1;
  btn2.style.display = displayType2;
}

function scrollFunc(parent, operation, ctnGap, prevBtn) {
  setTimeout(() => {
    let cards = [...parent.children];
    if (operation == "next") {
      parent.scrollTo({
        behavior: "smooth",
        left:
          cards[
            parseInt(
              parent.scrollLeft / parseInt(StylePackage(cards[0]).width)
            ) + 1
          ].offsetLeft - ctnGap,
      });
      // console.log(p.scrollWidth, p.scrollLeft + p.clientWidth);
      // console.log(p.scrollWidth - 20, p.scrollLeft + p.clientWidth);
      // if (
      //   parent.scrollLeft + parent.clientWidth < parent.scrollWidth &&
      //   parent.scrollLeft + parent.clientWidth > parent.scrollWidth - 25
      // ) {
      //   parent.scrollTo({
      //     behavior: "smooth",
      //     left: cards[cards.length - 1].offsetLeft,
      //   });
      // }
    } else if (operation == "prev") {
      parent.scrollTo({
        behavior: "smooth",
        left:
          cards[
            parseInt(
              parent.scrollLeft / parseInt(StylePackage(cards[0]).width)
            ) - 1
          ].offsetLeft - ctnGap,
      });
      // if (parent.scrollLeft <= 25 && parent.scrollLeft > 0) {
      //   parent.scrollTo({
      //     behavior: "smooth",
      //     left: 0,
      //   });
      // }
    }

    hidePrevBtn(parent, prevBtn);
  }, 50);
}

function hidePrevBtn(parent, btnPrev) {
  if (parent.scrollLeft < 10) {
    btnPrev.style.display = "none";
  }
}

// Functions For themes Or Other Actions

function applyLanguage(lang) {
  localStorage.setItem("language", lang);

  if (lang == "arabic") {
    document.body.style.direction = "rtl";
  }
}

function applyTheme(color) {
  localStorage.setItem("theme", color);
  switch (color) {
    case "red":
      themeStyleFile.innerHTML = `:root {
  --main-color: #ff5722;
  --secoundary-color: #e7c3c3;
  --background-main-color:#ff57224e;
  --background-white-color: #e7c3c37e;
  --background-color: #000f18;
}`;
      break;
    case "blue":
      themeStyleFile.innerHTML = `:root {
  --main-color: #186ca4;
  --secoundary-color: #fff;
  --background-main-color: rgba(30, 56, 103, 0.7);
  --background-white-color: rgba(255, 255, 255, 0.7);
  --background-color: #000f18;
}`;
      break;
    case "green":
      themeStyleFile.innerHTML = `
    :root {
  --main-color:#4caf50;
  --secoundary-color:#b8f0ba;
  --background-main-color:#4caf505c;
  --background-white-color:#ffffff99;
  --background-color: #000f18;
}`;
      break;

    case "orange":
      themeStyleFile.innerHTML = `
    :root {
  --main-color: #ff9800;
  --secoundary-color:#ffe2b6;
  --background-main-color:#ff980040;
  --background-white-color:#b7a488;
  --background-color: #000f18;
}`;
      break;
    case "purple":
      themeStyleFile.innerHTML = `
    :root {
  --main-color:#9c27b0;
  --secoundary-color:#ba95c0;
  --background-main-color:#9c27b05c;
  --background-white-color:#d4abdb94;
  --background-color: #000f18;
}`;
      break;

    case "dark":
      themeStyleFile.innerHTML = `
    :root {
  --main-color:#ffffff;
  --secoundary-color:#000;
  --background-main-color:#ffffff66;
  --background-white-color:#ffffff7d;
  --background-color: #000f18;
}`;
      break;
  }
}

function checkNumberOfChildrens(parent) {
  return Array.from(parent.children).filter(
    (e) => StylePackage(e).display != "none"
  ).length;
}

function onOpenPopup(taps) {
  count = 0;

  let add = setInterval(() => {
    taps[count].style.position = "relative";

    taps[count].style.right = 0;

    count == taps.length - 2 ? clearInterval(add) : count++;
  }, 120);
}

function exit(target) {
  target.style.right = "-200%";
}

//
