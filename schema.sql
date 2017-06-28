CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
item_id INTEGER(10) NOT NULL auto_increment,
product_name VARCHAR(200) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price INTEGER(10) NOT NULL,
stock_quantity INTEGER(10) NOT NULL,
PRIMARY KEY (item_id)
);