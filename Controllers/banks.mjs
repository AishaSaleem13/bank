// import Banks from "../Models/banks..mjs"


// // get api 
// export const getbank=async(req,res)=>{
//     try {
//         const bankget= await Banks.find()
//         console.log(bankget)
//         res.status(201).send({message:" getting banks succsessfully ",Data:bankget})
//     } catch (error) {
//         res.status(500).send({message:"error in getting banks"})
//     }

// }
// // post api 
// export const postbank =async(req,res)=>{
// try {
//     console.log("text data",req.body)

//     const {Cards,CardDetails,FullName}=req.body
//     if (!Cards||!CardDetails||!FullName) {
//         return res.send({message:"all field required "}).status(401)
//     }
//     const bankpost=new Banks(req.body)
//     await bankpost.save()

//   res.status(201).json({ message: "posted data completely" })

// } catch (error) {
    
// res.status(500).json({message:"error in posting form data"})

// }
// }
// //  id api 
// export const idbank=async(req,res)=>{
// try {
//     const bankid=  await Banks.findById(req.params.id)
// res.status(201).send({message:"id get it ",iddata:bankid})

// } catch (error) {
//  res.status(500).send({message:"error in getting id "})
// }

// }


// // delete api 

// export const deletebank = async (req,res)=>{
//     try {
//         const bankdelete=await Banks.findByIdAndDelete(req.params.id)
//             res.send({ message: "Ad Deleted Successfully", bankdelete });
//     } catch (error) {
//            res.status(500).send({ message: e.message });
//     }
// }