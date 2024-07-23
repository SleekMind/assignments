const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");


// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    try {
        let existingUser = await User.findOne({ username: username, password, password });
        if (existingUser) {
            res.status(400).send("User alreadY exists");
        }

        let newUser = await User.create({
            username,
            password
        });

        res.json({
            message: "User Created Successfully",
        })
    }
    catch (err) {
        res.send("Internal Error");
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
        courses: response,
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username,
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Assuming username is passed as a query parameter
    const username = req.headers.username;

    try {
        // Find the user by username
        const UserObj = await User.findOne({ username: username });

        // Get the array of purchased course IDs
        const courseIds = UserObj.purchasedCourses;

        // Find courses with IDs in the purchasedCourses array
        const courses = await Course.find({ _id: { "$in": courseIds } });

        // Respond with the list of courses
        res.json({
            courses: courses,
        });
    } catch (error) {
        console.error('Error retrieving purchased courses:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


module.exports = router