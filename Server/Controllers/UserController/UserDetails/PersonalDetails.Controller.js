const PersonalDetails = require("../../../Models/UserModels/UserDetailsModels/PersonalDetails.model");

const UserPersonalDetails = async (req, res) => {
  try {
    const {
      firstname,
      middlename,
      lastname,
      gender,
      maritalStatus,
      Caste,
      birthDate,
      bloodGroup,
      bodyType,
      height,
      weight,
      complexion,
      RegistrationBy,
    } = req.body;
    const userData = new PersonalDetails({
      firstname,
      middlename,
      lastname,
      gender,
      maritalStatus,
      Caste,
      birthDate,
      bloodGroup,
      bodyType,
      height,
      weight,
      complexion,
      RegistrationBy,
    });
    await userData.save();
    res.status(200).json({
      message: "UserPersonalDetails created successfully",
      userData,
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserPersonalDetails = async (req,res) => {
  try {
    const userData = await PersonalDetails.find();
    res.status(200).json({
      message: "user personal data get successfully",
      data: userData,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while retrieving user profiles." });
  }
};

const getSingleUserPersonalDetails=async(req,res)=>{
try {
  const uid=req.params.userid
  const users= await PersonalDetails.findById(uid)
  res.status(200).json({
    message:"Single use get successfully",
    userData:users
  })
} catch (error) {
  console.log(error)
}
}


const updateUserPersonalDetails = async (req, res) => {
  try {
    const uid=req.params.userid
   

    // Find the existing record by ID and update it
    const updatedUserData = await PersonalDetails.findByIdAndUpdate(
      uid,
      req.body,
     
      { new: true } // This option returns the updated document
    );

    if (!updatedUserData) {
      return res.status(404).json({ message: "UserPersonalDetails not found" });
    }

    res.status(200).json({
      message: "UserPersonalDetails updated successfully",
      updatedUserData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  UserPersonalDetails,
  getUserPersonalDetails,
  updateUserPersonalDetails,
  getSingleUserPersonalDetails
};
