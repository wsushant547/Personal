DROP DATABASE IF EXISTS project;
CREATE DATABASE project;
USE project;
CREATE TABLE user(
    user_id INT  AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(100),
    role VARCHAR(10)
) ;
INSERT INTO user(name,email,password,role) VALUES
('sushant','wsushant547@gmail.com',"sushant@123",'owner'),
('virendra','virendra@gmail.com','virendra@123','customer');

CREATE TABLE restaurant(
    restaurant_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    location VARCHAR(50),
    owner_id INT,
    FOREIGN KEY (owner_id) REFERENCES user(user_id)
    ON DELETE CASCADE 
    ON UPDATE RESTRICT
);

INSERT INTO restaurant( name,location,owner_id)VALUES 
('jagdamba','khed-shivapur',1),
('jay bhavani','khed-shivapur',1);

CREATE TABLE menu(
  menu_id INT AUTO_INCREMENT PRIMARY KEY,
  restaurant_id INT ,
  name VARCHAR(20),
  FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id)
  ON DELETE CASCADE
  ON UPDATE RESTRICT
);

INSERT INTO  menu(restaurant_id,name)VALUES
(1,'Pizza'),
(1,'Biryani'),
(2,'Burger');

CREATE TABLE food_item(
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    menu_id INT ,
    name VARCHAR(20),
    description TEXT,
    price INT,
    availability boolean,
    FOREIGN KEY (menu_id) REFERENCES menu(menu_id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT
 
)
INSERT INTO food_item(menu_id,name,description,price,availability) VALUES
(1,'Onion and Capscium Medium Pizza','Mozzarella Cheese,Parsely.Relish rich Mozzarella cheese and finely chopped',160,1);