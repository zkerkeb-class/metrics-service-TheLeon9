# 🔐 Metrics Microservice - Back Office

This microservice provides randomly generated **system-like metrics** for use within the back office.  
No database is used — metrics are simulated in real time and served through a simple API.

---

## 🚀 How It Works

The service exposes **a single get route** that returns **data**.

---

## 📦 Installation & Launch

### Clone the project

    >   git clone <repo-url>

### Navigate to the project folder

    >   cd project-folder-name

### Install dependencies

    >   npm install

### Add environment variables

Create a `.env` file at the root of the project with the following content :

```
PORT=port
JWT_SECRET=yourjwtsecret
```

### Run tests

    >   npm test

### Start the server

    >   npm start

---

## 📡 Available Route

### GET /metrics

- **URL :** `http://localhost:port/metrics`.

---

## 🎴 Technologies Used

- ⚛️[**Express**](https://expressjs.com/): A minimal and flexible Node.js web application framework for building APIs and web applications.
- ⚛️[**jsonwebtoken (JWT)**](https://www.npmjs.com/package/jsonwebtoken): Used to implement secure authentication using JSON Web Tokens.
- ⚛️[**CORS**](https://www.npmjs.com/package/cors): Middleware for enabling Cross-Origin Resource Sharing.
- ⚛️[**dotenv**](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file into process `.env`.

---

## 🔒 Security

_Even though the service is simple, the JWT token is signed with a secret key (`JWT_SECRET`). Make sure to **never** commit your `.env` file to a public repository._

---

## 📬 Notes

This microservice is designed to be used only in a **local context**.

It simply returns data. Use with care 😄

---

## 🏯 License

This project is licensed under the [MIT License](LICENSE.md) - share, modify, live in peace! ☠️

---

## 🗺️ Contact

For any inquiries, suggestions, or collaboration opportunities, don't hesitate to contact me. 📜

---

## 🧑🏻‍💻 Author

Created by TheLeon 🦁.

> "Creativity is intelligence having fun." - Albert Einstein ☄️

Thanks for visiting my github! 🩵

And as we say in France : Merci ! 💙🤍❤️
