# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Components
The project includes the following components:

* Login: A simple login component that includes a login form with input fields and a submit button.
* UserForm: A simple user form component that includes input fields for user information and a submit button for creating a new user.
* Data: A data table component that fetches data from an API and displays it in a table format with the option to filter, search, and delete records.

## Usage
To run the project, follow these steps:

## Clone the repository: [git clone https://github.com/<your-username>/ui.git](https://github.com/misterKumar/sunbase_frontend)
* Install the dependencies: `npm install`
* Start the development server: `npm run dev`
* Open the application in your web browser at http://localhost:5000

## Features

* Simple login form
* User form for creating new users
* Data table for displaying fetched data with options to filter, search, and delete records
* Responsive design
* Separate CSS files for styling each component

## use the routes paths for endpoints to the pages
* loginpage -> `localhost:3000/`
* user data -> `localhost:3000/users-info`
* add new user -> `localhost:3000/add-user`

# Dependencies
* React
* React Router Dom
* Axios
* Vite
