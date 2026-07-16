(function () {
  const i18n = {
    en: {
      "nav-brand": "Zhujun Wu",
      "nav-about": "About",
      "nav-edu": "Education",
      "nav-research": "Research",
      "nav-honors": "Honors",
      "nav-venture": "Venture",

      "hero-subtitle": "M.Sc. Student in Software Engineering",
      "hero-affil":
        "Software Engineering Institute, East China Normal University",

      "about-title": "About",
      "about-text":
        "I am a second-year M.Sc. student in the Software Engineering Institute at East China Normal University (ECNU), advised by Prof. Xiaohong Chen. I work closely with Prof. Zhi Jin (Peking University) and Prof. Ming Hu (ECNU, Young Researcher). My research focuses on applying large language models to requirements engineering, particularly on business-logic-driven requirements auto-completion for information systems and security requirements completion.",

      "edu-title": "Education",
      "edu-master-period": "2025 – Present",
      "edu-master-degree": "M.Sc. in Software Engineering",
      "edu-master-school":
        "East China Normal University, Software Engineering Institute",
      "edu-master-advisor":
        "Advisor: Prof. Xiaohong Chen <br>Close Collaborators: Prof. Zhi Jin (Peking University), Prof. Ming Hu (ECNU, Young Researcher)",
      "edu-bachelor-period": "2021 – 2025",
      "edu-bachelor-degree": "B.Sc. in Software Engineering",
      "edu-bachelor-school":
        "East China Normal University, Software Engineering Institute",

      "research-title": "Research",
      "research-interests": "Research Interests",

      "research-pubs": "Publications",
      "pub-authors":
        "<strong>Zhujun Wu</strong>, Xiaohong Chen, Zhi Jin, Ming Hu, and Dongming Jin",
      "pub-venue":
        "<i>Proceedings of the International Conference on Software Engineering (ICSE), 2026</i> — Accepted",

      "research-ip": "Software Copyright",
      "ip-title": "基于大模型的用户需求自动补全软件",

      "honors-title": "Table Tennis Honors",
      "athlete-badge": "National First-Class Athlete",
      "athlete-career":
        "National First-Class Athlete, Career: 2009 – Present",

      "honor-note":
        "Served as team captain of Xingzhi Middle School table tennis team; registered athlete since 2009.",

      "venture-title": "Entrepreneurship",
      "venture-name":
        "Shanghai Brain Cave Education <span class=\"venture-name-cn\">上海脑洞教育</span>",
      "venture-period": "2023 – Present",
      "venture-desc":
        "Founded an education venture focusing on high school students' comprehensive evaluation and research project mentoring in Shanghai. Find us on Xiaohongshu (小红书) by searching \"上海脑洞教育\" (or \"脑洞教育\").",
      "venture-note":
        "Most students gained admission to Shanghai's top 985/211 universities through the comprehensive evaluation pathway.",

      "footer-text":
        "&copy; 2026 Zhujun Wu. Built with <i class=\"fa-solid fa-heart\"></i> in Shanghai.",
    },

    zh: {
      "nav-brand": "吴祝骏",
      "nav-about": "简介",
      "nav-edu": "教育经历",
      "nav-research": "研究方向",
      "nav-honors": "荣誉",
      "nav-venture": "创业",

      "hero-subtitle": "软件工程硕士研究生",
      "hero-affil": "华东师范大学 软件工程学院",

      "about-title": "个人简介",
      "about-text":
        "我是华东师范大学软件工程学院二年级硕士研究生，导师为陈小红教授。同时与北京大学金芝教授、华东师范大学胡铭青年研究员保持密切合作。我的研究方向是将大语言模型应用于需求工程，具体包括信息系统中基于业务逻辑的需求自动补全，以及信息系统安全需求补全。",

      "edu-title": "教育经历",
      "edu-master-period": "2025 年 – 至今",
      "edu-master-degree": "软件工程 硕士",
      "edu-master-school": "华东师范大学 软件工程学院",
      "edu-master-advisor":
        "导师：陈小红 教授 <br>密切合作导师：金芝 教授（北京大学）、胡铭 青年研究员（华东师范大学）",
      "edu-bachelor-period": "2021 年 – 2025 年",
      "edu-bachelor-degree": "软件工程 学士",
      "edu-bachelor-school": "华东师范大学 软件工程学院",

      "research-title": "研究方向",
      "research-interests": "研究方向",

      "research-pubs": "发表论文",
      "pub-authors":
        "<strong>吴祝骏</strong>，陈小红，金芝，胡铭，靳东明",
      "pub-venue":
        "<i>International Conference on Software Engineering (ICSE), 2026</i> — 已录用 (CCF-A)",

      "research-ip": "软件著作权",
      "ip-title": "基于大模型的用户需求自动补全软件",

      "honors-title": "乒乓球荣誉",
      "athlete-badge": "乒乓球国家一级运动员",
      "athlete-career": "乒乓球国家一级运动员，运动生涯：2009 年 – 至今",

      "honor-note":
        "曾任行知中学校乒乓球队队长；2009年至今为注册运动员。",

      "venture-title": "创业经历",
      "venture-name":
        "上海脑洞教育 <span class=\"venture-name-cn\">Shanghai Brain Cave Education</span>",
      "venture-period": "2023 年 – 至今",
      "venture-desc":
        "创立教育品牌，专注上海市高中生综合评价与课题辅导。可在小红书搜索「上海脑洞教育」（或「脑洞教育」）了解更多。",
      "venture-note":
        "大多同学通过综合评价途径顺利进入上海985、211高校。",

      "footer-text":
        "&copy; 2026 吴祝骏. 来自上海的 <i class=\"fa-solid fa-heart\"></i> 献上.",
    },
  };

  /* ---- Research tags ---- */
  const researchTags = {
    en: [
      "Large Language Models",
      "Requirements Engineering",
      "Business-Logic-Driven Requirements Auto-Completion",
      "Security Requirements Engineering",
    ],
    zh: [
      "大语言模型",
      "需求工程",
      "基于业务逻辑的需求自动补全",
      "信息系统安全需求补全",
    ],
  };

  /* ---- Honors grid ---- */
  const honors = {
    en: [
      {
        year: "2013",
        title:
          "Shanghai Table Tennis Series — Men's Team Champion (3rd Group)",
      },
      {
        year: "2014",
        title:
          "Baoshan Sunshine Sports — Primary School Singles 6th, Men's Team 3rd",
      },
      {
        year: "2017",
        title:
          "Baoshan Sunshine Sports — Middle School Men's Team 2nd",
      },
      {
        year: "2019",
        title:
          "Baoshan Sunshine Sports — High School Singles 3rd, Men's Team Champion",
      },
      {
        year: "2019",
        title:
          "Shanghai Table Tennis Champions Tournament — Men's Team Champion",
      },
      {
        year: "2019",
        title:
          "Awarded National First-Class Athlete",
      },
    ],
    zh: [
      {
        year: "2013",
        title: "上海市乒乓球十项系列赛 — 男子团体第一名（丙组）",
      },
      {
        year: "2014",
        title: "宝山区阳光体育大联赛 — 小学组个人单打第六名，男子团体第三名",
      },
      {
        year: "2017",
        title: "宝山区阳光体育大联赛 — 初中组男子团体第二名",
      },
      {
        year: "2019",
        title: "宝山区阳光体育大联赛 — 高中组男子单打第三名，男子团体第一名",
      },
      {
        year: "2019",
        title: "上海市乒乓球冠军赛 — 男子团体第一名",
      },
      {
        year: "2019",
        title: "被授予乒乓球国家一级运动员称号",
      },
    ],
  };

  /* ---- Venture achievements ---- */
  const ventureAch = {
    en: [
      { num: "20+", label: "Students Mentored" },
      {
        num: "1",
        label: "Shanghai S&T Innovation Contest — 1st Prize",
      },
      {
        num: "3",
        label: "Shanghai S&T Innovation Contest — 3rd Prize",
      },
      { num: "★", label: "Tomorrow's Science & Technology Stars" },
    ],
    zh: [
      { num: "20+", label: "已辅导学员" },
      { num: "1", label: "上海市科创大赛 一等奖" },
      { num: "3", label: "上海市科创大赛 三等奖" },
      { num: "★", label: "明日科技之星 若干" },
    ],
  };

  /* ---- DOM refs ---- */
  const langToggle = document.getElementById("langToggle");
  const html = document.documentElement;
  let currentLang = localStorage.getItem("lang") || "en";

  function setLangUI(lang) {
    currentLang = lang;
    html.lang = lang;
    localStorage.setItem("lang", lang);

    langToggle.querySelector(".lang-option-en").classList.toggle(
      "active",
      lang === "en"
    );
    langToggle.querySelector(".lang-option-zh").classList.toggle(
      "active",
      lang === "zh"
    );

    // Simple text/innerHTML elements
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (i18n[lang] && i18n[lang][key] !== undefined) {
        // Use innerHTML for keys that contain HTML tags
        if (
          [
            "edu-master-advisor",
            "pub-authors",
            "pub-venue",
            "venture-name",
            "venture-desc",
            "footer-text",
            "about-text",
          ].includes(key)
        ) {
          el.innerHTML = i18n[lang][key];
        } else {
          el.textContent = i18n[lang][key];
        }
      }
    });

    // Research tags
    const tagsContainer = document.querySelector(".tags");
    if (tagsContainer) {
      tagsContainer.innerHTML = researchTags[lang]
        .map((t) => `<span class="tag">${t}</span>`)
        .join("");
    }

    // Honors grid
    const honorsGrid = document.querySelector(".honors-grid");
    if (honorsGrid) {
      honorsGrid.innerHTML = honors[lang]
        .map(
          (h) =>
            `<div class="honor-card"><span class="honor-year">${h.year}</span><p class="honor-title">${h.title}</p></div>`
        )
        .join("");
    }

    // Venture achievements
    const vAch = document.querySelector(".venture-achievements");
    if (vAch) {
      vAch.innerHTML = ventureAch[lang]
        .map(
          (a) =>
            `<div class="v-ach-item"><span class="v-ach-num">${a.num}</span><span class="v-ach-label">${a.label}</span></div>`
        )
        .join("");
    }
  }

  // Init
  setLangUI(currentLang);

  langToggle.addEventListener("click", () => {
    setLangUI(currentLang === "en" ? "zh" : "en");
  });
})();
