# Sebastian Gomez Portfolio Website

Welcome to the repository for my portfolio site, hosted at [www.sebastianbgomez.com](https://www.sebastianbgomez.com). This project was created using Create React App.

In the project directory, you can run:

## Preview

### Desktop Version

![Desktop Version](Desktop_Portfolio.gif)

### Mobile Version

![Mobile Version](./Phone_Portfolio.gif)

### To Download Repository

```bash
git clone https://github.com/Niblick1020/PortfolioSite.git
cd PortfolioSite
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### To host your own site on GitHub

Run the following command in your project directory to install the gh-pages package, which simplifies the deployment process to GitHub Pages

```bash
cd PortfolioSite
npm install --save gh-pages
```

Add the following scripts and homepage field to your package.json file

```json
"homepage": "https://<username>.github.io/<repository-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Deploy Your Site

```bash
npm run deploy
```
