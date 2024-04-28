// Add To HTML Head
const BODY = document.body;

const HEAD = document.head;

let StylePackage = (element) => {
  return window.getComputedStyle(element);
};

const styleFile = document.createElement("style");

styleFile.id = "main-style";

const lockPageStyleFile = document.createElement("style");

lockPageStyleFile.className = "Lock Page Style File";

HEAD.appendChild(lockPageStyleFile);

const changeAndTypingAnimationStylingFile = document.createElement("style");

changeAndTypingAnimationStylingFile.id = "name-change-animation-style";

const dynamicFontSize = "1rem";

const mainTextColor = `#fff`;

const mainSecondaryColor = `#186ca4`;

const sectionTitle = document.querySelectorAll(".header-title");

let currentLanguge = localStorage.getItem("language");

sectionTitle.forEach((title, index) => {
  title.style.height =
    parseInt(
      StylePackage(document.querySelectorAll(".section-head")[index]).height
    ) +
    30 +
    "px";
});

// Background Colors

const background_White_Color = `rgba(255 , 255 , 255 , 0.7 )`;

const background_blue_Color = `rgba(30 , 56 , 103 , 0.7 )`;

// Styling Body

BODY.style.minHeight = "100vh";

// Add Bac

// BODY.style.backgroundSize = "100% 00vh";

const document_width = document.documentElement.clientWidth;

// Hold Click Event Class

class HOLDER {
  constructor(target, callbackHold, callbackBlur) {
    this.target = target;
    this.callbackHold = callbackHold;
    this.callbackBlur = callbackBlur;
    this.isHeld = false;
    this.activeHoldTimeOutId = null;

    ["mousedown", "touchstart"].forEach((type) => {
      this.target.addEventListener(type, () => this._onHoldStart.bind(this)());
    });

    ["mouseup", "mouseleave", "mouseout", "touchend", "touchcancel"].forEach(
      (type) => {
        this.target.addEventListener(type, () => this._onHoldEnd.bind(this)());
      }
    );
  }

  _onHoldStart() {
    this.isHeld = true;

    this.activeHoldTimeOutId = setInterval(() => {
      if (this.isHeld) {
        this.callbackHold();
      }
    }, 100);
  }

  _onHoldEnd() {
    this.isHeld = false;
    clearTimeout(this.activeHoldTimeOutId);
    this.callbackBlur();
  }

  static onHold(target, callbackHold, callbackBlur) {
    new HOLDER(target, callbackHold, callbackBlur);
  }
}

// Element Genaration Class

class ELEMENT {
  constructor(type, id, clas, parent, content, style, customStyle, styleFile) {
    this.type = type;

    this.id = id;

    this.classEle = clas;

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

    element.className = this.classEle;

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

function addStyleToPseudoElement(style, file) {
  return setTimeout(() => {
    file.innerHTML += style;

    HEAD.appendChild(styleFile);
  }, 1);
}

// Reset Elements Positions
let languages = {
  arabic: {
    applicationTitle: "الموقع الشخصي للأموي",

    // Un Lock Page Start

    un_lock_explain:
      "قم بوضع موشر الفارة على المربع اناه حتى يتم الغاء قفل الموقع",

    // Un Lock Page End

    // Start Header
    // Navigation Bar
    webTitle: "عبدالرحمن الدباس",
    home: "الرئيسية",
    services: "الخدمات",
    portfolio: "المعرض",
    social_media: "التواصل الاجتماعي",
    contact_us: "اتصل بنا",
    about_us: "عنا",
    road_map: "خريطة التعلم",

    // Skills

    // Colors
    red: "أحمر",
    green: "أخضر",
    blue: "أزرق",
    orange: "برتقالي",
    purple: "بنفسجي",

    // Languages
    arabicLang: "العربية",
    englishLang: "الانجليزية",

    // Download Files
    cv: "ملفي",
    code: `<a
            href="https://github.com/ALOMAWY/alomawy.code.github.io/archive/refs/heads/master.zip"
            rel="noopener noreferrer"
          >الكود</a>`,

    codeMassage: "الكود",

    // Infos
    news: "الجديد",

    // End Header

    // Start Landing Page

    seyHello: "السلام عليكم",
    aboutMeInfos:
      "<h2 class='sey-hello' data-lang='seyHello'>السلام عليكم</h2>مرحبا انا عبدالرحمن الدباس . أعمل  كمطور واجهات أمامية لمواقع الانترنت .أنا من سوريا دمشق . هذا موقع شخصي بسيط قمت بتطويره ب  'Java Script' . فقط",

    fullName: "عبدالرحمن الدباس",

    // End Landing Page

    // Start Services Page

    servicesTitle: "الخدمات",

    // End Services Page

    // Start Portfolio Page

    portfolioTitle: "المعرض",

    // Filter List
    categoryAll: "الكل",
    categoryWebsites: "المواقع",
    categoryGames: "الألعاب",

    // End Portfolio Page

    // Start social Media

    socialMediaTitle: "التواصل الاجتماعي",

    // End social Media

    // Start ContactUs Page
    contactUsTitle: "تواصل معنا",
    contactUsName: "الاسم",

    contactUsPopup: "تواصل معنا",

    // Form Inputs
    inputName: "الاسم",
    inputEmail: "البريد الالكتروني",
    textAreaPlaceholder: "اكتب رسالتك",

    sendMassage: "ارسل رسالتك",

    // End ContactUs Page

    // Start About Page

    aboutTitle: "تفاصيل",
    fullNameText: `<i class="fa-solid fa-signature"></i> الاسم :`,
    ageText: `<i class="fa-solid fa-heart-pulse"></i> العمر :`,
    cWorkText: `<i class="fa-solid fa-briefcase"></i> العمل :`,
    statusText: `<i class="fa-solid fa-diagram-project"></i> الحالة :`,
    expText: `<i class="fa-solid fa-chart-simple"></i> الخبرة :`,
    skills: `المهارات :`,

    age: "العمر",
    cWork: "مطور واجهات أمامية",
    status: "متاح للعمل",
    exp: toArabicNumber(getExpYears("02/22/2022")),

    // End About Page

    // Start Project Card

    pDevTitleText: "المطور :",

    pTypeTitleText: "النوع :",

    pTechTitleText: "التقنيات :",

    pHostTitleText: "الاستضافة :",

    pLangTitleText: "اللغات :",

    pSrcTitleText: "مصدر الفكرة :",

    pRateTitleText: "التقييم :",

    pDiscTitleText: "الوصف :",

    visitLinkText: "زيارة",

    // End Project Card

    // Start Social Card

    socialFollowersTitle: "المتابعين",

    socialFriendsTitle: "الأصدقاء",

    socialPostsTitle: "المنشورات",

    socialUserNameTitle: "اسم المستخدم",

    socialContentTitle: "المحتوى",
    // End Social Card

    // Start Road Map Page

    roadMapTitle: "خريطة التعلم",
    showRm: "رؤية الخريطة",
    controlCar: "قيادة السيارة",
    mapTitle: "تطوير الواجهات الأمامية",

    // End Road Map Page

    // Start Footer

    skillsTitle: "المهارات :",

    languagesTitle: "اللغات :",

    sSkillsTitle: "المهارات الخارجية :",

    sectionTitle: "اللأقسام",

    linuxProgressNumber: "٠%",

    projectsTitle: " : المشاريع ",

    numberOfProjects: "٧",

    developerTitle: ": المطور",

    developerValue: "عبدالرحمن الدباس",

    // End Footer

    sectionsTitleArray: [
      "صفحة التعريف",
      "الخدمات",
      "المعرض",
      "التواصل الاجتماعي",
      "تواصل معنا",
      "تفاصيل",
      "خريطة التعلم",
    ],
  },
  english: {},
};

let arNums = [
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
];

function massege(msg, timing = 3) {
  if (document.querySelector(".massege-box")) {
    document.querySelector(".massege-box").remove();

    let massegeBox = document.createElement("div");

    let textNode = document.createTextNode(msg);

    massegeBox.appendChild(textNode);

    massegeBox.classList.add("massege-box");

    BODY.prepend(massegeBox);

    massegeBox.style.animation = `${timing}s ease-in-out 0s 1 normal backwards running msg`;
  } else {
    let massegeBox = document.createElement("div");

    let textNode = document.createTextNode(msg);

    massegeBox.appendChild(textNode);

    massegeBox.classList.add("massege-box");

    BODY.prepend(massegeBox);

    massegeBox.style.animation = `${timing}s ease-in-out 0s 1 normal backwards running msg`;
  }

  setTimeout(() => {
    document.querySelector(".massege-box").remove();
  }, timing * 1000);
}

const mainContainer = document.getElementById("home");

const lockPageContainer = document.getElementById("lock-page");

const ExplainToUnlock = document.getElementById("unlock-text");

const drawArea = document.getElementById("draw-area");

// Get Sound

const successSound = document.getElementById("unlock-sound");

successSound.src =
  "./sounds/short-success-sound-glockenspiel-treasure-video-game-6346.mp3";

const range = document.getElementById("range");

const rangeValue = document.querySelector(".count-value");

const lockHead = document.querySelector(".the-lock .lock-head");

let counter;

let unlockStatus = 0;

let unlockFullValue = 100;

let minusCounterFunction;

let minusCounter;

let minusToCounter;

function unlocked() {
  localStorage.setItem("lock", "hide");

  successSound.play();

  mainContainer.style.display = "block";

  unLockAnimation();

  setHeaderParent();

  setTimeout(() => {
    lockPageContainer.remove();
  }, 1000);
}

function lockChecker() {
  if (localStorage.getItem("lock") == "hide") {
    lockPageContainer.remove();

    mainContainer.style.display = "block";
    setHeaderParent();

    assignNavigationLinksVariables();

    if (document_width < 800) BODY.prepend(navgationBar);

    appendMenuToHeader();

    if (currentLanguge != "arabic") {
      EN_action();
    } else {
      AR_Action();
    }
  } else {
    mainContainer.style.display = "none";
  }
}

window.addEventListener("load", () => {
  lockChecker();
});

function unLockAnimation() {
  lockHead.style.cssText += `
        transform:translate(${lockHead.clientWidth + 20}px) rotateY(160deg);
        box-shadow:none;`;
}

drawArea.addEventListener("mouseover", () => {
  clearInterval(minusCounter);

  clearTimeout(minusToCounter);

  if (unlockStatus < unlockFullValue) {
    counter = setInterval(() => {
      unlockStatus++;

      rangeValue.innerText = unlockStatus + "%";

      setTimeout(() => {
        lockPageStyleFile.innerHTML += `
        #range::before{
          content:'';
          width:${unlockStatus}%;
        }`;
      }, 0);

      if (unlockStatus >= unlockFullValue) {
        clearInterval(counter);

        unlocked();
      }
    }, 50);
  }
});

drawArea.addEventListener("mouseout", () => {
  minusCounterFunction = () => {
    minusCounter = setInterval(() => {
      if (unlockStatus > 0) {
        unlockStatus--;

        rangeValue.innerText = unlockStatus + "%";

        styleFile.innerHTML += `#range::before{
        content:"";
        width:${unlockStatus}%;
      }`;
      } else {
        unlockStatus = 0;
      }
    }, 1000);
  };

  minusToCounter = setTimeout(() => {
    minusCounterFunction();
  }, 5000);

  HEAD.appendChild(styleFile);

  clearInterval(counter);
});

//  Add Loading Elements

let CRT_topElement = new ELEMENT("div", "", "an-top-element", BODY);

CRT_topElement.createElement();

let topElement = CRT_topElement.getCreatedElement();

let CRT_bottomElement = new ELEMENT("div", "", "an-bottom-element", BODY);

CRT_bottomElement.createElement();

let bottomElement = CRT_bottomElement.getCreatedElement();

let CRT_animationText = new ELEMENT(
  "h3",
  "",
  "animation-text",
  BODY,
  "Unlocked Now"
);

CRT_animationText.createElement();

let animationText = CRT_animationText.getCreatedElement();

function unLockAnimation() {
  let animationElements = [topElement, bottomElement, animationText];
  topElement.style.animation = "lock-an-top 7s ease-in-out 1";

  bottomElement.style.animation = "lock-an-bottom 7s ease-in-out 1";

  animationText.style.animation = "animation-text 4s ease-in-out 1 1.5s";
  setTimeout(() => {
    animationElements.forEach((e) => (e.style.animation = ""));
  }, 10000);
}

topElement.classList.add("an-element");
bottomElement.classList.add("an-element");

// Header

let header = document.getElementById("header");

let headerParent = header.parentNode;
function setHeaderParent() {
  if (document_width < 1100) {
    header.style.width = "100%";

    headerParent.style.height = StylePackage(header).height;

    headerParent.style.paddingLeft = "0";

    headerParent.style.paddingRight = "0";

    headerParent.style.borderRadius = "0";

    header.style.padding = " 7px 15px ";

    let headerAllHeight = parseInt(StylePackage(header).height);

    if (headerAllHeight == parseInt(StylePackage(header).height)) {
      setTimeout(() => {
        headerParent.style.height = StylePackage(header).height;
      }, 500);
    }
  } else {
    header.style.width = headerParent.getFullWidth() + "px";

    headerParent.style.height = StylePackage(header).height;

    headerParent.style.paddingLeft = StylePackage(header).paddingLeft;

    headerParent.style.paddingRight = StylePackage(header).paddingRight;

    initializeEnglishLanguageObject();
  }
}
let V_scroll = 0;

let control = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > parseInt(StylePackage(header).height)) {
    header.style.backgroundColor = "var(--background-main-color)";

    header.style.backdropFilter = "blur(10px)";

    header.style.boxShadow = "0 0 20px var(--main-color)";

    header.style.top = "-200px";

    if (window.scrollY < V_scroll) {
      header.style.top = "0";
    }
  }

  if (window.scrollY == 0) {
    header.style.top = "0";

    header.style.backgroundColor = "transparent";

    header.style.backdropFilter = "blur(0px)";

    header.style.boxShadow = "none";

    header.style.borderRadius = " 0 ";
  }

  // Checking About Car Acces

  let scrollY = window.scrollY;

  let roadMapOffsetTop = document.querySelector(".road-map-cover").offsetTop;

  if (roadMapOffsetTop - 50 < scrollY) {
    control = true;
  } else {
    control = false;
  }
});
window.addEventListener("scrollend", (e) => {
  V_scroll = window.scrollY;
});

let navgationBar = document.getElementsByTagName("nav")[0];

if (document_width < 800) {
  navigationPosition();

  document
    .querySelectorAll(".header-icon")
    .forEach((ele) =>
      ele.addEventListener("click", () => navigationPosition())
    );
} else {
  navgationBar.remove();

  header.appendChild(navgationBar);
}

let timeId;

function startTimeOut() {
  timeId = setTimeout(() => {
    navigationPosition();
  }, 2000);
}

function stopTimeOut(name) {
  clearTimeout(timeId);
}

function navChecker() {
  navgationBar.addEventListener("click", () => {
    if (navgationBar.offsetLeft != 0) {
      startTimeOut();
    } else {
      stopTimeOut();
    }
  });
}

let timer = setTimeout(() => {
  navigationPosition();
}, 2000);

console.log(timer);

navChecker();
// Header Styling

let landing = document.querySelector(".landing-cover");

landing.style.minHeight = `calc(100vh - ${parseInt(
  StylePackage(header).height
)}px)`;

// Styling Website Logo Text Psoudo Element

// Onload Actions

window.addEventListener("load", () => {
  // It Is Set The Select Theme If The User Changed The Default Theme
  localStorage.getItem("theme")
    ? applyTheme(localStorage.getItem("theme"))
    : applyTheme("blue");

  initializeEnglishLanguageObject();

  applyScrollingButtons(currentLanguge);

  currentLanguge ? applyLanguage(currentLanguge) : applyLanguage("english");

  if (document_width < 300) {
    roadMapContentBox.innerHTML = "Not Availabel Off Your Phone Size";
  }

  setUnifiedWidth();

  imagesParent();
});

// jS Editing Style

let js_StyleFile = document.createElement("style");

js_StyleFile.id = "js-file";

HEAD.appendChild(js_StyleFile);

// Create Theme CSS File &  Add Theme To File

let themeStyleFile = document.createElement("style");

themeStyleFile.id = "theme-js";

HEAD.appendChild(themeStyleFile);

document
  .querySelectorAll(".close-btn")
  .forEach((e) => e.addEventListener("click", () => close()));

function createButtonAction(selectMenu, button, childs, callbackFunction, msg) {
  //
  button.addEventListener("click", (e) => {
    close();

    selectMenu.style.right = "0";

    let tapsLis = Array.from(selectMenu.children);

    onOpenPopup(tapsLis);
  });

  childs.forEach((e) => {
    let content = e.dataset.content;

    e.innerHTML = content;

    e.addEventListener("click", () => {
      massege(`${msg} '${e.innerText}'`);

      callbackFunction(e.dataset.action);

      exit(languagesContainer);
    });
  });
}

// Changr Theme Code

let changeTheme;

let changeThemeContainer;

let colorName;

//  Change Language Code

let changeLanguageBtn;

let languagesContainer;

let languageNames;

//  Downloads Code

let selectFileBtn;

let selectDownloadContainer;

let fileNames;

// Info Section Code

let infoBtn;

let infoContainer;

let infoNames;

// Menu Code

let menu;

let menuContainer;

let tapNames;

let showIcons;

function assignNavigationLinksVariables() {
  changeTheme = document.getElementById("change-mode");

  changeThemeContainer = document.querySelector(".select-themes");

  colorName = Array.from(document.querySelectorAll(".theme-btn"));

  //  Change Language Code

  changeLanguageBtn = document.getElementById("change-language");

  languagesContainer = document.querySelector(".select-language");

  languageNames = Array.from(document.querySelectorAll(".lang-btn"));

  //  Downloads Section Code

  selectFileBtn = document.getElementById("download-btn");

  selectDownloadContainer = document.querySelector(".select-download");

  fileNames = Array.from(document.querySelectorAll(".d-btn"));

  // Info Section Code

  infoBtn = document.getElementById("get-info");

  infoContainer = document.querySelector(".select-info");

  infoNames = Array.from(document.querySelectorAll(".info-btn"));

  // Menu Code

  menu = document.getElementById("menu-btn");

  menuContainer = document.querySelector(".taps");

  tapNames = Array.from(document.querySelectorAll(".section-btn"));

  showIcons = document.querySelector(".show-icons");
}
let test = (arg) => {
  console.log(arg);
};

function appendMenuToHeader() {
  if (document_width < 800) {
    if (menu) {
      menu.remove();

      header.appendChild(menu);

      menu.style.width = "40px";

      menu.style.height = "40px";

      menu.style.marginRight = "0";
    }
  }
}

const menuRow = document.querySelector("menu-row");

const firstRow = document.getElementById("menu-row-1"),
  secondaryRow = document.getElementById("menu-row-2"),
  lastRow = document.getElementById("menu-row-3");

const menuTaps = document.querySelector(".taps");

const landingSkills = document.getElementById("my-skills");

const mySkills = ["HTML", "CSS", "JAVASCRIPT", "GITHUB", "COMANDLINE", "OOP"];

mySkills.forEach((skill, index) => {
  const mySkill = document.createElement("li");

  mySkill.id = `my-skill-${index + 1}`;

  mySkill.classList.add("my-skill");

  mySkill.setAttribute("data-lang", `${skill.toLowerCase()}`);

  languages.arabic[skill.toLowerCase()] = `${arNums[index + 1]}- ${skill}`;

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
        `servTitle${index + 1}`,
        "serv-title",
        ServicesCard,
        card["service"]["en"]
      );

      CRT_cardTitle.createElement();

      const cardTitle = CRT_cardTitle.getCreatedElement();

      cardTitle.dataset.lang = `servTitleValue${index + 1}`;

      languages.arabic[`servTitleValue${index + 1}`] = card["service"]["ar"];

      // Create Discription Container

      const CRT_cardDiscription = new ELEMENT(
        "span",
        `servDisc${index + 1}`,
        "serv-disc",
        ServicesCard,
        card["explain"]["en"]
      );

      CRT_cardDiscription.createElement();

      const cardDiscription = CRT_cardDiscription.getCreatedElement();

      cardDiscription.dataset.lang = `servDiscValue${index + 1}`;

      languages.arabic[`servDiscValue${index + 1}`] = card["explain"]["ar"];

      servicesArrayAr.push(data[index]["service"]["ar"]);

      servicesArrayEn.push(data[index]["service"]["en"]);
    });
    languages.arabic.servicesArray = servicesArrayAr;

    languages.english.servicesArray = servicesArrayEn;

    languages[currentLanguge.toLowerCase()].servicesArray.forEach((e, i) => {
      let CRT_ServicesItem = new ELEMENT("li", "s" + i, "", servicesList, e);

      CRT_ServicesItem.createElement();

      let ServicesItem = CRT_ServicesItem.getCreatedElement();
    });
  } catch (Error) {}
}

requestServices();

// Request Services Data

let servLeftBtn = document.getElementById("serv-prev");

let servRightBtn = document.getElementById("serv-next");

let servicesContainer = document.querySelector(".services-body");

if (servicesContainer.clientWidth >= servicesContainer.scrollWidth) {
  servLeftBtn.style.display = "none";

  servRightBtn.style.display = "none";
}
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

      let projectDataStyle = `color:${color}; text-shadow:0 0 20px ${color};`;

      const CRT_projectCard = new ELEMENT(
        "div",
        `project-${data[i]["id"]["en"]}`,
        "project-card",
        projectsBox,
        "",
        `
        border:1px solid ${color};
        border-bottom:10px solid ${color};
        background-color: ${colorOpacity};
        `,
        `
       #project-${data[i]["id"]["en"]}:hover{
          box-shadow:-7px 0 0  ${color};
        }`,
        styleFile
      );

      CRT_projectCard.createElement();

      const projectCard = CRT_projectCard.getCreatedElement();

      projectCard.dataset.type = data[i]["type"]["en"];

      projectCard.setAttribute("datatype", data[i]["type"]["en"].toLowerCase());

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
        data[i]["name"]["en"],
        projectDataStyle
      );
      CRT_cardTitle.createElement();

      const projectCardTitle = CRT_cardTitle.getCreatedElement();

      projectCardTitle.setAttribute("data-lang", `projectCardTitle${i + 1}`);

      languages.arabic[`projectCardTitle${i + 1}`] = data[i]["name"]["ar"];

      const CRT_projectId = new ELEMENT(
        "p",
        `project-id`,
        "project-id",
        card_head,
        data[i]["id"]["en"],
        projectDataStyle
      );

      CRT_projectId.createElement();

      const projectId = CRT_projectId.getCreatedElement();

      projectId.setAttribute("data-lang", `projectCardId${i + 1}`);

      languages.arabic[`projectCardId${i + 1}`] = data[i]["id"]["ar"];

      const CRT_cardImageParent = new ELEMENT(
        "div",
        `cardImageParent${i}`,
        "card-image-parent",
        projectCard
      );

      CRT_cardImageParent.createElement();

      const cardImageParent = CRT_cardImageParent.getCreatedElement();

      const CRT_cardPicture = new ELEMENT(
        "img",
        `img-${i}`,
        `project-image`,
        cardImageParent,
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
        "div",
        `project-developer-${i + 1}`,
        "project-developer detail",
        projectInfo
      );

      CRT_project_Developer.createElement();

      const project_Developer = CRT_project_Developer.getCreatedElement();

      const CRT_devTitle = new ELEMENT(
        "p",
        `devTit-${i + 1}`,
        "devleoper-title",
        project_Developer,
        "Develeoper :",
        projectDataStyle
      );

      CRT_devTitle.createElement();

      const devTitle = CRT_devTitle.getCreatedElement();

      devTitle.dataset.lang = "pDevTitleText";

      const CRT_devValue = new ELEMENT(
        "p",
        `devVal-${i + 1}`,
        "developer-value",
        project_Developer,
        data[i]["developer"]["en"]
      );

      CRT_devValue.createElement();

      const devValue = CRT_devValue.getCreatedElement();

      devValue.dataset.lang = `devVal${i + 1}`;

      languages.arabic[`devVal${i + 1}`] = data[i]["developer"]["ar"];

      const CRT_project_Type = new ELEMENT(
        "div",
        `programTitle${i}`,
        "program-title detail",
        projectInfo
      );

      CRT_project_Type.createElement();

      const project_Type = CRT_project_Type.getCreatedElement();

      const CRT_typeTitle = new ELEMENT(
        "p",
        `typeTitle${i + 1}`,
        "type-title",
        project_Type,
        "Type :",
        projectDataStyle
      );

      CRT_typeTitle.createElement();

      const typeTitle = CRT_typeTitle.getCreatedElement();

      typeTitle.dataset.lang = "pTypeTitleText";

      const CRT_typeValue = new ELEMENT(
        "p",
        `typeValue${i + 1}`,
        "type-value",
        project_Type,
        data[i]["type"]["en"]
      );

      CRT_typeValue.createElement();

      const typeValue = CRT_typeValue.getCreatedElement();

      typeValue.dataset.lang = `pTypeValue${i + 1}`;

      languages.arabic[`pTypeValue${i + 1}`] = data[i]["type"]["ar"];

      const CRT_projectTechnolojes = new ELEMENT(
        "div",
        `technolojes${i + 1}`,
        "technolojes detail",
        projectInfo
      );

      CRT_projectTechnolojes.createElement();

      const projectTechnolojes = CRT_projectTechnolojes.getCreatedElement();

      const CRT_techTitle = new ELEMENT(
        "p",
        `techTitle${i + 1}`,
        "tech-title",
        projectTechnolojes,
        "Technolojes :",
        projectDataStyle
      );

      CRT_techTitle.createElement();

      const techTitle = CRT_techTitle.getCreatedElement();

      techTitle.dataset.lang = "pTechTitleText";

      const CRT_techValue = new ELEMENT(
        "p",
        `techValue${i + 1}`,
        "tech-value",
        projectTechnolojes,
        data[i]["technologies"]
      );

      CRT_techValue.createElement();

      const techValue = CRT_techValue.getCreatedElement();

      const CRT_projectHosting = new ELEMENT(
        "div",
        `projectTech${i + 1}`,
        "project-hosting detail",
        projectInfo
      );

      CRT_projectHosting.createElement();

      const projectHosting = CRT_projectHosting.getCreatedElement();

      const CRT_hostingTitle = new ELEMENT(
        "p",
        `hostingTitle${i + 1}`,
        "hosting-title",
        projectHosting,
        "Hosting :",
        projectDataStyle
      );

      CRT_hostingTitle.createElement();

      const hostingTitle = CRT_hostingTitle.getCreatedElement();

      hostingTitle.dataset.lang = "pHostTitleText";

      const CRT_hostingValue = new ELEMENT(
        "p",
        `hostingValue${i + 1}`,
        "hosting-value",
        projectHosting,
        data[i]["hosting"]["en"]
      );

      CRT_hostingValue.createElement();

      const hostingValue = CRT_hostingValue.getCreatedElement();

      hostingValue.dataset.lang = `pHostingValue${i + 1}`;

      languages.arabic[`pHostingValue${i + 1}`] = data[i]["hosting"]["ar"];

      const CRT_projectLanguage = new ELEMENT(
        "div",
        `projectLanguages${i + 1}`,
        "project-languages detail",
        projectInfo
      );

      CRT_projectLanguage.createElement();

      const projectLanguage = CRT_projectLanguage.getCreatedElement();

      const CRT_langTitle = new ELEMENT(
        "p",
        `langTitle${i + 1}`,
        "lang-title",
        projectLanguage,
        "Languages :",
        projectDataStyle
      );

      CRT_langTitle.createElement();

      const langTitle = CRT_langTitle.getCreatedElement();

      langTitle.dataset.lang = "pLangTitleText";

      const CRT_langValue = new ELEMENT(
        "p",
        `langValue${i + 1}`,
        "lang-value",
        projectLanguage,
        data[i]["language"]["en"]
      );

      CRT_langValue.createElement();

      const langValue = CRT_langValue.getCreatedElement();

      langValue.dataset.lang = `pLangValue${i + 1}`;

      languages.arabic[`pLangValue${i + 1}`] = data[i]["language"]["ar"];

      const CRT_projectsource = new ELEMENT(
        "div",
        `projectSource${i + 1}`,
        "project-source detail",
        projectInfo
      );

      CRT_projectsource.createElement();

      const projectsource = CRT_projectsource.getCreatedElement();

      const CRT_sourceTitle = new ELEMENT(
        "p",
        `sourceTitle${i + 1}`,
        "source-title",
        projectsource,
        "Idea Source :",
        projectDataStyle
      );

      CRT_sourceTitle.createElement();

      const sourceTitle = CRT_sourceTitle.getCreatedElement();

      sourceTitle.dataset.lang = "pSrcTitleText";

      const CRT_sourceValue = new ELEMENT(
        "p",
        `sourceValue${i + 1}`,
        "source-value",
        projectsource,
        data[i]["source"]["en"]
      );

      CRT_sourceValue.createElement();

      const sourceValue = CRT_sourceValue.getCreatedElement();

      sourceValue.dataset.lang = `pSrcValue${i + 1}`;

      languages.arabic[`pSrcValue${i + 1}`] = data[i]["source"]["ar"];

      // Create Reteing System

      let retingStars = `<i class="fa-solid fa-star fa-xs" style="color:var(--secoundary-color);"></i>`;

      const CRT_projectRete = new ELEMENT(
        "div",
        "project-rete",
        "project-rete detail",
        projectInfo
      );

      CRT_projectRete.createElement();

      const projectRete = CRT_projectRete.getCreatedElement();

      const CRT_reteTitle = new ELEMENT(
        "p",
        `reteTitle${i + 1}`,
        "rete-title",
        projectRete,
        "Rate :",
        projectDataStyle
      );

      CRT_reteTitle.createElement();

      const reteTitle = CRT_reteTitle.getCreatedElement();

      reteTitle.dataset.lang = "pRateTitleText";

      const CRT_reteValue = new ELEMENT(
        "p",
        `reteValue${i + 1}`,
        "rete-value",
        projectRete,
        retingStars.repeat(data[i]["rate"]["from"]),
        `display:flex; gap:6px;`
      );

      CRT_reteValue.createElement();

      const reteValue = CRT_reteValue.getCreatedElement();

      [...reteValue.children].forEach((star, index) => {
        if (data[i]["rate"]["num"] <= index) {
          star;
        } else {
          star.style.cssText = projectDataStyle;
        }
      });

      [...reteValue.children].reverse();

      styleFile.innerHTML += `
       .project-card:nth-child(${i + 1}) p::-webkit-scrollbar-track {
      background-color: ${colorOpacity};
      }
       .project-card:nth-child(${i + 1}) p::-webkit-scrollbar-thumb {
       background-color: ${color};
      }`;

      const CRT_projectDiscription = new ELEMENT(
        "div",
        `projectDiscription${i + 1}`,
        "project-discription detail",
        projectInfo
      );

      CRT_projectDiscription.createElement();

      const projectDiscription = CRT_projectDiscription.getCreatedElement();

      const CRT_discTitle = new ELEMENT(
        "p",
        `discTitle${i + 1}`,
        "disc-title",
        projectDiscription,
        "Discription :",
        projectDataStyle
      );

      CRT_discTitle.createElement();

      const discTitle = CRT_discTitle.getCreatedElement();

      discTitle.dataset.lang = "pDiscTitleText";

      const CRT_discValue = new ELEMENT(
        "p",
        `discValue${i + 1}`,
        "disc-value content-scroller",
        projectDiscription,
        data[i]["description"]["en"]
      );

      CRT_discValue.createElement();

      const discValue = CRT_discValue.getCreatedElement();

      discValue.dataset.lang = `pDiscValue${i + 1}`;

      languages.arabic[`pDiscValue${i + 1}`] = data[i]["description"]["ar"];

      const CRT_projectVisiting = new ELEMENT(
        "span",
        `projectVisiting${i + 1}`,
        "project-visiting",
        projectCard
      );

      CRT_projectVisiting.createElement();

      const projectVisiting = CRT_projectVisiting.getCreatedElement();

      const CRT_visitLink = new ELEMENT(
        "a",
        `visitWeb${i + 1}`,
        "visit-link",
        projectVisiting,
        "Visit",
        `background-color: ${color};`
      );

      CRT_visitLink.createElement();

      const visitLink = CRT_visitLink.getCreatedElement();

      visitLink.href = data[i]["url"];

      visitLink.dataset.lang = "visitLinkText";

      responsiveCardsWithGrid(
        projectsBox,
        [...document.querySelectorAll(".project-card")].length,
        2,
        1,
        1
      );
    }
  } catch {
    console.error(error);
  }
}
RequestProjectsData("api/projects.json");

let filtersProjects = Array.from(document.querySelectorAll(`form div input`));

let cardPercent;

setTimeout(() => {
  let cardsWidth = parseInt(
    StylePackage(document.querySelector(".project-card")).width
  );

  let projectsBoxWidth = parseInt(StylePackage(projectsBox).width);

  cardPercent = parseInt(projectsBoxWidth / cardsWidth);
}, 400);

filtersProjects.forEach((fil) => {
  fil.addEventListener("click", (e) => {
    applyScrollingButtons(currentLanguge);

    setTimeout(() => {
      let columnsStyle = `repeat(${hideElementNumber(
        projectsBox
      )}, calc(100% / ${cardPercent}`;

      projectsBox.style.gridTemplateColumns = columnsStyle;
    }, 100);

    let filterType = fil.value.toLowerCase();

    console.log(filterType);

    projectsBox.scrollTo({ behavior: "smooth", left: "start" });

    let projectCards = [...document.querySelectorAll(".project-card")];

    if (filterType == "all") {
      projectCards.forEach((card) => {
        card.style.display = "flex";
      });
    } else {
      projectCards.forEach((card) => {
        if (card.dataset.type.toLowerCase() == filterType) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    }
  });
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

        // Add Opacity To Color

        // Initialize Style For Titles
        let socialTitlesStyle = `font-size:.85rem;
        color:${textColor}; text-shadow:0 0 20px ${color};`;

        const CRT_socialCard = new ELEMENT(
          "div",
          `socialCard-${i}`,
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
          `cardHead${i + 1}`,
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
          data[i]["appName"]["en"],
          `background-color:${color};`
        );
        CRT_cardTitle.createElement();

        const cardTitle = CRT_cardTitle.getCreatedElement();

        cardTitle.dataset.lang = `socialcardTitle${i + 1}`;

        languages.arabic[`socialcardTitle${i + 1}`] = data[i]["appName"]["ar"];

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
          Details_Info
        );

        CRT_people.createElement();

        const people = CRT_people.getCreatedElement();

        const CRT_peopleTitle = new ELEMENT(
          "span",
          `people-title-${i + 1}`,
          `people-title`,
          people,
          data[i]["people"]["type"]
        );

        CRT_peopleTitle.createElement();

        const peopleTitle = CRT_peopleTitle.getCreatedElement();

        // peopleTitle.setAttribute("data-lang", "people-title");

        peopleTitle.dataset.lang = `social${toCapitalize(
          peopleTitle.innerText
        )}Title`;

        const CRT_peopleValue = new ELEMENT(
          "span",
          `people-value-${i + 1}`,
          `people-value`,
          people,
          data[i]["people"][data[i]["people"]["type"]],
          socialTitlesStyle
        );

        CRT_peopleValue.createElement();

        const peopleValue = CRT_peopleValue.getCreatedElement();

        peopleValue.dataset.lang = `socialPeopleValue${i + 1}`;

        languages.arabic[`socialPeopleValue${i + 1}`] =
          data[i]["people"][data[i]["people"]["type"]];

        const CRT_posts = new ELEMENT("div", `posts`, "posts", Details_Info);

        CRT_posts.createElement();

        const posts = CRT_posts.getCreatedElement();

        const CRT_postsTitle = new ELEMENT(
          "span",
          `posts-title-${i + 1}`,
          `posts-title`,
          posts,
          "Posts"
        );

        CRT_postsTitle.createElement();

        const posts_title = CRT_postsTitle.getCreatedElement();

        posts_title.dataset.lang = "socialPostsTitle";

        const CRT_postsValue = new ELEMENT(
          "span",
          `posts-value-${i + 1}`,
          `posts-value`,
          posts,
          data[i]["posts"]["en"],
          socialTitlesStyle
        );

        CRT_postsValue.createElement();

        const posts_value = CRT_postsValue.getCreatedElement();

        posts_value.dataset.lang = `socialPosts${i + 1}`;

        languages.arabic[`socialPosts${i + 1}`] = data[i]["posts"]["ar"];

        const CRT_userName = new ELEMENT(
          "div",
          `user-name-${i}`,
          "user-name",
          Details_Info
        );

        CRT_userName.createElement();

        const userName = CRT_userName.getCreatedElement();

        const CRT_userNameTitle = new ELEMENT(
          "span",
          `un-title-${i + 1}`,
          `un-title`,
          userName,
          "User Name"
        );

        CRT_userNameTitle.createElement();

        const un_title = CRT_userNameTitle.getCreatedElement();

        un_title.dataset.lang = "socialUserNameTitle";

        const CRT_userNameValue = new ELEMENT(
          "span",
          `un-value-${i + 1}`,
          `un-value`,
          userName,
          data[i]["userName"],
          socialTitlesStyle
        );

        CRT_userNameValue.createElement();

        const un_value = CRT_userNameValue.getCreatedElement();

        const CRT_Content = new ELEMENT(
          "div",
          "content",
          "content",
          Details_Info
        );

        CRT_Content.createElement();

        const content = CRT_Content.getCreatedElement();

        const CRT_contentTitle = new ELEMENT(
          "span",
          `content-title-${i + 1}`,
          `content-title`,
          content,
          "Content"
        );

        CRT_contentTitle.createElement();

        const contentTitle = CRT_contentTitle.getCreatedElement();

        contentTitle.dataset.lang = "socialContentTitle";

        const CRT_contentValue = new ELEMENT(
          "span",
          `content-value-${i + 1}`,
          `content-value`,
          content,
          data[i]["content"]["en"],
          socialTitlesStyle
        );

        CRT_contentValue.createElement();

        const contentValue = CRT_contentValue.getCreatedElement();

        contentValue.dataset.lang = `socialContent${i + 1}`;

        languages.arabic[`socialContent${i + 1}`] = data[i]["content"]["ar"];

        // Initialize Visiting Button

        const CRT_Visiting = new ELEMENT(
          "span",
          `socialVisiting${i + 1}`,
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
      socialMediaBox.style.gridTemplateColumns = `repeat(${numberOfCards}, calc(100% / 4 )`;
    }

    responsiveCardsWithGrid(
      socialMediaBox,
      document.querySelectorAll(".social-card").length,
      3,
      2,
      1
    );
  } catch {
    console.error(error);
  }
}
RequestSocialMediaData("api/social-media.json");

// Apply Function

// Contact Us Section

let sendMassageBtn = document.getElementById("send-massage"),
  nameInput = document.getElementById("name"),
  emailInput = document.getElementById("email"),
  massageArea = document.getElementById("massage-area"),
  contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
function sendEmail() {
  let params = {
    from_name: nameInput.value,
    email_id: emailInput.value,
    massege: massageArea.value,
  };

  let sendMassageDone = "Massege Sended";

  let sendMassageHasError = "Error sending email.";

  if (currentLanguge != "arabic") {
    sendMassageDone = sendMassageDone;

    sendMassageHasError = sendMassageHasError;
  } else {
    sendMassageDone = "تم إرسال الرسالة";

    sendMassageHasError = "خطأ في إرسال البريد الإلكتروني.";
  }
  emailjs
    .send("service_ye55eu7", "template_og68n3e", params)
    .then((res) => {
      massege(sendMassageDone); // Corrected function name
      emailInput.value = "";
      nameInput.value = "";
      massageArea.value = "";
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      massege(sendMassageHasError); // You can handle errors in the 'catch' block
    });
}

let contactUsPopupsBox = document.getElementById("contact-popups-box");

contactUsPopupsBox.style.height = contactUsPopupsBox.clientWidth + "px";

setTimeout(() => {}, 1412);
let responsiveStyle = document.createElement("style");

responsiveStyle.id = "respownsive-JS";

HEAD.appendChild(responsiveStyle);

// About Section

function getAge(YourDate, stringLang) {
  let date = new Date(YourDate);

  let curruntDate = new Date(Date.now());

  let milliSecoundAge = new Date(curruntDate - date).getTime();

  let withYearsAge = new Date(milliSecoundAge).getFullYear() - 1970;

  let currentMonths = curruntDate.getMonth();

  let myDateMonths = date.getMonth() + 1;

  let withMonthsAge = 12 - myDateMonths + currentMonths;

  let monthsAbbreviated = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let setDaysToSuitableMonth = (numberOfMonth) => {
    let thisDays;

    let month = monthsAbbreviated[numberOfMonth];

    if (
      month == "Jan" ||
      month == "Mar" ||
      month == "May" ||
      month == "Jul" ||
      month == "Aug" ||
      month == "Oct" ||
      month == "Dec"
    ) {
      thisDays = 31;
    } else if (month == "Feb") {
      thisDays = 28;
    } else {
      thisDays = 30;
    }
    return thisDays;
  };

  let currentDays = curruntDate.getDate();

  let myDataDays = date.getDate();

  let withDaysAge =
    setDaysToSuitableMonth(curruntDate.getMonth()) - myDataDays + currentDays;
  return stringLang == "en"
    ? `My Age Is : '${withYearsAge} Years And ${withMonthsAge} Months And ${withDaysAge} Days'`
    : "ar"
    ? `عمري ${toArabicNumber(withYearsAge)} سنة و ${toArabicNumber(
        withMonthsAge
      )} أشهر و ${toArabicNumber(withDaysAge)} أيام`
    : false;
}

let ageLabel = document.getElementById("my-age-about");

ageLabel.innerText = getAge("06/22/2006", "en");
languages.arabic.age = getAge("06/22/2006", "ar");

// Get Exp Label

let expLabel = document.getElementById("my-exp-about");

// Start Calculation

function getExpYears() {
  let currentDate = new Date();

  let startingPointYear = new Date("05/29/2022");

  // let years = currentDate.getFullYear() - startingPointYear.getFullYear();
  let years = currentDate.getFullYear() - startingPointYear.getFullYear();

  let months;

  // العدد الكلي
  let allMonthsNumber = 12;

  let getPersent = (monthNumber) => {
    let num = monthNumber / allMonthsNumber;

    let parcent = num * 100;

    return parseInt(parcent);
  };

  // حساب النسبة

  if (startingPointYear.getMonth() < currentDate.getMonth()) {
    let monthNumber = startingPointYear.getMonth() - currentDate.getMonth();

    years -= 1;

    return +`${years}.${getPersent(-monthNumber)}`;
  } else {
    let monthNumber = currentDate.getMonth() - startingPointYear.getMonth();

    return `${years}.${getPersent(-monthNumber)}`;
  }
}

expLabel.innerHTML = getExpYears();

let skillsLabel = document.querySelector(".skills-container .about-skills");

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

if (animationArea.clientHeight > animationArea.clientWidth) {
  animationArea.style.width = animationArea.clientHeight + "px";
} else if (animationArea.clientWidth > animationArea.clientHeight) {
  animationArea.style.height = animationArea.clientWidth + "px";
}

function responsiveCardsWithGrid(
  target,
  cardsLength,
  max_1450,
  max_600,
  max_450
) {
  cardsLength = cardsLength;

  if (document_width <= 1450 && document_width > 600) {
    target.style.gridTemplateColumns = `repeat(${cardsLength},calc(100% / ${max_1450}) )`;
  } else if (document_width <= 600 && document_width > 450) {
    target.style.gridTemplateColumns = `repeat(${cardsLength},calc(100% / ${max_600} )`;
  } else if (document_width <= 450) {
    target.style.gridTemplateColumns = `repeat(${cardsLength},calc(100% / ${max_450} )`;
  }
}

// End Portfolio

function applyScrollingButtons(lang) {
  setTimeout(() => {
    let dir = "en";

    let next = "right";

    let prev = "left";

    next = "right";

    prev = "left";

    // -/-/-/-/-/-/-/-/-/-/-/

    scrollToRight(servicesContainer, servLeftBtn, servRightBtn);

    scrollToLeft(servicesContainer, servLeftBtn, servRightBtn);

    checking(servicesContainer, servLeftBtn, servRightBtn);
    // -/-/-/-/-/-/-/-/-/-/-/

    scrollToRight(projectsBox, portfolioPrevBtn, portfolioNextBtn);

    scrollToLeft(projectsBox, portfolioPrevBtn, portfolioNextBtn);

    checking(projectsBox, portfolioPrevBtn, portfolioNextBtn);

    // -/-/-/-/-/-/-/-/-/-/-/

    scrollToRight(socialMediaBox, socialPrevBtn, socialNextBtn);

    scrollToLeft(socialMediaBox, socialPrevBtn, socialNextBtn);

    checking(socialMediaBox, socialPrevBtn, socialNextBtn);

    if (lang == "english") {
    } else if (lang == "arabic") {
    }
  }, 500);
}

applyScrollingButtons(currentLanguge);

// Start Road Map

let roadMapContainer = document.querySelector(".road-map-container");

let roadMapHead = document.querySelector(".road-map-header");

let roadMapContentBox = document.querySelector(
  ".road-map-container .content-box"
);

let roadMapContentHeight =
  roadMapContentBox.parentNode.clientHeight -
  (roadMapHead.clientHeight +
    parseInt(StylePackage(document.querySelector(".section-head")).marginTop) +
    0) +
  "px";

if (isMobile()) {
  roadMapContentBox.style.transform = "translate(0,0)";

  roadMapContentBox.style.position = "static";

  roadMapContentBox.style.left = "0";

  roadMapContentBox.style.height = `calc(100% - ${
    document.querySelector(".road-map-container .header-title").clientHeight +
    20
  }px)`;
} else {
  roadMapContentBox.style.top = "55%";
}

let h_road = [...document.querySelectorAll(".h-road")];

let v_road = [...document.querySelectorAll(".v-road")];

// let elementsNums = parseInt(road.clientHeight / 100);

h_road.forEach((road) => {
  let elementsNums = parseInt(road.clientWidth / 35);

  for (let i = 0; i < elementsNums; i++) {
    // road.innerHTML += `<span class="h-line"></span>`;

    let span = document.createElement("span");

    span.classList.add("h-line");

    road.prepend(span);
  }
});
v_road.forEach((road) => {
  let elementsNums = parseInt(road.clientHeight / 35);

  for (let i = 0; i < elementsNums; i++) {
    let span = document.createElement("span");

    span.classList.add("v-line");

    road.prepend(span);
  }
});

let showRmBtn = document.querySelector(".show-rm");

let controlCarBtn = document.querySelector(".control-rm");

let coverRm = document.querySelector(".rm-cover");

let opacityLower = (ele) => {
  ele.style.opacity = "0";

  setTimeout(() => {
    ele.remove();
  }, 300);
};

function checkRoadMapStatus() {
  let buttons = document.querySelector(".buttons-layer");

  if (buttons.classList.contains("buttons-opacity-show")) {
    buttons.classList.remove("buttons-opacity-show");
    buttons.classList.add("buttons-opacity-hide");
  } else {
    buttons.classList.remove("buttons-opacity-hide");
    buttons.classList.add("buttons-opacity-show");
  }
}

function minmizeRoadMapButtons() {
  let btnsContainer = document.querySelector(".buttons-layer");

  btnsContainer.classList.remove("center-buttons");

  btnsContainer.classList.add("side-buttons");

  showRmBtn.innerHTML = '<i class="fa-regular fa-eye"></i>';

  controlCarBtn.innerHTML = '<i class="fa-solid fa-car"></i>';

  if (!document.querySelector(".reset-car")) {
    let CRT_resetCar = new ELEMENT(
      "span",
      "reset-car",
      "reset-car",
      btnsContainer,
      `<i class="fa-solid fa-rotate"></i>`
    );

    CRT_resetCar.createElement();

    let resetCar = CRT_resetCar.getCreatedElement();

    resetCar.classList.add("rm-btns");

    resetCar.addEventListener("click", () => defaultPostionOfCar());

    Array.from(btnsContainer.children).forEach((ele) =>
      ele.removeAttribute("data-lang")
    );
  }
}

showRmBtn.addEventListener("click", () => {
  opacityLower(coverRm);

  StylePackage(car).display != "none"
    ? (car.style.display = "none")
    : console.log("its Hide");

  minmizeRoadMapButtons();
  checkRoadMapStatus();
});

controlCarBtn.addEventListener("click", () => {
  opacityLower(coverRm);

  minmizeRoadMapButtons();

  startControl();

  checkRoadMapStatus();

  if (
    !document
      .querySelector(".buttons-layer")
      .classList.contains("buttons-opacity-show")
  ) {
    checkRoadMapStatus();
  }
  StylePackage(car).display != "block"
    ? (car.style.display = "block")
    : console.log("its Show");
});

let car = document.querySelector(".car");

function toUp(target) {
  target.style.top = `${target.offsetTop - 30}px`;

  target.style.transform = "rotate(270deg)";
}

function toDown(target) {
  target.style.top = `${target.offsetTop + 30}px`;

  target.style.transform = "rotate(90deg)";
}

function toRight(target) {
  target.style.left = `${target.offsetLeft + 30}px`;

  target.style.transform = "rotate(0deg)";
}

function toLeft(target) {
  target.style.left = `${target.offsetLeft - 30}px`;

  target.style.transform = "rotate(180deg)";
}

function createMobileButtons() {
  if (document.querySelector(`.remote-control`) == undefined) {
    let remoteControlContainer = document.createElement("div");

    remoteControlContainer.classList.add("remote-control");

    let Y_Axis_Buttons = document.createElement("div");

    Y_Axis_Buttons.classList.add("y-area");

    let To_Top_Button = document.createElement("span");

    To_Top_Button.classList.add("to-top", "c-btn");

    Y_Axis_Buttons.prepend(To_Top_Button);

    let To_Bottom_Button = document.createElement("span");

    To_Bottom_Button.classList.add("to-bottom", "c-btn");

    Y_Axis_Buttons.appendChild(To_Bottom_Button);

    remoteControlContainer.appendChild(Y_Axis_Buttons);

    // Make Right And Left Buttons

    let X_Axis_Buttons = document.createElement("div");

    X_Axis_Buttons.classList.add("x-area");

    let To_Left_Button = document.createElement("span");

    To_Left_Button.classList.add("to-left", "c-btn");

    X_Axis_Buttons.prepend(To_Left_Button);

    let To_Right_Button = document.createElement("span");

    To_Right_Button.classList.add("to-right", "c-btn");

    X_Axis_Buttons.appendChild(To_Right_Button);

    remoteControlContainer.appendChild(X_Axis_Buttons);

    roadMapContainer.appendChild(remoteControlContainer);

    remoteControlContainer.style.width = roadMapContentBox.clientWidth + "px";
  }

  document.querySelectorAll(".c-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.style.animation = "clicked 0.5s 1 linear";

      setTimeout(() => {
        btn.style.animation = "";
      }, 500);
    });
  });
}

function contentBoxPosition() {
  let remoteHeight = document.querySelector(".remote-control").clientHeight;

  roadMapContentBox.style.height =
    roadMapContainer.clientHeight -
    (remoteHeight + 30 + roadMapHead.clientHeight + 50) +
    "px";

  let roadMapTitle = document.querySelector(
    ".road-map-container .content-box h4"
  );

  roadMapTitle.style.top = "45.5%";
}

function applyMobileButtons(car) {
  let controlMassege = "Control With Buttons";

  let aboutCarMassege =
    "Don't look at driving a car, I added it to implement an idea I had in mind";
  if (currentLanguge != "arabic") {
    controlMassege = controlMassege;

    aboutCarMassege = aboutCarMassege;
  } else {
    controlMassege = " التحكم بالأزرار";
    aboutCarMassege =
      "لا تنظر إلى قيادة السيارة، لقد أضفتها لتنفيذ فكرة كانت في ذهني";
  }

  let up = document.querySelector(".to-top");

  let down = document.querySelector(".to-bottom");

  let right = document.querySelector(".to-right");

  let left = document.querySelector(".to-left");

  let setMainColor = (btn) => {
    btn.style.backgroundColor = "var(--main-color)";

    btn.style.border = "none";
  };

  let setEffectColor = (btn) => {
    btn.style.backgroundColor = "var(--secondary-color)";

    btn.style.border = "1px solid var(--main-color)";
  };

  up.addEventListener("click", () => toUp(car));

  HOLDER.onHold(
    up,
    () => {
      toUp(car);

      setEffectColor(up);
    },
    () => {
      setMainColor(up);
    }
  );

  down.addEventListener("click", () => toDown(car));

  HOLDER.onHold(
    down,
    () => {
      toDown(car);
      setEffectColor(down);
    },
    () => {
      setMainColor(down);
    }
  );
  right.addEventListener("click", () => toRight(car));

  HOLDER.onHold(
    right,
    () => {
      {
        toRight(car);

        setEffectColor(right);
      }
    },
    () => {
      setMainColor(right);
    }
  );

  left.addEventListener("click", () => toLeft(car));

  HOLDER.onHold(
    left,
    () => {
      toLeft(car);
      setEffectColor(left);
    },
    () => {
      setMainColor(left);
    }
  );

  massege(controlMassege);

  setTimeout(() => {
    massege(aboutCarMassege, 7);
  }, 5000);
}

let startControl = () => {
  car.style.display = "block";

  defaultPostionOfCar();

  if (isMobile()) {
    // Make Top And Bottom Buttons

    createMobileButtons();

    applyMobileButtons(car);

    contentBoxPosition();
  } else {
    applyKeyboardButtons(car);
  }
};

function defaultPostionOfCar() {
  let startRoad = document.querySelector(".start-road-h");

  let calculation = startRoad.getFullHeight() - car.getFullHeight();
  if (startRoad.getFullHeight() > car.getFullHeight()) {
    car.style.top = `calc(${startRoad.offsetTop}px + ${calculation / 2}px`;
  } else {
    car.style.top = `${startRoad.offsetTop}px `;
  }

  car.style.left = "5px";

  car.style.transform = "rotete(0deg) ";
}

function applyKeyboardButtons() {
  document.addEventListener("keydown", (press) => {
    if (control) {
      switch (press.key) {
        case "w":
          toUp(car);
          break;
        case "W":
          toUp(car);
          break;
        case "s":
          toDown(car);
          break;
        case "S":
          toDown(car);
          break;
        case "d":
          toRight(car);
          break;
        case "D":
          toRight(car);
          break;
        case "a":
          toLeft(car);
          break;
        case "A":
          toLeft(car);
          break;
        default:
          console.log("sse");
      }
    }
  });
}

// End Road Map

// Start Footer

const footerSkills = document.querySelector(
  "footer .text-area .herizontal-text .skills .skills-container"
);

const footerLanguages = document.querySelector(
  "footer .text-area .herizontal-text .language .languages-container"
);

const footerSoftSkills = document.querySelector(
  "footer .text-area .herizontal-text .s-skills .s-skills-container"
);

let skillsText = document.createTextNode(skillsArray.join(" , "));

footerSkills.appendChild(skillsText);

const languagesArray = ["Arabic", "English", "Turkish"];

let languagesText = document.createTextNode(languagesArray.join(" , "));

footerLanguages.appendChild(languagesText);

let softSkillsArray = [
  "Problem Solving",
  "Speed Typing",
  "critical thinking",
  "time management",
  "Flexibility and adaptability",
  "Continuous learning",
  "Teamwork",
  "Effective Communication",
];

let softSkillsText = document.createTextNode(softSkillsArray.join(" , "));

footerSoftSkills.appendChild(softSkillsText);

arabicSSkills = [
  "حل المشكلات",
  "الكتابة السريعة",
  "التفكير النقدي",
  "إدارة الوقت",
  "المرونة والتكيف",
  "التعلم المستمر",
  "العمل الجماعي",
  "الاتصال الفعّال",
];

const servicesList = document.querySelector(
  "footer .text-area .vertical-text .services .services-container"
);

const sectionsList = document.querySelector(
  "footer .text-area .vertical-text .sections .sections-container"
);

let servicesArrayEn = [];

let servicesArrayAr = [];

function setUnifiedWidth() {
  let footerRowsTitles = document.querySelectorAll(
    ".herizontal-text > div p.title"
  );
  let footerRowsTitlesWidths = [];

  footerRowsTitles.forEach((ele) => {
    footerRowsTitlesWidths.push(ele.clientWidth);

    ele.style.width =
      footerRowsTitlesWidths.reduce((a, c) => (a > c ? a : c)) + "px";
  });
}

document.getElementById(
  "copyright"
).innerHTML = `&copy <span class='name'>Abdalrahman Aldabbas</span> <span class='date'>${new Date(
  Date.now()
).getFullYear()}</span> `;

// End Footer

// Function For Menu & Popups

function close() {
  document.querySelectorAll(".select").forEach((e) => {
    e.style.right = "-500%";
  });
}
// 5313 8940 5050 0245
// Check If The Dvice Mobile Or PC

function isMobile() {
  return (
    window.navigator.maxTouchPoints > 0 ||
    /(Android|Iphone)/gi.test(window.navigator.userAgent)
  );
}

function toCapitalize(word) {
  return `${word.substr(0, 1).toUpperCase()}${word
    .toLowerCase()
    .substr(-word.length + 1)}`;
}

//  Functions For Btns

function scrollToLeft(parent, L_Btn, R_Btn) {
  L_Btn.addEventListener("click", () => {
    let items = [...parent.children];

    parent.scrollTo({
      behavior: "smooth",
      left: parent.scrollLeft - items[0].getFullWidth(),
    });

    parent.addEventListener("scroll", () => {
      let checker = setInterval(() => {
        checking(parent, L_Btn, R_Btn);
      }, 300);

      parent.addEventListener("scrollend", () => {
        clearInterval(checker);
      });
    });
  });
}

function scrollToRight(parent, L_Btn, R_Btn) {
  R_Btn.addEventListener("click", () => {
    let items = [...parent.children];

    parent.scrollTo({
      behavior: "smooth",
      left: parent.scrollLeft + items[0].getFullWidth(),
    });

    parent.addEventListener("scroll", () => {
      let checker = setInterval(() => {
        checking(parent, L_Btn, R_Btn);
      }, 300);

      parent.addEventListener("scrollend", () => {
        clearInterval(checker);
      });
    });

    checking(parent, L_Btn, R_Btn);
  });
}

function checking(parent, L_Btn, R_Btn) {
  let scrollLeft = parent.scrollLeft;

  let fullWidth = parent.scrollWidth;

  let clientWidth = parent.clientWidth;

  let mestakeMargin = 15;

  let endedScrolling;

  if (scrollLeft < 0) {
    endedScrolling = -scrollLeft + clientWidth;
  } else {
    endedScrolling = scrollLeft + clientWidth;
  }

  if (currentLanguge != "arabic") {
    if (scrollLeft < mestakeMargin) {
      L_Btn.style.display = "none";
    } else {
      L_Btn.style.display = "flex";
    }
  } else if (currentLanguge == "arabic") {
    if (scrollLeft > -mestakeMargin) {
      R_Btn.style.display = "none";
    } else {
      R_Btn.style.display = "flex";
    }
  }
  if (endedScrolling > fullWidth - 20) {
    currentLanguge == "arabic"
      ? (L_Btn.style.display = "none")
      : (R_Btn.style.display = "none");
  } else {
    currentLanguge == "arabic"
      ? (L_Btn.style.display = "flex")
      : (R_Btn.style.display = "flex");
  }
}

// Functions For themes Or Other Actions

function checkBoolean(list, value, number) {
  if (list.length == number && list.every((e) => e >= value)) {
    return true;
  } else {
    return false;
  }
}

// Initialize Englisk Language Object

function initializeEnglishLanguageObject() {
  document.querySelectorAll("*").forEach((ele) => {
    if (ele.getAttribute("data-lang")) {
      languages.english[ele.getAttribute("data-lang")] = ele.innerHTML;
    }

    if (ele.getAttribute("data-lang-placeholder"))
      languages.english[ele.getAttribute("data-lang-placeholder")] =
        ele.placeholder;

    if (ele.dataset.content) {
      languages.english[ele.dataset.lang] = ele.dataset.content;
    }
  });
}

function AR_Action() {
  createButtonAction(
    changeThemeContainer,
    changeTheme,
    colorName,
    applyTheme,
    `تم تغيير الثمة الى اللون `
  );

  createButtonAction(
    languagesContainer,
    changeLanguageBtn,
    languageNames,
    applyLanguage,
    "تم تغيير اللغة الى"
  );

  createButtonAction(
    selectDownloadContainer,
    selectFileBtn,
    fileNames,
    test,
    "جار تنزيل"
  );

  createButtonAction(infoContainer, infoBtn, infoNames, test, "اظهار");

  createButtonAction(menuContainer, menu, tapNames, test, "الذهاب الى");
}

function EN_action() {
  createButtonAction(
    changeThemeContainer,
    changeTheme,
    colorName,
    applyTheme,
    "Theme Changed To"
  );

  createButtonAction(
    languagesContainer,
    changeLanguageBtn,
    languageNames,
    applyLanguage,
    "language Changed To"
  );

  createButtonAction(
    selectDownloadContainer,
    selectFileBtn,
    fileNames,
    test,
    "Downloading File"
  );

  createButtonAction(infoContainer, infoBtn, infoNames, test, "Show");

  createButtonAction(menuContainer, menu, tapNames, test, "Going To");
}

function applyLanguage(lang) {
  localStorage.setItem("language", lang);

  currentLanguge = localStorage.getItem("language");

  let changeDirection = (direction) => {
    let changeElementDirection = document.querySelectorAll(".l-change");

    if (direction == "rtl") {
      document.body.style.direction = "rtl";

      changeElementDirection.forEach((ele) => {
        ele.classList.remove("dir-lang-en");
        ele.classList.add("dir-lang-ar");
      });

      applyScrollingButtons("arabic");
    } else if (direction == "ltr") {
      document.body.style.direction = "ltr";

      changeElementDirection.forEach((ele) => {
        ele.classList.remove("dir-lang-ar");
        ele.classList.add("dir-lang-en");
      });

      applyScrollingButtons("english");
    }
  };

  languages.english.sectionsTitleArray = ["Landing"];

  let sectionsTitle = document
    .querySelectorAll(".section-title")
    .forEach((e) => languages.english.sectionsTitleArray.push(e.innerText));

  languages[currentLanguge].sectionsTitleArray.forEach((e, i) => {
    let CRT_SectionItem = new ELEMENT("li", "s" + i, "", sectionsList, e);

    CRT_SectionItem.createElement();

    let sectionItem = CRT_SectionItem.getCreatedElement();
  });

  // let currentLang = سشيصيسشصيسشصيشسيصيس صثتق شسيصسشصيسي صwindow.localStorage.getItem("language");

  if (lang == "arabic") {
    // let arabicFont = '"Cairo", sans-serif';

    let arabicFont = '"Alexandria", sans-serif';

    changeDirection("rtl");

    document.body.style.fontFamily = arabicFont;

    document.querySelectorAll("*").forEach((ele) => {
      if (ele.getAttribute("data-lang")) {
        ele.innerHTML = languages["arabic"][ele.getAttribute("data-lang")];
      }

      if (ele.getAttribute("data-lang-placeholder"))
        ele.placeholder =
          languages["arabic"][ele.getAttribute("data-lang-placeholder")];

      if (ele.dataset.content) {
        ele.dataset.content = languages.arabic[ele.dataset.lang];
      }

      let fontSize = parseInt(StylePackage(ele).fontSize);

      if (fontSize < 12) {
        ele.style.fontSize = "13px";
      }
    });

    styleFile.innerHTML += `
    ::placeholder,
    button,textarea,span,.massege-box{
      font-family:${arabicFont};
      font-size:0.8rem;
      letter-spaceing
    }
    `;

    navgationBar.classList.remove("navigation-english");
    navgationBar.classList.add("navigation-arabic");

    setInFullyRight(navgationBar);

    showIcons.addEventListener("click", () => {
      let navigationLinks = showIcons.parentNode;

      let position = parseInt(StylePackage(navigationLinks).right);

      position < 0
        ? setInFullyRight(navigationLinks, 1)
        : setInFullyRight(navigationLinks, 0);
    });
  }

  if (lang == "english") {
    console.log("oright the language is : english");

    changeDirection("ltr");

    document.body.style.fontFamily = '"Anta", sans-serif';

    document.querySelectorAll("*").forEach((ele) => {
      if (ele.getAttribute("data-lang")) {
        ele.innerHTML = languages["english"][ele.getAttribute("data-lang")];
      }

      if (ele.getAttribute("data-lang-placeholder"))
        ele.placeholder =
          languages["english"][ele.getAttribute("data-lang-placeholder")];

      if (ele.dataset.content) {
        ele.dataset.content = languages.english[ele.dataset.lang];
      }

      if (ele.dataset.action) {
        ele.dataset.content = languages.english[ele.dataset.lang];
      }

      let fontSize = parseInt(StylePackage(ele).fontSize);

      if (fontSize < 12) {
        ele.style.fontSize = "13px";
      }
    });

    navgationBar.classList.remove("navigation-arabic");

    navgationBar.classList.add("navigation-english");

    navgationBar.style.left = "0";

    showIcons.addEventListener("click", () => {
      let navigationLinks = showIcons.parentNode;

      let position = parseInt(StylePackage(navigationLinks).left);

      position < 0
        ? (navigationLinks.style.left = "0px")
        : (navigationLinks.style.left =
            "-" + navigationLinks.clientWidth + "px");
    });
  }
}

function setInFullyRight(ele, position) {
  let size = ele.getFullWidth();

  return position == 0
    ? (ele.style.left = `100%`)
    : (ele.style.left = `calc(100% - ${size}px)`);
}

function applyTheme(color) {
  BODY.style.backgroundImage = `url(./imgs/backgrounds/Background_${color}.png)`;
  localStorage.setItem("theme", color);
  switch (color) {
    case "red":
      themeStyleFile.innerHTML = `:root {
--main-color: #ff0000;
    --secondary-color: #e7c3c3;
    --background-main-color: #ff000038;
    --background-white-color: #e7c3c37e;
    --background-color: #000f18;
}`;
      break;
    case "blue":
      themeStyleFile.innerHTML = `:root {
  --main-color: #186ca4;
  --secondary-color: #fff;
  --background-main-color: rgba(30, 56, 103, 0.7);
  --background-white-color: rgba(255, 255, 255, 0.7);
  --background-color: #000f18;
}`;
      break;
    case "green":
      themeStyleFile.innerHTML = `
    :root {
  --main-color:#4caf50;
  --secondary-color:#b8f0ba;
  --background-main-color:#4caf505c;
  --background-white-color:#ffffff99;
  --background-color: #000f18;
}`;
      break;

    case "orange":
      themeStyleFile.innerHTML = `
    :root {
  --main-color: #ff9800;
  --secondary-color:#ffe2b6;
  --background-main-color:#ff980040;
  --background-white-color:#b7a488;
  --background-color: #000f18;
}`;
      break;
    case "purple":
      themeStyleFile.innerHTML = `
    :root {
  --main-color:#9c27b0;
  --secondary-color:#ba95c0;
  --background-main-color:#9c27b05c;
  --background-white-color:#d4abdb94;
  --background-color: #000f18;
}`;
      break;
  }
}

function hideElementNumber(parent) {
  let elements = Array.from(parent.children);

  return elements.filter((e) => StylePackage(e).display != "none").length;
}

function onOpenPopup(taps) {
  let count = 1;

  let add = setInterval(() => {
    console.log;
    if (taps[count].tagName.toLowerCase() == "li") {
      taps[count].style.position = "relative";

      taps[count].style.right = 0;

      count == taps.length - 1 ? clearInterval(add) : count++;
    } else {
      count++;
    }
  }, 120);
}

function exit(target) {
  target.style.right = "-200%";
}

HTMLElement.prototype.getFullWidth = function () {
  return (
    this.clientWidth +
    parseInt(StylePackage(this).marginRight) +
    parseInt(StylePackage(this).marginLeft) +
    parseInt(StylePackage(this).borderRightWidth) +
    parseInt(StylePackage(this).borderLeftWidth)
  );
};

HTMLElement.prototype.getFullHeight = function () {
  return (
    this.clientHeight +
    parseInt(StylePackage(this).marginTop) +
    parseInt(StylePackage(this).marginBottom) +
    parseInt(StylePackage(this).borderTopWidth) +
    parseInt(StylePackage(this).borderBottomWidth)
  );
};
function toArabicNumber(englishNumber) {
  let arNums = [
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
  ];

  let str = `${englishNumber}`;

  let newNumber = [];

  str.split("").forEach((e, i) => {
    typeof e == "number"
      ? newNumber.push(arNums[e])
      : e == "."
      ? newNumber.push(".")
      : "";
    newNumber.push(arNums[e]);
  });

  return newNumber.join("");
}
function navigationPosition() {
  navgationBar.offsetLeft >= 0
    ? (navgationBar.style.left = "-" + navgationBar.clientWidth + "px")
    : "";
}
function navigationPosition() {
  if (currentLanguge != "arabic") {
    navgationBar.offsetLeft >= 0
      ? (navgationBar.style.left = "-" + navgationBar.clientWidth + "px")
      : "";
  } else {
    navgationBar.offsetLeft <= document_width
      ? (navgationBar.style.left = "100%")
      : "";
  }
}

function downloadImage() {
  let imageSrc = "./imgs/logos/newLogo.jpg";

  let download_link = document.createElement("a");

  download_link.href = imageSrc;

  download_link.download = "cv_picture";

  download_link.click();
}

let names = [
  "oma",
  "front end developer",
  "youtuber",
  "pubger",
  "Alomawy Coder",
];

let nameCSS = document.createElement("style");

HEAD.appendChild(nameCSS);

let nameChangerCount = 0;
setInterval(() => {
  name(nameChangerCount);

  if (nameChangerCount < names.length) {
    nameChangerCount++;
  } else {
    nameChangerCount = 0;
  }
}, 6000);
let nameTag = document.querySelector(".logo-text");

function name(count) {
  nameTag.innerText = names[count];

  nameTag.style.animation = "";

  nameTag.style.width = "fit-content";

  let nameWidth = nameTag.clientWidth;

  let nameLength = nameTag.innerText.length;

  nameTag.style.width = "0px";

  nameCSS.innerHTML = `
  
@keyframes width-size {
0%,100% {
  width: 0;
}
40% {
  width: ${nameWidth}px;
}
60% {
  width: ${nameWidth}px;
}
}

`;

  nameTag.style.animation = `width-size 5s 1 steps(${nameLength}), blink 0.5s infinite`;
}
name(4);

function imagesParent() {
  return document.querySelectorAll("img").forEach((e) => {
    // let parentWidth = e.clientWidth;
    // let parentHieght = e.clientHeight;
    // e.style.width = parentWidth + "px";
    // e.style.height = parentHieght + "px";
    // console.log(parentHieght);
    // console.log(parentWidth);

    e.style.cssText = `max-width: 100%; max-height: 100%; background-size: contain; background-repeat: no-repeat; background-position: center;`;
  });
}
