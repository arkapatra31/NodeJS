const express = require('express')
const router = express.Router();


const courses = [
    {id:2001 , name : "Node.Js"},
    {id:2002 , name : "React"},
    {id:2003 , name : "Express"},
    {id:2004 , name : "MongoDB"},
    {id:2005 , name : "GraphQL"}
]

router.get('/' , (req,res) => {
    res.send(courses)
})

//Multiple req params
router.get('/:year/:month' , (req,res) => {
    res.send(`This is from year ${req.params.year} and month ${req.params.month}`)
})

//routes to access course by id
//Using get method to retrieve courses
router.get('/:id' , (req,res) => {
    const c = courses.find((course) => course.id == req.params.id)
    if(!c){
        res.status(400).send(`Course with course id - ${req.params.id} not found`)
    }

    res.status(200).send(`Course Found \n Course Name - ${c.name} \t Course ID - ${c.id}`)
})

//Using post method to create a course
//In order to use body.name we need to parse json
router.use(express.json())
router.post('/' , (req,res) => {

    /* //input validation
    const schema = {
        name : joi.string().min(3).required()
    }
    const valid = joi.valid(req.body,schema)

    if(valid.error){
        res.sendStatus(400).send(valid.error.details[0].message)
    } */

    if(!req.body.name || req.body.name.length < 3){
        console.clear()
        res.status(400).send("Course is invalid");
        return;
    } 
    
    const course = {
        id : courses.length+1,
        name : req.body.name
    }
    courses.push(course)
    res.status(200).send(course)
})



//update a course
router.put('/:id', (req,res) => {
    
    //check if course exists
    const course = courses.find((cor) => cor.id == req.params.id)
    if(!course){
        res.status(400).send(`Course with course id - ${req.params.id} not found`)
    }

    //Validating course input
    if(!req.body.name || req.body.name.length < 3){
        console.clear()
        res.status(400).send("Course is invalid");
    }
       

    //Update course name
    course.name = req.body.name
    console.clear()
    console.log(course);
    res.status(200).send(course)

})


//Delete a course
router.delete('/:id', (req,res) => {
    
    const course = courses.find((c) => c.id == req.params.id)
    if(!course){
        res.status(400).send(`Course with course id - ${req.params.id} not found`)
        return;
    }
    
    const index = courses.indexOf(course)
    courses.splice(index, 1)
    res.status(200).send(course)

})

module.exports = router