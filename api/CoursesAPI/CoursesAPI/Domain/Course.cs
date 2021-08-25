using System;
using System.Collections.Generic;

#nullable disable

namespace CoursesAPI.Domain
{
    public partial class Course
    {
        public int Id { get; set; }
        public string CourseName { get; set; }
        public string CourseContent { get; set; }
        public string CourseBook { get; set; }
        public int? NoOfStudents { get; set; }
        public string CoordinatorName { get; set; }
        public bool? IsActive { get; set; }
        public DateTime CreatedOnUtc { get; set; }
        public int CreatedBy { get; set; }
        public DateTime? ModifiedOnUtc { get; set; }
        public int? ModifiedBy { get; set; }
    }
}
