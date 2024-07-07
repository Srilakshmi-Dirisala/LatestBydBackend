var express = require('express');
const { CoursesDataController, AddPopularCoursesController, AddHighRatedCoursesController, AddTestingCoursesController } = require('../controllers/courses.controller');
var router = express.Router();


router.get('/CoursesData', CoursesDataController);
router.post('/AddPopularCoursesDetails',AddPopularCoursesController)
router.post('/AddHighRatedCoursesDetails',AddHighRatedCoursesController)
router.post('/AddTestingCoursesDetails',AddTestingCoursesController)

module.exports = router