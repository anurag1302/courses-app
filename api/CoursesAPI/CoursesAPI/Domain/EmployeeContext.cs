using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CoursesAPI.Domain
{
    public partial class EmployeeContext : DbContext
    {
        public EmployeeContext()
        {
        }

        public EmployeeContext(DbContextOptions<EmployeeContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Course> Courses { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//                optionsBuilder.UseSqlServer("Server=KELLGGNLPTP0416;Database=Employee;Trusted_Connection=True;");
//            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Course>(entity =>
            {
                entity.ToTable("Course");

                entity.Property(e => e.CoordinatorName).HasMaxLength(50);

                entity.Property(e => e.CourseBook).HasMaxLength(500);

                entity.Property(e => e.CourseContent).HasMaxLength(500);

                entity.Property(e => e.CourseName).HasMaxLength(20);

                entity.Property(e => e.CreatedOnUtc)
                    .HasColumnType("datetime")
                    .HasColumnName("CreatedOnUTC");

                entity.Property(e => e.ModifiedOnUtc)
                    .HasColumnType("datetime")
                    .HasColumnName("ModifiedOnUTC");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
