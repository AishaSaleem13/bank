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
    console.log("image", req.file);

    if (!req.file) {
      return res.status(400).json({ message: "Image not uploaded" });
    }

    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const allbankspost = new AllBanks({
      name,
      image: req.file.path
    });

    await allbankspost.save();

    res.status(201).json({ message: "Bank posted successfully", productAdded: allbankspost });
  } catch (error) {
    res.status(500).json({ message: "Error in postallbanks", error: error.message });
  }
};
