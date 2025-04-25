# FullStack-Ecommerce-Clothing-Platform
This is a web-based e-commerce platform for selling clothing items. It includes features such as user authentication, product catalog, shopping cart, checkout with payment gateway integration and admin product management.

## Tech Stack
Frontend: React.js + Axios + CSS
Backend: Node.js + Express.js
Database: MongoDB
Payment Gateways: PayPal
Version Control: Git



## Environment Setup Instructions

### 1. Prerequisites
Ensure the following are installed:

- Node.js & npm
- MongoDB
- Git
- VS Code
- Internet connection for APIs


### 2. Backend Setup
```bash
# Clone the repository
git clone https://github.com/Skyler157/FullStack-Ecommerce-Clothing-Platform.git

cd ecommerce-clothing-platform/backend

# Install dependencies
npm install

# Create a .env file and add (replace with your actual credentials)
PORT=4000
MONGODB_URI=mongodb+srv://Skyler:ecommerce@cluster0.x050z.mongodb.net/
PAYPAL_CLIENT_ID=sandbox_id

# Start the server
node index.js
```

### 3. Frontend Setup
```bash
cd ../frontend

# Install React dependencies
npm install

# Start the React app
npm start
```

### 4. Admin Setup 
```bash
# Install dependencies
npm create vite@latest .
npm install

# Start
npm run dev
```

## APIs / Libraries Used
- Thunder Client (for API testing)
- PayPal Sandbox API
