# API Endpoints Documentation

This document describes the various API endpoints I'll be using in my website, including their HTTP methods and response formats.

---

### **1. Endpoint: /products**

**Method:** `GET`

**Description:**  
Fetches a list of products available in the store.

**Response:**
```json 
[
  {
    "id": 1,
    "name": "Product ABC",
    "price": 123,
    "discountedPrice": 99,
    "category": "latest",
    "description": "A description of the product."
  },
  {
    "id": 2,
    "name": "Product XYZ",
    "price": 149,
    "discountedPrice": 119,
    "category": "electronics",
    "description": "Another product description."
  }
]
```

### **2. Endpoint: /orders**

**Method:** `GET`

**Description:**  
Fetches a list of orders made by the users.

**Response:**
```json 
[
  {
    "orderId": 101,
    "userId": 1,
    "products": [1, 2],  // Array of product IDs
    "totalAmount": 220,
    "status": "pending",
    "createdAt": "2025-01-01T12:00:00Z"
  },
]
```

**Method:** `POST `

**Description:**  
Creates a new order for a user.

**Request:**
```json
{
  "userId": 1,
  "products": [1, 2],
  "totalAmount": 220,
  "status": "pending"
}
```

**Response:**
```json 
[
  {
    "orderId": 101,
    "userId": 1,
    "products": [1, 2],  // Array of product IDs
    "totalAmount": 220,
    "status": "pending",
    "createdAt": "2025-01-01T12:00:00Z"
  },
]
```


### **3. Endpoint: /user**

**Method:** `POST`

**Description:**  
Create a new user in sanity 

**Request:**
```json 
{
  "firstName": "Ali",
  "lastName": "Abbas",
  "email": "ali@example.com",
  "address": "789 Pine St",
  "phoneNumber": "+1122334455",
  "isAdmin": false
}
```

**Response:**
```json
{
  "id": 3,
  "firstName": "Ali",
  "lastName": "Johnson",
  "email": "alij@example.com",
  "address": "789 Pine St",
  "phoneNumber": "+1122334455",
  "isAdmin": false
}
```

### **4. Endpoint: /Shipment**

**Method:** `POST`

**Description:**
Creates a new shipment for an order.

**Request:**
```json
{
  "orderId": 103,
  "trackingNumber": "LMN789",
  "carrier": "UPS",
  "shipmentStatus": "shipped",
  "shipmentDate": "2025-01-16T14",
  "deliveryDate": "2025-01-18T12"
}
```

**Response:**
```json
{
  "shipmentId": 3,
  "orderId": 103,
  "trackingNumber": "LMN789",
  "carrier": "UPS",
  "shipmentStatus": "shipped",
  "shipmentDate": "2025-01-16T14",
  "deliveryDate": "2025-01-18T12"
}
```

