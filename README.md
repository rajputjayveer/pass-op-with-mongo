
```markdown
# 🔐 Pass-Op with Mongo

A simple Password Manager built using **Node.js**, **Express**, **MongoDB**, and **EJS**. This app allows users to store, view, update, and delete saved passwords securely.

---

## 🚀 Features

- Add new passwords with website name, username, and password
- View all saved passwords
- Edit existing password entries
- Delete any entry
- MongoDB-based storage
- EJS templating for views

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS (Embedded JavaScript)
- **Database:** MongoDB with Mongoose

---

## 📁 Folder Structure

```

pass-op-with-mongo/
│
├── models/          # Mongoose schema
├── public/          # Static CSS and JS
├── routes/          # Express routes
├── views/           # EJS templates
├── .env             # Environment variables (not included in repo)
├── app.js           # Main server file
└── package.json     # Project metadata and dependencies

````

---

## 📦 Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/rajputjayveer/pass-op-with-mongo.git
   cd pass-op-with-mongo
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open your browser:

   ```
   http://localhost:5000
   ```

---

## 🙌 Contributing

Pull requests and contributions are welcome!
Feel free to fork the repository and submit your improvements.


```



