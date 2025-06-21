---

# 🔐 Pass-Op with Mongo

A simple and secure Password Manager built using **Node.js**, **Express.js**, **MongoDB**, and **EJS** templating. This project allows users to save, update, and delete their website credentials in a protected environment.

## 🚀 Features

* 🔒 Securely store website credentials (name, username, password)
* 📋 View all saved passwords
* ✏️ Edit/update stored credentials
* ❌ Delete password entries
* 💾 MongoDB for backend data storage
* 🎨 EJS for server-side rendering
* 📁 Organized folder structure for MVC pattern

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS, HTML, CSS
* **Database:** MongoDB (Mongoose ODM)

## 📂 Folder Structure

```
pass-op-with-mongo/
│
├── views/             # EJS templates
├── public/            # Static files (CSS, JS)
├── models/            # Mongoose schema
├── routes/            # Express routes
├── .env               # Environment variables
├── app.js             # Main entry point
└── package.json       # Project metadata
```

## 🔧 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/rajputjayveer/pass-op-with-mongo.git
cd pass-op-with-mongo
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure environment variables:**

Create a `.env` file in the root directory and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

4. **Run the server:**

```bash
npm start
```

5. **Visit in browser:**

```
http://localhost:5000
```


## 🙌 Contributions

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/rajputjayveer/pass-op-with-mongo/issues).


---



