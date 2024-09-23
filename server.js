const express = require("express");
const cors = require("cors"); // Add this line
const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors()); // Add this line to allow all origins

// Dummy data
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
  // Add more employees as needed
];

// Endpoint for autocomplete
app.get("/api/employees", (req, res) => {
  const query = req.query.q ? req.query.q.toLowerCase() : "";
  const filteredEmployees = employees.filter(
    (emp) =>
      emp.Name.toLowerCase().includes(query) ||
      emp.WorkTitle.toLowerCase().includes(query)
  );
  res.json(filteredEmployees);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
