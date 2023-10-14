const express = require("express");

//INITIALIZE EXPRESS
const noddy = express();

noddy.use(express.json());

noddy.get("/" , (request,response) => {
    return response.json({data: "Hey Guys!!!"});
})

noddy.get("/b/:id" , (req,res) => {
    const students = [
        {
            id: 1,
            name: "Anne"
        },
        {
            id: 2,
            name: "Hannah"
        },
        {
            id: 3,
            name: "Gia"
        },
        {
            id: 4,
            name: "Anna"
        },
        {
            id: 5,
            name: "Megh"
        }
    ]

    const studentID = req.params.id;
    const getStudent = students.filter((anything) => (anything.id) === parseInt(studentID));
    return res.json({data: getStudent});
})


//CREATE A SERVER
noddy.listen(8000, () => {
    console.log("Server on port 8000 is up and running");
})