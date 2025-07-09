// Hash the password
const bcrypt = require('bcrypt');

// To genetrate and verify the token
const jwt = require('jsonwebtoken');

// import user model
const User = require('../MODEL/usermodel')

const getUserById = async (req, res) => {
    try 
    {
        const id = req.params.id        
        
        const user = await User.findById(id);

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


// export all the functions
module.exports = {
    getUserById,
    registration
}