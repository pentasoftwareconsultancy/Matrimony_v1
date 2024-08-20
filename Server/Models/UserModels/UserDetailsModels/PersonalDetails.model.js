const mongoose = require("mongoose");

const userPersonalDetails = new mongoose.Schema(
  {
    firstname: {
        type: String,
        required: true,
      },
      middlename: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        // required: true,
      },
      maritalStatus: {
        type: String,
        // required: true,
      },
      Caste: {
        type: String,
        // required: true,
      },
      birthDate: {
        type: String,
        // required: true,
      },
      bloodGroup: {
        type: String,
        // required: true,
      },
      bodyType: {
        type: String,
        // required: true,
      },
      height: {
        type: String,
        // required: true,
      },
      weight: {
        type: String,
        // required: true,
      },
      complexion: {
        type: String,
        // required: true,
      },
      RegistrationBy: {
        type: String,
        // required: true,
      }
    //   ,
    //   refUserId: {
    //     type: mongoose.ObjectId,
    //   },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const PersonalDetails= mongoose.model("PersonalDetails",userPersonalDetails)
module.exports=PersonalDetails