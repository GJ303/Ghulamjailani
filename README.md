# Ghulam Jailani — Portfolio

A simple personal portfolio website built with **HTML**, **CSS** and **JavaScript**.
No frameworks and no installs: open `index.html` in a browser and it works.

---

## 📁 Project structure

```
Ghulamjailani/
├── index.html   → the content (text, sections, links)
├── style.css    → the design (colors, layout, fonts)
├── script.js    → small interactive parts
├── images/      → put photos / project screenshots here
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
Edit these parts in `index.html`:
| What | Where |
|------|-------|
| Name | `<title>`, the hero `<h1>`, the footer |
| Job title | `<p class="subtitle">` |
| About text | `#about` section |
| Skills | each `<li>` in `#skills` |
| Projects | copy/paste a `<div class="card">…</div>` block for each project |
| Contact | email and GitHub links in `#contact` |

Change the colors in one place — the `:root` block at the top of `style.css`.

To add a photo: put it in `images/` (e.g. `images/profile.jpg`) and add
`<img src="images/profile.jpg" alt="Photo of Ghulam Jailani">` in the hero section.

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
- Add a profile photo and project screenshots
- Add a "Download CV" button (`<a href="cv.pdf" download>`)
- Add a light/dark mode toggle in `script.js`
- Buy a custom domain and connect it in *Settings → Pages*
