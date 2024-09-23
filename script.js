// Get references to elements
const searchContainer = document.getElementById("searchContainer");
const searchInput = document.getElementById("searchInput");
const autocompleteList = document.getElementById("autocompleteList");
const searchButton = document.getElementById("searchButton");
const resultsContainer = document.getElementById("results");

// Dummy data (replace with your API call)
const employees = [
  {
    ImageUrl: "https://example.com/image1.jpg",
    WorkTitle: "Software Engineer",
    Name: "John Doe",
  },
  {
    ImageUrl: "https://example.com/image2.jpg",
    WorkTitle: "Data Scientist",
    Name: "Jane Smith",
  },
  {
    ImageUrl: "https://example.com/image3.jpg",
    WorkTitle: "Project Manager",
    Name: "Alice Johnson",
  },
  {
    ImageUrl: "https://example.com/image4.jpg",
    WorkTitle: "UX Designer",
    Name: "Bob Brown",
  },
  {
    ImageUrl: "https://example.com/image5.jpg",
    WorkTitle: "Front End Developer",
    Name: "Boby Kane",
  },
  {
    ImageUrl: "https://example.com/image5.jpg",
    WorkTitle: "Front End Developer",
    Name: "Boby Kane",
  },
  {
    ImageUrl: "https://example.com/image5.jpg",
    WorkTitle: "Front End Developer",
    Name: "Boby Kane",
  },
  {
    ImageUrl: "https://example.com/image5.jpg",
    WorkTitle: "Front End Developer",
    Name: "Boby Kane",
  },
  {
    ImageUrl: "https://example.com/image5.jpg",
    WorkTitle: "Front End Developer",
    Name: "Boby Kane",
  },
];

// Function to fetch data (replace with actual API call)
async function fetchEmployeeData(query) {
  return employees.filter(
    (emp) =>
      emp.Name.toLowerCase().includes(query.toLowerCase()) ||
      emp.WorkTitle.toLowerCase().includes(query.toLowerCase())
  );
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
  const regex = new RegExp(`(${query})`, "gi"); // Case-insensitive match
  return text.replace(regex, "<strong>$1</strong>"); // Wrap matched part with <strong> tags
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
      searchInput.value = emp.Name; // Set input to the selected name
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
    event.preventDefault(); // Prevent default form submission
    const query = searchInput.value;
    const results = await fetchEmployeeData(query);
    displayResults(results);
  }
});

// Hide autocomplete list when input loses focus
// searchInput.addEventListener("blur", () => {
//   autocompleteList.innerHTML = "";
//   autocompleteList.style.display = "none";
// });

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
