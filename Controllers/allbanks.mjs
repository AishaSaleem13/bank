import AllBanks from "../Models/allbanksSchmea.mjs"

// GET API 

export const getallbanks= async  (req,res)=>{
    try {
        const AllBanksdata= await AllBanks.find()
        console.log(AllBanksdata)
        res.status(555).json({message:"allbanksdata get successfully",Data:AllBanksdata})
    } catch (error) {
           res.status(500).send({ message: error.message });
    }
}


// POST API 


export const postallbanks = async(req,res)=>{
    try {
        console.log("text data",req.body)
        console.log("image",req.file)

        if (!req.file){
             return res.status(400).json({ message: "Image not uploaded" });
        }

        const {name}=req.body
        if (!name){
          return   res.send({message:"name is required "})
        }
        const allbankspost= new  AllBanks({
            name,
            image: req.file.path
        }
        )
        await allbankspost.save()
        res.status(201).json({message:"product posted successfully ",productaddede:allbankspost})
        
    } catch (error) {
        res.send({message:"error in postallbanks"}).status(500)
    }
}