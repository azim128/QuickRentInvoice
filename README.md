# Car Rental Service Application Documentation

This document provides guidance on how to set up and run the Car Rental Service application. The application consists of a server built with Express.js for the backend and a client built with React using Vite for the frontend.

## Cloning the Repository

To get started with the Car Rental Service application, you can clone the repository from GitHub using the following command:

```bash
git clone https://github.com/azim128/QuickRentInvoice.git
cd QuickRentInvoice
```

GO TO WEBSITE[Click Here](https://quick-rent-invoice.vercel.app/).
SERVER Deploy in render. server health [check](https://quickrentinvoice.onrender.com/health)



## Server (Express.js)

### Overview

The server handles the backend logic of the Car Rental Service API. It provides endpoints for fetching available cars, creating rental reservations, and calculating rental costs.

### Setup Instructions

1. **Install Dependencies**: Navigate to the `server` directory and install the required dependencies using npm or yarn.

   ```bash
   # Using npm
   cd server
   npm install

   # Using yarn
   cd server
   yarn
   ```

2. **Environment Variables**: Create a `.env` file in the `server` directory and specify the necessary environment variables. You can use the `.env.example` file as a template.

3. **Start the Server**: Run the following command to start the server.

   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn run dev
   ```

   This will start the Express.js server, and it will be accessible at `http://localhost:{PORT}`.

### API Documentation

For detailed documentation of the Car Rental Service API, please refer to the [API Documentation](./server/README.md).

## Client (React with Vite)

### Overview

The client application provides a user interface for interacting with the Car Rental Service. It allows users to view available cars, make rental reservations, and view their rental history.

### Setup Instructions

1. **Install Dependencies**: Navigate to the `client` directory and install the required dependencies using npm or yarn.

   ```bash
   # Using npm
   cd client
   npm install

   # Using yarn
   cd client
   yarn
   ```

2. **Start the Development Server**: Run the following command to start the Vite development server.

   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev
   ```

   This will launch the development server, and the client application will be accessible at `http://localhost:3000`.

### Deployment

To deploy the client application to production, you can run the following command:

```bash
# Using npm
npm run build

# Using yarn
yarn build
```



## Additional Information

- For troubleshooting or further assistance, please refer to the individual `README.md` files within the `server` and `client` directories.
- Make sure to configure the server and client to communicate properly, using the appropriate endpoints and ensuring CORS settings are correctly configured.

---
