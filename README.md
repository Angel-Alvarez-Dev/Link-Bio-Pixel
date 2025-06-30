# Link Bio – CAPRICIUM

**CAPRICIUM** (Creative Coder) es un Link Bio minimalista en pixel art monocromático verde sobre fondo beige.  
Este proyecto permite agrupar todos tus enlaces personales (Cults3D, Patreon, Instagram, etc.) en una sola página fácil de mantener.

---

## 📂 Estructura de carpetas

```
Link-Bio-V2/
│
├── index.html
├── .gitignore
├── README.md
│
├── assets/
│   └── images/
│       ├── avatar-green.png
│       ├── cults3d.png
│       ├── patreon.png
│       ├── instagram.png
│       ├── pinterest.png
│       ├── web.png
│       └── github.png
│
├── css/
│   └── style-creative.css
│
├── data/
│   └── links.json
│
└── js/
    └── main.js
```

---

## ✏️ ¿Qué hace cada carpeta/archivo?

- **`index.html`**  
  Plantilla base con contenedores vacíos (IDs) que `main.js` llenará dinámicamente (cabecera, avatar, enlaces, About, footer).

- **`css/style-creative.css`**  
  Estilos que definen la paleta de colores (beige y verde), tipografías, espacios y layout responsivo. Incluye reglas para iconos de Font Awesome y pixel art.

- **`js/main.js`**  
  Script que:
  1. Hace `fetch("data/links.json")` para cargar toda la configuración.  
  2. Inyecta marca, avatar, lista de enlaces (con iconos pixel art), texto About y footer (iconos sociales con Font Awesome).  
  3. Muestra un mensaje de error si no logra cargar el JSON.

- **`data/links.json`**  
  Archivo de configuración (texto que puede cambiar):  
  - `pageTitle`: título de la pestaña.  
  - `brand.name` y `brand.tagline`  
  - `avatar`: ruta al avatar pixel art.  
  - `links`: arreglo con `{ name, url, icon }` para cada enlace principal.  
  - `about`: texto de presentación.  
  - `social`: arreglo `{ platform, url }` para iconos sociales en el footer.  
  - `footerText`: texto del pie de página.

- **`assets/images/`**  
  Carpeta con:  
  - **`avatar-green.png`**: retrato pixelado en verde (120×120 px).  
  - **Iconos pixel art** (`cults3d.png`, `patreon.png`, `instagram.png`, `pinterest.png`, `web.png`, `github.png`) a **48×48 px** cada uno.  

---

## ▶️ Cómo ver el proyecto localmente

> **IMPORTANTE**: Para que `fetch("data/links.json")` funcione, el proyecto debe ser servido por HTTP, no abriéndolo con `file://`.

### Opción 1: Python 3

1. Abre PowerShell o CMD y navega a la carpeta del proyecto:
   ```bash
   cd "C:\Users\alvar\OneDrive\Documentos\3d\iD\Link-Bio-V2"
   ```
2. Ejecuta:
   ```bash
   python -m http.server 8000
   ```
3. Ve en el navegador a:
   ```
   http://localhost:8000
   ```

### Opción 2: Node.js (`http-server`)

1. Instala `http-server` (si no lo tienes):
   ```bash
   npm install -g http-server
   ```
2. Desde la carpeta del proyecto:
   ```bash
   cd "C:\Users\alvar\OneDrive\Documentos\3d\iD\Link-Bio-V2"
   http-server -p 8000
   ```
3. Abre:
   ```
   http://localhost:8000
   ```

### Opción 3: Live Server (VS Code)

1. Abre `Link-Bio-V2` en VS Code.  
2. Instala la extensión **Live Server**.  
3. Haz clic derecho en `index.html` y selecciona **“Open with Live Server”**.  
4. El navegador se abrirá en una dirección como `http://127.0.0.1:5500/index.html`.

---

## 📝 Ejemplo de `data/links.json`

```json
{
  "pageTitle": "José Ángel | Capricium",
  "brand": {
    "name": "CAPRICIUM",
    "tagline": "CREATIVE CODER"
  },
  "avatar": "assets/images/avatar-green.png",
  "links": [
    {
      "name": "Link en Bio Personal",
      "url": "https://angel-alvarez-dev.github.io/Link-Bio-Pixel",
      "icon": "assets/images/web.png"
    },
    {
      "name": "Instagram Personal",
      "url": "https://www.instagram.com/jose.angel.co?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      "icon": "assets/images/instagram.png"
    },
    {
      "name": "GitHub – Ángel Álvarez Dev",
      "url": "https://github.com/Angel-Alvarez-Dev",
      "icon": "assets/images/github.png"
    },
    {
      "name": "Contacto Personal",
      "url": "mailto:alvarezvillegasjoseangel@gmail.com",
      "icon": "assets/images/email.png"
    },
    {
      "name": "Modelos 3D – Archive en Cults3D",
      "url": "https://cults3d.com/@Archive_co",
      "icon": "assets/images/cults3d.png"
    },
    {
      "name": "Instagram – Archive",
      "url": "https://www.instagram.com/archivo.co?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      "icon": "assets/images/instagram.png"
    },
    {
      "name": "Pinterest – Archive",
      "url": "https://mx.pinterest.com/Archivo_co/",
      "icon": "assets/images/pinterest.png"
    },
    {
      "name": "Web – Archive",
      "url": "https://archive.com.mx/",
      "icon": "assets/images/web.png"
    },
    {
      "name": "Contacto – Archive",
      "url": "mailto:info@archive.com.mx",
      "icon": "assets/images/email.png"
    }
  ],
  "about": "Soy José Ángel, diseñador 3D y programador técnico. Creo recursos para makers e ingenieros: modelos STL gratuitos y premium, tutoriales y herramientas. Mi objetivo es simplificar tu flujo de trabajo en impresión 3D y desarrollo creativo. 🚀",
  "social": [
    {
      "platform": "twitter",
      "url": "https://twitter.com/Capricium"
    },
    {
      "platform": "instagram",
      "url": "https://www.instagram.com/jose.angel.co"
    },
    {
      "platform": "youtube",
      "url": "https://www.youtube.com/Capricium"
    },
    {
      "platform": "github",
      "url": "https://github.com/Angel-Alvarez-Dev"
    }
  ],
  "footerText": "© 2025 José Ángel – Todos los derechos reservados"
}

  "about": "Soy José Ángel, diseñador 3D y programador técnico. Creo recursos para makers e ingenieros: modelos STL gratuitos y premium, tutoriales y herramientas. Mi objetivo es simplificar tu flujo de trabajo en impresión 3D y desarrollo creativo. 🚀",
  "social": [
    {
      "platform": "twitter",
      "url": "https://twitter.com/Capricium"
    },
    {
      "platform": "instagram",
      "url": "https://www.instagram.com/capricium.co"
    },
    {
      "platform": "youtube",
      "url": "https://www.youtube.com/Capricium"
    },
    {
      "platform": "github",
      "url": "https://github.com/Angel-Alvarez-Dev"
    }
  ],
  "footerText": "© 2025 José Ángel – Todos los derechos reservados"
}
```

---

## 🚀 Subiendo a GitHub

1. Desde la carpeta `Link-Bio-V2`, inicializa el repositorio:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Link Bio CAPRICIUM"
   ```
2. Crea un repositorio nuevo en GitHub (por ejemplo, `link-bio-capricium`) y copia la URL remota.  
3. En tu terminal, enlaza y sube los cambios:
   ```bash
   git remote add origin https://github.com/tu-usuario/link-bio-capricium.git
   git branch -M main
   git push -u origin main
   ```
   Reemplaza `tu-usuario` y el nombre del repo por los tuyos.

¡Listo! Tu proyecto está completo, documentado y listo para ser hospedado en GitHub Pages o cualquier otro hosting estático.
