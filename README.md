# GitHub Random Repository Viewer

This project is a web application that fetches and displays random GitHub repositories based on the selected programming language. It uses the GitHub API to retrieve repository data and displays it in a user-friendly interface.

## Project Structure

- `index.html`: The main HTML file that contains the structure of the web page.
- `styles.css`: The CSS file that contains the styles for the web page.
- `script.js`: The JavaScript file that contains the logic for fetching and displaying repository data.

## Features

- Fetches a list of programming languages from a local JSON file (`languages.json`).
- Allows users to select a programming language from a dropdown menu.
- Fetches a random repository for the selected language from the GitHub API.
- Displays repository details including name, description, language, stars, forks, and open issues.
- Displays the language color and an icon next to the language name.

## Usage

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/github-random-repo.git
   cd github-random-repo
   ```

2. Open [index.html](http://_vscodecontentref_/1) in your web browser.

3. Select a programming language from the dropdown menu to fetch and display a random repository.

## Code Explanation

### [index.html](http://_vscodecontentref_/2)

This file contains the basic structure of the web page, including the dropdown menu for selecting a programming language and a container for displaying repository details.

### [styles.css](http://_vscodecontentref_/3)

This file contains the styles for the web page, including the layout and appearance of the repository details. Key classes include:

- `.details`: Styles for the repository details container, using flexbox to align items.
- `.language`: Styles for displaying the language name and icon.
- `.language-color`: Styles for displaying the language color as a small dot.

### [script.js](http://_vscodecontentref_/4)

This file contains the JavaScript logic for fetching and displaying repository data. Key functions include:

- `fetchLanguages()`: Fetches the list of programming languages from [languages.json](http://_vscodecontentref_/5) and populates the dropdown menu.
- `fetchRepository(language)`: Fetches a random repository for the selected language from the GitHub API.
- `fetchLanguageColor(language)`: Fetches the color for the selected language from a third-party service.
- `displayRepository(repo)`: Displays the details of the fetched repository, including name, description, language, stars, forks, and open issues.

## Dependencies

- Font Awesome: Used for displaying icons next to the language name and other repository details. Include it in your HTML file:
  ```html
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  />
  ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Project Page

For more details on the project, visit [GitHub Random Repository](https://roadmap.sh/projects/github-random-repo)
