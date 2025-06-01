document.addEventListener("DOMContentLoaded", () => {
    const DATA_URL = "data/links.json";

    fetch(DATA_URL)
        .then((res) => {
            if (!res.ok) throw new Error("No se pudo cargar links.json");
            return res.json();
        })
        .then((data) => {
            // 1) <title> de la página
            if (data.pageTitle) {
                document.getElementById("page-title").textContent = data.pageTitle;
            }

            // 2) CABECERA (brand)
            document.getElementById("brand-name").textContent = data.brand.name;
            document.getElementById("brand-tagline").textContent =
                data.brand.tagline;

            // 3) AVATAR
            const avatarImg = document.getElementById("avatar-img");
            avatarImg.src = data.avatar;
            avatarImg.alt = `Avatar pixelado de ${data.brand.name}`;

            // 4) LISTA DE ENLACES
            const linksContainer = document.getElementById("links-container");
            data.links.forEach((linkObj) => {
                const a = document.createElement("a");
                a.className = "link-item";
                a.href = linkObj.url;
                a.target = "_blank";
                a.rel = "noopener";

                // Si hay icono PNG, lo insertamos
                if (linkObj.icon) {
                    const img = document.createElement("img");
                    img.src = linkObj.icon;
                    img.alt = linkObj.name;
                    a.appendChild(img);
                }

                // Nombre del enlace
                const span = document.createElement("span");
                span.textContent = linkObj.name;
                a.appendChild(span);

                linksContainer.appendChild(a);
            });

            // 5) TEXTO “ABOUT”
            document.getElementById("about-text").textContent = data.about;

            // 6) FOOTER TEXT
            if (data.footerText) {
                document.getElementById("footer-text").textContent =
                    data.footerText;
            }

            // 7) ICONOS SOCIALES (Font Awesome)
            const footerIcons = document.getElementById("footer-icons");
            data.social.forEach((socialObj) => {
                const a = document.createElement("a");
                a.href = socialObj.url;
                a.target = "_blank";
                a.rel = "noopener";

                // <i class="fab fa-xxx"></i>
                const icon = document.createElement("i");
                icon.className = `fab fa-${socialObj.platform}`;
                a.appendChild(icon);

                footerIcons.appendChild(a);
            });
        })
        .catch((err) => {
            console.error(err);
            const container = document.querySelector(".container");
            const errorMsg = document.createElement("p");
            errorMsg.textContent =
                "Error al cargar la información. Por favor intenta más tarde.";
            errorMsg.style.color = "red";
            errorMsg.style.textAlign = "center";
            errorMsg.style.marginTop = "20px";
            container.appendChild(errorMsg);
        });
});
