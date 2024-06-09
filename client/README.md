# Car Rental Service Documentation

## Overview
This documentation provides an overview of the structure and key components of a Car Rental Service. The project is organized to manage a car rental application with different pages and components. The file structure, the purpose of each file, and the external packages used are explained below.

## File Structure

```
.
└── main/
    └── client/
        └── src/
            ├── components/
            │   ├── home/
            │   │   ├── VehicleCard.jsx
            │   │   ├── FeaturedVehicles.jsx
            │   │   └── Hero.jsx
            │   ├── rental/
            │   │   ├── SelectCar.jsx
            │   │   ├── FeatureSection.jsx
            │   │   ├── DateSelector.jsx
            │   │   ├── CustomerDetails.jsx
            │   │   ├── Charges.jsx
            │   │   └── TripSection.jsx
            │   └── common/
            │       ├── PageHeader.jsx
            │       └── Navbar.jsx
            ├── pages/
            │   ├── Home.jsx
            │   ├── Invoice.jsx
            │   └── Rental.jsx
            ├── routers/
            │   └── RootRouters.jsx
            ├── Layout/
            │   └── RootLayout.jsx
            ├── context/
            │   └── CarContext.jsx
            ├── main.jsx
            └── index.css
```

### Components
Components are reusable pieces of the user interface. They are organized into specific directories based on their usage.

#### `home/`
- **VehicleCard.jsx**: Component for displaying individual vehicle information.
- **FeaturedVehicles.jsx**: Component for showcasing featured vehicles.
- **Hero.jsx**: Component for the hero section of the home page.

#### `rental/`
- **SelectCar.jsx**: Component for selecting a car for rental.
- **FeatureSection.jsx**: Component highlighting features of the rental service.
- **DateSelector.jsx**: Component for selecting rental dates using `react-datepicker`.
- **CustomerDetails.jsx**: Component for inputting customer details.
- **Charges.jsx**: Component for displaying rental charges.
- **TripSection.jsx**: Component that includes all sections of the rental trip details.

#### `common/`
- **PageHeader.jsx**: Component for displaying page headers.
- **Navbar.jsx**: Component for the navigation bar.

### Pages
Pages represent different routes of the application.

#### `Home.jsx`
The home page of the application, includes:
- **Hero**: Displays the hero section.
- **FeaturedVehicles**: Showcases featured vehicles.

#### `Rental.jsx`
The rental page, includes:
- **PageHeader**: Displays the header for the rental form.
- **TripSection**: Displays sections related to the rental trip details.

#### `Invoice.jsx`
The invoice page, includes:
- **PageHeader**: Displays the header for the invoice.
- Invoice details are retrieved from the CarContext and rendered in a printable format.

### Routers
Routing configuration for the application.

#### `RootRouters.jsx`
Defines the routes for the application using `react-router-dom`'s `createBrowserRouter`:
- **"/"**: Root path displaying the home page.
- **"rental"**: Path displaying the rental page.
- **"invoice"**: Path displaying the invoice page.
- **"about"**: Simple about page.

### Layout
Defines the layout structure for the application.

#### `RootLayout.jsx`
Includes the `Navbar` and a placeholder for the nested routes (`Outlet`).

### Context
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

#### `CarContext.jsx`
Context for managing car data, selected car, and rental operations:
- **fetchCars**: Fetches car data from an API using `axios`.
- **createRental**: Creates a rental entry in the backend using `axios`.

### Entry Point
#### `main.jsx`
The main entry point of the React application:
- Sets up the `RouterProvider` with `CarContextProvider`.
- Mounts the application to the DOM.

### Styles
#### `index.css`
Global CSS styles for the application.

## External Packages
The project uses several external packages to enhance functionality:

- **axios**: "^1.7.2" - Promise-based HTTP client for the browser and Node.js.
- **react**: "^18.2.0" - JavaScript library for building user interfaces.
- **react-datepicker**: "^6.9.0" - A simple and reusable Datepicker component for React.
- **react-dom**: "^18.2.0" - Entry point of the DOM-related rendering paths.
- **react-icons**: "^5.2.1" - Popular icons as React components.
- **react-router-dom**: "^6.23.1" - Declarative routing for React.

## Usage
To run the project, ensure you have the necessary dependencies installed and execute the following commands:

```sh
yarn install
yarn run dev
```

This will start the development server and open the application in your default web browser. The application can be accessed and tested via the provided routes.

## Conclusion
This documentation outlines the structure, key components, and external packages of the Car Rental Service. Each file and component plays a specific role in the application, facilitating a modular and organized codebase for the car rental service.