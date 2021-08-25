namespace CoursesAPI.ApiModels
{
    public class CourseApiModel
    {
        public int Id { get; set; }
        public string CourseName { get; set; }
        public string CourseContent { get; set; }
        public string CourseBook { get; set; }
        public int? NoOfStudents { get; set; }
        public string CoordinatorName { get; set; }
    }
}
