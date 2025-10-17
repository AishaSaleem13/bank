import User from "../Models/User.mjs"

 export const get=async(req,res)=>{ 
    const users=await User.find()
     res.send({message:'Data Fetched Successfully',Data:users}) 
    }


export const register=async(req,res)=>{ 
    try{ 
        const user=new User(req.body) 
        await user.save() 
    res.send({ message: "User registered successfully!" })
 } catch(e){ 
    res.send({message:e.message}) 
} }

 export const login=async (req, res) => {
  try {
    console.log("🔹 Login route hit");
    const { email, password } = req.body;
    console.log("🔹 Email:", email, "Password:", password);

    const user = await User.findOne({ email });
    console.log("🔹 User found:", !!user);

    if (!user) {
      res.status(404).send({ message: 'User Not Found' });
      return;
    }

    const isCorrect = user.comparePassword(password);
    console.log("🔹 Password check result:", isCorrect);

    if (!isCorrect) {
      res.status(401).send({ message: 'Invalid Password' });
      return;
    }

    const token = user.generateToken();
    console.log("🔹 Token generated:", token);
    user.tokens.push(token);
    await user.save();

    res.send({ message: 'User logged in successfully!', token });
  } catch (e) {
    console.error("❌ Error in login:", e);
    res.status(500).send({ message: 'Token error', error: e.message });
  }
};

export const logout=async(req,res)=>{ 
    await User.findByIdAndUpdate(req.userId, { $pull: { tokens: req.tokenToRemove } }) 
    res.send({message:'Logged Out Successfully'}) }