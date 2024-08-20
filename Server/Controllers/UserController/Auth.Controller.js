
const User = require("../../Models/UserModels/UserAuth.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        if (!username || !email || !password ) {
            return res.status(400).json({
                errorMessage: "All filled is required",
            });
        }

        const isExistingUser = await User.findOne({ email: email });
        if (isExistingUser) {
            return res
                .status(409)
                .json({ errorMessage: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const userData = new User({
            username,
            email,
            password: hashedPassword,
           
        });

        await userData.save();
        res.json({ message: "User registered successfully",userData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ errorMessage: "Something went wrong!" });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                errorMessage: "Bad Request! Invalid credentials",
            });
        }

        const userDetails = await User.findOne({ email });

        if (!userDetails) {
            return res
                .status(401)
                .json({ errorMessage: "User doesn't exists" });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            userDetails.password
        );

        if (!passwordMatch) {
            return res
                .status(401)
                .json({ errorMessage: "Invalid credentials" });
        }

        const token = jwt.sign(
            { userId: userDetails._id, name: userDetails.name },
            process.env.SECRET_CODE,
            { expiresIn: "60h" }
        );

        res.json({
            message: "User logged in",
            token: token,
            name: userDetails.name,
            userId: userDetails?._id,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ errorMessage: "Something went wrong!" });
    }
};

module.exports = { registerUser, loginUser };
