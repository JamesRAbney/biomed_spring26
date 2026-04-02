# AI Support Guide — Introductory Biomedical Imaging Website

## How to Use This File

You are helping a **non-technical user** make updates to a course website for "Introductory Biomedical Imaging" (Physics 390, Lewis & Clark College). When answering questions:

- Be clear and friendly, not overly technical.
- Always tell the user **exactly which file(s) to open and edit**, using the file paths listed in this document.
- If the user is asking about adding or editing content involving code, refer to the steps below to request the correct files before providing support. 
- Keep explanations concise — one or two sentences of context, then the specific steps.
- If a change involves uploading a new PDF or image, tell the user the correct folder to place the file in, and what the filename should match.

### Requesting Files from the User

This guide gives you the structure and purpose of every file, but **you do not have the actual file contents** unless the user uploads them. Follow these rules:

1. **Use this guide first.** For many questions — especially about *where* to make a change — the file map below is enough to give a complete answer without needing to read any file. Do this whenever possible.

2. **Ask for only the specific file(s) you need.** If you need to read actual code to give precise instructions (e.g., to find an exact line number, verify current content, or check a specific value), ask the user to upload just the files relevant to their question. 

3. **Tell the user the exact filename to upload.** Use the filenames exactly as listed in this document (e.g., `inputs.json`, `lecture_notes.html`). For example: *"To help with this, please upload the file called `inputs.json` from your project folder."*

4. **Never ask for assets unless necessary.** PDF files, images, and ZIP files in the `assets/` folder almost never need to be read — they just need to be replaced or added. Do not ask the user to upload these unless there is a specific reason.

**Quick reference — which file to request for common questions:**

| Question type | File to request |
|---|---|
| Updating a PDF link (syllabus, lecture, activity, etc.) | `inputs.json` |
| Changing text on the home page | `index.html` |
| Changing text on the Course Materials page | `course_materials.html` |
| Adding/editing a lecture row or topic | `lecture_notes.html` |
| Adding/editing an activity row | `activities.html` |
| Editing a case study's text or images | `case_study1.html`, `case_study2.html`, or `case_study3.html` |
| Editing a simulation description | `simulation_ultrasound.html`, `simulation_xray.html`, `simulation_radionuclide.html`, or `simulation_magnetic.html` |
| Updating an author bio | `author_information.html` |
| Changing colors, fonts, or layout | The relevant CSS file (see Stylesheets section) |
| Changing the navigation menu | Every `.html` file (all 13 pages share a copy) |

---

## Site Overview

This is a **static HTML website** — meaning it is made of simple text files (.html, .css) that a browser reads directly. There is no database or complex backend. Most updates involve editing one of the HTML files or replacing a file in the `assets/` folder.

The one exception is the **blog feed** on the home page, which pulls live posts from an external service called Contentful.

The site has the following main sections, each with its own HTML page:

| Page | File | What It Shows |
|---|---|---|
| Home | `index.html` | Welcome text, book cover, and recent blog posts |
| Course Materials | `course_materials.html` | Syllabus, slides, reviews, practice exams, homework |
| Lecture Notes | `lecture_notes.html` | Table of all 39 lectures with dates and topics |
| In-Class Activities | `activities.html` | Table of all 15 activities with dates and topics |
| Case Studies | `case_studies.html` | Overview page linking to individual case studies |
| Case Study 1 | `case_study1.html` | Veterinary exam (X-ray & ultrasound of Ranger the cat) |
| Case Study 2 | `case_study2.html` | EGD and colonoscopy (currently a stub — no body content yet) |
| Case Study 3 | `case_study3.html` | Lumbar spine MRI (currently a stub — no body content yet) |
| Simulations | `simulations.html` | Overview of all four simulation suites |
| Ultrasound Simulations | `simulation_ultrasound.html` | 8 ultrasound simulation entries |
| X-Ray Simulations | `simulation_xray.html` | 6 X-ray/CT simulation entries |
| Radionuclide Simulations | `simulation_radionuclide.html` | 6 nuclear medicine simulation entries |
| MRI Simulations | `simulation_magnetic.html` | 7 MRI simulation entries |
| Author Information | `author_information.html` | Bios for authors, illustrator, and web developers |

---

## File-by-File Reference

### `index.html` — Home Page
The main landing page. Contains:
- The site header ("Introductory Biomedical Imaging" / authors' names)
- The navigation menu (shared across all pages — see note below)
- A welcome paragraph describing the textbook
- The book cover image and "Order" buttons linking to Routledge and Amazon
- A blog section (`<div id="blog-container">`) that automatically loads the 3 most recent posts from the external blog at `blog.introbiomedicalimaging.org`

**Common updates:**
- To change the welcome text → edit the `<p>` paragraph block inside `<div class="text-container">`
- To change the book cover image → replace `assets/home/bookCover.jpg`
- To change the Routledge or Amazon order links → find the `<a href="...">Order - Routledge</a>` and `<a href="...">Order - Amazon</a>` lines
- To change the copyright year in the footer → edit the `<footer>` at the bottom

---

### `course_materials.html` — Course Materials Page
Lists all downloadable course materials in card-style boxes. Has two sections: "Student Materials" and "Teaching Materials."

Student materials include: Syllabus, Lecture Notes (links to `lecture_notes.html`), PowerPoint Slides (3 PDFs), In-Class Activities (links to `activities.html`), Course Reviews (3 PDFs), Practice Examinations (2 PDFs).

Teaching materials include: Homework Materials (a .zip file), and a note about the Solution Manual.

There is also an Errata link at the bottom of the page.

**Common updates:**
- To swap out any PDF (e.g., a new syllabus) → replace the corresponding file in `assets/course_materials/` and update the link in `inputs.json` (see below)
- To change description text for a material → find the matching `<p>` tag inside the relevant `<div class="Materials">` block
- To add a new material card → copy an existing `<div class="Materials">` block and fill in the new title, description, and link

---

### `lecture_notes.html` — Lecture Notes Page
Displays a table of all 39 lectures. Each row shows the lecture number (as a clickable link), the date, key topics, and the textbook chapter.

**How the links work:** The lecture number links (e.g., `<a class="link_lecture_01">`) do **not** have their `href` written directly in this file. Instead, the links are filled in automatically from `inputs.json` by the script `js/url.js`. This means **to update a lecture note PDF link, you only need to edit `inputs.json`** — not this HTML file.

**Common updates:**
- To add or update a lecture PDF → put the new PDF in `assets/lecture_notes/`, then update the matching `"link_lecture_XX"` entry in `inputs.json`
- To update the date or topic for a lecture → find the matching `<tr>` row in the `<tbody>` of this file and edit the text inside the `<td>` cells
- To add a new lecture row → copy an existing `<tr>` row and update the number, date, topic, and chapter

---

### `activities.html` — In-Class Activities Page
Displays a table of all 15 in-class activities. Same structure as `lecture_notes.html` — links use the `link_activity_XX` class names and are resolved from `inputs.json`.

**Common updates:**
- To add or update an activity PDF → put the PDF in `assets/activities/`, then update the matching `"link_activity_XX"` entry in `inputs.json`
- To update the date or title for an activity → edit the matching `<tr>` row in this file

---

### `case_studies.html` — Case Studies Overview Page
Shows a 2×2 grid of case study cards, each with a thumbnail image, title, and short description, linking to the individual case study pages.

Case Study 4 is currently a placeholder — the card exists but its link is empty (`href=""`).

**Common updates:**
- To update a case study description → find the matching `<div class="Materials">` block and edit the `<p>` text
- To add a thumbnail image for Case Study 3 or 4 → add the image to `assets/case_studies/case_study3/` or `case_study4/` and update the `<img src="...">` in this file
- To link Case Study 4 to a real page → create the page and add its filename to `<a href="...">`

---

### `case_study1.html` — Case Study 1: Veterinary Examination
The most fully developed case study page. Contains written descriptions of X-ray and ultrasound examinations of Ranger the cat, along with a gallery of the actual X-ray radiographs and ~20 ultrasound images.

Images are stored in `assets/case_studies/case_study1/`.

**Common updates:**
- To update the written narrative → edit the `<p>` text blocks inside `<body class="caseContent">`
- To add or replace images in the gallery → add the new image to `assets/case_studies/case_study1/` and update the `<img src="...">` tags in the `RangerUltrasound` section

---

### `case_study2.html` — Case Study 2: EGD and Colonoscopy
Currently a stub. The page has the header, navigation menu, and the `<h1>` title, but the `<body>` has no content yet.

**To add content:** Edit this file and add text and/or images inside the `<body>` tag, following the same structure as `case_study1.html`.

---

### `case_study3.html` — Case Study 3: Lumbar Spine MRI
Currently a stub. Same situation as `case_study2.html` — header and title exist, but no body content.

---

### `simulations.html` — Simulations Overview Page
Shows a 2×2 grid linking to the four simulation sub-pages: Ultrasound, X-Ray, Radionuclide, and MRI. Each card has a thumbnail image, title, and one-sentence description. Also has an introductory paragraph and an acknowledgement of NSF funding.

**Common updates:**
- To change the intro or acknowledgement text → edit the `<h3>` tags inside the `<section class="Intro-Text">` blocks
- To change a card's thumbnail → replace the corresponding image in `assets/sims/sim_main/`

---

### `simulation_ultrasound.html` — Ultrasound Simulations
Lists 8 interactive ultrasound simulations hosted externally at `medicalimaging.watzekdi.net`. Each entry is a card with a thumbnail, title (linked to the external simulation), and description. There is also an introductory paragraph explaining ultrasound imaging.

Thumbnails are in `assets/sims/sim_ultrasound/`.

**Common updates:**
- To add a new simulation → copy an existing `<div class="Materials">` block, update the image path, the link URL, the title, and the description text
- To update the intro text → edit the `<h3>` inside `<section class="Intro-Text">`
- To change a thumbnail → replace the image in `assets/sims/sim_ultrasound/`

---

### `simulation_xray.html` — X-Ray Simulations
Lists 6 X-ray / CT simulations in the same format as the ultrasound page. Thumbnails are in `assets/sims/sim_xray/`.

---

### `simulation_radionuclide.html` — Radionuclide Simulations
Lists 6 nuclear medicine / radionuclide simulations. Thumbnails are in `assets/sims/sim_radionuclide/`.

---

### `simulation_magnetic.html` — MRI Simulations
Lists 7 MRI simulations. Thumbnails are in `assets/sims/sim_magnetic/`.

---

### `author_information.html` — Author Information Page
Contains biographical paragraphs for:
- **Bethe A. Scalettar** (author, professor at Lewis & Clark)
- **James R. Abney** (author, IP attorney)
- **Cyan Cowap** (illustrator)
- The **website development team**

Also displays two fluorescence microscopy images in `assets/author_info/`.

**Common updates:**
- To update a bio → find the matching `<div class="Authors">` block and edit the `<p>` text
- To update an email or website link → find the `<a href="mailto:...">` or `<a href="https://...">` within that bio block
- To add a photo → add the image file to `assets/author_info/` and reference it in a new `<div class="Images">` block

---

## The Navigation Menu

The navigation menu appears on **every page** of the site. However, it is **not stored in a single shared file** — it is copied into each HTML file individually. This means if you need to add a new item to the menu, you must edit every single HTML page.

The menu is the `<ul class="navigation">` block inside `<div class="menu-container">`. All 13 HTML files contain this same block.

On each page, the currently active section is highlighted in red using a `<new>` tag (e.g., `<new>Course Materials</new>`).

---

## Key Support Files

### `inputs.json` — Central Link Registry
This is the most important file for managing downloadable content. It stores all the file paths for PDFs and other linked documents as key-value pairs. The JavaScript file `js/url.js` reads this file on page load and automatically inserts the correct `href` into any HTML element whose `class` name matches a key in this file.

**Example:** If you want to update the syllabus PDF, change the value for `"link_syllabus"` in `inputs.json`. You do not need to touch any HTML file.

Keys in `inputs.json` and what they control:

| Key | What It Links To |
|---|---|
| `link_syllabus` | Syllabus PDF |
| `link_lecture_notes` | Lecture Notes page |
| `link_homework_zip` | Homework materials ZIP file |
| `link_slides_microscopy` | Microscopy PowerPoint PDF |
| `link_slides_medical` | Medical Imaging PowerPoint PDF |
| `link_slides_dip` | Digital Image Processing PowerPoint PDF |
| `link_review_microscopy` | Review of Microscopy PDF |
| `link_review_medical` | Review of Medical Imaging PDF |
| `link_review_digital` | Review of Digital Image Processing PDF |
| `link_practice_midterm` | Practice Midterm PDF |
| `link_practice_final` | Practice Final PDF |
| `link_errata` | Textbook Errata PDF |
| `link_lecture_01` through `link_lecture_39` | Individual lecture note PDFs (39 total) |
| `link_activity_01` through `link_activity_15` | Individual activity PDFs (15 total) |

---

### `js/url.js` — Link Injection Script
This JavaScript file runs automatically when any page loads. It fetches `inputs.json` and sets the `href` attribute on any HTML element whose `class` matches a key in that file. This is why most links on the site say `href="#"` in the HTML — they are filled in dynamically.

**You should not need to edit this file** unless the link injection system itself needs to change.

---

### `api/posts.js` — Blog Feed API
This is a server-side script that fetches the 3 most recent blog posts from **Contentful** (an external content management system) and returns them to the home page. It uses two environment variables: `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN`.

The blog posts themselves are managed at `blog.introbiomedicalimaging.org`, not in this codebase. To add or edit a blog post, that is done through the Contentful platform, not by editing any file here.

---

### `package.json` — Project Dependencies
Declares this as a Node.js project named `biomed-site` and lists one dependency: the `contentful` library (used by `api/posts.js`). You should not need to edit this file.

---

### `README.md` — Project README
Currently contains only the project name (`# biomed_spring26`). Effectively empty.

---

### `.gitignore` — Git Ignore Rules
Tells Git to ignore `.vscode`, `.idea`, and `.DS_Store` files. You do not need to edit this.

---

## Stylesheets (CSS Files)

CSS files control the visual appearance of the site — colors, fonts, spacing, layout. You would edit these if you want to change how something *looks* (not its content).

| File | What It Styles |
|---|---|
| `stylesheet.css` | **Global styles** shared by all pages: header banner, navigation menu, footer, blog cards on the home page, and the basic `.row` layout grid |
| `home_page_stylesheet.css` | Home page–specific styles: the text/book-cover two-column layout, the "WELCOME" heading, "Order" buttons, and the blog card layout |
| `course_materials_stylesheet.css` | Styles for `course_materials.html` and `case_studies.html`: the `.Materials` card boxes, section headers, thumbnail images, and text formatting |
| `lecture_notes_stylesheet.css` | Styles for `lecture_notes.html`: the lecture table (column widths, header colors, row formatting) |
| `activities_stylesheet.css` | Styles for `activities.html`: identical in structure to `lecture_notes_stylesheet.css` — same table layout |
| `simulations_stylesheet.css` | Styles for `simulations.html` and the simulation sub-pages: same `.Materials` card layout, adapted for wider thumbnails |
| `sims_stylesheet.css` | An additional stylesheet for simulation sub-pages (loaded by `simulation_*.html`): controls `.Materials` card sizing with different thumbnail dimensions |
| `author_information_stylesheet.css` | Styles for `author_information.html`: the `.Authors` bio boxes, the two-column image layout (`.row-2`), and image sizing |
| `case_study.css` | Styles for `case_study1.html`, `case_study2.html`, `case_study3.html`: headings, image galleries (`.radiographs`, `.RangerUltrasound`, `.ImageAcq`), and image borders |

---

## Assets Folder Structure

All static files (images, PDFs, ZIP) live inside the `assets/` folder:

```
assets/
├── home/
│   └── bookCover.jpg                        ← Book cover image on home page
├── neuron .jpg / neuron .tif                ← Background image for the site header banner
├── 20260319_Textbook_Errata.pdf             ← Textbook errata document
├── Physics_390-Lecture_18_SP26.pdf          ← (Loose file — likely a test/temporary upload)
│
├── course_materials/
│   ├── syllabus/
│   │   ├── Physics_390-Syllabus_SP26.pdf
│   │   └── Physics 390 - Syllabus (Thumbnail) SP26.jpg
│   ├── slides/
│   │   ├── Microscopy_PPTs_Version1.pdf
│   │   ├── Powerpoint_Slides_Microscopy.pdf  ← (duplicate/alternate version)
│   │   ├── Medical_PPTs_Version1.pdf
│   │   ├── DIP_PPTs_Version1.pdf
│   │   └── PowerPoint_Thumbnail.jpg
│   ├── in_class_activities/
│   │   ├── Physics_390-In-Class_Activities_SP26.pdf
│   │   └── Physics 390 - In-Class Activities (Thumbnail) SP26.jpg
│   ├── practice_exams/
│   │   ├── Physics390-Practice_Midterm_SP26.pdf
│   │   ├── Physics 390 Practice Final-SP26.pdf
│   │   └── PracticeMidterm_Thumbnail.jpg
│   ├── review/
│   │   ├── Review_Microscopy.pdf
│   │   ├── Review_Medical.pdf
│   │   ├── Review_Digital.pdf
│   │   └── Review_Thumbnail.jpg
│   ├── IntroductoryBiomedicalImaging-Homework_Files.zip
│   ├── Physics_390-Lecture_Notes_SP26.pdf
│   ├── Physics 390 - Lecture Notes (Thumbnail) (SP26).jpg
│   ├── Introductory Biomedical Imaging - Solution Manual (Thumbnail).jpg
│   ├── Introductory Biomedical Imaging - Homework Materials (Thumbnail).tif
│   └── brain.jpg
│
├── lecture_notes/
│   └── Physics_390-Lecture_01_SP26.pdf      ← (through Lecture_39)
│
├── activities/
│   └── Physics390_Activity_1_KEY.pdf         ← (through Activity_15)
│
├── case_studies/
│   ├── case_study1/
│   │   ├── CaseStudy1 (Thumbnail).jpg
│   │   ├── THX_View1_Right_Lateral.jpg       ← X-ray radiograph
│   │   ├── THX_View2_Left_Lateral.jpg        ← X-ray radiograph
│   │   ├── THX_View3_Ventrodorsal.jpg        ← X-ray radiograph
│   │   ├── CS1 - US_Gel.jpg                  ← Ultrasound setup photo
│   │   ├── CS1 - US_Image_Acquisition.jpg    ← Ultrasound acquisition photo
│   │   └── CS1 - US_Image_02.jpg through CS1 - US_Image_21.jpg  ← 20 ultrasound images
│   └── case_study2/
│       └── CaseStudy2 (Thumbnail).jpg
│
├── sims/
│   ├── sim_main/                             ← Thumbnails for simulations.html overview cards
│   ├── sim_ultrasound/                       ← Thumbnails for simulation_ultrasound.html
│   ├── sim_xray/                             ← Thumbnails for simulation_xray.html
│   ├── sim_radionuclide/                     ← Thumbnails for simulation_radionuclide.html
│   └── sim_magnetic/                         ← Thumbnails for simulation_magnetic.html
│
└── author_info/
    ├── J_Neurobiol_66.6.jpg                  ← Fluorescence microscopy image by Bethe Scalettar
    └── Dev.Neurobiol_68.10.jpg               ← Fluorescence microscopy image by Bethe Scalettar
```

---

## Common Update Scenarios

**"I want to upload a new syllabus PDF."**
1. Add the new PDF to `assets/course_materials/syllabus/` (you can overwrite the old file, or use a new filename).
2. If you used a new filename, open `inputs.json` and update the `"link_syllabus"` value to the new path.

**"I want to add a new lecture note (e.g., Lecture 24)."**
1. Add the PDF to `assets/lecture_notes/` — name it following the existing pattern (e.g., `Physics_390-Lecture_24_SP26.pdf`).
2. Open `inputs.json` and update `"link_lecture_24"` to point to that file path.
3. The link in `lecture_notes.html` will automatically start working — you don't need to edit the HTML.

**"I want to update the topic description for Lecture 24."**
1. Open `lecture_notes.html`.
2. Find the row with `link_lecture_24` (search for "link_lecture_24") and edit the text in the adjacent `<td>` cell.

**"I want to change the color of the navigation bar."**
Open `stylesheet.css` and look for `.menu-container` — change its `background-color` value.

**"I want to change the header background image."**
Open `stylesheet.css`, find the `header` block, and change the `url("assets/neuron .jpg")` reference to a different image file.

**"I want to add a new blog post."**
Blog posts are managed through Contentful, not through these files. You would log in to the Contentful platform for `blog.introbiomedicalimaging.org` to create a new post.

**"I want to update an author bio."**
Open `author_information.html` and find the `<div class="Authors">` block for that person. Edit the `<p>` text inside it.

**"I want to add a new case study."**
1. Create a new HTML file (e.g., `case_study4.html`) by copying `case_study1.html` as a template.
2. Replace the content inside `<body>` with the new case study material.
3. Open `case_studies.html` and update the placeholder Case Study 4 card: add the image path, update the title and description, and set `href="case_study4.html"`.
4. Add the new page to the navigation menu in **every HTML file** (see the Navigation Menu section above).
