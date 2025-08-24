# 📌 README for `Ecommerce`

# 🛒 E-commerce Application

⚠️ **Note:** This project is currently **under development**.  
Some modules are incomplete, and coding is in progress 🚧.  

---

## 🌟 Overview

A **full-featured e-commerce platform** providing a product catalog, shopping cart, user authentication, and checkout flow with integrated payment gateway.  

This project demonstrates secure backend APIs, payment integration, and frontend cart management.

---

## 🛠️ Tech Stack

| Layer         | Technology |
|---------------|------------|
| Frontend      | React.js |
| Backend       | Node.js, Express.js |
| Database      | MongoDB |
| Authentication| JWT |
| Emails        | Node-Mailer |
| Tools         | Git, GitHub, Postman, npm |

---

## ✨ Planned Features

✅ Product catalog with categories  
✅ User authentication (JWT)  
✅ Shopping cart management  
✅ Checkout flow with payment gateway  
✅ Email confirmations with Node-Mailer  
⏳ Order history & Admin dashboard *(in progress)*  

---

## 📂 Project Structure

Ecommerce/<br>
├── client/ # React frontend <br>
├── server/ # Node.js backend <br>
├── package.json <br>
└── README.md 

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Tejaskt/Ecommerce.git
cd Ecommerce
```
2️⃣ Install Dependencies
```bash
# For frontend
cd client
npm install

# For backend
cd ../server
npm install
```
3️⃣ Configure Environment Variables
Create a .env file in server/ with:

```bash
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PAYMENT_KEY=your_payment_gateway_key
```
4️⃣ Run the App
```bash
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm start

```
📸 Screenshots (Coming Soon)
Home	Product Details	Checkout

🤝 Contributing
This project is in-progress. Contributions, feedback, and ideas are welcome!

👨‍💻 Author
Tejas Kanzariya
