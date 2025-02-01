
# Appointment Booking System

## Overview

This is a simple **Appointment Booking System** built using **React, Express.js, Node.js, and MongoDB**. The system allows users to view available slots in a calendar and book an appointment by selecting a date, time slot, and entering their name and phone number.

## Features

- **Calendar View**: Displays available appointment slots.
- **Slot Selection**: Users can select a date and available time slot.
- **Booking System**: Users provide their name and phone number to confirm a booking.
- **Backend API**: Handles appointment data storage and retrieval using MongoDB.

## Technologies Used

### Frontend

- React.js (for UI)
- Axios (for API requests)

### Backend

- Node.js & Express.js (for API)
- MongoDB (for data storage)
- Mongoose (for database interaction)

## Installation

### 1. Clone the Repository

```sh
https://github.com/NAVEENPRAKASHKV/Appoinment_Booking_System.git
cd appointment-booking-system
```

### 2. Backend Setup

```sh
cd backend
npm install
```

- Start the backend server:

```sh
npm start
```

### 3. Frontend Setup

```sh
cd frontend
npm install
npm start
```

- The frontend will be available at `http://localhost:3000`

## Usage

1. **Select a Date** from the calendar.
2. **Choose an Available Slot**.
3. **Enter Name & Phone Number**.
4. **Confirm Booking**.
  

## API Endpoints

### GET `/api/slots`

Fetch available slots.

### POST `/api/book`

Book an appointment.  
**Body:**

```json
{
  "name": "John Doe",
  "phone": "9876543210",
  "date": "2025-02-01",
  "timeSlot": "10:00 AM "
}
```

## License

This project is licensed under the MIT License.

---

This README gives a clear idea of your project while keeping it concise and easy to follow. Let me know if you need modifications! 🚀
