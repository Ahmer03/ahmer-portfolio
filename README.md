# Muhammad Ahmer Roshan Mirza — Portfolio

[![Portfolio checks](https://github.com/Ahmer03/ahmer-portfolio/actions/workflows/main.yml/badge.svg)](https://github.com/Ahmer03/ahmer-portfolio/actions/workflows/main.yml)
[![Deploy Portfolio](https://github.com/Ahmer03/ahmer-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Ahmer03/ahmer-portfolio/actions/workflows/deploy.yml)

A professional portfolio website for Muhammad Ahmer Roshan Mirza, a Computer Science graduate, QA Engineer, and aspiring DevOps Engineer based in Islamabad, Pakistan.

**Live website:** https://ahmer03.github.io/ahmer-portfolio/

## Overview

This portfolio presents Ahmer's professional experience, quality assurance expertise, DevOps learning journey, education, projects, and contact information in a responsive, accessible format.

The site is built as a lightweight static application with no framework or build dependency, making it fast to run and easy to deploy with GitHub Pages.

## Highlights

- Responsive desktop and mobile navigation
- Animated hero roles and scroll progress indicator
- Professional experience and education timeline
- QA testing, tools, and automation skill overview
- DevOps learning roadmap
- Featured project case study for Baseerat
- Downloadable resume
- Direct email, phone, LinkedIn, and GitHub contact links
- GitHub Actions validation and automated deployment

## Tech Stack

- **HTML5** — Semantic page structure and accessible markup
- **CSS3** — Responsive layouts, animations, and visual effects
- **JavaScript** — Navigation, UI interactions, and dynamic content
- **GitHub Actions** — HTML, CSS, JavaScript, link, and security checks
- **GitHub Pages** — Production hosting and deployment

## Project Structure

```text
ahmer-portfolio/
├── .github/
│   └── workflows/
│       ├── main.yml
│       └── deploy.yml
├── index.html                       # Main portfolio page
├── styles.css                       # Global styles and responsive design
├── script.js                        # Interactions and animations
├── Portfolio1.jpeg                  # Profile image
├── Ahmer_Roshan_Mirza_Resume.pdf    # Downloadable resume
├── .htmlvalidate.json               # HTML validation configuration
├── .stylelintrc.json                # CSS lint configuration
└── README.md
```

## Run Locally

### Option 1: VS Code Live Server

1. Open the repository in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

### Option 2: Python HTTP server

```bash
cd ahmer-portfolio
python -m http.server 5500
```

Open http://localhost:5500 in your browser.

### Option 3: Node.js

```bash
npx serve .
```

## Quality Checks

The repository runs automated checks on every push and pull request to `main`.

```bash
# JavaScript syntax
node --check script.js

# CSS linting
npx --yes stylelint@16 styles.css

# HTML validation
npx --yes html-validate@8 index.html
```

Every successful check triggers the GitHub Pages deployment workflow.

## Featured Project

### Baseerat

Baseerat is a Flutter-based assistive application designed to help visually impaired users identify obstacles, estimate distances, understand scenes, recognize faces, and access voice and SOS features.

**Technologies:** Flutter, Django REST Framework, JWT, Computer Vision

## Customize

- Update portfolio content in `index.html`.
- Modify the visual design in `styles.css`.
- Change navigation, animations, or dynamic behavior in `script.js`.
- Replace `Portfolio1.jpeg` to update the profile photo.
- Replace `Ahmer_Roshan_Mirza_Resume.pdf` to update the downloadable resume.

## Deployment

The portfolio is deployed through GitHub Actions:

1. Push changes to the `main` branch.
2. The portfolio checks workflow validates the code.
3. The deployment workflow publishes the site to GitHub Pages after the checks succeed.

## Contact

- **Email:** [ahmermirza2003@gmail.com](mailto:ahmermirza2003@gmail.com)
- **Phone:** [+92 339 8099685](tel:+923398099685)
- **LinkedIn:** [Muhammad Ahmer Roshan Mirza](https://linkedin.com/in/muhammad-ahmer-roshan-mirza)
- **GitHub:** [github.com/Ahmer03](https://github.com/Ahmer03)

## Author

**Muhammad Ahmer Roshan Mirza**

QA Engineer focused on reliable releases, practical testing, and high-quality user experiences. Currently developing skills in Linux, Docker, AWS, CI/CD, and DevOps automation.

---

<p align="center">Built with HTML, CSS, and JavaScript — deployed through GitHub Pages.</p>
