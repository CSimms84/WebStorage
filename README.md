# Chrome Storage Options Demo

This application demonstrates various web storage options available in modern browsers, specifically in Google Chrome. The application allows users to store, retrieve, and manage data using Local Storage, Session Storage, IndexedDB, Cookies, and Cache Storage.

## Features

- **Local Storage**: Store data that persists even after the browser is closed.
- **Session Storage**: Store data that persists only for the duration of the page session.
- **IndexedDB**: Store structured data that can be queried and retrieved.
- **Cookies**: Store small amounts of data with expiration dates.
- **Cache Storage**: Cache URLs and retrieve cached URLs.

## Demo

### Local Storage
- **Enter data**: Input the data you want to store in Local Storage.
- **Set**: Save the entered data to Local Storage.
- **Get**: Retrieve the data from Local Storage.

### Session Storage
- **Enter data**: Input the data you want to store in Session Storage.
- **Set**: Save the entered data to Session Storage.
- **Get**: Retrieve the data from Session Storage.

### IndexedDB
- **Enter data**: Input the data you want to store in IndexedDB.
- **Set**: Save the entered data to IndexedDB.
- **Get**: Retrieve the data from IndexedDB.

### Cookies
- **Enter data**: Input the data you want to store in Cookies.
- **Set**: Save the entered data as a Cookie.
- **Get**: Retrieve the data from Cookies.

### Cache Storage
- **Enter URL to cache**: Input the URL you want to cache.
- **Cache URL**: Cache the entered URL.
- **Get Cached URLs**: Retrieve all cached URLs.

## Setup

To run this application:

1. Create a new directory for your project.
    ```bash
    mkdir chrome-storage-options-demo
    cd chrome-storage-options-demo
    ```

2. Save the `server.js` file in the root of your project directory.

3. Create a `public` folder in your project directory.
    ```bash
    mkdir public
    ```

4. Save the `index.html` and `script.js` files in the `public` folder.

5. Initialize a new Node.js project by running:
    ```bash
    npm init -y
    ```

6. Install Express by running:
    ```bash
    npm install express
    ```

7. Start the server by running:
    ```bash
    node server.js
    ```

8. Open a web browser and navigate to:
    ```
    http://localhost:3000
    ```

## How It Works

### Local Storage

Local Storage provides a way to store key-value pairs in the browser. Data stored here has no expiration time, meaning it persists even after the browser is closed and reopened.

### Session Storage

Session Storage is similar to Local Storage but with one key difference: data stored in Session Storage is only available for the duration of the page session. Once the page is closed, the data is deleted.

### IndexedDB

IndexedDB is a low-level API for storing significant amounts of structured data. It allows you to create, read, modify, and delete data in a transactional way. Unlike Local and Session Storage, IndexedDB is asynchronous and can handle complex queries.

### Cookies

Cookies are small pieces of data sent from a website and stored in the user's browser. They are often used to remember information about the user between sessions. Each cookie has an expiration date, after which it is automatically deleted.

### Cache Storage

Cache Storage allows you to store HTTP responses and reuse them later. It is part of the Service Workers API and is designed to enable offline experiences by caching network requests.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
