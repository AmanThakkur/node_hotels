const express = require('express')
const router = express.Router() ;
const Person = require('./../models/person');

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log("data saved");

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get('/:workType' ,async(req , res) => {
    try {
        const workType = req.params.workType ;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response)    
        } else {
            res.status(404).json({error :'Invalid work type'})
        }
    } catch (error) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
        
    }
})

router.put('/:id', async(req ,res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;

    const response = await Person.findByIdAndUpdate(personId ,updatedPersonData, {
      new: true ,
      runValidators: true ,
    })
    if (!response) {
      return res.status(404).json({ error: 'Person not found' });
    }
    console.log('data updated');
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'internal server error'})
  }
})

router.delete('/:id' ,async (req ,res) => {
  try {
    const personId = req.params.id ;
    const response = await Person.findOneAndDelete(personId);
    if(!response){
      return res.status(404).json({ error: 'person not found'})
    }
    console.log('data delete');
    res.status(200).json({message: 'person deleted Successfully'}) ;
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'internal server error'})
    
  }
})

// router.put("/:id", async (req, res) => {
//   try {
//     const personId = req.params.id;
//     const updatedPersonData = req.body;

//     // Validate if the ID is in correct MongoDB ObjectId format
//     if (!personId.match(/^[0-9a-fA-F]{24}$/)) {
//       return res.status(400).json({ error: "Invalid person ID format" });
//     }

//     const response = await Person.findByIdAndUpdate(
//       personId,
//       updatedPersonData,
//       {
//         new: true,
//         runValidators: true,
//       }
//     );

//     if (!response) {
//       return res.status(404).json({ error: "Person not found" });
//     }

//     console.log("data updated");
//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

module.exports = router ;