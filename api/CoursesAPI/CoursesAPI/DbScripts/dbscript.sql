USE [Employee]
GO
/****** Object:  Table [dbo].[Course]    Script Date: 8/27/2021 00:46:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Course](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CourseName] [nvarchar](20) NULL,
	[CourseContent] [nvarchar](500) NULL,
	[CourseBook] [nvarchar](500) NULL,
	[NoOfStudents] [int] NULL,
	[CoordinatorName] [nvarchar](50) NULL,
	[IsActive] [bit] NULL,
	[CreatedOnUTC] [datetime] NOT NULL,
	[CreatedBy] [int] NOT NULL,
	[ModifiedOnUTC] [datetime] NULL,
	[ModifiedBy] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Course] ON 

INSERT [dbo].[Course] ([Id], [CourseName], [CourseContent], [CourseBook], [NoOfStudents], [CoordinatorName], [IsActive], [CreatedOnUTC], [CreatedBy], [ModifiedOnUTC], [ModifiedBy]) VALUES (1, N'Physics 101', N'Kinematics, Stats, Motion', N'https://images-eu.ssl-images-amazon.com/images/I/41iNI3IUeFL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg', 20, N'Dr. Ram', 0, CAST(N'2022-01-14T00:00:00.000' AS DateTime), 101, CAST(N'2021-08-26T18:11:32.753' AS DateTime), NULL)
INSERT [dbo].[Course] ([Id], [CourseName], [CourseContent], [CourseBook], [NoOfStudents], [CoordinatorName], [IsActive], [CreatedOnUTC], [CreatedBy], [ModifiedOnUTC], [ModifiedBy]) VALUES (2, N'Mathematics 101', N'Algebra, Calculus', N'https://ncert.nic.in/textbook/pdf/lemh1cc.jpg', 30, N'Dr. R.D Sharma', 1, CAST(N'2021-11-30T00:00:00.000' AS DateTime), 101, CAST(N'2021-08-26T18:24:55.253' AS DateTime), NULL)
INSERT [dbo].[Course] ([Id], [CourseName], [CourseContent], [CourseBook], [NoOfStudents], [CoordinatorName], [IsActive], [CreatedOnUTC], [CreatedBy], [ModifiedOnUTC], [ModifiedBy]) VALUES (3, N'Computer Sc 101', N'DS, Algo', N'https://ncert.nic.in/textbook/pdf/lecs1cc.jpg', 35, N'Mrs. Poonam', 1, CAST(N'2021-12-30T00:00:00.000' AS DateTime), 101, CAST(N'2021-08-26T18:36:46.963' AS DateTime), NULL)
INSERT [dbo].[Course] ([Id], [CourseName], [CourseContent], [CourseBook], [NoOfStudents], [CoordinatorName], [IsActive], [CreatedOnUTC], [CreatedBy], [ModifiedOnUTC], [ModifiedBy]) VALUES (4, N'Chemistry 101', N'Physical, Organic', N'https://ncert.nic.in/textbook/pdf/lech2cc.jpg', 50, N'Mrs. K Verma', 1, CAST(N'2021-11-03T00:00:00.000' AS DateTime), 1001, CAST(N'2021-08-26T18:24:23.370' AS DateTime), NULL)
INSERT [dbo].[Course] ([Id], [CourseName], [CourseContent], [CourseBook], [NoOfStudents], [CoordinatorName], [IsActive], [CreatedOnUTC], [CreatedBy], [ModifiedOnUTC], [ModifiedBy]) VALUES (5, N'Signals & Systems', N'Signals & Systems Content', N'https://images-eu.ssl-images-amazon.com/images/I/516k69SCbCL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg', 35, N'Simon Haykin', 1, CAST(N'2022-01-09T00:00:00.000' AS DateTime), 1001, CAST(N'2021-08-26T18:23:35.330' AS DateTime), NULL)
INSERT [dbo].[Course] ([Id], [CourseName], [CourseContent], [CourseBook], [NoOfStudents], [CoordinatorName], [IsActive], [CreatedOnUTC], [CreatedBy], [ModifiedOnUTC], [ModifiedBy]) VALUES (7, N'DIP', N'DIP Content', N'https://images-eu.ssl-images-amazon.com/images/I/41blrfp3aXL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg', 10, N'Mr. Gonzalez', 1, CAST(N'2021-06-17T00:00:00.000' AS DateTime), 1001, CAST(N'2021-08-26T18:36:33.873' AS DateTime), NULL)
INSERT [dbo].[Course] ([Id], [CourseName], [CourseContent], [CourseBook], [NoOfStudents], [CoordinatorName], [IsActive], [CreatedOnUTC], [CreatedBy], [ModifiedOnUTC], [ModifiedBy]) VALUES (8, N'test', N'test 123', N'https://images-eu.ssl-images-amazon.com/images/I/51aJI8zrL9L._SX198_BO1,204,203,200_QL40_FMwebp_.jpg', 20, N'Mr. Terrence', 0, CAST(N'2021-10-22T00:00:00.000' AS DateTime), 1001, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Course] OFF
