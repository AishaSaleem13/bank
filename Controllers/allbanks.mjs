import AllBanks from "../Models/allbanksSchmea.mjs";

// GET API
export const getallbanks = async (req, res) => {
  try {
    const AllBanksdata = await AllBanks.find();
    console.log(AllBanksdata);
    res.status(200).json({ message: "All banks data retrieved successfully", data: AllBanksdata });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST API
export const postallbanks = async (req, res) => {
  try {
    console.log("text data", req.body);
    console.log("image file", req.file);

    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    let imageUrl = null;

    // ✅ Upload image to Cloudinary
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, "banks");
      imageUrl = result.secure_url;
    } else {
      return res.status(400).json({ message: "Image not uploaded" });
    }

    // ✅ Save to MongoDB
    const allbankspost = new AllBanks({
      name,
      image: imageUrl,
    });

    await allbankspost.save();

    res.status(201).json({
      message: "Bank posted successfully",
      bank: allbankspost,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error in postallbanks",
      error: error.message,
    });
  }
};