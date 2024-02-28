import User from "../models/user.model.js";

export const signup = async (req, res) => {
    //Retrieves username, email, password from request body
    //The request body typically contains data sent by the client when making an HTTP request, often in JSON format
    const { username, email, password } = req.body;
    //creates a new instanc of the User model with the provided data
    const newUser = new User({ username, email, password });
    //saves the new user to the database asynchronously
    await newUser.save();
    //sends a json response indicating successful user creation
    res.status(201).json('user created successfully');
}