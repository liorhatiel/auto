const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

const employees = [
  {
    ImageUrl:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    WorkTitle: "DevOps Engineer",
    Name: "John Thompson",
  },
  {
    ImageUrl:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    WorkTitle: "Data Scientist",
    Name: "Jane Smith",
  },
  {
    ImageUrl:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    WorkTitle: "Project Manager",
    Name: "Alice Johnson",
  },
  {
    ImageUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    WorkTitle: "Cybersecurity Specialist",
    Name: "Bob Brown",
  },
  {
    ImageUrl:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    WorkTitle: "Front End Developer",
    Name: "Boby Kane",
  },
  {
    ImageUrl:
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg",
    WorkTitle: "Back End Developer",
    Name: "Boby Moby",
  },
  {
    ImageUrl:
      "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg",
    WorkTitle: "Data Analyst",
    Name: "Sophia Patel",
  },
  {
    ImageUrl:
      "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
    WorkTitle: "Mobile App Developer",
    Name: "Liam Carter",
  },
  {
    ImageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    WorkTitle: "CEO",
    Name: "William Anderson",
  },
  {
    ImageUrl:
      "https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg",
    WorkTitle: "UX Designer",
    Name: "Emma Rodriguez",
  },
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
