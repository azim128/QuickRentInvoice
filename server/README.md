# Car Rental Service API Documentation

## Overview

The Car Rental Service API allows users to manage car rental operations. It provides endpoints for retrieving available cars, fetching car details, and creating rental reservations. The API is built using Node.js with Express.js framework and MongoDB for data storage.

## Base URL

The base URL for accessing the API endpoints is:

```
http://localhost:{PORT}/api/v1
```

Replace `{PORT}` with the port number on which the server is running.

## Authentication

Authentication is not required to access the API endpoints.

## Error Handling

The API implements robust error handling mechanisms. Errors are returned with appropriate HTTP status codes and error messages to provide meaningful feedback to clients.

## Endpoints

### Health Check

- **URL:** `/health`
- **Method:** `GET`
- **Description:** Checks if the server is running.
- **Response:**
  - Success: 200 OK
    ```json
    {
      "status": "success",
      "statusCode": 200,
      "message": "Server Running",
      "data": "OK!"
    }
    ```

### Cars

#### Get All Cars

- **URL:** `/cars`
- **Method:** `GET`
- **Description:** Retrieves a list of all available cars.
- **Response:**
  - Success: 200 OK
    ```json
    {
    "status": "success",
    "statusCode": 200,
    "message": "Cars fetched successfully",
    "data": [
        {
            "id": "car_001",
            "make": "Toyota",
            "model": "Camry",
            "year": 2022,
            "type": "Sedan",
            "seats": 5,
            "bags": 3,
            "features": [
                "Air Conditioning",
                "Bluetooth",
                "Cruise Control"
            ],
            "rates": {
                "hourly": 15,
                "daily": 70,
                "weekly": 400
            },
            "imageURL": "https://s3.amazonaws.com/cka-dash/182-1021-RTO100/model1.png"
        },
        {
            "id": "car_002",
            "make": "Honda",
            "model": "Civic",
            "year": 2021,
            "type": "Sedan",
            "seats": 5,
            "bags": 2,
            "features": [
                "Air Conditioning",
                "Navigation System",
                "Bluetooth"
            ],
            "rates": {
                "hourly": 12,
                "daily": 60,
                "weekly": 350
            },
            "imageURL": "https://images.autofusion.com/pricebooks_data/usa/colorized/2021/Honda/View2/Civic_Sedan/Sport/FC2F8MEW_RE.png"
        },
        {
            "id": "car_003",
            "make": "Ford",
            "model": "Escape",
            "year": 2023,
            "type": "SUV",
            "seats": 5,
            "bags": 4,
            "features": [
                "4WD",
                "Satellite Radio",
                "Heated Seats"
            ],
            "rates": {
                "hourly": 20,
                "daily": 90,
                "weekly": 500
            },
            "imageURL": "https://inv.assets.ansira.net/3/2/7/32133341723.jpg"
        },
        {
            "id": "car_004",
            "make": "Chevrolet",
            "model": "Tahoe",
            "year": 2022,
            "type": "SUV",
            "seats": 7,
            "bags": 5,
            "features": [
                "4WD",
                "Leather Seats",
                "Bluetooth",
                "Navigation System"
            ],
            "rates": {
                "hourly": 25,
                "daily": 100,
                "weekly": 600
            },
            "imageURL": "https://images.carprices.com/pricebooks_data/usa/colorized/2022/Chevrolet/View2/Tahoe/Z71/CK10706_G1W.png"
        }
    ]
}```
#### Get Car by ID

- **URL:** `/cars/:id`
- **Method:** `GET`
- **Description:** Retrieves details of a specific car by its ID.
- **Parameters:**
  - `id`: ID of the car to retrieve.
- **Response:**
  - Success: 200 OK
    ```json
    {
      "status": "success",
      "statusCode": 200,
      "message": "Car fetched successfully",
      "data": {
        "id": "1",
        "type": "SUV",
        "model": "Toyota Highlander",
        "rates": {
          "daily": 50,
          "weekly": 300,
          "hourly": 10
        }
      }
    }
    ```
  - Not Found: 404 Not Found
    ```json
    {
      "status": "fail",
      "statusCode": 404,
      "message": "Car not found"
    }
    ```

### Rentals

#### Create Rental

- **URL:** `/rentals`
- **Method:** `POST`
- **Description:** Creates a new rental reservation.
- **Request Body:**
  ```json
  {
  
  "car": {
    "type": "Sedan",
    "model": "Toyota Camry",
    "rates": {
      "daily": 50,
      "hourly": 10,
      "weekly": 300
     
    }
  },
  "pickupDate": "2023-06-15T10:00:00Z",
  "dropoffDate": "2023-06-22T18:00:00Z",
  "rentper": "weekly",
  "discounts": 10,
  "additionalCharges": 20
  }
  ```

- **Response:**
  - Success: 200 OK
    ```json
    {
      "status": "success",
      "statusCode": 200,
      "message": "Rental reservation created successfully",
      "data": {
        "reservationNumber": "1234567890",
        "pickupDate": "2024-06-10T10:00:00.000Z",
        "dropoffDate": "2024-06-15T10:00:00.000Z",
        "totalAmount": 250,
        "message": "Rental reservation confirmed"
      }
    }
    ```

## Data Models

### Car Model

- **Fields:**
  - `id`: Unique identifier for the car.
  - `type`: Type of the car (e.g., SUV, Sedan).
  - `model`: Model of the car.
  - `rates`: Rental rates for the car (daily, weekly, hourly).

### Rental Model

- **Fields:**
  - `customer`: Details of the customer making the reservation (name, email, phone).
  - `car`: Details of the rented car (id, type, model).
  - `timeframe`: Rental timeframe (pickup date, drop-off date, total rent time).
  - `bill`: Billing information (total estimate charge, discounts, additional charges, total amount, message).
  - `reservation`: Reservation details (receipt, claim, reservation date, reservation number).


## Car Rental Cost Calculation

### Overview

The car rental cost calculation module is integral to the functionality of the Car Rental Service API. It determines the total cost of renting a car based on various factors such as rental duration, applicable rates (hourly, daily, weekly), discounts, and additional charges. This breakdown explains the process and logic used within the `calculateTotalCost` function to compute the total rental cost accurately.

### Function: `calculateTotalCost`

**Purpose**: Calculate the total rental cost considering hourly, daily, and weekly rates, discounts, and additional charges.

#### Parameters

- `rates` (Object): The rates for renting the car.
  - `rates.hourly` (Number): The hourly rate for renting the car.
  - `rates.daily` (Number): The daily rate for renting the car.
  - `rates.weekly` (Number): The weekly rate for renting the car.
- `rentper` (String): The basis of rental (e.g., hourly, daily).
- `pickupDate` (String): The date and time when the car is picked up.
- `dropoffDate` (String): The date and time when the car is dropped off.
- `discounts` (Number): The discount percentage to be applied.
- `additionalCharges` (Number): Any additional charges to be added.

#### Returns

- `totalEstimatePrice` (Number): The estimated total cost before discounts and additional charges.
- `discountAmount` (Number): The amount deducted as a discount.
- `additionalCharges` (Number): The amount added as additional charges.
- `totalPrice` (Number): The final total cost after applying discounts and adding additional charges.
- `message` (String): A detailed breakdown of the cost calculation.
- `rentalDuration` (String): A formatted string representing the rental duration in weeks, days, and hours.

#### Calculation Logic

1. **Calculate Rental Duration**:
   - Compute the total rental duration in hours by subtracting the `pickupDate` from the `dropoffDate`.

2. **Breakdown Rental Duration**:
   - Convert the total hours into weeks, days, and remaining hours.
   - Example: 300 hours = 1 week + 4 days + 12 hours

3. **Compute Cost Based on Duration**:
   - **Weekly Rate**:
     - If the rental duration includes one or more weeks, multiply the number of weeks by the weekly rate.
     - Append this information to the message.
   - **Daily Rate**:
     - For the remaining days (after weeks), multiply the number of days by the daily rate.
     - Append this information to the message.
   - **Hourly Rate**:
     - For the remaining hours (after weeks and days), calculate the cost using the hourly rate, but ensure it does not exceed the daily rate.
     - Append this information to the message.

4. **Apply Discounts**:
   - Calculate the discount amount by multiplying the total cost by the discount percentage.
   - Subtract the discount amount from the total cost.
   - Append this information to the message.

5. **Add Additional Charges**:
   - Add any additional charges to the total cost.
   - Append this information to the message.

6. **Format Rental Duration**:
   - Create a formatted string representing the rental duration in weeks, days, and hours.

7. **Return Result**:
   - Return an object containing the total estimated price, discount amount, additional charges, total price, detailed message, and formatted rental duration.




   

## Future Improvements

- Implement authentication and authorization mechanisms for secure access to the API.
- Add endpoints for updating and cancelling rental reservations.
- Implement pagination for fetching large datasets of cars.
- Enhance error responses with more descriptive messages and error codes.

---

This comprehensive documentation covers the functionality, endpoints, data models, and potential future improvements of the Car Rental Service API. It provides users and developers with all the necessary information to interact with and understand the API.