using CoursesAPI.Domain;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace CoursesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly EmployeeContext _employeeContext;

        public CoursesController(EmployeeContext employeeContext)
        {
            _employeeContext = employeeContext;
        }

        [HttpGet]
        [Route("/GetAllCourses")]
        public IActionResult GetAll()
        {
            var courses = _employeeContext.Courses.ToList();
            return Ok(courses);
        }

        [HttpGet]
        [Route("/GetCoursesById/{id}")]
        public IActionResult GetCoursesById(int id)
        {
            var course = _employeeContext.Courses
                .Where(x => x.Id == id)
                .FirstOrDefault();

            if(course==null)
            {
                return Ok(null);
            }
            return Ok(course);
        }
    }
}
