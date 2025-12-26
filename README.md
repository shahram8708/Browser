# Browser Search Application

This project is a simple web search application built with Node.js and Express. It provides a browser-based interface where users can enter a search query. The backend launches a headless browser using Puppeteer, performs a web search, extracts result titles and links, and returns them to the frontend for display. If no results are found or an error occurs, an appropriate message is returned.

---

## Overview

The application consists of:

* A Node.js / Express server
* A `/search` POST endpoint that receives user input
* A headless browser routine that retrieves search results and extracts relevant fields
* A frontend page served from the `public` folder that allows users to submit queries and view results

The frontend communicates with the backend using `fetch`, displays the results as clickable links, and handles error states.

---

## Features

* Web interface for entering search queries
* Backend endpoint to process search requests
* Headless browser automation with Puppeteer
* Extraction of search result titles and URLs
* JSON response format
* Error handling and user feedback in the UI
* Static hosting of the frontend through Express

---

## Tech Stack

* **Runtime:** Node.js
* **Framework:** Express
* **Automation:** Puppeteer
* **Middleware:** body-parser
* **Frontend:** HTML, CSS, JavaScript (jQuery for convenience)
* **Other Libraries:** cheerio, node-fetch (listed as dependencies)

---

## Project Structure

```
Browser-main/
│
├── server.js               # Main Express server and search logic
├── package.json            # Dependencies
├── package-lock.json
├── public/
│   └── index.html          # Browser UI
└── node_modules/           # Installed dependencies
```

---

## Installation

1. Ensure Node.js is installed.
2. Install project dependencies:

```bash
npm install
```

---

## Running the Application

Start the server:

```bash
node server.js
```

By default, the application runs on:

```
http://localhost:3000
```

Open this URL in your browser to load the search interface.

---

## Usage

1. Open the application in your browser.
2. Enter a search query in the input field.
3. Submit the form.
4. The application will:

   * Send the query to the `/search` endpoint
   * Launch a headless browser
   * Retrieve search results
   * Return a list of titles and links
5. Results will display as clickable links in the browser.

If no results are found or an error occurs, a message will be shown instead.

---

## API

### `POST /search`

**Body (form data):**

```
user_query=<search text>
```

**Successful Response:**

```json
{
  "searchResults": [
    {
      "title": "Result Title",
      "link": "https://example.com"
    }
  ]
}
```

**Error Responses:**

* `404` when no results are found
* `500` on internal server errors

---

## Notes

* Puppeteer requires certain system dependencies to run; ensure your environment supports running a headless browser.
* The application serves static files from the `public` directory.
* The server listens on port 3000.

---

## License

No license file is included in this project.
