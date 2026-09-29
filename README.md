# RCCG The Lighthouse Parish — Website

A modern, responsive website for RCCG The Lighthouse Parish, built with plain HTML, CSS, and JavaScript. No frameworks, no build tools.

**Live site:** https://tochukwuazubuike08-sudo.github.io/RCCG-Lighthouse-Parish/

<!-- Add a screenshot here once you have one. Example: -->
<!-- ![Site screenshot](images/screenshot.png) -->

## Overview

A single-page site for a local church, including service times, a current announcement, an interactive Bible verse generator, and a working prayer request form that emails submissions through Formspree.

## Built with

- HTML5
- CSS3 (custom properties, Grid, Flexbox, responsive design)
- Vanilla JavaScript (no libraries or frameworks)
- Formspree (form handling, no custom backend)
- Google Fonts (Playfair Display, DM Sans)

## Features

- Responsive layout, tested down to small mobile screens
- Sticky navigation with a mobile hamburger menu
- Auto-scrolling announcement ticker
- An editable, hideable "Special Service" announcement section for current church events
- Random Bible verse generator
- Prayer request form with inline validation and real email delivery, no page reload
- Semantic HTML and accessibility labels throughout (ARIA labels, focus states, alt text)

## Project structure

```
RCCG-Lighthouse-Parish/
├── index.html
├── CSS/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── RCCG Light House Logo.jpg
└── README.md
```

## Running it locally

No build step or dependencies required.

1. Clone or download this repository
2. Open `index.html` directly in a browser

## Editing the current announcement

The announcement shown in the scrolling ticker and the "Special Service" section is meant to be updated whenever there's a new event. Both spots are marked with `EDIT:` comments in `index.html`.

To hide either one when there's nothing current to announce, add the word `hidden` inside its opening tag, and remove it to bring the section back.

## Notes

This is a static front-end project built as a learning and portfolio piece. The prayer request form submits to Formspree, a third-party form service, since there is no custom backend or database.