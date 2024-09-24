// Get references to elements
const searchContainer = document.getElementById("searchContainer");
const searchInput = document.getElementById("searchInput");
const autocompleteList = document.getElementById("autocompleteList");
const searchButton = document.getElementById("searchButton");
const resultsContainer = document.getElementById("results");

// Function to fetch employee data from the server based on the search query
async function fetchEmployeeData(query) {
  const response = await fetch(
    `http://localhost:3000/api/employees?q=${query}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

// Autocomplete functionality
searchInput.addEventListener("input", async function () {
  const query = searchInput.value;

  if (query.length >= 2) {
    const suggestions = await fetchEmployeeData(query);
    displayAutocomplete(suggestions, query);
  } else {
    autocompleteList.innerHTML = "";
    autocompleteList.style.display = "none";
  }
});

// Function to bold matched characters
function boldMatch(text, query) {
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, "<strong>$1</strong>");
}

// Function to display autocomplete suggestions
function displayAutocomplete(suggestions, query) {
  autocompleteList.innerHTML = "";

  if (suggestions.length === 0) {
    autocompleteList.style.display = "none";
    return;
  }

  suggestions.forEach((emp) => {
    const item = document.createElement("div");
    item.classList.add("autocomplete-item");

    // Bold the matched part in both Name and WorkTitle
    const boldedName = boldMatch(emp.Name, query);
    const boldedTitle = boldMatch(emp.WorkTitle, query);

    item.innerHTML = `
      <span>${boldedName} - ${boldedTitle}</span>
    `;

    item.addEventListener("click", function () {
      searchInput.value = emp.Name;
      autocompleteList.innerHTML = "";
      autocompleteList.style.display = "none";
    });

    autocompleteList.appendChild(item);
  });

  autocompleteList.style.display = "block";
}

// Search functionality on button click
searchButton.addEventListener("click", async function () {
  const query = searchInput.value;
  const results = await fetchEmployeeData(query);
  displayResults(results);
});

// Prevent form submission on Enter key press
searchInput.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const query = searchInput.value;
    const results = await fetchEmployeeData(query);
    displayResults(results);
  }
});

// Hide autocomplete list when input loses focus
searchInput.addEventListener("blur", () => {
  setTimeout(() => {
    autocompleteList.innerHTML = "";
    autocompleteList.style.display = "none";
  }, 200);
});

// Function to display search results
function displayResults(results) {
  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>No results found</p>";
    return;
  }

  results.forEach((emp) => {
    const resultItem = document.createElement("div");
    resultItem.classList.add("result-item");

    const img = document.createElement("img");
    img.src = emp.ImageUrl;
    img.alt = emp.Name;

    const resultInfo = document.createElement("div");
    resultInfo.classList.add("result-info");

    const name = document.createElement("h3");
    name.textContent = emp.Name;

    const title = document.createElement("p");
    title.textContent = emp.WorkTitle;

    resultInfo.appendChild(name);
    resultInfo.appendChild(title);

    resultItem.appendChild(img);
    resultItem.appendChild(resultInfo);

    resultsContainer.appendChild(resultItem);
  });
}
