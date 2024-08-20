const mongoose = require("mongoose");

const userAuthSchema = new mongoose.Schema(
    { 
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }

        
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

module.exports = mongoose.model("UserAuth", userAuthSchema);
