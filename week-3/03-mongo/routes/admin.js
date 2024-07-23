const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router(); // this is the whole object 
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        let existingUser = await Admin.findOne({
            username: username,
            password: password
        });

        if (existingUser) {
            return res.status(400).send("Username Already exists");
        }

        await Admin.create({
            username: username,
            password: password
        });

        res.status(201).json({
            message: 'Admin created successfully'
        });
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    try {
         const course = await Course.create({
            title: title,
            description: description,
            price: price,
            imageLink: imageLink
         });

        const courseId = course._id;
        
    
        res.status(200).json(
            { message: 'Course created successfully', courseId: courseId.toString()}
        );
    }
    catch (err) {
        res.status(404).send("Internal Server Error");
    }
    
    
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    let allCourse = await Course.find();
    res.status(200).json({
        courses: [allCourse],
    });

});

module.exports = router;
// exporting the only whole and sole object
