# Web Service: Quiz App

## Overview

This web service is built with Node.js, Express, and Axios. It provides a simple API endpoint to fetch data from a remote JSON file hosted on AWS S3. The service is designed to handle CORS requests, making it suitable for integration with front-end applications.

## Features

- **CORS Support**: Allows cross-origin requests for seamless integration with front-end applications.
- **Data Fetching**: Retrieves data from a remote JSON file and serves it through an API endpoint.
- **Error Handling**: Returns appropriate error messages in case of data fetching failures.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: A web application framework for Node.js.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **CORS**: Middleware for enabling CORS (Cross-Origin Resource Sharing).

## Installation

To get started with the web service, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/webservice.git
   cd webservice
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node server.ts
   ```

4. Open your browser or use a tool like Postman to navigate to `http://localhost:5000/api/data` to fetch the data.

## Usage

- Send a GET request to `/api/data` to retrieve the JSON data from the remote source.
- Handle the response in your front-end application as needed.

## Folder Structure

Here's the folder structure of the web service:

```
webservice/
├── node_modules/           # Node.js modules
├── package.json            # Project metadata and dependencies
├── .gitignore              # Files to ignore in Git
├── server.ts               # Main server file
└── ...                     # Other source files
```
