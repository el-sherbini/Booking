# Booking

> Booking is a reservation MERN Stack application, built with MongoDB, Express.js, React.js, Node.js, ContextAPI, Material UI.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

### Installation:

Clone the repo:

```sh
git clone https://github.com/el-sherbini/Booking
```

Run terminal command:

```sh
cd client
npm install
```

```sh
cd admin
npm install
```

```sh
cd server
npm install
```

### Enter your Environment Variables in `.env` file in server folder.

```sh
PORT = "YOUR PREFERRED PORT"
MONGODB_URI = "YOUR MONGODB CONNECTION URL"
JWT_SECRET = "YOUR JWT SECRET"
```

### To Run App:

Server:
```sh
cd server
npm satrt
```

Client:
```sh
cd client
npm satrt
```

Admin Dashboard:
```sh
cd admin
npm satrt
y // => to run the admin dashboard in another port from the client
```

### To Visit App:

Client:
```sh
localhost:3000
```

Server:
```sh
localhost:5000
```

Admin Dashboard:
```sh
localhost:3001
```

## Technologies Used

- React.js
- ContextAPI
- React-router-dom
- Axios
- Sass
- Date-fns
- Deact-date-range
- Font Awesome
- React-circular-progressbar
- Recharts
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcryptjs
- Cors
- Nodemon

## Features

- User can login with username and password.
- User gets the number of featured hotels for specific cities.
- User gets the number of every property available.
- User gets the featured properties for specific cities.
- User can search for property available by (city - duration - number of people and rooms).
- User can filter search results by minimum and maximum price per night.
- User gets the information for the hotel and the price of the rooms he chose.
- Authorized users only can reserve rooms.
- Reserved rooms will be disabled for any other operation during the reserved dates.
- Admin can view, create and delete (users - hotels - rooms).

## Future Features

- User Registration UI.
- Admin update (users - hotels - rooms) UI.
- Admin view (User - Hotel - Room) profile page.
- Admin Dashboard insights.
