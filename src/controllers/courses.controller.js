
const { CoursesDataServices, AddPopularCoursesServices, AddHighRatedCoursesServices, AddTestingCoursesServices } = require("../services/courses.services")
const { callService } = require("./CallServices")



const CoursesDataController=async(req,res)=>{
    callService(CoursesDataServices,req,res)
  
  }
const AddPopularCoursesController=async(req,res)=>{
    callService(AddPopularCoursesServices,req,res)
}

const AddHighRatedCoursesController=async(req,res)=>{
    callService(AddHighRatedCoursesServices,req,res)
}
const AddTestingCoursesController=async(req,res)=>{
    callService(AddTestingCoursesServices,req,res)
}
module.exports = {
    CoursesDataController,
    AddPopularCoursesController,
    AddHighRatedCoursesController,
    AddTestingCoursesController
}