<!-- PROJECT LOGO -->
<div align="center">

![Google Books Search Logo](./client/src/assets/img/books-logo.png)

# Google Books Search

![GitHub issues](https://img.shields.io/github/issues/icn2you/book-search?style=flat-square)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/icn2you/book-search?style=flat-square)
![React Version](https://img.shields.io/badge/react-v16.13.1-61dafb.svg?style=flat-square)
![GitHub](https://img.shields.io/github/license/icn2you/book-search?style=flat-square)
![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/icn2you/book-search?style=flat-square)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077b5.svg?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/icn2you/)

_An app that allows users to discover books and curate a reading list_

[View Demo](#usage) · [Report Bug](https://github.com/icn2you/book-search/issues)
</div>
<br>

<!-- TABLE OF CONTENTS -->
<details open="open">
<summary>

## Table of Contents

</summary>

1. [About the Project](#about-the-project)
    - [Built With](#built-with)
2. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [License](#license)
6. [Get Help](#get-help)
7. [Acknowledgements](#acknowledgements)

</details>

## About the Project

<div align="center">

![Google Books Search Screenshot](./client/src/assets/img/readme-screenshot.png)

</div>

<div align="justify">

Google Books Search is a single-page app (SPA) that allows the user to search for books by title, author, or key words. The app queries Google Books API with the search term(s) and returns relevant results.

Each book result is displayed in its own card. The user can see further details about the book by selecting VIEW or add the book to a reading list by selecting SAVE. The user can return to their curated listby choosing the SAVED option in the upper righthand corner of the page.

</div>

### Built With

[![HTML5][html5-logo]][html5-link]
[![CSS3][css3-logo]][css3-link]&nbsp;&nbsp;
[![JS][js-logo]][js-link]&nbsp;&nbsp;
[![MongoDB][mongodb-logo]][mongodb-link]&nbsp;&nbsp;
[![Express][express-logo]][express-link]&nbsp;&nbsp;
[![React][react-logo]][react-link]&nbsp;&nbsp;
[![Nodejs][nodejs-logo]][nodejs-link]&nbsp;&nbsp;
[![Material-UI][materialui-logo]][materialui-link]&nbsp;&nbsp;
[![VSCode][vscode-logo]][vscode-link]&nbsp;&nbsp;
[![GitHub][github-logo]][github-link]

Google Books Search is built with the [MERN-stack][mern-link].

<!-- GETTING STARTED -->
## Getting Started

To install and run a local copy of Google Books Search, follow these simple steps:

### Prerequisites

<!--
Acquire an API key for Google Books at [Google APIs](https://console.developers.google.com/apis/credentials).
-->

Install the latest version of npm.

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repository (repo).

   ```sh
   git clone https://github.com/icn2you/books-search.git
   ```

2. Install the necessary packages.

   ```sh
   npm install
   ```

3. Launch the app.

   ```sh
   npm run start
   ```

<!-- USAGE EXAMPLE(S) -->
## Usage

<div align="center">

![Google Books Search Demo](./client/src/assets/vid/google-books-search-demo-2020.12.06.gif)

</div>

<!-- CONTRIBUTING -->
## Contributing

### Issues

In case of a bug report or bug fix, please feel free to [open an issue](https://github.com/icn2you/book-search/issues).

<!-- LICENSE -->
## License

This project is distributed under the [MIT License](https://github.com/icn2you/book-search/blob/master/LICENSE).

<!-- GET HELP -->
## Get Help

Contact me at [christopher.zenner@icn2you.com](mailto:christopher.zenner@icn2you.com).

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

- [Freepik](https://www.flaticon.com/authors/freepik) (project icon)
- [The Coding Boot Camp @ UCLA Extension](https://bootcamp.uclaextension.edu/coding/)

<!-- URLS -->
<!-- Web Technology Logos -->
[html5-logo]: ./client/src/assets/img/logos/html5-logo-32.png
[css3-logo]: ./client/src/assets/img/logos/css3-logo-32.png
[js-logo]: ./client/src/assets/img/logos/javascript-logo-32.png
[mongodb-logo]: ./client/src/assets/img/logos/mongodb-leaf-32.png
[express-logo]: ./client/src/assets/img/logos/express-logo-32.png
[react-logo]: ./client/src/assets/img/logos/react-logo-32.png
[nodejs-logo]: ./client/src/assets/img/logos/nodejs-logo-32.png
[materialui-logo]: ./client/src/assets/img/logos/material-ui-logo-32.png
[vscode-logo]: ./client/src/assets/img/logos/vscode-logo-32.png
[github-logo]: ./client/src/assets/img/logos/github-mark-32.png

<!-- Web Technology Links -->
[html5-link]: https://html.spec.whatwg.org/
[css3-link]: https://www.w3.org/Style/CSS/
[js-link]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[mongodb-link]: https://www.mongodb.com/1
[express-link]: https://expressjs.com/
[react-link]: https://reactjs.org/
[nodejs-link]: https://nodejs.org/
[materialui-link]: https://material-ui.com/
[vscode-link]: https://code.visualstudio.com/
[github-link]: https://github.com/

[mern-link]: https://www.educative.io/edpresso/what-is-mern-stack
