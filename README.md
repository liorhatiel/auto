# Employee Search Application

This project is a simple employee search application with autocomplete functionality. It allows users to search for employees by name or job title, providing real-time suggestions as they type.

## Features

- Real-time search with autocomplete suggestions
- Display of employee details including name, job title, and profile picture
- Responsive design for various screen sizes
- Server-side filtering of employee data

## Project Structure

The project consists of the following main components:

- `index.html`: The main HTML file containing the structure of the web page
- `styles.css`: CSS file for styling the application
- `script.js`: Client-side JavaScript for handling user interactions and API calls
- `server.js`: Node.js server using Express to serve the API

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine
- npm (Node Package Manager) installed

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/employee-search-app.git
   cd employee-search-app
   ```

2. Install the necessary dependencies:
   ```
   npm install
   ```

## Running the Application

1. Start the server:
   ```
   node server.js
   ```
   The server will start running on `http://localhost:3000`.

2. Open `index.html` in your web browser to use the application.

## Usage

1. Start typing an employee's name or job title in the search box.
2. As you type, autocomplete suggestions will appear below the search box.
3. Click on a suggestion or press Enter to perform a search.
4. The search results will display matching employees with their details.

## API Endpoint

The server provides one API endpoint:

- GET `/api/employees?q=<search_query>`
  - Returns a list of employees matching the search query in their name or job title.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Node.js
- Express.js


