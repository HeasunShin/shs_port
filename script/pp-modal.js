// ================================
// Project Data
// ================================

const projectData = {
  wordpress: {
    title: "WordPress Magazine CMS",
    subtitle: "기업형 웹진 CMS 구축 프로젝트",
    category: "WordPress",
    status: "LIVE",
    statusClass: "live",
    year: "2026",
    images: {
      main: "./images/personal_project_4.png",
      detail: [
        "./images/personal_project/modal/personal_project_4-1.png",
        "./images/personal_project/modal/personal_project_4-2.png",
        "./images/personal_project/modal/personal_project_4-3.png",
      ],
    },

    info: {
      role: "Publisher",
      duration: "3 Weeks",
      contribution: "100%",
    },

    tech: ["WordPress", "PHP", "ACF", "SCSS", "Swiper", "JavaScript"],

    sections: [
      {
        title: "PROJECT INFO",
        content: `
          기업형 웹진 CMS 구축 프로젝트입니다.<br>
          WordPress Theme 제작과 ACF를 활용하여
          관리자에서 콘텐츠를 관리할 수 있도록 구현했습니다.
        `,
      },

      {
        title: "Features",
        content: `
          • Custom Post Type 구성<br>
          • ACF 기반 관리자 입력 구조<br>
          • Swiper 메인 비주얼 구현<br>
          • 메뉴 CMS 관리 기능
        `,
      },

      {
        title: "Trouble Shooting",
        content: `
          • InfinityFree 배포 환경 구성<br>
          • SSL 및 도메인 연결 문제 해결<br>
          • 이미지 경로 및 DB 이전 작업
        `,
      },
    ],

    buttons: [
      {
        text: "view site",
        url: "https://wordpress-n.infinityfree.me",
      },
    ],
  },
  autoscreenshot: {
    title: "Git Auto Screenshot",
    subtitle: "Automatic Portfolio Screenshot Pipeline",
    category: "Automation",
    status: "IN PROGRESS",
    statusClass: "progress",
    year: "2026",
    images: {
      main: "https://raw.githubusercontent.com/HeasunShin/auto-screenshot/main/screenshot.png",

      // detail: [
      //   "./images/personal_project_5-1.png",
      //   "./images/personal_project_5-2.png",
      //   "./images/personal_project_5-3.png",
      // ],
    },

    info: {
      role: "Developer",
      duration: "Personal Project",
      contribution: "100%",
    },

    tech: [
      "JavaScript",
      "Node.js",
      "Puppeteer",
      "GitHub Actions",
      "Linux",
      "Git",
    ],

    sections: [
      {
        title: "Project Overview",
        content: `
      React 프로젝트의 최신 화면을
      Git Push만으로 자동 캡처하여
      포트폴리오에 반영하기 위한
      자동화 시스템입니다.<br>
      반복적으로 스크린샷을 교체하는
      작업을 자동화하는 것을 목표로 제작했습니다. <br>
      AI 도구를 활용하여 코드 구성 및 문제 해결 과정을 참고하며 개발했습니다.
      `,
      },

      {
        title: "Workflow",
        content: `
      • Git Push 감지<br>
      • GitHub Actions 자동 실행<br>
      • Puppeteer 브라우저 실행<br>
      • 프로젝트 페이지 접속<br>
      • Screenshot 생성 및 저장<br>
      • Portfolio 최신 이미지 자동 반영
      `,
      },

      {
        title: "Troubleshooting",
        content: `
      • Linux 환경에서 Puppeteer 실행 구성<br>
      • Headless Chrome 설정<br>
      • GitHub Actions Workflow 작성<br>
      • 자동 이미지 overwrite 처리<br>
      • 최신 캡처 이미지 유지
      `,
      },

      {
        title: "Result",
        content: `
      프로젝트를 수정하고 Git Push만 하면
      최신 화면이 자동으로 생성되어
      포트폴리오에 반영됩니다.<br>
      반복 작업을 제거하여 관리 효율을 크게 향상시켰습니다.
      `,
      },
    ],

    buttons: [
      {
        text: "View Site",
        url: "https://project1-react-app.vercel.app",
      },
      {
        text: "GitHub",
        url: "https://github.com/HeasunShin/auto-screenshot",
      },
    ],
  },
  gsap: {
    title: "GSAP Clone",
    subtitle: "GSAP Animation Practice",
    category: "Frontend",
    status: "COMPLETED",
    statusClass: "completed",
    year: "2026",

    images: {
      main: "./images/personal_project_3.png",

      // detail: [
      //   "./images/personal_project_3-1.png",
      //   "./images/personal_project_3-2.png",
      //   "./images/personal_project_3-3.png",
      // ],
    },

    info: {
      role: "Frontend",
      duration: "2 Weeks",
      contribution: "100%",
    },

    tech: [
      "HTML",
      "SCSS",
      "JavaScript",
      "GSAP",
      "ScrollTrigger",
      "Swiper",
      "SplitText ",
      "Flip",
    ],

    sections: [
      {
        title: "PROJECT INFO",
        content: `
      GSAP의 애니메이션 동작 방식을 학습하기 위해
      실제 웹사이트를 기반으로 클론 코딩한 프로젝트입니다.<br><br>

      기존 코드를 분석하고 구조를 변경하며
      GSAP Animation 구현 방식을 익혔습니다.
      `,
      },

      {
        title: "Features",
        content: `
      • ScrollTrigger 기반 스크롤 애니메이션<br>
      • SplitText 텍스트 애니메이션<br>
      • Flip 레이아웃 전환 효과<br>
      • Swiper 슬라이드 구현<br>
      • 반응형 레이아웃 구성
      `,
      },

      {
        title: "Troubleshooting",
        content: `
      • ScrollTrigger 동작 시점 조정<br>
      • 애니메이션 순서 및 타이밍 최적화<br>
      • Resize 환경 대응<br>
      • 반응형 화면에서 애니메이션 오류 개선
      `,
      },
    ],

    buttons: [
      {
        text: "View Site",
        url: "https://heasunshin.github.io/gsap_ddeok/",
      },
    ],
  },
  portfolio2023: {
    title: "Portfolio 2023",
    subtitle: "Personal Responsive Portfolio Website",
    category: "Frontend",
    status: "COMPLETED",
    statusClass: "completed",
    year: "2023",

    images: {
      main: "./images/personal_project_2.png",

      detail: [
        "./images/personal_project_2-1.png",
        "./images/personal_project_2-2.png",
        "./images/personal_project_2-3.png",
      ],
    },

    info: {
      role: "Publisher",
      duration: "Personal Project",
      contribution: "100%",
    },

    tech: ["HTML", "CSS", "JavaScript", "jQuery", "Swiper"],

    sections: [
      {
        title: "PROJECT INFO",
        content: `
      개인의 아이덴티티를 표현하기 위해 제작한
      반응형 포트폴리오 사이트입니다.<br><br>

      달(Moon)을 메인 콘셉트로 활용하여
      페이지 전체에서 일관된 디자인 경험을 제공하도록 구성했습니다.
      `,
      },

      {
        title: "Features",
        content: `
      • Responsive Layout 구현<br>
      • Swiper 기반 인터랙션 구현<br>
      • JavaScript / jQuery 기능 구현<br>
      • 페이지 전체 콘셉트 디자인 적용
      `,
      },

      {
        title: "Design Concept",
        content: `
      달이라는 시각 요소를 활용하여
      개인의 성장과 방향성을 표현했습니다.<br><br>

      메인부터 마지막 영역까지 동일한 콘셉트를 유지하여
      사용자가 자연스럽게 사이트 흐름을 따라가도록 설계했습니다.
      `,
      },

      {
        title: "Troubleshooting",
        content: `
      • 반응형 화면별 레이아웃 대응<br>
      • Swiper 동작 및 UI 인터랙션 조정<br>
      • 페이지 전환 및 애니메이션 흐름 개선
      `,
      },
    ],

    buttons: [
      {
        text: "View Site",
        url: "./shs/index.html",
      },
    ],
  },
  wedqueen: {
    title: "WEDQUEEN",
    subtitle: "Wedding Platform Website Renewal",
    category: "Website Renewal",
    status: "COMPLETED",
    statusClass: "completed",
    year: "2023",

    images: {
      main: "./images/personal_project_1.png",

      detail: [
        "./images/personal_project_1-1.png",
        "./images/personal_project_1-2.png",
        "./images/personal_project_1-3.png",
      ],
    },

    info: {
      role: "Publisher",
      duration: "Personal Project",
      contribution: "100%",
    },

    tech: ["HTML", "CSS", "JavaScript", "jQuery", "Swiper"],

    sections: [
      {
        title: "PROJECT INFO",
        content: `
      기존 웨딩 플랫폼 사이트를 분석하고
      서비스 콘셉트에 맞춰 리뉴얼한 프로젝트입니다.<br><br>

      애플리케이션 홍보 목적에 맞게
      온라인 웨딩 박람회 콘셉트로
      UI 구조와 콘텐츠 흐름을 재구성했습니다.
      `,
      },

      {
        title: "Features",
        content: `
      • Swiper 기반 메인 배너 구현<br>
      • 웨딩 박람회 콘셉트 UI 구성<br>
      • 서비스 소개 영역 구성<br>
      • 이벤트 및 홍보 콘텐츠 구조 설계
      `,
      },

      {
        title: "Planning",
        content: `
      기존 서비스의 특징을 분석하여
      사용자에게 서비스 목적이 명확하게 전달될 수 있도록
      페이지 흐름을 기획했습니다.
      `,
      },

      {
        title: "Troubleshooting",
        content: `
      • 기존 디자인 구조 분석<br>
      • 콘텐츠 배치 및 UI 개선<br>
      • 다양한 화면 크기 대응
      `,
      },
    ],

    buttons: [
      {
        text: "Planning",
        url: "./shs/_wedqueen/proposal/wedqueen_proposal.pdf",
      },
      {
        text: "View Site",
        url: "./shs/_wedqueen/index.html",
      },
    ],
  },
};

// ================================
// Elements
// ================================

const modal = document.querySelector("#projectModal");
const modalBody = modal.querySelector(".modal-body");
const closeBtn = modal.querySelector(".modal-close");
const overlay = modal.querySelector(".modal-overlay");

// ================================
// Render Modal
// ================================

function renderModal(project) {
  let sectionsHTML = "";

  (project.sections || []).forEach((section) => {
    sectionsHTML += `
      <section class="modal-section">

        <h3>
          ${section.title}
        </h3>

        <div class="modal-section-content">
          ${section.content}
        </div>

      </section>
    `;
  });

  let buttonsHTML = "";

  (project.buttons || []).forEach((button) => {
    buttonsHTML += `
      <a
        href="${button.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="modal-button"
      >
        ${button.text}
      </a>
    `;
  });

  let techHTML = "";

  (project.tech || []).forEach((item) => {
    techHTML += `
      <span class="tech-item">
        ${item}
      </span>
    `;
  });

  // const info = project.info || {};

  // let detailImagesHTML = "";

  // if (project.images.detail) {
  //   project.images.detail.forEach((img) => {
  //     detailImagesHTML += `
  //       <img
  //         src="${img}"
  //         alt="${project.title}"
  //       >
  //     `;
  //   });
  // }

  const info = project.info || {};

  // ================================
  // Detail Images
  // ================================

  let detailSectionHTML = "";

  if (
    project.images &&
    project.images.detail &&
    project.images.detail.length > 0
  ) {
    let detailImagesHTML = "";

    project.images.detail.forEach((img) => {
      detailImagesHTML += `
      <img
        src="${img}"
        alt="${project.title}"
      >
    `;
    });

    detailSectionHTML = `
    <div class="modal-image-detail">

      <h3 class="modal-image-title">
        DETAIL IMAGES
      </h3>

      <div class="modal-image-grid">

        ${detailImagesHTML}

      </div>

    </div>
  `;
  }

  modalBody.innerHTML = `


    <div class="modal-header">


      <span class="modal-category">
        ${project.category || ""}
      </span>


      <h2 class="modal-title">
        ${project.title || ""}
      </h2>


      <p class="modal-subtitle">
        ${project.subtitle || ""}
      </p>


      <div class="modal-meta">


        <span class="modal-status ${project.statusClass}">
            ${project.status}
        </span>


        <span class="modal-year">
          ${project.year || ""}
        </span>


      </div>


    </div>



    <div class="modal-image-main">

      <img
        src="${project.images.main}"
        alt="${project.title}"
      >

    </div>






    <div class="project-info-grid">


      <div>

        <span>
          Role
        </span>

        <strong>
          ${info.role || "-"}
        </strong>

      </div>



      <div>

        <span>
          Duration
        </span>

        <strong>
          ${info.duration || "-"}
        </strong>

      </div>



      <div>

        <span>
          Contribution
        </span>

        <strong>
          ${info.contribution || "-"}
        </strong>

      </div>


    </div>



    <section class="modal-section">

      <h3>
        Tech Stack
      </h3>


      <div class="tech-list">

        ${techHTML}

      </div>


    </section>

    ${detailSectionHTML}


    ${sectionsHTML}



    <div class="modal-buttons">

      ${buttonsHTML}

    </div>


  `;
}

// ================================
// Open Modal
// ================================

function openModal(projectKey) {
  console.log(projectKey);

  const project = projectData[projectKey];

  if (!project) return;

  renderModal(project);

  modal.classList.add("show");

  document.body.classList.add("modal-open");
}

// ================================
// Close Modal
// ================================

function closeModal() {
  modal.classList.remove("show");

  document.body.classList.remove("modal-open");
}

// ================================
// Events
// ================================

closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// ================================
// More Button
// ================================

document.querySelectorAll(".more-link").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const card = button.closest(".flex-box");

    const projectKey = card.dataset.project;

    openModal(projectKey);
  });
});
