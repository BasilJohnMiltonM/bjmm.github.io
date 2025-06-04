# bjmm.github.io

This repository hosts my personal portfolio website.

## Description

A simple HTML, CSS, and JavaScript site showcasing my background, education, projects, and skills. A small Node.js server can be used for local testing, but the site is completely static and works on GitHub Pages.

## Installation

Clone or download this repository. To test locally with the optional Node.js server, install dependencies and start the server:

```bash
npm install
npm run start
```
Then open `http://localhost:3000` in your preferred browser.

## Deployment on GitHub Pages

Push the contents of the repository to the branch configured for GitHub Pages (typically `main`). The site is entirely static, so no build step is required. The dynamic “Projects” section reads `projects.json` directly and works without the Node.js server.

## Dependencies

The project uses [Express](https://expressjs.com/) for the Node.js server.

## Contributing

Feel free to open issues or submit pull requests with improvements.

## License

This project is licensed under the MIT License.

