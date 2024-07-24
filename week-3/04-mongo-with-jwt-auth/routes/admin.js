const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db"); // Ensure all models are imported
const router = Router();
const jwt = require("jsonwebtoken");
const secret = require("../config"); // Importing the secret

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    try {
        let existingUser = await Admin.findOne({ username, password });

        if (existingUser) {
            return res.status(400).send("Username Already Exists");
        }

        await Admin.create({ username, password });

        res.status(200).json({ message: "Admin Created successfully" });
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});

router.post('/signin', async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
/*
 "jwtToken": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpbmF5YWsiLCJpYXQiOjE3MjE3NTM2NDF9.Bd3BIY5-Gpq-x6se_lnjEYk5v2k-SbEP01ZuAIYxk0w"
*/
    try {
        
        let existingUser = await Admin.findOne({ username, password });
        
        if (existingUser) {
           
            let jwtToken = jwt.sign({ username }, secret.JWT_SECRET);
            return res.status(200).json({ jwtToken: "Bearer " + jwtToken });
        } else {
            return res.status(404).json({ msg: "User Not found" });
        }
    } catch (err) {
        return res.status(500).send("Internal Server Error");
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const { title, description, price, imageLink } = req.body;

    try {
        const course = await Course.create({ title, description, price, imageLink });
        const courseId = course._id;

        res.status(200).json({ message: 'Course created successfully', courseId: courseId.toString() });
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    try {
        let allCourses = await Course.find();
        res.status(200).json({ courses: allCourses });
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
