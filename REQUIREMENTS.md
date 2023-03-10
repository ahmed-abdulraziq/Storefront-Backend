# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index `'api/product/' [GET]`
- Show `'api/product/id' [GET]`
- Create [token required] `'api/product/' [post]`

#### Users
- Index [token required] `'api/user/' [GET]`
- Show [token required] `'api/user/id' [GET]`
- Create N[token required] `'api/user/' [post]`

#### Orders
- Create (args: user id) `'api/orders/' [post]`
- CreateOrderProduct `'api/orders/products' [post]`
- Current Order by user (args: user id)[token required] `'api/orders/id' [GET]`
- [OPTIONAL] Completed Orders by user (args: user id)[token required] `'api/orders/completed/id' [GET]`

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

```
TABLE Products
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price INTEGER NOT NULL,
    category VARCHAR(50)
)
```
#### User
- id
- firstName
- lastName
- password

```
TABLE Users
(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
)
```

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

```
TABLE Orders
(
    id SERIAL PRIMARY KEY,
    product_id INT FOREIGN KEY REFERENCES products(id),
    quantity INTEGER DEFAULT 1,
    user_id INT FOREIGN KEY REFERENCES users(id),
    status VARCHAR(100)
)
```
