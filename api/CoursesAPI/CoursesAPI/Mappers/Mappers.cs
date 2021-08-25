using CoursesAPI.ApiModels;
using CoursesAPI.Domain;
using System;

namespace CoursesAPI.Mappers
{
    public static class Mappers
    {
        public static CourseApiModel From(this Course model)
        {
            return new CourseApiModel
            {
                Id = model.Id,
                CourseName = model.CourseName,
                CourseBook = model.CourseBook,
                CourseContent = model.CourseContent,
                CoordinatorName = model.CoordinatorName,
                NoOfStudents = model.NoOfStudents,
                CreatedOn = model.CreatedOnUtc
            };
        }

        public static Course To(this CourseApiModel model)
        {
            return new Course
            {
                CourseName = model.CourseName,
                CourseBook = model.CourseBook,
                CourseContent = model.CourseContent,
                CoordinatorName = model.CoordinatorName,
                NoOfStudents = model.NoOfStudents,
                IsActive = true,
                CreatedBy = 1001,
                CreatedOnUtc = DateTime.UtcNow
            };
        }
    }
}
