
module.exports={
    PopularCoursesDetails:()=>`CALL GET_POPULAR_COURSES_DEATILS()`,
    HighRatedCoursesDetails:()=>`CALL GET_HIGH_RATED_COURSES_DEATILS()`,
    TestingCoursesDetails:()=> `CALL GET_TESTING_COURSES_DATA()`,
    AddPopularCoursesModel:(PopularCoursesName)=>`CALL ADD_POPULAR_DEATILS('${PopularCoursesName}')`,
    AddHighRatedCoursesModel:(HighRatedCoursesName)=>`CALL ADD_HIGH_RATED_COURSES('${HighRatedCoursesName}')`,
    AddTestingCoursesModel:(TestingCoursesName)=>`CALL ADD_TESTING_COURSES('${TestingCoursesName}')`
}
