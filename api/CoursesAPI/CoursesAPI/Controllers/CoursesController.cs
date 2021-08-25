using CoursesAPI.ApiModels;
using CoursesAPI.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        public IActionResult GetAllCourses()
        {
            var courses = _employeeContext.Courses
                .Where(x => x.IsActive == true)
                .ToList();

            var result = courses
                .Select(x => Mappers.Mappers.From(x))
                .ToList();

            return Ok(result);
        }

        [HttpGet]
        [Route("/GetCoursesById/{id}")]
        public IActionResult GetCoursesById(int id)
        {
            var course = _employeeContext.Courses
                .Where(x => x.Id == id && x.IsActive == true)
                .FirstOrDefault();

            if (course == null)
            {
                return Ok(null);
            }

            var result = Mappers.Mappers.From(course);

            return Ok(result);
        }

        [HttpPost]
        [Route("/CreateCourse")]
        public IActionResult CreateCourse([FromBody] CourseApiModel model)
        {
            var course = Mappers.Mappers.To(model);

            _employeeContext.Courses.Add(course);

            _employeeContext.SaveChanges();

            return RedirectToAction("GetAllCourses", "Courses");
        }

        [HttpDelete]
        [Route("/DeleteCourse")]
        public IActionResult DeleteCourse(int id)
        {
            var course = _employeeContext.Courses
                .Where(x => x.Id == id && x.IsActive == true)
                .FirstOrDefault();

            if (course == null)
            {
                return NotFound("Course not found to be deleted");
            }

            course.IsActive = false;

            _employeeContext.Update(course);
            _employeeContext.SaveChanges();

            return Ok("Course deleted");
        }
    }
}
