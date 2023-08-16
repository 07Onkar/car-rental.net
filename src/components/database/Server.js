const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
main().catch(err => console.log(err));
async function main() {	
  mongoose.set('strictQuery', false);
  await mongoose.connect('mongodb://0.0.0.0:27017/test',{ useNewUrlParser: true });
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

// Define the User model
const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  phoneNumber: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API route for handling user registration
app.post("/api/register", (req, res) => {
  // Extract registration data from the request body
  const { name, surname, phoneNumber, email, password } = req.body;

  // Create a new user document in the database using Mongoose
  const newUser = new User({
    name,
    surname,
    phoneNumber,
    email,
    password,
  });

  // Save the user document to the database
  newUser.save()
    .then(() => {
      // Registration successful
      res.status(200).json({ message: "Registration successful" });
    })
    .catch((error) => {
      // Registration failed
      res.status(500).json({ error: "Error registering user" });
    });
});

// Start your server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
