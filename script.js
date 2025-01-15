document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("language-select");
  const statusBox = document.getElementById("result-box");

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select a Language";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  languageSelect.appendChild(defaultOption);

  fetchLanguages();

  languageSelect.addEventListener("change", () => {
    if (languageSelect.value) {
      fetchRepository(languageSelect.value);
    }
  });

  async function fetchLanguages() {
    try {
      const response = await fetch("languages.json");
      const languages = await response.json();
      populateLanguageOptions(languages);
    } catch (error) {
      updateStatus("Error loading language options", true);
      console.error("Error loading languages:", error);
    }
  }

  function populateLanguageOptions(languages) {
    languages.forEach((lang) => {
      if (typeof lang.title === "string") {
        const option = document.createElement("option");
        option.value = lang.title.toLowerCase();
        option.textContent = lang.title;
        languageSelect.appendChild(option);
      } else {
        console.warn("Skipping non-string language:", lang.title);
      }
    });
    updateStatus("Please select a language", false);
  }

  async function fetchRepository(language) {
    updateStatus("Loading, please wait...", false);
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`
      );
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        const randomRepo =
          data.items[Math.floor(Math.random() * data.items.length)];
        displayRepository(randomRepo);
      } else {
        updateStatus("No repositories found.", true);
      }
    } catch (error) {
      updateStatus("Error fetching repository.", true);
      console.error("Error fetching repository:", error);
    }
  }

  function displayRepository(repo) {
    statusBox.innerHTML = `
      <h3>${repo.name}</h3>
      <p class="description">${
        repo.description || "No description available."
      }</p>
      <div class="details">
       <p><i class="fas fa-code"></i>&nbsp;${repo.language}</p>
        <p><i class="fas fa-star"></i>&nbsp;${repo.stargazers_count}</p>
        <p><i class="fas fa-code-branch"></i>&nbsp;${repo.forks_count}</p>
        <p><i class="fas fa-exclamation-circle"></i>&nbsp;${
          repo.open_issues_count
        }</p>
        <p><i class="fas fa-eye"></i>&nbsp;${repo.watchers_count}</p>
      </div>`;
  }

  function updateStatus(message, isError) {
    statusBox.textContent = message;
    statusBox.style.background = isError ? "#ffc9c9" : "#ffffff";
  }
});
