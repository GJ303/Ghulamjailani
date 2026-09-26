# Ghulam Jellani — Portfolio

Personal portfolio of **Ghulam Jellani**, Test Engineer in Wireless & Mobile Networks (5G / LTE, device testing, RF optimization).

It is a simple website built with **HTML**, **CSS** and **JavaScript**.
No frameworks and no installs: open `index.html` in a browser and it works.

---

## 📁 Project structure

```
Ghulamjailani/
├── index.html   → the content (text, sections, links)
├── style.css    → the design (colors, layout, fonts)
├── script.js    → buttons and animations (language, light/dark, fade-in)
├── translations.js → all the French text
├── images/
│   └── profile.jpg → his profile photo
└── README.md    → this guide
```

**How the files work together:**
- `index.html` is the skeleton. It loads `style.css` in the `<head>` and `script.js` at the bottom of `<body>`.
- `style.css` targets HTML elements by their **class** (`.card`) or **id** (`#about`).
- The nav links (`href="#about"`) jump to the section with the same `id` (`id="about"`).

---

## 🧭 Step-by-step: how this project was made (do it yourself!)

### Step 1 — Create a GitHub account and a repository
1. Go to https://github.com and sign in.
2. Click **+** (top right) → **New repository**.
3. Name it (e.g. `Ghulamjailani`), choose **Public**, then click **Create repository**.

> 💡 Tip: If you name the repo `<username>.github.io`, the site will live at `https://<username>.github.io`.

### Step 2 — Install Git and clone the repo to your computer
1. Install Git: https://git-scm.com/downloads
2. Tell Git who you are (only once):
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "you@example.com"
   ```
3. Copy the repo to your computer:
   ```bash
   git clone https://github.com/<username>/Ghulamjailani.git
   cd Ghulamjailani
   ```

### Step 3 — Install a code editor
Download **VS Code**: https://code.visualstudio.com
Open the project folder with *File → Open Folder*.
Recommended extension: **Live Server** (right-click `index.html` → *Open with Live Server* to see changes instantly).

### Step 4 — Create the files
Create `index.html`, `style.css`, `script.js` and an `images/` folder.
Read the comments in `index.html` — each section is labelled `STEP 1`, `STEP 2`… so you can see what each part does.

### Step 5 — Personalize it
The content comes from his CV. Each section of `index.html` has a `STEP` comment:
| What | Where in `index.html` |
|------|-------|
| Name, job title, location | Hero section (`STEP 3`) |
| Summary + numbers (12+, 6, 4, MSc) | About section (`STEP 4`) |
| Jobs | Experience (`STEP 5`) — copy a `<div class="job">…</div>` block to add a job |
| Skills | Skills cards (`STEP 6`) — each `<li>` is one tag |
| Degrees | Education (`STEP 7`) |
| Email, LinkedIn | Contact (`STEP 8`) |

**Colors:** they are variables at the top of `style.css`.
`:root { ... }` holds the **light mode** colors and `[data-theme="dark"] { ... }` holds the **dark mode** colors.
Change a color in both blocks to keep the two modes matching.

**French / English:** the English text is written in `index.html`. Every translatable element has a
`data-i18n="key"` attribute, for example `<h2 data-i18n="about.title">About Me</h2>`.
The French text for that key is in `translations.js`: `"about.title": "À propos",`.
- To change an English sentence, edit `index.html`.
- To change a French sentence, edit `translations.js`.
- To add new text, give it a new `data-i18n` key in `index.html` **and** add the same key in `translations.js`.

**How the buttons work (`script.js`):**
- 🌙/☀️ sets `data-theme="dark"` or `"light"` on the `<html>` tag, and the CSS changes the colors.
- FR/EN swaps the text of every `[data-i18n]` element.
- Both choices are saved in the browser (`localStorage`), so the page remembers them next time.
- If the visitor's computer uses dark mode or French, the site starts that way automatically.

**Photo:** replace `images/profile.jpg` with a new photo using the same file name.
CSS (`object-fit: cover` + `border-radius: 50%`) crops it into a circle automatically.

**To do:** replace the LinkedIn link in the Contact section with his real profile URL.

### Step 6 — Save your work with Git (commit) and upload it (push)
```bash
git status                 # see which files changed
git add .                  # stage all changes
git commit -m "Add portfolio homepage"   # save a snapshot with a message
git push                   # upload to GitHub
```
Repeat this every time you make changes. Think of a **commit** as a save point and **push** as uploading it.

### Step 7 — Publish the website for free (GitHub Pages)
1. On GitHub, open the repo → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to *Deploy from a branch*.
3. Choose branch **main** and folder **/ (root)** → **Save**.
4. Wait 1–2 minutes. Your site is live at:
   `https://<username>.github.io/Ghulamjailani/`

---

## 🧠 Git vocabulary cheat sheet
| Word | Meaning |
|------|---------|
| **Repository (repo)** | The project folder, tracked by Git |
| **Clone** | Download a copy of a repo |
| **Commit** | A saved snapshot of your changes |
| **Push** | Send your commits to GitHub |
| **Pull** | Get the latest changes from GitHub |
| **Branch** | A separate line of work, so you can try things safely |
| **Pull Request (PR)** | Ask to merge one branch into another |

## 🚀 Ideas for next steps
- Add a "Download CV" button (`<a href="cv.pdf" download>`)
- Add a light/dark mode toggle in `script.js`
- Buy a custom domain and connect it in *Settings → Pages*
