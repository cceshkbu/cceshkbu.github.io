# CCES Website — Content Editing Guide

This is a Jekyll-based static site for the Centre for Climate and Environmental Sustainability (CCES) at Hong Kong Baptist University. All content lives in simple text files that anyone can edit — no coding knowledge required.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [How the Site Works](#how-the-site-works)
3. [Editing Text Content](#editing-text-content)
4. [Adding / Editing News](#adding--editing-news)
5. [Adding / Editing Publications](#adding--editing-publications)
6. [Adding / Editing People Profiles](#adding--editing-people-profiles)
7. [Managing Photos](#managing-photos)
8. [File Reference](#file-reference)
9. [Deployment](#deployment)
10. [Troubleshooting](#troubleshooting)

---

## Quick Start

```bash
# Install dependencies (one-time setup)
bundle install

# Local preview with live reload (opens http://localhost:4000)
bundle exec jekyll serve

# Build for production (outputs to _site/)
bundle exec jekyll build
```

---

## How the Site Works

The site has **7 pages**: Home, About, Research, People, News, Contact, and individual profile/news pages.

**Three types of editable content:**

| Type | Where | Format | Use for |
|------|-------|--------|---------|
| YAML data files | `_data/` | `.yml` files | Page text, settings, lists |
| Markdown articles | `_news/`, `_publications/`, `_people/` | `.md` files | News, papers, people profiles |
| Photos | `assets/images/` | `.jpg`, `.png` | All images on the site |

**Page structure:**
- Each page has an HTML template (e.g. `index.html`, `about.html`)
- Templates read data from `_data/` YAML files
- News, publications, and people are individual `.md` files in their own folders

---

## Editing Text Content

Edit the YAML files in `_data/`. Each file corresponds to a section of the site:

| File | Page | What you can edit |
|------|------|-------------------|
| `_data/site.yml` | Global | Brand name, navigation menu labels |
| `_data/home.yml` | Home | Hero text, objectives, director welcome, CTA |
| `_data/about.yml` | About | Mission, governance description |
| `_data/research.yml` | Research | Research themes, SDGs, student engagement |
| `_data/people.yml` | People | Director info, committee list, fellows list |
| `_data/news.yml` | News | Page intro text |
| `_data/contact.yml` | Contact | Email, phone, address |
| `_data/footer.yml` | Footer | Footer text, external links |
| `_data/publications.yml` | Publications | Page intro text |

### YAML editing rules

Only change the text inside `"quotes"`. Don't remove colons `:`, commas `,`, or dashes `-`.

**Example** — changing the hero title in `_data/home.yml`:
```yaml
# Before:
hero_title: "Climate science and AI for a sustainable future"

# After:
hero_title: "Your new title here"
```

**Example** — changing contact email in `_data/contact.yml`:
```yaml
# Before:
email: "cces@hkbu.edu.hk"

# After:
email: "new-email@hkbu.edu.hk"
```

---

## Adding / Editing News

Each news item is a separate file in the `_news/` folder.

### Create a new news item

1. Create a new file in `_news/` with this naming format:

   ```
   YYYY-MM-DD-short-title.md
   ```

   Example: `2026-06-26-summer-workshop.md`

2. Write the file content like this:

   ```markdown
   ---
   title: "Summer Workshop on Climate Modelling"
   date: 2026-06-26
   tag: "Event"
   image: "news/summer-workshop.jpg"
   excerpt: "A one-day workshop bringing together researchers."
   ---

   Full article text goes here. You can write multiple paragraphs,
   use **bold**, *italic*, [links](https://example.com), etc.

   ## Subheading

   More details here...
   ```

### Front matter fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ | News headline |
| `date` | ✅ | Publication date (YYYY-MM-DD format) |
| `tag` | ✅ | Category label, e.g. "Event", "Milestone", "Coming soon" |
| `image` | ❌ | Photo path, e.g. `"news/my-photo.jpg"` |
| `excerpt` | ❌ | Short summary shown on listing pages (1-2 sentences) |

### Where news appears

- **Home page**: Latest 3 news items as cards with photos
- **News listing page** (`/news.html`): All news items with photos and excerpts
- **News detail page** (`/news/slug/`): Full article with large photo

### Edit an existing news item

Open the `.md` file in `_news/` and edit the text. Save and rebuild.

### Delete a news item

Delete the `.md` file from `_news/`.

---

## Adding / Editing Publications

Each publication is a separate file in the `_publications/` folder.

### Create a new publication

1. Create a new file in `_publications/` with this naming format:

   ```
   YYYY-NN-short-title.md
   ```

   - `YYYY` = publication year
   - `NN` = sequence number within that year (01, 02, 03...) for ordering

   Example: `2026-03-gao-climate-modelling.md`

2. Write the file content:

   ```markdown
   ---
   year: "2026"
   authors: "Author A., Author B., Gao M."
   title: "Title of the paper."
   venue: "Journal Name, Volume(Issue), pp. 1–12."
   link: "https://doi.org/..."
   ---
   ```

### Front matter fields

| Field | Required | Description |
|-------|----------|-------------|
| `year` | ✅ | Publication year, e.g. `"2026"` |
| `authors` | ✅ | Author list as shown on the page |
| `title` | ✅ | Paper title |
| `venue` | ✅ | Journal name, volume, pages |
| `link` | ❌ | URL to the paper (set `""` if not available) |

### How publications are displayed

- Shown on the Research page under the "Selected Publications" tab
- Grouped by year automatically (newest year first)
- Within each year, papers are displayed in filename order (the `NN` number)

---

## Adding / Editing People Profiles

Each person has an individual profile page in the `_people/` folder.

### Create a new profile

1. Create a new file in `_people/` with the person's name in lowercase:

   ```
   firstname-lastname.md
   ```

   Example: `john-smith.md`

2. Write the file content:

   ```markdown
   ---
   name: "Dr. John Smith"
   role: "Postdoctoral Fellow"
   affil: "GEOG · GSIS · FASS"
   image: "people/fellow-john-smith.jpg"
   ---

   Bio text goes here. You can write multiple paragraphs in Markdown.
   ```

3. In `_data/people.yml`, add the person to the appropriate list:

   **For committee members** (Governance tab):
   ```yaml
   committee:
     - name: "Prof. John Smith"
       affil: "DEPT · SCHOOL"
       initials: "JS"
       slug: "john-smith"
       image: "people/committee-john-smith.jpg"
   ```

   **For fellows / team members** (Team & Fellows tab):
   ```yaml
   fellows:
     - name: "Dr. John Smith"
       role: "Postdoctoral Fellow"
       initials: "JS"
       slug: "john-smith"
       image: "people/fellow-john-smith.jpg"
   ```

### Front matter fields

| Field | Required | Description |
|-------|----------|-------------|
| `name` | ✅ | Full name with title |
| `role` | ✅ | Role, e.g. "Director", "Postdoctoral Fellow" |
| `affil` | ✅ | Affiliation, e.g. "GEOG · GSIS · FASS" |
| `image` | ❌ | Photo path (shows initials if not set) |

### People page structure

The People page has two tabs:

| Tab | Content |
|-----|---------|
| **Governance** | Director + Management Committee |
| **Team & Fellows** | Fellows / team members + International Advisory Board |

Each person card is clickable → links to their profile page with photo, name, affiliation, and bio.

---

## Managing Photos

### Image directory structure

```
assets/images/
├── home/
│   └── hero.jpg                  ← Campus / centre photo (home page hero)
├── people/
│   ├── director-gao-meng.jpg     ← Director photo (home + people pages)
│   ├── committee-LASTNAME.jpg    ← Committee member photos
│   ├── fellow-LASTNAME.jpg       ← Fellow / team member photos
│   └── ...
└── news/
    ├── news-item-slug.jpg        ← News article photos
    └── ...
```

### Naming convention

- All lowercase
- Hyphens `-` between words (no spaces)
- Use descriptive names: `committee-guo-meiyu.jpg`, `summer-workshop.jpg`

### Photo sizes (recommended)

| Location | Recommended size |
|----------|-----------------|
| People profile photos | 400×400 px (square) |
| News article photos | 1200×600 px (landscape) |
| Home hero image | 1600×800 px (landscape) |

### Link a photo to a person

In `_data/people.yml`, add an `image` field:

```yaml
committee:
  - name: "Prof. Meiyu Guo"
    affil: "GEOG · GSIS · FASS"
    initials: "MG"
    image: "people/committee-guo-meiyu.jpg"
```

No `image` field → shows initials instead.

### Link a photo to a news item

In the news markdown file front matter:

```yaml
image: "news/summer-workshop.jpg"
```

---

## File Reference

```
CcesWebsite/
├── _config.yml              Site configuration (rarely changes)
│
├── _data/                   ← EDIT THIS: all text content
│   ├── site.yml             Brand name, navigation menu
│   ├── home.yml             Home page content
│   ├── about.yml            About page content
│   ├── research.yml         Research page content
│   ├── people.yml           People page (director, committee, fellows)
│   ├── news.yml             News page intro text
│   ├── contact.yml          Contact information
│   ├── footer.yml           Footer content
│   └── publications.yml     Publications page intro text
│
├── _news/                   ← EDIT THIS: news articles (one .md per news)
│   ├── 2026-01-01-cces-established.md
│   ├── 2026-02-01-inaugural-meeting.md
│   └── ...
│
├── _publications/           ← EDIT THIS: publications (one .md per paper)
│   ├── 2026-01-sample-paper.md
│   ├── 2025-01-sample-paper.md
│   └── ...
│
├── _people/                 ← EDIT THIS: people profiles (one .md per person)
│   ├── meng-gao.md          Director profile
│   ├── michael-ng.md        Committee member
│   ├── meiyu-guo.md         Committee member
│   ├── example-fellow.md    Fellow / team member
│   └── ...
│
├── _includes/               Shared page parts (do not edit unless redesigning)
│   ├── head.html            HTML <head> with fonts, CSS, translate
│   ├── header.html          Site header with nav and language switcher
│   └── footer.html          Site footer
│
├── _layouts/                Page templates (do not edit unless redesigning)
│   ├── default.html         Main layout for all pages
│   ├── news.html            News detail page layout
│   └── person.html          People profile page layout
│
├── assets/
│   ├── css/style.css        Stylesheet (do not edit unless redesigning)
│   ├── js/translate.js      Google Translate script
│   └── images/              ← ADD PHOTOS HERE
│       ├── home/            Home page images
│       ├── people/          People photos
│       └── news/            News photos
│
├── index.html               Home page template
├── about.html               About page template
├── research.html            Research page (with Research/Publications tabs)
├── people.html              People page (with Governance/Team tabs)
├── news.html                News listing template
├── contact.html             Contact page template
├── Gemfile                  Ruby dependencies
└── README.md                This file
```

---

## Deployment

The built site is in `_site/`. Deploy to any static hosting:

### GitHub Pages

1. Push the repo to GitHub
2. Go to repo Settings → Pages
3. Set source to "GitHub Actions" or "Deploy from a branch"
4. Build command: `bundle exec jekyll build`
5. Publish directory: `_site`

### Netlify

1. Connect your repo to Netlify
2. Build command: `bundle exec jekyll build`
3. Publish directory: `_site`

### Any web server

Upload the contents of `_site/` to your web server.

---

## Troubleshooting

### Build fails with "Liquid syntax error"

Check your YAML files for missing quotes or extra colons. Every text value must be in `"quotes"`.

### Changes not showing up

1. Make sure you saved the file
2. Rebuild the site: `bundle exec jekyll build`
3. If using `jekyll serve`, it should auto-reload

### Photo not appearing

1. Check the file exists in `assets/images/`
2. Check the path in YAML matches exactly (case-sensitive)
3. Check the filename has no spaces (use hyphens)

### News/Publication not showing

1. Check the filename format: `YYYY-MM-DD-slug.md` for news, `YYYY-NN-slug.md` for publications
2. Check the front matter has all required fields
3. Rebuild the site
