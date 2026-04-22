CREATE DATABASE booking_tracker;
USE booking_tracker;
CREATE TABLE users(
    user_id INT AUTO_INCREMENT PRIMARY KEY ,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);
CREATE TABLE bookings(
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,

    title VARCHAR(150) NOT NULL,
    booking_date DATE NOT NULL,
    booking_time TIME NOT NULL,
    location VARCHAR(150) ,
    price DECIMAL(10,2),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE

);