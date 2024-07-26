 ## Yum Rocket - Food Delivery App
 
 ![Screenshot 2024-07-22 154713](https://github.com/user-attachments/assets/cc8db0bc-f64a-439f-a573-6d33e028edb1)

 ## Admin Panel

 ![image](https://github.com/user-attachments/assets/bffa1199-98d0-4645-9683-e64fe4586b5c)


## Overview

Yum Rocket is a comprehensive food delivery application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack  It allows users to add, remove, and manage food items, browse food items by category, and manage their cart. It features an admin panel for managing restaurants and orders, JWT authentication for secure login, and Stripe for payment processing.

## Features

- **User Authentication**: Secure login using JWT.
- **Admin Panel**: Manage restaurants, menu items, and orders.
- **Restaurant Browsing**: Explore and search for restaurants.
- **Order Placement**: Place orders and make payments using Stripe.
- **Order Tracking**: Track the status of your orders.
- **Responsive Design**: Optimized for various devices.

## Technologies Used

- **Frontend**: React.js, Redux, Ant Design
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Payment Gateway**: Stripe


### Authentication

- JWT (JSON Web Token) is used for securing the authentication process. Users need to register and log in to access protected routes.

## Admin Panel

The admin panel allows administrators to manage restaurants, menu items, and orders. Administrators can log in to the admin panel using their credentials.

### Admin Features

- **Manage Menu Items**: Add, edit, and delete menu items for each restaurant.
- **Manage Orders**: View and update order statuses.


### JWT Authentication Flow

1. **User Registration**: Users register by providing their details.
2. **User Login**: Users log in using their email and password.
3. **Token Generation**: A JWT token is generated and sent to the user.
4. **Token Validation**: The token is validated for accessing protected routes.

## Payment Integration

Stripe is used for payment processing. Users can add items to their cart and proceed to checkout where they can make secure payments using their credit or debit cards.

### Stripe Integration Flow

1. **Add Items to Cart**: Users add items to their cart.
2. **Proceed to Checkout**: Users proceed to the checkout page.
3. **Payment Processing**: Users enter their payment details and complete the transaction using Stripe.

### Stripe Dummy card - 4000003560000008
 



