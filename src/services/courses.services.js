
const { PopularCoursesDetails, TestingCoursesDetails, HighRatedCoursesDetails, AddPopularCoursesModel, AddHighRatedCoursesModel, AddTestingCoursesModel } = require('../models/courses.model');
const {query}=require('./execution');
const CoursesDataServices = async (req) => {
    try {
     
      let PopularCoursesData = await query(PopularCoursesDetails());
      let TestingCoursesData = await query(TestingCoursesDetails());
      let HighRatedCoursesData= await query(HighRatedCoursesDetails())
      console.log("finalresponse",PopularCoursesData[0]);
      if (PopularCoursesData && TestingCoursesData && HighRatedCoursesData ){
          const finalData={
            "TestingCourses":TestingCoursesData[0],
            "PopularCourses":PopularCoursesData[0],
            "HighRatedCourses":HighRatedCoursesData[0]
          }
          return { status: 200,message: "get all courses details", data: finalData};
        
      } else {
        return { status: 300, message: "data not found", data: [] };
      }
    } catch (error) {
      console.log(error);
      return { status: 400, message: "Error", data: error };
    }
  };

const AddPopularCoursesServices=async(req,res)=>{
    try {
        const PopularCoursesName=req.body.PopularCoursesName
        const getDetails=await query(AddPopularCoursesModel(PopularCoursesName))
        console.log("getDetails",getDetails);
        if (getDetails && getDetails.length>0 && getDetails[0][0]?.PopularCoursesMasterID){
           
            return { status: 300,message: " course already exists", data: []};
          
        } else {
            return { status: 200,message: "sucessfully created course", data: []};
        }
    } catch (error) {
        return { status: 400, message: "Error", data: err}
    }
}

const AddHighRatedCoursesServices=async(req,res)=>{
    try {
        const HighRatedCoursesName=req.body.HighRatedCoursesName
        const getDetails=await query(AddHighRatedCoursesModel(HighRatedCoursesName))
        console.log("getDetails",getDetails);
        if (getDetails && getDetails.length>0 && getDetails[0][0]?.HighRatedCoursesMasterID){
           
            return { status: 300,message: " course already exists", data: []};
          
        } else {
            return { status: 200,message: "sucessfully created course", data: []};
        }
    } catch (error) {
        return { status: 400, message: "Error", data: err}
    }
}

const AddTestingCoursesServices=async(req,res)=>{
    try {
        const TestingCoursesName=req.body.TestingCoursesName
        const getDetails=await query(AddTestingCoursesModel(TestingCoursesName))
        console.log("getDetails",getDetails);
        if (getDetails && getDetails.length>0 && getDetails[0][0]?.TestingCoursesMasterID){
           
            return { status: 300,message: " course already exists", data: []};
          
        } else {
            return { status: 200,message: "sucessfully created course", data: []};
        }
    } catch (error) {
        return { status: 400, message: "Error", data: err}
    }
}
module.exports = {
    CoursesDataServices,
    AddPopularCoursesServices,
    AddHighRatedCoursesServices,
    AddTestingCoursesServices
}

