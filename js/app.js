const projectsGrid = document.getElementById("projects-grid");
const filters = document.querySelectorAll(".filter");

const modal = document.getElementById("video-modal");
const modalClose = document.querySelector(".modal-close");

const videoPlayer = document.getElementById("aparat-player");

const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalDescription = document.getElementById("modal-description");

let currentLanguage =
    localStorage.getItem("portfolio-language") || "en";


/* =========================
   TEXT
========================= */

function getText(value) {
    if (typeof value === "object" && value !== null) {
        return value[currentLanguage] || value.en || "";
    }

    return value || "";
}


/* =========================
   PROJECTS
========================= */

function renderProjects(filter = "all") {

    projectsGrid.innerHTML = "";

    const filteredProjects =
        filter === "all"
            ? projects
            : projects.filter(
                project => project.category === filter
            );

    filteredProjects.forEach(project => {

        const card = document.createElement("article");

        card.className = "project-card";

        const title = getText(project.title);
        const categoryLabel = getText(project.categoryLabel);

        card.innerHTML = `
            <div class="project-image">

                <img
                    src="${project.image}"
                    alt="${title}"
                    loading="lazy"
                >

                <div class="project-overlay">
                    <span class="play-button">▶</span>
                </div>

            </div>

            <div class="project-info">

                <div>

                    <span class="project-category">
                        ${categoryLabel}
                    </span>

                    <h3>${title}</h3>

                </div>

                <span class="project-arrow">↗</span>

            </div>
        `;

        card.addEventListener("click", () => {
            openProject(project);
        });

        projectsGrid.appendChild(card);
    });
}


/* =========================
   OPEN VIDEO
========================= */

function openProject(project) {

    // بستن منوی موبایل در صورت باز بودن
    if (nav) {
        nav.classList.remove("open");
    }

    if (menuToggle) {
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    }

    // باز کردن ویدئو
    modal.classList.add("active");
    document.body.classList.add("modal-open");

    modalTitle.textContent =
        getText(project.title);

    modalCategory.textContent =
        getText(project.categoryLabel);

    modalDescription.textContent =
        getText(project.description);


    /* Clear previous video */

    videoPlayer.innerHTML = "";


    /* Create HTML5 video */

    const video = document.createElement("video");

    video.controls = true;

    video.playsInline = true;

    video.preload = "metadata";

    video.setAttribute("controlsList", "nodownload");


    /* Video source */

    const source = document.createElement("source");

    source.src = project.video;

    source.type = "video/mp4";


    video.appendChild(source);

    videoPlayer.appendChild(video);
}


/* =========================
   CLOSE VIDEO
========================= */

function closeModal() {

    modal.classList.remove("active");

    document.body.classList.remove("modal-open");


    /* Stop video */

    videoPlayer.innerHTML = "";
}


modalClose.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {
            closeModal();
        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {
            closeModal();
        }

    }
);


/* =========================
   FILTERS
========================= */

filters.forEach(filter => {

    filter.addEventListener(
        "click",
        () => {

            filters.forEach(button => {
                button.classList.remove("active");
            });

            filter.classList.add("active");

            renderProjects(
                filter.dataset.filter
            );
        }
    );

});


/* =========================
   MOBILE MENU
========================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const nav =
    document.querySelector(".nav");


if (menuToggle && nav) {

    menuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                nav.classList.toggle("open");

            menuToggle.classList.toggle(
                "active",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );
        }
    );
}


document
    .querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove("open");

                menuToggle.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        );

    });


/* =========================
   LANGUAGE
========================= */

const languageButtons =
    document.querySelectorAll(".language-btn");

const translatableElements =
    document.querySelectorAll("[data-en]");


function setLanguage(lang) {

    currentLanguage = lang;

    document.documentElement.lang = lang;


    /*
       Keep the entire website LTR.
       Persian only changes the text,
       not the layout.
    */

    document.documentElement.dir = "ltr";

    document.body.classList.remove("rtl");


    translatableElements.forEach(
        element => {

            if (element.dataset[lang]) {

                element.textContent =
                    element.dataset[lang];

            }

        }
    );


    languageButtons.forEach(
        button => {

            button.classList.toggle(
                "active",
                button.dataset.lang === lang
            );

        }
    );


    localStorage.setItem(
        "portfolio-language",
        lang
    );


    const activeFilter =
        document.querySelector(
            ".filter.active"
        );


    renderProjects(
        activeFilter
            ? activeFilter.dataset.filter
            : "all"
    );
}


languageButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {
                setLanguage(
                    button.dataset.lang
                );
            }
        );

    }
);


/* =========================
   INITIALIZE
========================= */

setLanguage(currentLanguage);

renderProjects();