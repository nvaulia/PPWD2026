// ==========================================
// 1. TYPING EFFECT
// ==========================================

const typingText = document.getElementById("typing-text");

const nameText = "Novi Aulia";

let typingIndex = 0;

function typingEffect() {

    if (!typingText) {
        return;
    }

    if (typingIndex < nameText.length) {

        typingText.textContent +=
            nameText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typingEffect, 120);

    } else {

        setTimeout(() => {

            typingText.textContent = "";

            typingIndex = 0;

            typingEffect();

        }, 2000);
    }
}

typingEffect();


// ==========================================
// 2. DATA PROJECT
// ==========================================

const projects = [

    {
        icon: "WEB",
        title: "Website Portfolio",
        description:
            "Website portfolio pribadi menggunakan HTML, CSS, dan JavaScript."
    },

    {
        icon: "SYS",
        title: "Sistem Informasi Laundry",
        description:
            "Perancangan sistem informasi laundry untuk membantu proses pemesanan dan pengelolaan data."
    },

    {
        icon: "APP",
        title: "Aplikasi Resep",
        description:
            "Konsep aplikasi resep untuk membantu pengguna menemukan dan mengelola berbagai resep makanan."
    }

];


// ==========================================
// 3. MENAMPILKAN PROJECT
// ==========================================

const projectGrid =
    document.getElementById("project-grid");

if (projectGrid) {

    projects.forEach(function(project) {

        const projectCard =
            document.createElement("div");

        projectCard.classList.add("project-card");

        projectCard.innerHTML = `

            <div class="project-icon">
                ${project.icon}
            </div>

            <h3>
                ${project.title}
            </h3>

            <p>
                ${project.description}
            </p>

        `;

        projectGrid.appendChild(projectCard);

    });

}


// ==========================================
// 4. DARK MODE
// ==========================================

const darkModeBtn =
    document.getElementById("darkModeBtn");


function updateDarkModeButton() {

    if (!darkModeBtn) {
        return;
    }

    const darkMode =
        document.body.classList.contains("dark-mode");

    if (darkMode) {

        darkModeBtn.textContent = "Light Mode";

    } else {

        darkModeBtn.textContent = "Dark Mode";

    }
}


if (darkModeBtn) {

    darkModeBtn.addEventListener(
        "click",
        function() {

            document.body.classList.toggle(
                "dark-mode"
            );

            const darkMode =
                document.body.classList.contains(
                    "dark-mode"
                );

            localStorage.setItem(
                "darkMode",
                darkMode
            );

            updateDarkModeButton();

        }
    );

}


// ==========================================
// 5. MENYIMPAN DARK MODE
// ==========================================

const savedDarkMode =
    localStorage.getItem("darkMode");

if (savedDarkMode === "true") {

    document.body.classList.add(
        "dark-mode"
    );

}

updateDarkModeButton();


// ==========================================
// 6. TAHUN OTOMATIS
// ==========================================

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}