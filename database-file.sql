USE bamazon;

create table products (
	id integer(10) auto_increment not null,
	item_id integer(10) not null,
    product_name varchar(30) not null,
    department_name varchar(30) not null,
    price decimal(10, 4) not null,
    stock_quantity integer(10) not null,
    primary key (id)
);


insert into products (item_id, product_name, department_name, price, stock_quantity) values 
(001234321, "Unicorn Popper (White)", "Gadgets and Gizmos", 9.99, 20),
(001234328, "Unicorn Popper (Pink)", "Gadgets and Gizmos", 10.69, 9),
(001232346, "Squrriel Popper", "Gadgets and Gizmos", 9.89, 15),
(001304748, "Emoji Popper", "Gadgets and Gizmos", 9.99, 20),
(001546259, "GummiBear Skeleton Model", "Gadgets and Gizmos", 65.99, 5),
(004823526, "Mini Dinosaur CellPhone Mount", "Homeware", 14.87, 3),
(004822351, "Go Away I'm Busy Floormat", "Homeware", 18.63, 3), 
(003743571, "Cat Measuring Cups/Bowls", "Kitchenware", 35.51, 3),
(003723525, "Sloth Measuring Cups/Bowls", "Kitchenware", 37.51, 6),
(003723520, "Rabid-Beaver Kitchen Towels", "Kitchenware", 37.51, 6)
