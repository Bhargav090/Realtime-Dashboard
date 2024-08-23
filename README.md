# Realtime Dashboard

This project is a real-time dashboard application built using React. The app is designed to manage various widgets like Project Management, Sales Management, Customer Support, and Marketing Insights.

## Getting Started

Follow the steps below to get the project up and running on your local machine.

### Prerequisites

Before you start, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) 
- [JSON Server](https://www.npmjs.com/package/json-server) (to simulate a REST API)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Bhargav090/Realtime-Dashboard.git
    cd Realtime-Dashboard
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Start the JSON Server:**

    Open a new terminal window and run the following command:

    ```bash
    npx json-server --watch db.json --port 3001
    ```

    This command will start the JSON Server on port 3001, which is necessary for the application to function properly.

4. **Start the React application:**

    In the original terminal window, run:

    ```bash
    npm start
    ```

    This will start the React application on [http://localhost:3000](http://localhost:3000).

### Running the Project

To run the project locally, follow these steps:

1. **Run JSON Server in one terminal:**

    ```bash
    npx json-server --watch db.json --port 3001
    ```

2. **Run the React application in another terminal:**

    ```bash
    npm start
    ```

The application should now be running, and you can interact with the widgets on the dashboard.

### Building the Project

To build the project for production:

```bash
npm run build
