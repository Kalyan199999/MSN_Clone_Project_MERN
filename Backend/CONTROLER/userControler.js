// Hash the password
const bcrypt = require('bcrypt');

// To genetrate and verify the token
const jwt = require('jsonwebtoken');

// import user model
const User = require('../MODEL/usermodel')


// get user by a specific id
const getUserById = async (req, res) => {
    try 
    {
        const id = req.params.id        
        
        const user = await User.findById(id);

        if(!user)
        {
             return res.status(200).json({
                ok:true,
                message:'user not found!',
                data:{}
            });
        }

        return res.status(200).json({
            ok:true,
            message:'user found!',
            data:user
        });
        
    } 
    catch (error) 
    {
        return res.status(500).json({
            ok:false,
            message:'user not found!',
            error:error.message
        });
    }
}

// post the new user
const registration = async (req, res) => 
{
    try 
    {
        const { name , email , password , phone , country , gender , dateOfBirth } = req.body;

        const profile = req.file ;

        if( !name || !email || !password )
        {
            return res.status(400).json({
                ok:false,
                message:'Please fill all the required fields!',
                data:null
            })
        }

        // encrypt the password
        const hashPassword = bcrypt.hashSync(password, 10);

        // create the new token for new user
        const token = jwt.sign(
            { email:email },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )

        // create the user
        const user = await User.create(
            { 
                name: name,
                email: email,
                password: hashPassword,
                phone: phone,
                country: country,
                gender: gender,
                dateOfBirth: dateOfBirth,
                profile: profile
            }
        )

        await user.save();

        return res.status(200).json({
            ok:true,
            message:'User created successfully!',
            data: user,
            token: token
        })

    } 
    catch (error) 
    {
        return res.status(500).json({
            ok:false,
            message:'Something went wrong!',
            error: error.message
        })
    }

}

// Update user data
const updateUser = async (req, res) => {

  try 
  {
    const userId = req.params.id;

    // Extract updated fields
    const {
      name,
      email,
      phone,
      country,
      gender,
      dateOfBirth,
    } = req.body;

    const profile = req.file;

    // Build update object dynamically
    const updateData = {};

    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (phone) updateData.phone = phone;
    if (country) updateData.country = country;
    if (gender) updateData.gender = gender;
    if (dateOfBirth) updateData.dateOfBirth = dateOfBirth;
    if (profile) updateData.profile = profile; // new profile image

    // Update the user
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: false, runValidators: true }
    );

    if (!updatedUser) 
    {
      return res.status(404).json({
        ok: false,
        message: "User not found!",
      });
    }

    const authHeader = req.headers.authorization;

     const token = authHeader.split(" ")[1];

    return res.status(200).json({
      ok: true,
      message: "User updated successfully!",
      data: updatedUser,
      token:token
    });

  } 
  catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Error updating user!",
      error: error.message,
    });
  }
};


// export all the functions
module.exports = {
    getUserById,
    registration,
    updateUser
}