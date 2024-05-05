const BODY = document.body,
  HEAD = document.head;
let StylePackage = (e) => window.getComputedStyle(e);
const styleFile = document.createElement("style");
styleFile.id = "main-style";
const changeAndTypingAnimationStylingFile = document.createElement("style");
changeAndTypingAnimationStylingFile.id = "name-change-animation-style";
const sectionTitle = document.querySelectorAll(".header-title");
let currentLanguge = localStorage.getItem("language");
sectionTitle.forEach((e, t) => {
  e.style.height =
    parseInt(
      StylePackage(document.querySelectorAll(".section-head")[t]).height
    ) +
    30 +
    "px";
}),
  (BODY.style.minHeight = "100vh");
const document_width = document.documentElement.clientWidth;
class HOLDER {
  constructor(e, t, a) {
    (this.target = e),
      (this.callbackHold = t),
      (this.callbackBlur = a),
      (this.isHeld = !1),
      (this.activeHoldTimeOutId = null),
      ["mousedown", "touchstart"].forEach((e) => {
        this.target.addEventListener(e, () => this._onHoldStart.bind(this)());
      }),
      ["mouseup", "mouseleave", "mouseout", "touchend", "touchcancel"].forEach(
        (e) => {
          this.target.addEventListener(e, () => this._onHoldEnd.bind(this)());
        }
      );
  }
  _onHoldStart() {
    (this.isHeld = !0),
      (this.activeHoldTimeOutId = setInterval(() => {
        this.isHeld && this.callbackHold();
      }, 100));
  }
  _onHoldEnd() {
    (this.isHeld = !1),
      clearTimeout(this.activeHoldTimeOutId),
      this.callbackBlur();
  }
  static onHold(e, t, a) {
    new HOLDER(e, t, a);
  }
}
class ELEMENT {
  constructor(e, t, a, n, o, l, r, i) {
    (this.type = e),
      (this.id = t),
      (this.classEle = a),
      (this.parent = n),
      (this.content = o),
      (this.style = l),
      (this.customStyle = r),
      (this.styleFile = i),
      (this.createdElement = null);
  }
  createElement() {
    const e = document.createElement(this.type);
    (e.id = this.id),
      (e.className = this.classEle),
      this.content && (e.innerHTML = this.content),
      this.parent.appendChild(e),
      (e.style.cssText = this.style),
      setTimeout(() => {
        this.customStyle && (this.styleFile.innerHTML += this.customStyle),
          this.styleFile && HEAD.appendChild(this.styleFile);
      }, 1),
      (this.createdElement = e);
  }
  getCreatedElement() {
    return this.createdElement;
  }
}
function addStyleToPseudoElement(e, t) {
  return setTimeout(() => {
    (t.innerHTML += e), HEAD.appendChild(styleFile);
  }, 1);
}
let languages = {
    arabic: {
      applicationTitle: "الموقع الشخصي للأموي",
      un_lock_explain:
        "قم بوضع موشر الفارة على المربع اناه حتى يتم الغاء قفل الموقع",
      webTitle: "عبدالرحمن الدباس",
      home: "الرئيسية",
      services: "الخدمات",
      portfolio: "المعرض",
      social_media: "التواصل الاجتماعي",
      contact_us: "اتصل بنا",
      about_us: "عنا",
      road_map: "خريطة التعلم",
      red: "أحمر",
      green: "أخضر",
      blue: "أزرق",
      orange: "برتقالي",
      purple: "بنفسجي",
      arabicLang: "العربية",
      englishLang: "الانجليزية",
      cv: "ملفي",
      code: '<a\n            href="https://github.com/ALOMAWY/alomawy.code.github.io/archive/refs/heads/master.zip"\n            rel="noopener noreferrer"\n          >الكود</a>',
      codeMassage: "الكود",
      news: "الجديد",
      seyHello: "السلام عليكم",
      aboutMeInfos:
        "<h2 class='sey-hello' data-lang='seyHello'>السلام عليكم</h2><p>مرحبا انا عبدالرحمن الدباس . أعمل  كمطور واجهات أمامية لمواقع الانترنت .أنا من سوريا دمشق . هذا موقع شخصي بسيط قمت بتطويره ب  'Java Script' . فقط</p> ",
      fullName: "عبدالرحمن الدباس",
      servicesTitle: "الخدمات",
      portfolioTitle: "المعرض",
      categoryAll: "الكل",
      categoryWebsites: "المواقع",
      categoryGames: "الألعاب",
      socialMediaTitle: "التواصل الاجتماعي",
      contactUsTitle: "تواصل معنا",
      contactUsName: "الاسم",
      contactUsPopup: "تواصل معنا",
      inputName: "الاسم",
      inputEmail: "البريد الالكتروني",
      textAreaPlaceholder: "اكتب رسالتك",
      sendMassage: "ارسل رسالتك",
      aboutTitle: "تفاصيل",
      fullNameText: '<i class="fa-solid fa-signature"></i> الاسم :',
      ageText: '<i class="fa-solid fa-heart-pulse"></i> العمر :',
      cWorkText: '<i class="fa-solid fa-briefcase"></i> العمل :',
      statusText: '<i class="fa-solid fa-diagram-project"></i> الحالة :',
      expText: '<i class="fa-solid fa-chart-simple"></i> الخبرة :',
      skills: "المهارات :",
      age: "العمر",
      cWork: "مطور واجهات أمامية",
      status: "متاح للعمل",
      exp: toArabicNumber(getExpYears("02/22/2022")),
      pDevTitleText: "المطور :",
      pTypeTitleText: "النوع :",
      pTechTitleText: "التقنيات :",
      pHostTitleText: "الاستضافة :",
      pLangTitleText: "اللغات :",
      pSrcTitleText: "مصدر الفكرة :",
      pRateTitleText: "التقييم :",
      pDiscTitleText: "الوصف :",
      visitLinkText: "زيارة",
      socialFollowersTitle: "المتابعين",
      socialFriendsTitle: "الأصدقاء",
      socialPostsTitle: "المنشورات",
      socialUserNameTitle: "اسم المستخدم",
      socialContentTitle: "المحتوى",
      roadMapTitle: "خريطة التعلم",
      showRm: "رؤية الخريطة",
      controlCar: "قيادة السيارة",
      mapTitle: "تطوير الواجهات الأمامية",
      skillsTitle: "المهارات :",
      languagesTitle: "اللغات :",
      sSkillsTitle: "المهارات الخارجية :",
      sectionTitle: "اللأقسام",
      linuxProgressNumber: "٠%",
      projectsTitle: " : المشاريع ",
      numberOfProjects: "٧",
      developerTitle: ": المطور",
      developerValue: "عبدالرحمن الدباس",
      sectionsListItems: [
        "الصفحة الرئيسية",
        "الخدمات",
        "المعرض",
        "التواصل الاجتماعي",
        "تواصل معنا",
        "تفاصيل",
        "خريطة التعلم",
      ],
      softSkills: [
        "حل المشكلات",
        "الكتابة السريعة",
        "التفكير النقدي",
        "إدارة الوقت",
        "المرونة والتكيف",
        "التعلم المستمر",
        "العمل الجماعي",
        "الاتصال الفعّال",
      ],
    },
    english: {},
  },
  arNums = [
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
function massege(e, t = 3) {
  if (document.querySelector(".massege-box")) {
    document.querySelector(".massege-box").remove();
    let a = document.createElement("div"),
      n = document.createTextNode(e);
    a.appendChild(n),
      a.classList.add("massege-box"),
      BODY.prepend(a),
      (a.style.animation = `${t}s ease-in-out 0s 1 normal backwards running msg`);
  } else {
    let a = document.createElement("div"),
      n = document.createTextNode(e);
    a.appendChild(n),
      a.classList.add("massege-box"),
      BODY.prepend(a),
      (a.style.animation = `${t}s ease-in-out 0s 1 normal backwards running msg`);
  }
  document
    .querySelector(".massege-box")
    .addEventListener("transitionend", () => {
      document.querySelector(".massege-box").remove();
    });
}
const mainContainer = document.getElementById("home");
let header = document.getElementById("header"),
  headerParent = header.parentNode;
function setHeaderParent() {
  document_width < 1100
    ? ((header.style.width = "100%"),
      (headerParent.style.height = StylePackage(header).height),
      (headerParent.style.paddingLeft = "0"),
      (headerParent.style.paddingRight = "0"),
      (headerParent.style.borderRadius = "0"),
      (header.style.padding = " 7px 15px "),
      parseInt(StylePackage(header).height) ==
        parseInt(StylePackage(header).height) &&
        setTimeout(() => {
          headerParent.style.height = StylePackage(header).height;
        }, 500))
    : ((header.style.width = headerParent.clientWidth + "px"),
      (headerParent.style.height = StylePackage(header).height),
      (headerParent.style.paddingLeft = StylePackage(header).paddingLeft),
      (headerParent.style.paddingRight = StylePackage(header).paddingRight),
      initializeEnglishLanguageObject());
}
let V_scroll = 0,
  control = !1;
window.addEventListener("scroll", () => {
  window.scrollY > parseInt(StylePackage(header).height) &&
    ((header.style.backgroundColor = "var(--background-main-color)"),
    (header.style.backdropFilter = "blur(10px)"),
    (header.style.boxShadow = "0 0 20px var(--main-color)"),
    (header.style.top = "-200px"),
    window.scrollY < V_scroll && (header.style.top = "0")),
    0 == window.scrollY &&
      ((header.style.top = "0"),
      (header.style.backgroundColor = "transparent"),
      (header.style.backdropFilter = "blur(0px)"),
      (header.style.boxShadow = "none"),
      (header.style.borderRadius = " 0 "));
  let e = window.scrollY,
    t = document.querySelector(".road-map-cover").offsetTop;
  control = t - 50 < e;
}),
  window.addEventListener("scrollend", (e) => {
    V_scroll = window.scrollY;
  });
let timeId,
  navgationBar = document.getElementsByTagName("nav")[0];
function startTimeOut() {
  timeId = setTimeout(() => {
    navigationPosition();
  }, 2e3);
}
function stopTimeOut(e) {
  clearTimeout(timeId);
}
function navChecker() {
  navgationBar.addEventListener("click", () => {
    0 != navgationBar.offsetLeft ? startTimeOut() : stopTimeOut();
  });
}
document_width < 800
  ? (navigationPosition(),
    document
      .querySelectorAll(".header-icon")
      .forEach((e) => e.addEventListener("click", () => navigationPosition())))
  : (navgationBar.remove(), header.appendChild(navgationBar));
let timer = setTimeout(() => {
  navigationPosition();
}, 2e3);
console.log(timer), navChecker();
let landing = document.querySelector(".landing-cover");
(landing.style.minHeight = `calc(100vh - ${parseInt(
  StylePackage(header).height
)}px)`),
  window.addEventListener("load", () => {
    localStorage.getItem("theme")
      ? applyTheme(localStorage.getItem("theme"))
      : applyTheme("blue");
    
    if (localStorage.getItem("enObject")) {
      
languages.english = JSON.parse(localStorage.getItem('enObject'))
    }
    else {
      initializeEnglishLanguageObject()
      
    }
    // localStorage.getItem("enObject") ?
        
      // languages.english = JSON.parse(localStorage.getItem("enObject")) :
      // initializeEnglishLanguageObject(),
      setHeaderParent(),
      assignNavigationLinksVariables(),
      appendMenuToHeader(),
      document_width < 800 && BODY.prepend(navgationBar),
      "arabic" != currentLanguge ? EN_action() : AR_Action(),
      applyScrollingButtons(currentLanguge),
      applyLanguage(currentLanguge || "english");
      document_width < 300 &&
        (roadMapContentBox.innerHTML = "Not Availabel Off Your Phone Size");
  });
let js_StyleFile = document.createElement("style");
(js_StyleFile.id = "js-file"), HEAD.appendChild(js_StyleFile);
let changeTheme,
  changeThemeContainer,
  colorName,
  changeLanguageBtn,
  languagesContainer,
  languageNames,
  selectFileBtn,
  selectDownloadContainer,
  fileNames,
  infoBtn,
  infoContainer,
  infoNames,
  menu,
  menuContainer,
  tapNames,
  showIcons,
  themeStyleFile = document.createElement("style");
function createButtonAction(e, t, a, n, o) {
  t.addEventListener("click", (t) => {
    close(), (e.style.right = "0"), onOpenPopup(Array.from(e.children));
  }),
    a.forEach((e) => {
      let t = e.dataset.content;
      (e.innerHTML = t),
        e.addEventListener("click", () => {
          massege(`${o} '${e.innerText}'`),
            n(e.dataset.action),
            exit(languagesContainer);
        });
    });
}
function assignNavigationLinksVariables() {
  (changeTheme = document.getElementById("change-mode")),
    (changeThemeContainer = document.querySelector(".select-themes")),
    (colorName = Array.from(document.querySelectorAll(".theme-btn"))),
    (changeLanguageBtn = document.getElementById("change-language")),
    (languagesContainer = document.querySelector(".select-language")),
    (languageNames = Array.from(document.querySelectorAll(".lang-btn"))),
    (selectFileBtn = document.getElementById("download-btn")),
    (selectDownloadContainer = document.querySelector(".select-download")),
    (fileNames = Array.from(document.querySelectorAll(".d-btn"))),
    (infoBtn = document.getElementById("get-info")),
    (infoContainer = document.querySelector(".select-info")),
    (infoNames = Array.from(document.querySelectorAll(".info-btn"))),
    (menu = document.getElementById("menu-btn")),
    (menuContainer = document.querySelector(".taps")),
    (tapNames = Array.from(document.querySelectorAll(".section-btn"))),
    (showIcons = document.querySelector(".show-icons"));
}
(themeStyleFile.id = "theme-js"),
  HEAD.appendChild(themeStyleFile),
  document
    .querySelectorAll(".close-btn")
    .forEach((e) => e.addEventListener("click", () => close()));
let test = (e) => {
  console.log(e);
};
function appendMenuToHeader() {
  document_width < 800 &&
    menu &&
    (menu.remove(),
    header.appendChild(menu),
    (menu.style.width = "40px"),
    (menu.style.height = "40px"),
    (menu.style.marginRight = "0"));
}
const menuRow = document.querySelector("menu-row"),
  firstRow = document.getElementById("menu-row-1"),
  secondaryRow = document.getElementById("menu-row-2"),
  lastRow = document.getElementById("menu-row-3"),
  menuTaps = document.querySelector(".taps");
async function requestServices() {
  try {
    let e = await fetch("api/services.json"),
      t = await e.json();
    t.forEach((e, a) => {
      const n = new ELEMENT(
        "div",
        `service-card-${a + 1}`,
        "service-card",
        document.querySelector(".services-body"),
        ""
      );
      n.createElement();
      const o = n.getCreatedElement(),
        l = new ELEMENT("span", "serv-icon", "serv-icon", o, e.icon);
      l.createElement(), l.getCreatedElement();
      const r = new ELEMENT(
        "h2",
        `servTitle${a + 1}`,
        "serv-title",
        o,
        e.service.en
      );
      r.createElement(),
        (r.getCreatedElement().dataset.lang = `servTitleValue${a + 1}`),
        (languages.arabic[`servTitleValue${a + 1}`] = e.service.ar);
      const i = new ELEMENT(
        "span",
        `servDisc${a + 1}`,
        "serv-disc",
        o,
        e.explain.en
      );
      i.createElement(),
        (i.getCreatedElement().dataset.lang = `servDiscValue${a + 1}`),
        (languages.arabic[`servDiscValue${a + 1}`] = e.explain.ar),
        servicesArrayAr.push(t[a].service.ar),
        servicesArrayEn.push(t[a].service.en);
    }),
      (languages.arabic.servicesArray = servicesArrayAr),
      (languages.english.servicesArray = servicesArrayEn),
      languages[currentLanguge.toLowerCase()].servicesArray.forEach((e, t) => {
        let a = new ELEMENT("li", "s" + t, "", servicesList, e);
        a.createElement(), a.getCreatedElement();
      });
  } catch (e) {}
}
requestServices();
let servLeftBtn = document.getElementById("serv-prev"),
  servRightBtn = document.getElementById("serv-next"),
  servicesContainer = document.querySelector(".services-body");
servicesContainer.clientWidth >= servicesContainer.scrollWidth &&
  ((servLeftBtn.style.display = "none"), (servRightBtn.style.display = "none"));
const projectsBox = document.getElementById("projects-box");
async function RequestProjectsData(e) {
  try {
    let t = await fetch(e),
      a = await t.json();
    projectsBox.style.gridTemplateColumns = `repeat(${
      a.length
    }, calc(100% / 3 - ${parseInt(StylePackage(projectsBox).gap)}px)`;
    for (let e = 0; e < a.length; e++) {
      let t = a[e].color;
      switch (t) {
        case "green":
          t = "#51ad24";
          break;
        case "purple":
          t = "#673AB7";
          break;
        case "orange":
          t = "#ff9800";
          break;
        case "blue":
          t = "#186ca4";
          break;
        case "skyblue":
          t = "#2196f3";
          break;
        case "red":
          t = "#ff5722";
      }
      let n = t + "20",
        o = `color:${t}; text-shadow:0 0 20px ${t};`;
      const l = new ELEMENT(
        "div",
        `project-${a[e].id.en}`,
        "project-card",
        projectsBox,
        "",
        `\n        border:1px solid ${t};\n        border-bottom:10px solid ${t};\n        background-color: ${n};\n        `,
        `\n       #project-${a[e].id.en}:hover{\n          box-shadow:-7px 0 0  ${t};\n        }`,
        styleFile
      );
      l.createElement();
      const r = l.getCreatedElement();
      (r.dataset.type = a[e].type.en),
        r.setAttribute("datatype", a[e].type.en.toLowerCase());
      const i = new ELEMENT("div", "card-head", "card-head", r, "");
      i.createElement();
      const s = i.getCreatedElement(),
        c = new ELEMENT("h3", `title-${e + 1}`, "title", s, a[e].name.en, o);
      c.createElement(),
        c
          .getCreatedElement()
          .setAttribute("data-lang", `projectCardTitle${e + 1}`),
        (languages.arabic[`projectCardTitle${e + 1}`] = a[e].name.ar);
      const d = new ELEMENT("p", "project-id", "project-id", s, a[e].id.en, o);
      d.createElement(),
        d
          .getCreatedElement()
          .setAttribute("data-lang", `projectCardId${e + 1}`),
        (languages.arabic[`projectCardId${e + 1}`] = a[e].id.ar);
      const g = new ELEMENT(
        "div",
        `cardImageParent${e}`,
        "card-image-parent",
        r
      );
      g.createElement();
      const u = g.getCreatedElement(),
        m = new ELEMENT(
          "img",
          `img-${e}`,
          "project-image",
          u,
          "",
          `border: 0.5px solid ${t}`
        );
      m.createElement();
      const p = m.getCreatedElement();
      p.setAttribute("loading", "lazy"),
        p.setAttribute("width", "60"),
        p.setAttribute("height", "auto"),
        p.setAttribute("alt", "project-landing-screen"),
        (p.src = a[e].picture);
      const h = new ELEMENT("div", "project-info", "project-info", r, "");
      h.createElement();
      const E = h.getCreatedElement(),
        y = new ELEMENT(
          "div",
          `project-developer-${e + 1}`,
          "project-developer detail",
          E
        );
      y.createElement();
      const f = y.getCreatedElement(),
        T = new ELEMENT(
          "p",
          `devTit-${e + 1}`,
          "devleoper-title",
          f,
          "Develeoper :",
          o
        );
      T.createElement(), (T.getCreatedElement().dataset.lang = "pDevTitleText");
      const v = new ELEMENT(
        "p",
        `devVal-${e + 1}`,
        "developer-value",
        f,
        a[e].developer.en
      );
      v.createElement(),
        (v.getCreatedElement().dataset.lang = `devVal${e + 1}`),
        (languages.arabic[`devVal${e + 1}`] = a[e].developer.ar);
      const b = new ELEMENT(
        "div",
        `programTitle${e}`,
        "program-title detail",
        E
      );
      b.createElement();
      const L = b.getCreatedElement(),
        w = new ELEMENT("p", `typeTitle${e + 1}`, "type-title", L, "Type :", o);
      w.createElement(),
        (w.getCreatedElement().dataset.lang = "pTypeTitleText");
      const x = new ELEMENT(
        "p",
        `typeValue${e + 1}`,
        "type-value",
        L,
        a[e].type.en
      );
      x.createElement(),
        (x.getCreatedElement().dataset.lang = `pTypeValue${e + 1}`),
        (languages.arabic[`pTypeValue${e + 1}`] = a[e].type.ar);
      const S = new ELEMENT(
        "div",
        `technolojes${e + 1}`,
        "technolojes detail",
        E
      );
      S.createElement();
      const C = S.getCreatedElement(),
        k = new ELEMENT(
          "p",
          `techTitle${e + 1}`,
          "tech-title",
          C,
          "Technolojes :",
          o
        );
      k.createElement(),
        (k.getCreatedElement().dataset.lang = "pTechTitleText");
      const B = new ELEMENT(
        "p",
        `techValue${e + 1}`,
        "tech-value",
        C,
        a[e].technologies
      );
      B.createElement(), B.getCreatedElement();
      const A = new ELEMENT(
        "div",
        `projectTech${e + 1}`,
        "project-hosting detail",
        E
      );
      A.createElement();
      const M = A.getCreatedElement(),
        $ = new ELEMENT(
          "p",
          `hostingTitle${e + 1}`,
          "hosting-title",
          M,
          "Hosting :",
          o
        );
      $.createElement(),
        ($.getCreatedElement().dataset.lang = "pHostTitleText");
      const N = new ELEMENT(
        "p",
        `hostingValue${e + 1}`,
        "hosting-value",
        M,
        a[e].hosting.en
      );
      N.createElement(),
        (N.getCreatedElement().dataset.lang = `pHostingValue${e + 1}`),
        (languages.arabic[`pHostingValue${e + 1}`] = a[e].hosting.ar);
      const I = new ELEMENT(
        "div",
        `projectLanguages${e + 1}`,
        "project-languages detail",
        E
      );
      I.createElement();
      const P = I.getCreatedElement(),
        H = new ELEMENT(
          "p",
          `langTitle${e + 1}`,
          "lang-title",
          P,
          "Languages :",
          o
        );
      H.createElement(),
        (H.getCreatedElement().dataset.lang = "pLangTitleText");
      const j = new ELEMENT(
        "p",
        `langValue${e + 1}`,
        "lang-value",
        P,
        a[e].language.en
      );
      j.createElement(),
        (j.getCreatedElement().dataset.lang = `pLangValue${e + 1}`),
        (languages.arabic[`pLangValue${e + 1}`] = a[e].language.ar);
      const q = new ELEMENT(
        "div",
        `projectSource${e + 1}`,
        "project-source detail",
        E
      );
      q.createElement();
      const D = q.getCreatedElement(),
        R = new ELEMENT(
          "p",
          `sourceTitle${e + 1}`,
          "source-title",
          D,
          "Idea Source :",
          o
        );
      R.createElement(), (R.getCreatedElement().dataset.lang = "pSrcTitleText");
      const F = new ELEMENT(
        "p",
        `sourceValue${e + 1}`,
        "source-value",
        D,
        a[e].source.en
      );
      F.createElement(),
        (F.getCreatedElement().dataset.lang = `pSrcValue${e + 1}`),
        (languages.arabic[`pSrcValue${e + 1}`] = a[e].source.ar);
      let _ =
        '<i class="fa-solid fa-star fa-xs" style="color:var(--secoundary-color);"></i>';
      const W = new ELEMENT("div", "project-rete", "project-rete detail", E);
      W.createElement();
      const V = W.getCreatedElement(),
        O = new ELEMENT("p", `reteTitle${e + 1}`, "rete-title", V, "Rate :", o);
      O.createElement(),
        (O.getCreatedElement().dataset.lang = "pRateTitleText");
      const z = new ELEMENT(
        "p",
        `reteValue${e + 1}`,
        "rete-value",
        V,
        _.repeat(a[e].rate.from),
        "display:flex; gap:6px;"
      );
      z.createElement();
      const Y = z.getCreatedElement();
      [...Y.children].forEach((t, n) => {
        a[e].rate.num <= n || (t.style.cssText = o);
      }),
        [...Y.children].reverse(),
        (styleFile.innerHTML += `\n       .project-card:nth-child(${
          e + 1
        }) p::-webkit-scrollbar-track {\n      background-color: ${n};\n      }\n       .project-card:nth-child(${
          e + 1
        }) p::-webkit-scrollbar-thumb {\n       background-color: ${t};\n      }`);
      const U = new ELEMENT(
        "div",
        `projectDiscription${e + 1}`,
        "project-discription detail",
        E
      );
      U.createElement();
      const J = U.getCreatedElement(),
        G = new ELEMENT(
          "p",
          `discTitle${e + 1}`,
          "disc-title",
          J,
          "Discription :",
          o
        );
      G.createElement(),
        (G.getCreatedElement().dataset.lang = "pDiscTitleText");
      const K = new ELEMENT(
        "p",
        `discValue${e + 1}`,
        "disc-value content-scroller",
        J,
        a[e].description.en
      );
      K.createElement(),
        (K.getCreatedElement().dataset.lang = `pDiscValue${e + 1}`),
        (languages.arabic[`pDiscValue${e + 1}`] = a[e].description.ar);
      const Q = new ELEMENT(
        "span",
        `projectVisiting${e + 1}`,
        "project-visiting",
        r
      );
      Q.createElement();
      const X = Q.getCreatedElement(),
        Z = new ELEMENT(
          "a",
          `visitWeb${e + 1}`,
          "visit-link",
          X,
          "Visit",
          `background-color: ${t};`
        );
      Z.createElement();
      const ee = Z.getCreatedElement();
      (ee.href = a[e].url),
        (ee.dataset.lang = "visitLinkText"),
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
let cardPercent,
  filtersProjects = Array.from(document.querySelectorAll("form div input"));
setTimeout(() => {
  let e = parseInt(StylePackage(document.querySelector(".project-card")).width),
    t = parseInt(StylePackage(projectsBox).width);
  cardPercent = parseInt(t / e);
}, 400),
  filtersProjects.forEach((e) => {
    e.addEventListener("click", (t) => {
      applyScrollingButtons(currentLanguge),
        setTimeout(() => {
          let e = `repeat(${hideElementNumber(
            projectsBox
          )}, calc(100% / ${cardPercent}`;
          projectsBox.style.gridTemplateColumns = e;
        }, 100);
      let a = e.value.toLowerCase();
      console.log(a),
        projectsBox.scrollTo({ behavior: "smooth", left: "start" });
      let n = [...document.querySelectorAll(".project-card")];
      "all" == a
        ? n.forEach((e) => {
            e.style.display = "flex";
          })
        : n.forEach((e) => {
            e.dataset.type.toLowerCase() == a
              ? (e.style.display = "flex")
              : (e.style.display = "none");
          });
    });
  });
let portfolioPrevBtn = document.getElementById("portfolio-prev"),
  portfolioNextBtn = document.getElementById("portfolio-next"),
  portfolioContainer = document.querySelector(".portfolio-body"),
  socialMediaBox = document.getElementById("social-media-box"),
  socialPrevBtn = document.getElementById("social-prev"),
  socialNextBtn = document.getElementById("social-next");
async function RequestSocialMediaData(e) {
  try {
    let t = await fetch(e),
      a = await t.json(),
      n = a.length;
    for (let e = 0; e < a.length; e++) {
      if ("active" == a[e].status) {
        let t = a[e].color.color,
          n = a[e].color.type,
          o = a[e].color.color;
        "dark" == n && (o = "#484848");
        let l = `font-size:.85rem;\n        color:${o}; text-shadow:0 0 20px ${t};`;
        const r = new ELEMENT(
          "div",
          `socialCard-${e}`,
          "social-card",
          socialMediaBox,
          "",
          `\n        border:1px solid transparent;\n        border-color: transparent ${o} transparent ${o}  ;\n        background-color: ${
            t + "30"
          };\n        `,
          `\n       #social-card-${e}:hover{\n          box-shadow:0px 0px 20px  ${t};\n        }`,
          styleFile
        );
        r.createElement();
        const i = r.getCreatedElement(),
          s = new ELEMENT("div", `cardHead${e + 1}`, "card-head", i, "");
        s.createElement();
        const c = s.getCreatedElement(),
          d = new ELEMENT(
            "h3",
            `title-${e + 1}`,
            "title",
            c,
            a[e].appName.en,
            `background-color:${t};`
          );
        d.createElement(),
          (d.getCreatedElement().dataset.lang = `socialcardTitle${e + 1}`),
          (languages.arabic[`socialcardTitle${e + 1}`] = a[e].appName.ar);
        const g = new ELEMENT("img", `img-${e}`, "card-image", c, "");
        g.createElement();
        const u = g.getCreatedElement();
        u.setAttribute("loading", "lazy"),
          u.setAttribute("width", "60"),
          u.setAttribute("height", "auto"),
          u.setAttribute("alt", "social-media-logo"),
          (u.src = a[e].logo);
        const m = new ELEMENT("div", "details-info", "details-info", i, "");
        m.createElement();
        const p = m.getCreatedElement(),
          h = new ELEMENT("div", "card-people", "card-people", p);
        h.createElement();
        const E = h.getCreatedElement(),
          y = new ELEMENT(
            "span",
            `people-title-${e + 1}`,
            "people-title",
            E,
            a[e].people.type
          );
        y.createElement();
        const f = y.getCreatedElement();
        f.dataset.lang = `social${toCapitalize(f.innerText)}Title`;
        const T = new ELEMENT(
          "span",
          `people-value-${e + 1}`,
          "people-value",
          E,
          a[e].people[a[e].people.type],
          l
        );
        T.createElement(),
          (T.getCreatedElement().dataset.lang = `socialPeopleValue${e + 1}`),
          (languages.arabic[`socialPeopleValue${e + 1}`] =
            a[e].people[a[e].people.type]);
        const v = new ELEMENT("div", "posts", "posts", p);
        v.createElement();
        const b = v.getCreatedElement(),
          L = new ELEMENT(
            "span",
            `posts-title-${e + 1}`,
            "posts-title",
            b,
            "Posts"
          );
        L.createElement(),
          (L.getCreatedElement().dataset.lang = "socialPostsTitle");
        const w = new ELEMENT(
          "span",
          `posts-value-${e + 1}`,
          "posts-value",
          b,
          a[e].posts.en,
          l
        );
        w.createElement(),
          (w.getCreatedElement().dataset.lang = `socialPosts${e + 1}`),
          (languages.arabic[`socialPosts${e + 1}`] = a[e].posts.ar);
        const x = new ELEMENT("div", `user-name-${e}`, "user-name", p);
        x.createElement();
        const S = x.getCreatedElement(),
          C = new ELEMENT(
            "span",
            `un-title-${e + 1}`,
            "un-title",
            S,
            "User Name"
          );
        C.createElement(),
          (C.getCreatedElement().dataset.lang = "socialUserNameTitle");
        const k = new ELEMENT(
          "span",
          `un-value-${e + 1}`,
          "un-value",
          S,
          a[e].userName,
          l
        );
        k.createElement(), k.getCreatedElement();
        const B = new ELEMENT("div", "content", "content", p);
        B.createElement();
        const A = B.getCreatedElement(),
          M = new ELEMENT(
            "span",
            `content-title-${e + 1}`,
            "content-title",
            A,
            "Content"
          );
        M.createElement(),
          (M.getCreatedElement().dataset.lang = "socialContentTitle");
        const $ = new ELEMENT(
          "span",
          `content-value-${e + 1}`,
          "content-value",
          A,
          a[e].content.en,
          l
        );
        $.createElement(),
          ($.getCreatedElement().dataset.lang = `socialContent${e + 1}`),
          (languages.arabic[`socialContent${e + 1}`] = a[e].content.ar);
        const N = new ELEMENT(
          "span",
          `socialVisiting${e + 1}`,
          "social-visiting",
          i,
          `<a class="visit-link" href="${a[e].link}" style=" letter-spacing:4px; text-transform:uppercase;" target="_blank">Visit</a>`,
          `background-color: ${t};`
        );
        N.createElement(), N.getCreatedElement();
      } else n--;
      socialMediaBox.style.gridTemplateColumns = `repeat(${n}, calc(100% / 4 )`;
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
let sendMassageBtn = document.getElementById("send-massage"),
  nameInput = document.getElementById("name"),
  emailInput = document.getElementById("email"),
  massageArea = document.getElementById("massage-area"),
  contactForm = document.getElementById("contact-form");
function sendEmail() {
  let e = {
      from_name: nameInput.value,
      email_id: emailInput.value,
      massege: massageArea.value,
    },
    t = "Massege Sended",
    a = "Error sending email.";
  "arabic" != currentLanguge ||
    ((t = "تم إرسال الرسالة"), (a = "خطأ في إرسال البريد الإلكتروني.")),
    emailjs
      .send("service_ye55eu7", "template_og68n3e", e)
      .then((e) => {
        massege(t),
          (emailInput.value = ""),
          (nameInput.value = ""),
          (massageArea.value = "");
      })
      .catch((e) => {
        console.error("Error sending email:", e), massege(a);
      });
}
contactForm.addEventListener("submit", (e) => {
  e.preventDefault(), sendEmail();
});
let contactUsPopupsBox = document.getElementById("contact-popups-box");
(contactUsPopupsBox.style.height = contactUsPopupsBox.clientWidth + "px"),
  setTimeout(() => {}, 1412);
let responsiveStyle = document.createElement("style");
function getAge(e, t) {
  let a = new Date(e),
    n = new Date(Date.now()),
    o = new Date(n - a).getTime(),
    l = new Date(o).getFullYear() - 1970,
    r = n.getMonth(),
    i = 12 - (a.getMonth() + 1) + r,
    s = [
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
    ],
    c = n.getDate(),
    d = a.getDate(),
    g =
      ((e) => {
        let t,
          a = s[e];
        return (
          (t =
            "Jan" == a ||
            "Mar" == a ||
            "May" == a ||
            "Jul" == a ||
            "Aug" == a ||
            "Oct" == a ||
            "Dec" == a
              ? 31
              : "Feb" == a
              ? 28
              : 30),
          t
        );
      })(n.getMonth()) -
      d +
      c;
  return "en" == t
    ? `My Age Is : '${l} Years And ${i} Months And ${g} Days'`
    : `عمري ${toArabicNumber(l)} سنة و ${toArabicNumber(
        i
      )} أشهر و ${toArabicNumber(g)} أيام`;
}
(responsiveStyle.id = "respownsive-JS"), HEAD.appendChild(responsiveStyle);
let ageLabel = document.getElementById("my-age-about");
(ageLabel.innerText = getAge("06/22/2006", "en")),
  (languages.arabic.age = getAge("06/22/2006", "ar"));
let expLabel = document.getElementById("my-exp-about");
function getExpYears() {
  let e = new Date(),
    t = new Date("05/29/2022"),
    a = e.getFullYear() - t.getFullYear(),
    n = (e) => parseInt((e / 12) * 100);
  return t.getMonth() < e.getMonth()
    ? ((a -= 1), +`${a}.${n(-(t.getMonth() - e.getMonth()))}`)
    : `${a}.${n(-(e.getMonth() - t.getMonth()))}`;
}
expLabel.innerHTML = getExpYears();

let fragment = document.createDocumentFragment();

let skillsLabel = document.querySelector(".skills-container .about-skills"),
  skillsArray = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "OOP",
    "SASS",
    "TYPESCRIPT",
    "Git & GitHub",
    "commandline",
  ];
skillsArray.forEach((e) => {
  let t = document.createElement("span");
  t.classList.add("skill");
  let a = document.createTextNode(e);
  t.appendChild(a), fragment.appendChild(t);
});

skillsLabel.appendChild(fragment);

let animationArea = document.querySelector(".animation-area");
function responsiveCardsWithGrid(e, t, a, n, o) {
  document_width <= 1450 && document_width > 600
    ? (e.style.gridTemplateColumns = `repeat(${t},calc(100% / ${a}) )`)
    : document_width <= 600 && document_width > 450
    ? (e.style.gridTemplateColumns = `repeat(${t},calc(100% / ${n} )`)
    : document_width <= 450 &&
      (e.style.gridTemplateColumns = `repeat(${t},calc(100% / ${o} )`);
}
function applyScrollingButtons(e) {
  setTimeout(() => {
    let e = "right",
      t = "left";
    (e = "right"),
      (t = "left"),
      scrollToRight(servicesContainer, servLeftBtn, servRightBtn),
      scrollToLeft(servicesContainer, servLeftBtn, servRightBtn),
      checking(servicesContainer, servLeftBtn, servRightBtn),
      scrollToRight(projectsBox, portfolioPrevBtn, portfolioNextBtn),
      scrollToLeft(projectsBox, portfolioPrevBtn, portfolioNextBtn),
      checking(projectsBox, portfolioPrevBtn, portfolioNextBtn),
      scrollToRight(socialMediaBox, socialPrevBtn, socialNextBtn),
      scrollToLeft(socialMediaBox, socialPrevBtn, socialNextBtn),
      checking(socialMediaBox, socialPrevBtn, socialNextBtn);
  }, 500);
}
animationArea.clientHeight > animationArea.clientWidth
  ? (animationArea.style.width = animationArea.clientHeight + "px")
  : animationArea.clientWidth > animationArea.clientHeight &&
    (animationArea.style.height = animationArea.clientWidth + "px"),
  applyScrollingButtons(currentLanguge);
let roadMapContainer = document.querySelector(".road-map-container"),
  roadMapHead = document.querySelector(".road-map-header"),
  roadMapContentBox = document.querySelector(
    ".road-map-container .content-box"
  ),
  roadMapContentHeight =
    roadMapContentBox.parentNode.clientHeight -
    (roadMapHead.clientHeight +
      parseInt(
        StylePackage(document.querySelector(".section-head")).marginTop
      ) +
      0) +
    "px";
isMobile()
  ? ((roadMapContentBox.style.transform = "translate(0,0)"),
    (roadMapContentBox.style.position = "static"),
    (roadMapContentBox.style.left = "0"),
    (roadMapContentBox.style.height = `calc(100% - ${
      document.querySelector(".road-map-container .header-title").clientHeight +
      20
    }px)`))
  : (roadMapContentBox.style.top = "55%");
let h_road = [...document.querySelectorAll(".h-road")],
  v_road = [...document.querySelectorAll(".v-road")];
h_road.forEach((e) => {
  let t = parseInt(e.clientWidth / 35);
  for (let a = 0; a < t; a++) {
    let t = document.createElement("span");
    t.classList.add("h-line"), e.prepend(t);
  }
}),
  v_road.forEach((e) => {
    let t = parseInt(e.clientHeight / 35);
    for (let a = 0; a < t; a++) {
      let t = document.createElement("span");
      t.classList.add("v-line"), e.prepend(t);
    }
  });
let showRmBtn = document.querySelector(".show-rm"),
  controlCarBtn = document.querySelector(".control-rm"),
  coverRm = document.querySelector(".rm-cover"),
  opacityLower = (e) => {
    (e.style.opacity = "0"),
      setTimeout(() => {
        e.remove();
      }, 300);
  };
function checkRoadMapStatus() {
  let e = document.querySelector(".buttons-layer");
  e.classList.contains("buttons-opacity-show")
    ? (e.classList.remove("buttons-opacity-show"),
      e.classList.add("buttons-opacity-hide"))
    : (e.classList.remove("buttons-opacity-hide"),
      e.classList.add("buttons-opacity-show"));
}
function minmizeRoadMapButtons() {
  let e = document.querySelector(".buttons-layer");
  if (
    (e.classList.remove("center-buttons"),
    e.classList.add("side-buttons"),
    (showRmBtn.innerHTML = '<i class="fa-regular fa-eye"></i>'),
    (controlCarBtn.innerHTML = '<i class="fa-solid fa-car"></i>'),
    !document.querySelector(".reset-car"))
  ) {
    let t = new ELEMENT(
      "span",
      "reset-car",
      "reset-car",
      e,
      '<i class="fa-solid fa-rotate"></i>'
    );
    t.createElement();
    let a = t.getCreatedElement();
    a.classList.add("rm-btns"),
      a.addEventListener("click", () => defaultPostionOfCar()),
      Array.from(e.children).forEach((e) => e.removeAttribute("data-lang"));
  }
}
showRmBtn.addEventListener("click", () => {
  opacityLower(coverRm),
    "none" != StylePackage(car).display
      ? (car.style.display = "none")
      : console.log("its Hide"),
    minmizeRoadMapButtons(),
    checkRoadMapStatus();
}),
  controlCarBtn.addEventListener("click", () => {
    opacityLower(coverRm),
      minmizeRoadMapButtons(),
      startControl(),
      checkRoadMapStatus(),
      document
        .querySelector(".buttons-layer")
        .classList.contains("buttons-opacity-show") || checkRoadMapStatus(),
      "block" != StylePackage(car).display
        ? (car.style.display = "block")
        : console.log("its Show");
  });
let car = document.querySelector(".car");
function toUp(e) {
  (e.style.top = e.offsetTop - 30 + "px"),
    (e.style.transform = "rotate(270deg)");
}
function toDown(e) {
  (e.style.top = `${e.offsetTop + 30}px`),
    (e.style.transform = "rotate(90deg)");
}
function toRight(e) {
  (e.style.left = `${e.offsetLeft + 30}px`),
    (e.style.transform = "rotate(0deg)");
}
function toLeft(e) {
  (e.style.left = e.offsetLeft - 30 + "px"),
    (e.style.transform = "rotate(180deg)");
}
function createMobileButtons() {
  if (null == document.querySelector(".remote-control")) {
    let e = document.createElement("div");
    e.classList.add("remote-control");
    let t = document.createElement("div");
    t.classList.add("y-area");
    let a = document.createElement("span");
    a.classList.add("to-top", "c-btn"), t.prepend(a);
    let n = document.createElement("span");
    n.classList.add("to-bottom", "c-btn"), t.appendChild(n), e.appendChild(t);
    let o = document.createElement("div");
    o.classList.add("x-area");
    let l = document.createElement("span");
    l.classList.add("to-left", "c-btn"), o.prepend(l);
    let r = document.createElement("span");
    r.classList.add("to-right", "c-btn"),
      o.appendChild(r),
      e.appendChild(o),
      roadMapContainer.appendChild(e),
      (e.style.width = roadMapContentBox.clientWidth + "px");
  }
  document.querySelectorAll(".c-btn").forEach((e) => {
    e.addEventListener("click", () => {
      (e.style.animation = "clicked 0.5s 1 linear"),
        setTimeout(() => {
          e.style.animation = "";
        }, 500);
    });
  });
}
function contentBoxPosition() {
  let e = document.querySelector(".remote-control").clientHeight;
  (roadMapContentBox.style.height =
    roadMapContainer.clientHeight -
    (e + 30 + roadMapHead.clientHeight + 50) +
    "px"),
    (document.querySelector(".road-map-container .content-box h4").style.top =
      "45.5%");
}
function applyMobileButtons(e) {
  let t = "Control With Buttons",
    a =
      "Don't look at driving a car, I added it to implement an idea I had in mind";
  "arabic" != currentLanguge ||
    ((t = " التحكم بالأزرار"),
    (a = "لا تنظر إلى قيادة السيارة، لقد أضفتها لتنفيذ فكرة كانت في ذهني"));
  let n = document.querySelector(".to-top"),
    o = document.querySelector(".to-bottom"),
    l = document.querySelector(".to-right"),
    r = document.querySelector(".to-left"),
    i = (e) => {
      (e.style.backgroundColor = "var(--main-color)"),
        (e.style.border = "none");
    },
    s = (e) => {
      (e.style.backgroundColor = "var(--secondary-color)"),
        (e.style.border = "1px solid var(--main-color)");
    };
  n.addEventListener("click", () => toUp(e)),
    HOLDER.onHold(
      n,
      () => {
        toUp(e), s(n);
      },
      () => {
        i(n);
      }
    ),
    o.addEventListener("click", () => toDown(e)),
    HOLDER.onHold(
      o,
      () => {
        toDown(e), s(o);
      },
      () => {
        i(o);
      }
    ),
    l.addEventListener("click", () => toRight(e)),
    HOLDER.onHold(
      l,
      () => {
        toRight(e), s(l);
      },
      () => {
        i(l);
      }
    ),
    r.addEventListener("click", () => toLeft(e)),
    HOLDER.onHold(
      r,
      () => {
        toLeft(e), s(r);
      },
      () => {
        i(r);
      }
    ),
    massege(t),
    setTimeout(() => {
      massege(a, 7);
    }, 5e3);
}
let startControl = () => {
  (car.style.display = "block"),
    defaultPostionOfCar(),
    isMobile()
      ? (createMobileButtons(), applyMobileButtons(car), contentBoxPosition())
      : applyKeyboardButtons(car);
};
function defaultPostionOfCar() {
  let e = document.querySelector(".start-road-h"),
    t = e.getFullHeight() - car.getFullHeight();
  e.getFullHeight() > car.getFullHeight()
    ? (car.style.top = `calc(${e.offsetTop}px + ${t / 2}px`)
    : (car.style.top = `${e.offsetTop}px `),
    (car.style.left = "5px"),
    (car.style.transform = "rotete(0deg) ");
}
function applyKeyboardButtons() {
  document.addEventListener("keydown", (e) => {
    if (control)
      switch (e.key) {
        case "w":
        case "W":
          toUp(car);
          break;
        case "s":
        case "S":
          toDown(car);
          break;
        case "d":
        case "D":
          toRight(car);
          break;
        case "a":
        case "A":
          toLeft(car);
          break;
        default:
          console.log("sse");
      }
  });
}
const footerSkills = document.querySelector(
    "footer .text-area .herizontal-text .skills .skills-container"
  ),
  footerLanguages = document.querySelector(
    "footer .text-area .herizontal-text .language .languages-container"
  ),
  footerSoftSkills = document.querySelector(
    "footer .text-area .herizontal-text .s-skills .s-skills-container"
  );
let skillsText = document.createTextNode(skillsArray.join(" , "));
footerSkills.appendChild(skillsText);

const englishLanguagesArray = ["Arabic", "English", "Turkish"];

languages.english.myLanguages = englishLanguagesArray.join(" , ");

const arabicLanguagesArray = ["العربية", "الانكليزية", "التركية"];

languages.arabic.myLanguages = arabicLanguagesArray.join(" , ");

let languagesText = document.createTextNode("Arabic , English , Turkish"
);

footerLanguages.appendChild(languagesText);

// let englishSoftSkillsArray =

// let arabicSoftSkillsArray =

function addToList(list, items) {
  let fragment = document.createDocumentFragment();

  Array.from(list.children).forEach((e) => e.remove());

  items.forEach((item) => {
    let element = document.createElement("li");

    let content = document.createTextNode(item);

    element.appendChild(content);

    fragment.appendChild(element);
  });

  list.appendChild(fragment);
}

const servicesList = document.querySelector(
  "footer .text-area .vertical-text .services .services-container"
);
const sectionsList = document.querySelector(
  "footer .text-area .vertical-text .sections .sections-container"
);

languages.english.sectionsListItems = [
  "Home",
  "Services",
  "Gallery",
  "Social Media",
  "Contact Us",
  "Details",
  "Learning Map",
];
let servicesArrayEn = [],
  servicesArrayAr = [];

function close() {
  document.querySelectorAll(".select").forEach((e) => {
    e.style.right = "-500%";
  });
}
function isMobile() {
  return (
    window.navigator.maxTouchPoints > 0 ||
    /(Android|Iphone)/gi.test(window.navigator.userAgent)
  );
}
function toCapitalize(e) {
  return `${e.substr(0, 1).toUpperCase()}${e
    .toLowerCase()
    .substr(1 - e.length)}`;
}
function scrollToLeft(e, t, a) {
  t.addEventListener("click", () => {
    let n = [...e.children];
    e.scrollTo({
      behavior: "smooth",
      left: e.scrollLeft - n[0].getFullWidth(),
    }),
      e.addEventListener("scroll", () => {
        let n = setInterval(() => {
          checking(e, t, a);
        }, 300);
        e.addEventListener("scrollend", () => {
          clearInterval(n);
        });
      });
  });
}
function scrollToRight(e, t, a) {
  a.addEventListener("click", () => {
    let n = [...e.children];
    e.scrollTo({
      behavior: "smooth",
      left: e.scrollLeft + n[0].getFullWidth(),
    }),
      e.addEventListener("scroll", () => {
        let n = setInterval(() => {
          checking(e, t, a);
        }, 300);
        e.addEventListener("scrollend", () => {
          clearInterval(n);
        });
      }),
      checking(e, t, a);
  });
}
function checking(e, t, a) {
  let n,
    o = e.scrollLeft,
    l = e.scrollWidth,
    r = e.clientWidth;
  (n = o < 0 ? -o + r : o + r),
    "arabic" != currentLanguge
      ? (t.style.display = o < 15 ? "none" : "flex")
      : "arabic" == currentLanguge &&
        (a.style.display = o > -15 ? "none" : "flex"),
    n > l - 20
      ? "arabic" == currentLanguge
        ? (t.style.display = "none")
        : (a.style.display = "none")
      : "arabic" == currentLanguge
      ? (t.style.display = "flex")
      : (a.style.display = "flex");
}
function checkBoolean(e, t, a) {
  return !(e.length != a || !e.every((e) => e >= t));
}
function initializeEnglishLanguageObject() {
  document.querySelectorAll("*").forEach((e) => {
    e.getAttribute("data-lang") &&
      (languages.english[e.getAttribute("data-lang")] = e.innerHTML),
      e.getAttribute("data-lang-placeholder") &&
        (languages.english[e.getAttribute("data-lang-placeholder")] =
          e.placeholder),
      e.dataset.content &&
      (languages.english[e.dataset.lang] = e.dataset.content);  
  });

  localStorage.setItem("enObject", JSON.stringify(languages.english))
}
function AR_Action() {
  createButtonAction(
    changeThemeContainer,
    changeTheme,
    colorName,
    applyTheme,
    "تم تغيير الثمة الى اللون "
  ),
    createButtonAction(
      languagesContainer,
      changeLanguageBtn,
      languageNames,
      applyLanguage,
      "تم تغيير اللغة الى"
    ),
    createButtonAction(
      selectDownloadContainer,
      selectFileBtn,
      fileNames,
      test,
      "جار تنزيل"
    ),
    createButtonAction(infoContainer, infoBtn, infoNames, test, "اظهار"),
    createButtonAction(menuContainer, menu, tapNames, test, "الذهاب الى");
}
function EN_action() {
  createButtonAction(
    changeThemeContainer,
    changeTheme,
    colorName,
    applyTheme,
    "Theme Changed To"
  ),
    createButtonAction(
      languagesContainer,
      changeLanguageBtn,
      languageNames,
      applyLanguage,
      "language Changed To"
    ),
    createButtonAction(
      selectDownloadContainer,
      selectFileBtn,
      fileNames,
      test,
      "Downloading File"
    ),
    createButtonAction(infoContainer, infoBtn, infoNames, test, "Show"),
    createButtonAction(menuContainer, menu, tapNames, test, "Going To");
}
function applyLanguage(e) {
  localStorage.setItem("language", e),
    (currentLanguge = localStorage.getItem("language"));
  let t = (e) => {
    let t = document.querySelectorAll(".l-change");
    "rtl" == e
      ? ((document.body.style.direction = "rtl"),
        t.forEach((e) => {
          e.classList.remove("dir-lang-en"), e.classList.add("dir-lang-ar");
        }),
        applyScrollingButtons("arabic"))
      : "ltr" == e &&
        ((document.body.style.direction = "ltr"),
        t.forEach((e) => {
          e.classList.remove("dir-lang-ar"), e.classList.add("dir-lang-en");
        }),
        applyScrollingButtons("english"));
  };
console.log(sectionsList)
  addToList(sectionsList, languages[currentLanguge].sectionsListItems);
  addToList(servicesList, languages[currentLanguge].servicesArray);
  if (((languages.english.sectionsTitleArray = ["Landing"]), "arabic" == e)) {
    let e = '"Alexandria", sans-serif';
    t("rtl"),
      (document.body.style.fontFamily = e),
      document.querySelectorAll("*").forEach((e) => {
        e.getAttribute("data-lang") &&
          (e.innerHTML = languages.arabic[e.getAttribute("data-lang")]),
          e.getAttribute("data-lang-placeholder") &&
            (e.placeholder =
              languages.arabic[e.getAttribute("data-lang-placeholder")]),
          e.dataset.content &&
            (e.dataset.content = languages.arabic[e.dataset.lang]),
          parseInt(StylePackage(e).fontSize) < 12 &&
            (e.style.fontSize = "13px");
      }),
      (styleFile.innerHTML += `\n    ::placeholder,\n    button,textarea,span,.massege-box{\n      font-family:${e};\n      font-size:0.8rem;\n      letter-spaceing\n    }\n    `),
      navgationBar.classList.remove("navigation-english"),
      navgationBar.classList.add("navigation-arabic"),
      setInFullyRight(navgationBar),
      showIcons.addEventListener("click", () => {
        let e = showIcons.parentNode;
        setInFullyRight(e, parseInt(StylePackage(e).right) < 0 ? 1 : 0);
      });
  }
  "english" == e &&
    (console.log("oright the language is : english"),
    t("ltr"),
    (document.body.style.fontFamily = '"Anta", sans-serif'),
    document.querySelectorAll("*").forEach((e) => {
      e.getAttribute("data-lang") &&
        (e.innerHTML = languages.english[e.getAttribute("data-lang")]),
        e.getAttribute("data-lang-placeholder") &&
          (e.placeholder =
            languages.english[e.getAttribute("data-lang-placeholder")]),
        e.dataset.content &&
          (e.dataset.content = languages.english[e.dataset.lang]),
        e.dataset.action &&
          (e.dataset.content = languages.english[e.dataset.lang]),
        parseInt(StylePackage(e).fontSize) < 12 && (e.style.fontSize = "13px");
    }),
    navgationBar.classList.remove("navigation-arabic"),
    navgationBar.classList.add("navigation-english"),
    (navgationBar.style.left = "0"),
    showIcons.addEventListener("click", () => {
      let e = showIcons.parentNode,
        t = parseInt(StylePackage(e).left);
      e.style.left = t < 0 ? "0px" : "-" + e.clientWidth + "px";
    }));
}
function setInFullyRight(e, t) {
  let a = e.getFullWidth();
  return (e.style.left = 0 == t ? "100%" : `calc(100% - ${a}px)`);
}
function applyTheme(e) {
  switch (
    ((BODY.style.backgroundImage = `url(./imgs/backgrounds/Background_${e}.png)`),
    localStorage.setItem("theme", e),
    e)
  ) {
    case "red":
      themeStyleFile.innerHTML =
        ":root {\n--main-color: #ff0000;\n    --secondary-color: #e7c3c3;\n    --background-main-color: #ff000038;\n    --background-white-color: #e7c3c37e;\n    --background-color: #000f18;\n}";
      break;
    case "blue":
      themeStyleFile.innerHTML =
        ":root {\n  --main-color: #186ca4;\n  --secondary-color: #fff;\n  --background-main-color: rgba(30, 56, 103, 0.7);\n  --background-white-color: rgba(255, 255, 255, 0.7);\n  --background-color: #000f18;\n}";
      break;
    case "green":
      themeStyleFile.innerHTML =
        "\n    :root {\n  --main-color:#4caf50;\n  --secondary-color:#b8f0ba;\n  --background-main-color:#4caf505c;\n  --background-white-color:#ffffff99;\n  --background-color: #000f18;\n}";
      break;
    case "orange":
      themeStyleFile.innerHTML =
        "\n    :root {\n  --main-color: #ff9800;\n  --secondary-color:#ffe2b6;\n  --background-main-color:#ff980040;\n  --background-white-color:#b7a488;\n  --background-color: #000f18;\n}";
      break;
    case "purple":
      themeStyleFile.innerHTML =
        "\n    :root {\n  --main-color:#9c27b0;\n  --secondary-color:#ba95c0;\n  --background-main-color:#9c27b05c;\n  --background-white-color:#d4abdb94;\n  --background-color: #000f18;\n}";
  }
}
function hideElementNumber(e) {
  return Array.from(e.children).filter((e) => "none" != StylePackage(e).display)
    .length;
}
function onOpenPopup(e) {
  let t = 1,
    a = setInterval(() => {
      console.log,
        "li" == e[t].tagName.toLowerCase()
          ? ((e[t].style.position = "relative"),
            (e[t].style.right = 0),
            t == e.length - 1 ? clearInterval(a) : t++)
          : t++;
    }, 120);
}
function exit(e) {
  e.style.right = "-200%";
}
function toArabicNumber(e) {
  let t = [
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
    a = [];
  return (
    `${e}`.split("").forEach((e, n) => {
      "number" == typeof e ? a.push(t[e]) : "." == e && a.push("."),
        a.push(t[e]);
    }),
    a.join("")
  );
}
function navigationPosition() {
  navgationBar.offsetLeft >= 0 &&
    (navgationBar.style.left = "-" + navgationBar.clientWidth + "px");
}
function navigationPosition() {
  "arabic" != currentLanguge
    ? navgationBar.offsetLeft >= 0 &&
      (navgationBar.style.left = "-" + navgationBar.clientWidth + "px")
    : navgationBar.offsetLeft <= document_width &&
      (navgationBar.style.left = "100%");
}
function downloadImage() {
  let e = document.createElement("a");
  (e.href = "./imgs/logos/newLogo.jpg"), (e.download = "cv_picture"), e.click();
}
(document.getElementById(
  "copyright"
).innerHTML = `&copy <span class='name'>Abdalrahman Aldabbas</span> <span class='date'>${new Date(
  Date.now()
).getFullYear()}</span> `),
  (HTMLElement.prototype.getFullWidth = function () {
    return (
      this.clientWidth +
      parseInt(StylePackage(this).marginRight) +
      parseInt(StylePackage(this).marginLeft) +
      parseInt(StylePackage(this).borderRightWidth) +
      parseInt(StylePackage(this).borderLeftWidth)
    );
  }),
  (HTMLElement.prototype.getFullHeight = function () {
    return (
      this.clientHeight +
      parseInt(StylePackage(this).marginTop) +
      parseInt(StylePackage(this).marginBottom) +
      parseInt(StylePackage(this).borderTopWidth) +
      parseInt(StylePackage(this).borderBottomWidth)
    );
  });
let names = [
    "oma",
    "front end developer",
    "youtuber",
    "pubger",
    "Alomawy Coder",
  ],
  nameCSS = document.createElement("style");
HEAD.appendChild(nameCSS);
let nameChangerCount = 0;
setInterval(() => {
  name(nameChangerCount),
    nameChangerCount < names.length
      ? nameChangerCount++
      : (nameChangerCount = 0);
}, 6e3);
let nameTag = document.querySelector(".logo-text");
function name(e) {
  (nameTag.innerText = names[e]),
    (nameTag.style.animation = ""),
    (nameTag.style.width = "fit-content");
  let t = nameTag.clientWidth,
    a = nameTag.innerText.length;
  (nameTag.style.width = "0px"),
    (nameCSS.innerHTML = `\n  \n@keyframes width-size {\n0%,100% {\n  width: 0;\n}\n40% {\n  width: ${t}px;\n}\n60% {\n  width: ${t}px;\n}\n}\n\n`),
    (nameTag.style.animation = `width-size 5s 1 steps(${a}), blink 0.5s infinite`);
}
name(4);
