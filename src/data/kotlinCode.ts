export interface KotlinFile {
  path: string;
  name: string;
  category: 'manifest' | 'gradle' | 'model' | 'data' | 'navigation' | 'screen' | 'activity' | 'theme';
  description: string;
  code: string;
}

export const KOTLIN_PROJECT_FILES: KotlinFile[] = [
  {
    name: 'Course.kt',
    path: 'app/src/main/java/com/example/universitycourses/model/Course.kt',
    category: 'model',
    description: 'Data model representing a University BS degree program with all required fields.',
    code: `package com.example.universitycourses.model

import androidx.compose.ui.graphics.vector.ImageVector

/**
 * Data class representing a University Course / BS Degree Program.
 * Keeps data modular and strictly typed.
 */
data class Course(
    val id: String,
    val name: String,                  // Full degree name, e.g. "Bachelor of Science in Computer Science"
    val shortName: String,             // Display name, e.g. "BS Computer Science"
    val abbreviation: String,          // e.g. "BS CS"
    val duration: String,              // e.g. "4 Years (8 Semesters)"
    val eligibility: String,           // Entry criteria
    val shortDescription: String,      // Brief summary for card display
    val description: String,           // Detailed program overview
    val department: String,            // Academic department
    val mainSubjects: List<String>,    // Key syllabus subjects
    val careerOpportunities: List<String>, // Job roles and pathways
    val tuitionFee: String = "$1,250 / semester",
    val creditHours: Int = 130
)
`
  },
  {
    name: 'CourseData.kt',
    path: 'app/src/main/java/com/example/universitycourses/data/CourseData.kt',
    category: 'data',
    description: 'Centralized repository providing realistic information for BS CS, Zoology, English, Math, and Economics.',
    code: `package com.example.universitycourses.data

import com.example.universitycourses.model.Course

/**
 * Centralized Data Source for University BS Degree Programs.
 * Avoids hardcoding data in UI composables.
 */
object CourseData {

    val coursesList: List<Course> = listOf(
        Course(
            id = "bs_cs",
            name = "Bachelor of Science in Computer Science",
            shortName = "BS Computer Science",
            abbreviation = "BS CS",
            duration = "4 Years (8 Semesters)",
            eligibility = "Intermediate (HSSC / Pre-Engineering / ICS / A-Levels with Math) with minimum 50% marks.",
            shortDescription = "A degree focused on programming, software development, databases, computer networks, AI, and related areas.",
            description = "A comprehensive degree program designed to provide students with strong theoretical foundations and practical software development skills. The curriculum covers programming, algorithms, database systems, artificial intelligence, cloud computing, and operating systems.",
            department = "Department of Computer Science & Information Technology",
            mainSubjects = listOf(
                "Programming Fundamentals",
                "Object Oriented Programming (OOP)",
                "Data Structures & Algorithms",
                "Database Systems & SQL",
                "Operating Systems",
                "Computer Networks",
                "Artificial Intelligence & Machine Learning",
                "Software Engineering"
            ),
            careerOpportunities = listOf(
                "Software Developer",
                "Web Developer (Full-Stack)",
                "Mobile App Developer (Android/iOS)",
                "Database Administrator",
                "AI & Machine Learning Engineer",
                "Cloud Systems Architect",
                "Cybersecurity Analyst"
            ),
            tuitionFee = "$1,350 / semester",
            creditHours = 134
        ),
        Course(
            id = "bs_zoology",
            name = "Bachelor of Science in Zoology",
            shortName = "BS Zoology",
            abbreviation = "BS ZOO",
            duration = "4 Years (8 Semesters)",
            eligibility = "Intermediate Pre-Medical (F.Sc / A-Levels Biology / equivalent) with minimum 50% marks.",
            shortDescription = "Study animal diversity, genetics, ecology, wildlife conservation, physiology, and evolutionary biology.",
            description = "The Bachelor of Science in Zoology is dedicated to the scientific investigation of animal life from microscopic cellular genetics to broad ecosystem biodiversity. The program blends comprehensive laboratory dissections, microscopy, histology, and field expeditions.",
            department = "Department of Zoology & Biological Sciences",
            mainSubjects = listOf(
                "Animal Diversity & Taxonomy",
                "Cell & Molecular Biology",
                "Principles of Genetics & Evolution",
                "Animal Physiology & Biochemistry",
                "Wildlife Ecology & Conservation Biology",
                "General & Applied Entomology",
                "Developmental Biology & Embryology",
                "Biostatistics & Research Methods"
            ),
            careerOpportunities = listOf(
                "Wildlife Biologist",
                "Zoologist & Ecologist",
                "Conservation Officer",
                "Research Scientist in Biotech Labs",
                "Veterinary Laboratory Analyst",
                "Zoo & Wildlife Safari Curator",
                "Environmental Impact Consultant"
            ),
            tuitionFee = "$1,100 / semester",
            creditHours = 130
        ),
        Course(
            id = "bs_english",
            name = "Bachelor of Science in English (Language & Literature)",
            shortName = "BS English",
            abbreviation = "BS ENG",
            duration = "4 Years (8 Semesters)",
            eligibility = "Intermediate (FA / F.Sc / ICS / I.Com / A-Levels) with minimum 45% marks.",
            shortDescription = "Explore global literature, critical discourse, linguistics, creative writing, and corporate communications.",
            description = "A rich interdisciplinary program cultivating critical thinking, eloquent articulation, and literary analysis. Blends classical and modern world literature with applied linguistics, media discourse, phonetics, and digital content strategy.",
            department = "Department of English Language & Literary Studies",
            mainSubjects = listOf(
                "History of English Literature",
                "Classical & Modern Poetry",
                "Drama & Theatre Studies",
                "The English Novel & Short Fiction",
                "Applied Linguistics & Phonetics",
                "Sociolinguistics & Psycholinguistics",
                "Discourse Analysis & Media Rhetoric",
                "Creative Writing & Corporate Communication"
            ),
            careerOpportunities = listOf(
                "Content Strategist & Copywriter",
                "Book Editor & Publishing Specialist",
                "Corporate Communications & PR Officer",
                "English Educator & University Lecturer",
                "Technical Writer & Documentation Specialist",
                "Digital Media Journalist & Columnist",
                "Diplomatic Foreign Affairs Officer"
            ),
            tuitionFee = "$1,050 / semester",
            creditHours = 128
        ),
        Course(
            id = "bs_math",
            name = "Bachelor of Science in Mathematics",
            shortName = "BS Mathematics",
            abbreviation = "BS MATH",
            duration = "4 Years (8 Semesters)",
            eligibility = "Intermediate with Mathematics (Pre-Engineering / ICS / A-Levels) with minimum 50% marks.",
            shortDescription = "Master abstract algebra, mathematical modeling, calculus, statistics, cryptography, and computation.",
            description = "A rigorous mathematical journey fostering analytical prowess and quantitative deduction. Bridges theoretical pure mathematics with computational applications in data science, cryptography, and quantitative finance.",
            department = "Department of Mathematical Sciences",
            mainSubjects = listOf(
                "Calculus I, II & Multivariable Calculus",
                "Linear Algebra & Vector Analysis",
                "Ordinary & Partial Differential Equations",
                "Real & Complex Analysis",
                "Abstract Algebra & Group Theory",
                "Numerical Methods with MATLAB/Python",
                "Probability & Mathematical Statistics",
                "Discrete Mathematics & Cryptography"
            ),
            careerOpportunities = listOf(
                "Quantitative Analyst (Quant)",
                "Data Scientist & Machine Learning Specialist",
                "Cryptography & Cyber Defense Specialist",
                "Actuarial Analyst in Insurance",
                "Operations Research Analyst",
                "Algorithm Engineer",
                "University Professor & Pure Math Researcher"
            ),
            tuitionFee = "$1,150 / semester",
            creditHours = 132
        ),
        Course(
            id = "bs_economics",
            name = "Bachelor of Science in Economics",
            shortName = "BS Economics",
            abbreviation = "BS ECON",
            duration = "4 Years (8 Semesters)",
            eligibility = "Intermediate in Arts, Commerce, Science or ICS with minimum 50% marks.",
            shortDescription = "Analyze micro/macroeconomics, global market trends, fiscal policy, econometric modeling, and finance.",
            description = "A high-demand degree equipping graduates to decipher market dynamics, monetary policies, international trade, and big-data econometric forecasting using Stata and R for corporate and government decision-making.",
            department = "Department of Economics & Development Policy",
            mainSubjects = listOf(
                "Principles of Microeconomics & Macroeconomics",
                "Intermediate & Advanced Microeconomics",
                "Intermediate & Advanced Macroeconomics",
                "Mathematical Economics",
                "Econometrics & Data Analytics (Stata / R)",
                "Money, Banking & Financial Markets",
                "International Trade & Finance",
                "Development Economics & Public Policy"
            ),
            careerOpportunities = listOf(
                "Economic Policy Analyst",
                "Investment Banking & Financial Analyst",
                "Market Research Director",
                "Econometrician & Data Analyst",
                "Central Bank & Ministry of Finance Officer",
                "International Development Consultant (UN/World Bank)",
                "Corporate Strategy Associate"
            ),
            tuitionFee = "$1,200 / semester",
            creditHours = 130
        )
    )

    /**
     * Retrieve a specific course by its unique identifier.
     */
    fun getCourseById(courseId: String): Course? {
        return coursesList.find { it.id == courseId }
    }
}
`
  },
  {
    name: 'Screen.kt',
    path: 'app/src/main/java/com/example/universitycourses/navigation/Screen.kt',
    category: 'navigation',
    description: 'Type-safe sealed class defining navigation routes with parameterized helper methods.',
    code: `package com.example.universitycourses.navigation

/**
 * Sealed class representing all destination screens in the app.
 * Provides type-safe routes and parameter helpers.
 */
sealed class Screen(val route: String) {
    object Login : Screen("login_screen")
    object Register : Screen("register_screen")
    object Courses : Screen("courses_screen")
    
    // Route expecting a courseId argument: "course_detail_screen/{courseId}"
    object CourseDetail : Screen("course_detail_screen/{courseId}") {
        fun passCourseId(courseId: String): String {
            return "course_detail_screen/$courseId"
        }
    }
}
`
  },
  {
    name: 'NavGraph.kt',
    path: 'app/src/main/java/com/example/universitycourses/navigation/NavGraph.kt',
    category: 'navigation',
    description: 'Jetpack Compose NavHost managing navigation between Login, Register, Course list, and Course Details.',
    code: `package com.example.universitycourses.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.navArgument
import com.example.universitycourses.ui.screens.CourseDetailScreen
import com.example.universitycourses.ui.screens.CourseScreen
import com.example.universitycourses.ui.screens.LoginScreen
import com.example.universitycourses.ui.screens.RegisterScreen

/**
 * Root Navigation Graph configuring all app destinations:
 * Login -> Register -> Courses List -> Course Details -> Back
 */
@Composable
fun UniversityNavGraph(
    navController: NavHostController,
    startDestination: String = Screen.Login.route
) {
    NavHost(
        navController = navController,
        startDestination = startDestination
    ) {
        // 1. Login Screen
        composable(route = Screen.Login.route) {
            LoginScreen(
                onLoginSuccess = {
                    // Navigate to Courses and clear login from backstack so user can't press back to login
                    navController.navigate(Screen.Courses.route) {
                        popUpTo(Screen.Login.route) { inclusive = true }
                    }
                },
                onNavigateToRegister = {
                    navController.navigate(Screen.Register.route)
                },
                onSkipAsGuest = {
                    navController.navigate(Screen.Courses.route)
                }
            )
        }

        // 2. Registration Screen
        composable(route = Screen.Register.route) {
            RegisterScreen(
                onRegisterSuccess = {
                    navController.navigate(Screen.Courses.route) {
                        popUpTo(Screen.Login.route) { inclusive = true }
                    }
                },
                onNavigateBackToLogin = {
                    navController.popBackStack()
                }
            )
        }

        // 3. Main Courses Screen
        composable(route = Screen.Courses.route) {
            CourseScreen(
                onCourseClick = { selectedCourseId ->
                    navController.navigate(Screen.CourseDetail.passCourseId(selectedCourseId))
                },
                onLogout = {
                    navController.navigate(Screen.Login.route) {
                        popUpTo(0) // Clear all back stack
                    }
                }
            )
        }

        // 4. Course Details Screen (receives courseId argument)
        composable(
            route = Screen.CourseDetail.route,
            arguments = listOf(
                navArgument("courseId") {
                    type = NavType.StringType
                }
            )
        ) { backStackEntry ->
            val courseId = backStackEntry.arguments?.getString("courseId") ?: ""
            CourseDetailScreen(
                courseId = courseId,
                onBackClick = {
                    navController.popBackStack()
                }
            )
        }
    }
}
`
  },
  {
    name: 'CourseScreen.kt',
    path: 'app/src/main/java/com/example/universitycourses/ui/screens/CourseScreen.kt',
    category: 'screen',
    description: 'Main Courses screen with Material 3 TopAppBar, LazyColumn, search filter, and clickable course cards.',
    code: `package com.example.universitycourses.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material.icons.outlined.ExitToApp
import androidx.compose.material.icons.outlined.School
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.universitycourses.data.CourseData
import com.example.universitycourses.model.Course

/**
 * Main Courses Screen displaying the list of BS Degree programs in a modern LazyColumn.
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CourseScreen(
    onCourseClick: (String) -> Unit,
    onLogout: () -> Unit
) {
    var searchQuery by remember { mutableStateOf("") }
    val allCourses = remember { CourseData.coursesList }

    // Filter courses based on search query
    val filteredCourses = remember(searchQuery) {
        if (searchQuery.isBlank()) {
            allCourses
        } else {
            allCourses.filter { course ->
                course.name.contains(searchQuery, ignoreCase = true) ||
                course.abbreviation.contains(searchQuery, ignoreCase = true) ||
                course.shortDescription.contains(searchQuery, ignoreCase = true)
            }
        }
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Icon(
                            imageVector = Icons.Outlined.School,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.primary,
                            modifier = Modifier.size(28.dp)
                        )
                        Spacer(modifier = Modifier.width(10.dp))
                        Text(
                            text = "University Courses",
                            fontWeight = FontWeight.Bold,
                            fontSize = 20.sp
                        )
                    }
                },
                actions = {
                    IconButton(onClick = onLogout) {
                        Icon(
                            imageVector = Icons.Outlined.ExitToApp,
                            contentDescription = "Logout",
                            tint = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.surfaceColorAtElevation(3.dp),
                    titleContentColor = MaterialTheme.colorScheme.onSurface
                )
            )
        }
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .background(MaterialTheme.colorScheme.background)
        ) {
            // Search Bar
            OutlinedTextField(
                value = searchQuery,
                onValueChange = { searchQuery = it },
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp, vertical = 12.dp),
                placeholder = { Text("Search degree programs, subjects...") },
                leadingIcon = {
                    Icon(
                        imageVector = Icons.Default.Search,
                        contentDescription = "Search Icon"
                    )
                },
                trailingIcon = {
                    if (searchQuery.isNotEmpty()) {
                        IconButton(onClick = { searchQuery = "" }) {
                            Icon(Icons.Default.Clear, contentDescription = "Clear search")
                        }
                    }
                },
                singleLine = true,
                shape = RoundedCornerShape(14.dp),
                colors = OutlinedTextFieldDefaults.colors(
                    focusedBorderColor = MaterialTheme.colorScheme.primary,
                    unfocusedBorderColor = MaterialTheme.colorScheme.outlineVariant
                )
            )

            // Header summary count
            Text(
                text = "Available BS Programs (\${filteredCourses.size})",
                fontSize = 14.sp,
                fontWeight = FontWeight.SemiBold,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                modifier = Modifier.padding(horizontal = 20.dp, vertical = 4.dp)
            )

            // LazyColumn displaying course cards
            LazyColumn(
                modifier = Modifier.fillMaxSize(),
                contentPadding = PaddingValues(horizontal = 16.dp, vertical = 8.dp),
                verticalArrangement = Arrangement.spacedBy(14.dp)
            ) {
                items(
                    items = filteredCourses,
                    key = { it.id }
                ) { course ->
                    CourseCard(
                        course = course,
                        onClick = { onCourseClick(course.id) }
                    )
                }

                item {
                    Spacer(modifier = Modifier.height(16.dp))
                }
            }
        }
    }
}

/**
 * Clickable Card component for each BS degree program.
 */
@Composable
fun CourseCard(
    course: Course,
    onClick: () -> Unit
) {
    val (iconVector, iconBgColor, iconTint) = getCourseIconAttributes(course.id)

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .clickable(onClick = onClick),
        shape = RoundedCornerShape(18.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surface
        ),
        elevation = CardDefaults.cardElevation(
            defaultElevation = 2.dp,
            pressedElevation = 6.dp
        )
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(18.dp)
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically
            ) {
                // Course Icon Badge
                Box(
                    modifier = Modifier
                        .size(50.dp)
                        .clip(RoundedCornerShape(14.dp))
                        .background(iconBgColor),
                    contentAlignment = Alignment.Center
                ) {
                    Icon(
                        imageVector = iconVector,
                        contentDescription = course.name,
                        tint = iconTint,
                        modifier = Modifier.size(26.dp)
                    )
                }

                Spacer(modifier = Modifier.width(14.dp))

                // Degree Title and Abbreviation
                Column(modifier = Modifier.weight(1f)) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Surface(
                            shape = RoundedCornerShape(6.dp),
                            color = MaterialTheme.colorScheme.primaryContainer,
                            modifier = Modifier.padding(end = 6.dp)
                        ) {
                            Text(
                                text = course.abbreviation,
                                fontSize = 11.sp,
                                fontWeight = FontWeight.Bold,
                                color = MaterialTheme.colorScheme.onPrimaryContainer,
                                modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp)
                            )
                        }

                        Text(
                            text = course.duration,
                            fontSize = 12.sp,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }

                    Spacer(modifier = Modifier.height(4.dp))

                    Text(
                        text = course.shortName,
                        fontWeight = FontWeight.Bold,
                        fontSize = 17.sp,
                        color = MaterialTheme.colorScheme.onSurface
                    )
                }

                Icon(
                    imageVector = Icons.Default.ChevronRight,
                    contentDescription = "Open Details",
                    tint = MaterialTheme.colorScheme.outline
                )
            }

            Spacer(modifier = Modifier.height(12.dp))

            // Short Description
            Text(
                text = course.shortDescription,
                fontSize = 13.5.sp,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                lineHeight = 19.sp,
                maxLines = 2,
                overflow = TextOverflow.Ellipsis
            )

            Spacer(modifier = Modifier.height(14.dp))

            // Footer row with subjects count & action hint
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "\${course.mainSubjects.size} Key Subjects · \${course.careerOpportunities.size} Career Paths",
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Medium,
                    color = MaterialTheme.colorScheme.primary
                )

                Text(
                    text = "View Details →",
                    fontSize = 12.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = MaterialTheme.colorScheme.primary
                )
            }
        }
    }
}

/**
 * Returns customized icon and colors based on degree subject.
 */
@Composable
fun getCourseIconAttributes(courseId: String): Triple<ImageVector, Color, Color> {
    return when (courseId) {
        "bs_cs" -> Triple(
            Icons.Default.Computer,
            Color(0xFFDBEAFE),
            Color(0xFF1D4ED8)
        )
        "bs_zoology" -> Triple(
            Icons.Default.Pets,
            Color(0xFFD1FAE5),
            Color(0xFF047857)
        )
        "bs_english" -> Triple(
            Icons.Default.MenuBook,
            Color(0xFFEDE9FE),
            Color(0xFF6D28D9)
        )
        "bs_math" -> Triple(
            Icons.Default.Calculate,
            Color(0xFFFEF3C7),
            Color(0xFFB45309)
        )
        "bs_economics" -> Triple(
            Icons.Default.TrendingUp,
            Color(0xFFCCFBF1),
            Color(0xFF0F766E)
        )
        else -> Triple(
            Icons.Default.School,
            MaterialTheme.colorScheme.surfaceVariant,
            MaterialTheme.colorScheme.primary
        )
    }
}
`
  },
  {
    name: 'CourseDetailScreen.kt',
    path: 'app/src/main/java/com/example/universitycourses/ui/screens/CourseDetailScreen.kt',
    category: 'screen',
    description: 'Detailed view showing Degree name, abbreviation, duration, description, main subjects, career opportunities, eligibility, and back button.',
    code: `package com.example.universitycourses.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.universitycourses.data.CourseData

/**
 * Detailed Course Screen displaying all information required for the selected degree.
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CourseDetailScreen(
    courseId: String,
    onBackClick: () -> Unit
) {
    val course = remember(courseId) { CourseData.getCourseById(courseId) }
    var showApplyDialog by remember { mutableStateOf(false) }

    if (course == null) {
        // Fallback state if courseId is invalid
        Scaffold(
            topBar = {
                TopAppBar(
                    title = { Text("Course Not Found") },
                    navigationIcon = {
                        IconButton(onClick = onBackClick) {
                            Icon(Icons.Default.ArrowBack, contentDescription = "Back")
                        }
                    }
                )
            }
        ) { padding ->
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(padding),
                contentAlignment = Alignment.Center
            ) {
                Text("Course details could not be loaded.")
            }
        }
        return
    }

    val (iconVector, iconBg, iconTint) = getCourseIconAttributes(course.id)

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Text(
                        text = course.abbreviation,
                        fontWeight = FontWeight.Bold,
                        fontSize = 19.sp
                    )
                },
                navigationIcon = {
                    IconButton(onClick = onBackClick) {
                        Icon(
                            imageVector = Icons.Default.ArrowBack,
                            contentDescription = "Back to Courses"
                        )
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.surfaceColorAtElevation(2.dp)
                )
            )
        },
        bottomBar = {
            Surface(
                tonalElevation = 6.dp,
                shadowElevation = 8.dp
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(16.dp),
                    horizontalArrangement = Arrangement.spacedBy(12.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Column(modifier = Modifier.weight(1f)) {
                        Text(
                            text = "Estimated Tuition",
                            fontSize = 11.sp,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                        Text(
                            text = course.tuitionFee,
                            fontWeight = FontWeight.Bold,
                            fontSize = 15.sp,
                            color = MaterialTheme.colorScheme.onSurface
                        )
                    }

                    Button(
                        onClick = { showApplyDialog = true },
                        shape = RoundedCornerShape(12.dp),
                        modifier = Modifier.height(48.dp)
                    ) {
                        Icon(Icons.Default.CheckCircle, contentDescription = null)
                        Spacer(modifier = Modifier.width(6.dp))
                        Text("Apply Now", fontWeight = FontWeight.SemiBold)
                    }
                }
            }
        }
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 16.dp, vertical = 12.dp)
        ) {
            // Header Hero Banner Card
            Card(
                shape = RoundedCornerShape(20.dp),
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)
                ),
                modifier = Modifier.fillMaxWidth()
            ) {
                Row(
                    modifier = Modifier.padding(18.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Box(
                        modifier = Modifier
                            .size(60.dp)
                            .clip(RoundedCornerShape(16.dp))
                            .background(iconBg),
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(
                            imageVector = iconVector,
                            contentDescription = null,
                            tint = iconTint,
                            modifier = Modifier.size(32.dp)
                        )
                    }

                    Spacer(modifier = Modifier.width(16.dp))

                    Column {
                        Surface(
                            shape = RoundedCornerShape(6.dp),
                            color = iconTint
                        ) {
                            Text(
                                text = course.abbreviation,
                                color = Color.White,
                                fontSize = 11.sp,
                                fontWeight = FontWeight.Bold,
                                modifier = Modifier.padding(horizontal = 8.dp, vertical = 2.dp)
                            )
                        }

                        Spacer(modifier = Modifier.height(4.dp))

                        Text(
                            text = course.name,
                            fontWeight = FontWeight.Bold,
                            fontSize = 18.sp,
                            lineHeight = 22.sp,
                            color = MaterialTheme.colorScheme.onSurface
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(14.dp))

            // Quick Info Badges (Duration, Credit Hours, Department)
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                QuickMetricCard(
                    title = "Duration",
                    value = course.duration,
                    icon = Icons.Default.Schedule,
                    modifier = Modifier.weight(1f)
                )
                QuickMetricCard(
                    title = "Credit Hours",
                    value = "\${course.creditHours} Credits",
                    icon = Icons.Default.WorkspacePremium,
                    modifier = Modifier.weight(1f)
                )
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Section 1: Eligibility Criteria
            DetailSectionTitle(title = "Eligibility & Admission Criteria", icon = Icons.Default.VerifiedUser)
            Card(
                shape = RoundedCornerShape(14.dp),
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.surface
                ),
                modifier = Modifier.fillMaxWidth()
            ) {
                Text(
                    text = course.eligibility,
                    fontSize = 14.sp,
                    lineHeight = 20.sp,
                    color = MaterialTheme.colorScheme.onSurface,
                    modifier = Modifier.padding(16.dp)
                )
            }

            Spacer(modifier = Modifier.height(18.dp))

            // Section 2: Degree Description
            DetailSectionTitle(title = "Program Overview", icon = Icons.Default.Info)
            Card(
                shape = RoundedCornerShape(14.dp),
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.surface
                ),
                modifier = Modifier.fillMaxWidth()
            ) {
                Text(
                    text = course.description,
                    fontSize = 14.sp,
                    lineHeight = 22.sp,
                    color = MaterialTheme.colorScheme.onSurface,
                    modifier = Modifier.padding(16.dp)
                )
            }

            Spacer(modifier = Modifier.height(18.dp))

            // Section 3: Main Subjects
            DetailSectionTitle(title = "Main Subjects & Curriculum", icon = Icons.Default.MenuBook)
            Card(
                shape = RoundedCornerShape(14.dp),
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.surface
                ),
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(modifier = Modifier.padding(14.dp)) {
                    course.mainSubjects.forEachIndexed { index, subject ->
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(vertical = 6.dp)
                        ) {
                            Box(
                                modifier = Modifier
                                    .size(24.dp)
                                    .clip(RoundedCornerShape(6.dp))
                                    .background(MaterialTheme.colorScheme.primaryContainer),
                                contentAlignment = Alignment.Center
                            ) {
                                Text(
                                    text = "\${index + 1}",
                                    fontSize = 11.sp,
                                    fontWeight = FontWeight.Bold,
                                    color = MaterialTheme.colorScheme.onPrimaryContainer
                                )
                            }
                            Spacer(modifier = Modifier.width(12.dp))
                            Text(
                                text = subject,
                                fontSize = 13.5.sp,
                                fontWeight = FontWeight.Medium,
                                color = MaterialTheme.colorScheme.onSurface
                            )
                        }
                        if (index < course.mainSubjects.lastIndex) {
                            Divider(color = MaterialTheme.colorScheme.outlineVariant.copy(alpha = 0.5f))
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(18.dp))

            // Section 4: Career Opportunities
            DetailSectionTitle(title = "Career Opportunities", icon = Icons.Default.WorkOutline)
            Card(
                shape = RoundedCornerShape(14.dp),
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.surface
                ),
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(modifier = Modifier.padding(14.dp)) {
                    course.careerOpportunities.forEach { career ->
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(vertical = 5.dp)
                        ) {
                            Icon(
                                imageVector = Icons.Default.Check,
                                contentDescription = null,
                                tint = MaterialTheme.colorScheme.primary,
                                modifier = Modifier.size(18.dp)
                            )
                            Spacer(modifier = Modifier.width(10.dp))
                            Text(
                                text = career,
                                fontSize = 13.5.sp,
                                color = MaterialTheme.colorScheme.onSurface
                            )
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(28.dp))
        }
    }

    // Success confirmation dialog when student clicks Apply Now
    if (showApplyDialog) {
        AlertDialog(
            onDismissRequest = { showApplyDialog = false },
            icon = {
                Icon(
                    Icons.Default.School,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.primary,
                    modifier = Modifier.size(36.dp)
                )
            },
            title = {
                Text("Admission Application")
            },
            text = {
                Text(
                    "You have initiated an admission inquiry for \${course.name}. " +
                    "Our admissions office will review your profile against the criteria: '\${course.eligibility}'."
                )
            },
            confirmButton = {
                Button(onClick = { showApplyDialog = false }) {
                    Text("Got It")
                }
            },
            dismissButton = {
                TextButton(onClick = { showApplyDialog = false }) {
                    Text("Close")
                }
            }
        )
    }
}

@Composable
fun QuickMetricCard(
    title: String,
    value: String,
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier,
        shape = RoundedCornerShape(12.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surface
        )
    ) {
        Column(modifier = Modifier.padding(12.dp)) {
            Icon(
                imageVector = icon,
                contentDescription = null,
                tint = MaterialTheme.colorScheme.primary,
                modifier = Modifier.size(20.dp)
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = title,
                fontSize = 11.sp,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
            Text(
                text = value,
                fontSize = 13.sp,
                fontWeight = FontWeight.Bold,
                color = MaterialTheme.colorScheme.onSurface
            )
        }
    }
}

@Composable
fun DetailSectionTitle(
    title: String,
    icon: androidx.compose.ui.graphics.vector.ImageVector
) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        modifier = Modifier.padding(vertical = 6.dp)
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = MaterialTheme.colorScheme.primary,
            modifier = Modifier.size(20.dp)
        )
        Spacer(modifier = Modifier.width(8.dp))
        Text(
            text = title,
            fontSize = 15.sp,
            fontWeight = FontWeight.Bold,
            color = MaterialTheme.colorScheme.onSurface
        )
    }
}
`
  },
  {
    name: 'LoginScreen.kt',
    path: 'app/src/main/java/com/example/universitycourses/ui/screens/LoginScreen.kt',
    category: 'screen',
    description: 'Material 3 Student Portal Login screen with student email/ID, password toggle, validation, and demo entry.',
    code: `package com.example.universitycourses.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material.icons.outlined.School
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

/**
 * Modern student portal login screen built with Jetpack Compose & Material 3.
 */
@Composable
fun LoginScreen(
    onLoginSuccess: () -> Unit,
    onNavigateToRegister: () -> Unit,
    onSkipAsGuest: () -> Unit
) {
    var emailOrId by remember { mutableStateOf("student@university.edu") }
    var password by remember { mutableStateOf("password123") }
    var passwordVisible by remember { mutableStateOf(false) }
    var errorMessage by remember { mutableStateOf<String?>(null) }

    Surface(
        modifier = Modifier.fillMaxSize(),
        color = MaterialTheme.colorScheme.background
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .verticalScroll(rememberScrollState())
                .padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            // University Badge Icon
            Surface(
                shape = RoundedCornerShape(20.dp),
                color = MaterialTheme.colorScheme.primaryContainer,
                modifier = Modifier.size(72.dp)
            ) {
                Box(contentAlignment = Alignment.Center) {
                    Icon(
                        imageVector = Icons.Outlined.School,
                        contentDescription = "University Logo",
                        tint = MaterialTheme.colorScheme.primary,
                        modifier = Modifier.size(40.dp)
                    )
                }
            }

            Spacer(modifier = Modifier.height(20.dp))

            Text(
                text = "Student Portal",
                fontSize = 26.sp,
                fontWeight = FontWeight.Bold,
                color = MaterialTheme.colorScheme.onBackground
            )

            Text(
                text = "Sign in to explore BS Degree Programs",
                fontSize = 14.sp,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            Spacer(modifier = Modifier.height(28.dp))

            // Email / Student ID field
            OutlinedTextField(
                value = emailOrId,
                onValueChange = {
                    emailOrId = it
                    errorMessage = null
                },
                label = { Text("Student Email or Roll ID") },
                leadingIcon = {
                    Icon(Icons.Default.Email, contentDescription = null)
                },
                singleLine = true,
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(12.dp)
            )

            Spacer(modifier = Modifier.height(14.dp))

            // Password field
            OutlinedTextField(
                value = password,
                onValueChange = {
                    password = it
                    errorMessage = null
                },
                label = { Text("Password") },
                leadingIcon = {
                    Icon(Icons.Default.Lock, contentDescription = null)
                },
                trailingIcon = {
                    IconButton(onClick = { passwordVisible = !passwordVisible }) {
                        Icon(
                            imageVector = if (passwordVisible) Icons.Default.Visibility else Icons.Default.VisibilityOff,
                            contentDescription = if (passwordVisible) "Hide password" else "Show password"
                        )
                    }
                },
                visualTransformation = if (passwordVisible) VisualTransformation.None else PasswordVisualTransformation(),
                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password),
                singleLine = true,
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(12.dp)
            )

            if (errorMessage != null) {
                Spacer(modifier = Modifier.height(8.dp))
                Text(
                    text = errorMessage!!,
                    color = MaterialTheme.colorScheme.error,
                    fontSize = 13.sp
                )
            }

            Spacer(modifier = Modifier.height(20.dp))

            // Login Button
            Button(
                onClick = {
                    if (emailOrId.isBlank() || password.isBlank()) {
                        errorMessage = "Please enter both credentials."
                    } else {
                        onLoginSuccess()
                    }
                },
                modifier = Modifier
                    .fillMaxWidth()
                    .height(50.dp),
                shape = RoundedCornerShape(12.dp)
            ) {
                Text(
                    text = "Sign In",
                    fontSize = 16.sp,
                    fontWeight = FontWeight.SemiBold
                )
            }

            Spacer(modifier = Modifier.height(12.dp))

            // Continue as guest button
            OutlinedButton(
                onClick = onSkipAsGuest,
                modifier = Modifier
                    .fillMaxWidth()
                    .height(48.dp),
                shape = RoundedCornerShape(12.dp)
            ) {
                Text(text = "Continue as Guest / Explore Directly")
            }

            Spacer(modifier = Modifier.height(24.dp))

            // Register prompt
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.Center
            ) {
                Text(
                    text = "Don't have a student account? ",
                    fontSize = 14.sp,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
                TextButton(onClick = onNavigateToRegister) {
                    Text(
                        text = "Register",
                        fontWeight = FontWeight.Bold,
                        color = MaterialTheme.colorScheme.primary
                    )
                }
            }
        }
    }
}
`
  },
  {
    name: 'RegisterScreen.kt',
    path: 'app/src/main/java/com/example/universitycourses/ui/screens/RegisterScreen.kt',
    category: 'screen',
    description: 'Material 3 Student Registration screen with name, roll number, interested degree, and account creation.',
    code: `package com.example.universitycourses.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

/**
 * Registration screen allowing new students to create an account.
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun RegisterScreen(
    onRegisterSuccess: () -> Unit,
    onNavigateBackToLogin: () -> Unit
) {
    var fullName by remember { mutableStateOf("") }
    var email by remember { mutableStateOf("") }
    var enrollmentNumber by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var confirmPassword by remember { mutableStateOf("") }
    var selectedDegreeInterest by remember { mutableStateOf("BS Computer Science") }
    var passwordVisible by remember { mutableStateOf(false) }
    var errorMessage by remember { mutableStateOf<String?>(null) }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Student Registration") },
                navigationIcon = {
                    IconButton(onClick = onNavigateBackToLogin) {
                        Icon(Icons.Default.ArrowBack, contentDescription = "Back to Login")
                    }
                }
            )
        }
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .verticalScroll(rememberScrollState())
                .padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = "Create Student Profile",
                fontSize = 22.sp,
                fontWeight = FontWeight.Bold,
                color = MaterialTheme.colorScheme.onBackground
            )

            Text(
                text = "Join the university academic portal to view degree programs",
                fontSize = 13.sp,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            Spacer(modifier = Modifier.height(24.dp))

            // Full Name
            OutlinedTextField(
                value = fullName,
                onValueChange = { fullName = it },
                label = { Text("Full Name") },
                leadingIcon = { Icon(Icons.Default.Person, contentDescription = null) },
                singleLine = true,
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(12.dp)
            )

            Spacer(modifier = Modifier.height(12.dp))

            // Email
            OutlinedTextField(
                value = email,
                onValueChange = { email = it },
                label = { Text("Email Address") },
                leadingIcon = { Icon(Icons.Default.Email, contentDescription = null) },
                singleLine = true,
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(12.dp)
            )

            Spacer(modifier = Modifier.height(12.dp))

            // Enrollment / Roll Number
            OutlinedTextField(
                value = enrollmentNumber,
                onValueChange = { enrollmentNumber = it },
                label = { Text("Enrollment / Roll Number (Optional)") },
                leadingIcon = { Icon(Icons.Default.Badge, contentDescription = null) },
                singleLine = true,
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(12.dp)
            )

            Spacer(modifier = Modifier.height(12.dp))

            // Password
            OutlinedTextField(
                value = password,
                onValueChange = { password = it },
                label = { Text("Password") },
                leadingIcon = { Icon(Icons.Default.Lock, contentDescription = null) },
                trailingIcon = {
                    IconButton(onClick = { passwordVisible = !passwordVisible }) {
                        Icon(
                            imageVector = if (passwordVisible) Icons.Default.Visibility else Icons.Default.VisibilityOff,
                            contentDescription = null
                        )
                    }
                },
                visualTransformation = if (passwordVisible) VisualTransformation.None else PasswordVisualTransformation(),
                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password),
                singleLine = true,
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(12.dp)
            )

            Spacer(modifier = Modifier.height(12.dp))

            // Confirm Password
            OutlinedTextField(
                value = confirmPassword,
                onValueChange = { confirmPassword = it },
                label = { Text("Confirm Password") },
                leadingIcon = { Icon(Icons.Default.LockReset, contentDescription = null) },
                visualTransformation = PasswordVisualTransformation(),
                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password),
                singleLine = true,
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(12.dp)
            )

            if (errorMessage != null) {
                Spacer(modifier = Modifier.height(8.dp))
                Text(
                    text = errorMessage!!,
                    color = MaterialTheme.colorScheme.error,
                    fontSize = 13.sp
                )
            }

            Spacer(modifier = Modifier.height(24.dp))

            // Submit Button
            Button(
                onClick = {
                    if (fullName.isBlank() || email.isBlank() || password.isBlank()) {
                        errorMessage = "Please fill in all required fields."
                    } else if (password != confirmPassword) {
                        errorMessage = "Passwords do not match."
                    } else {
                        onRegisterSuccess()
                    }
                },
                modifier = Modifier
                    .fillMaxWidth()
                    .height(50.dp),
                shape = RoundedCornerShape(12.dp)
            ) {
                Text("Register & Enter Portal", fontSize = 16.sp, fontWeight = FontWeight.SemiBold)
            }

            Spacer(modifier = Modifier.height(16.dp))

            TextButton(onClick = onNavigateBackToLogin) {
                Text("Already registered? Sign In")
            }
        }
    }
}
`
  },
  {
    name: 'MainActivity.kt',
    path: 'app/src/main/java/com/example/universitycourses/MainActivity.kt',
    category: 'activity',
    description: 'Android ComponentActivity entry point that initializes Compose theme and Navigation host.',
    code: `package com.example.universitycourses

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.ui.Modifier
import androidx.navigation.compose.rememberNavController
import com.example.universitycourses.navigation.UniversityNavGraph
import com.example.universitycourses.ui.theme.UniversityCoursesTheme

/**
 * Main Activity for the University Courses Android Application.
 * Configures Jetpack Compose and attaches the NavGraph.
 */
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            UniversityCoursesTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    val navController = rememberNavController()
                    UniversityNavGraph(navController = navController)
                }
            }
        }
    }
}
`
  },
  {
    name: 'build.gradle.kts',
    path: 'app/build.gradle.kts',
    category: 'gradle',
    description: 'Module-level Gradle file with Compose BOM, Navigation Compose, and Material 3 dependencies.',
    code: `plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    alias(libs.plugins.kotlin.compose)
}

android {
    namespace = "com.example.universitycourses"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.example.universitycourses"
        minSdk = 24
        targetSdk = 35
        versionCode = 1
        versionName = "1.0.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
    buildFeatures {
        compose = true
    }
}

dependencies {
    // AndroidX Core & Lifecycle
    implementation("androidx.core:core-ktx:1.15.0")
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.8.7")
    implementation("androidx.activity:activity-compose:1.9.3")

    // Jetpack Compose BOM (Bill of Materials)
    val composeBom = platform("androidx.compose:compose-bom:2024.12.01")
    implementation(composeBom)
    androidTestImplementation(composeBom)

    // Jetpack Compose UI & Material 3
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.ui:ui-graphics")
    implementation("androidx.compose.ui:ui-tooling-preview")
    implementation("androidx.compose.material3:material3")

    // Material Icons Extended (For School, Computer, Pets, Book, etc.)
    implementation("androidx.compose.material:material-icons-extended")

    // Navigation Compose
    implementation("androidx.navigation:navigation-compose:2.8.5")

    // Debugging Tooling
    debugImplementation("androidx.compose.ui:ui-tooling")
    debugImplementation("androidx.compose.ui:ui-test-manifest")
}
`
  },
  {
    name: 'AndroidManifest.xml',
    path: 'app/src/main/AndroidManifest.xml',
    category: 'manifest',
    description: 'Android Manifest registering MainActivity with MAIN/LAUNCHER intents.',
    code: `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="University Courses"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.UniversityCourses"
        tools:targetApi="31">
        
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:label="University Courses"
            android:theme="@style/Theme.UniversityCourses">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>
`
  },
  {
    name: 'Theme.kt',
    path: 'app/src/main/java/com/example/universitycourses/ui/theme/Theme.kt',
    category: 'theme',
    description: 'Material 3 dynamic color scheme, dark/light theme composable wrapper.',
    code: `package com.example.universitycourses.ui.theme

import android.os.Build
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext

private val DarkColorScheme = darkColorScheme(
    primary = Color(0xFF90CAF9),
    secondary = Color(0xFF80CBC4),
    tertiary = Color(0xFFFFCC80),
    background = Color(0xFF121212),
    surface = Color(0xFF1E1E1E),
    onPrimary = Color(0xFF003258),
    onBackground = Color(0xFFE0E0E0),
    onSurface = Color(0xFFE0E0E0)
)

private val LightColorScheme = lightColorScheme(
    primary = Color(0xFF1565C0),
    secondary = Color(0xFF00897B),
    tertiary = Color(0xFFE65100),
    background = Color(0xFFF8FAFC),
    surface = Color(0xFFFFFFFF),
    onPrimary = Color.White,
    onBackground = Color(0xFF0F172A),
    onSurface = Color(0xFF0F172A)
)

@Composable
fun UniversityCoursesTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    dynamicColor: Boolean = true,
    content: @Composable () -> Unit
) {
    val colorScheme = when {
        dynamicColor && Build.VERSION.SDK_INT >= Build.VERSION_CODES.S -> {
            val context = LocalContext.current
            if (darkTheme) dynamicDarkColorScheme(context) else dynamicLightColorScheme(context)
        }
        darkTheme -> DarkColorScheme
        else -> LightColorScheme
    }

    MaterialTheme(
        colorScheme = colorScheme,
        content = content
    )
}
`
  },
  {
    name: 'Color.kt',
    path: 'app/src/main/java/com/example/universitycourses/ui/theme/Color.kt',
    category: 'theme',
    description: 'Material 3 color constants for degrees and academic branding.',
    code: `package com.example.universitycourses.ui.theme

import androidx.compose.ui.graphics.Color

val BluePrimary = Color(0xFF1565C0)
val BlueLight = Color(0xFFE3F2FD)
val EmeraldZoology = Color(0xFF059669)
val EmeraldLight = Color(0xFFECFDF5)
val PurpleEnglish = Color(0xFF7C3AED)
val PurpleLight = Color(0xFFF5F3FF)
val AmberMath = Color(0xFFD97706)
val AmberLight = Color(0xFFFFFBEB)
val TealEconomics = Color(0xFF0D9488)
val TealLight = Color(0xFFF0FDFA)
`
  }
];

export const ANDROID_STUDIO_EXPLANATIONS = {
  filePlacement: [
    {
      folder: "app/src/main/java/com/example/universitycourses/model/",
      files: ["Course.kt"],
      purpose: "Holds the data class defining the structure of each degree program."
    },
    {
      folder: "app/src/main/java/com/example/universitycourses/data/",
      files: ["CourseData.kt"],
      purpose: "Contains the static list of courses (BS CS, Zoology, English, Math, Economics) and lookup methods."
    },
    {
      folder: "app/src/main/java/com/example/universitycourses/navigation/",
      files: ["Screen.kt", "NavGraph.kt"],
      purpose: "Defines screen routes and the NavHost controller coordinating navigation between login, register, courses list, and details."
    },
    {
      folder: "app/src/main/java/com/example/universitycourses/ui/screens/",
      files: ["LoginScreen.kt", "RegisterScreen.kt", "CourseScreen.kt", "CourseDetailScreen.kt"],
      purpose: "Contains all composable screen UI components."
    },
    {
      folder: "app/src/main/java/com/example/universitycourses/ui/theme/",
      files: ["Theme.kt", "Color.kt"],
      purpose: "Material 3 styling, color palettes, and theme wrappers."
    },
    {
      folder: "app/src/main/java/com/example/universitycourses/",
      files: ["MainActivity.kt"],
      purpose: "Main Android activity entry point that sets the content."
    },
    {
      folder: "app/",
      files: ["build.gradle.kts"],
      purpose: "Gradle build configuration with Compose BOM and navigation dependencies."
    }
  ],
  dependenciesExplanation: `To use Jetpack Compose and Navigation in Android Studio, add the following to your app/build.gradle.kts:

1. Navigation Compose:
   implementation("androidx.navigation:navigation-compose:2.8.5")

2. Compose BOM & Material 3:
   implementation(platform("androidx.compose:compose-bom:2024.12.01"))
   implementation("androidx.compose.material3:material3")
   implementation("androidx.compose.ui:ui")

3. Extended Material Icons:
   implementation("androidx.compose.material:material-icons-extended")

Ensure buildFeatures { compose = true } is enabled in the android {} block!`,

  navigationExplanation: `How Navigation Compose Works:

1. NavHostController:
   Created via val navController = rememberNavController() in MainActivity or NavGraph. It manages the app's navigation backstack.

2. Sealed Route Class (Screen.kt):
   Screen.Courses.route -> "courses_screen"
   Screen.CourseDetail.route -> "course_detail_screen/{courseId}"
   Screen.Login.route -> "login_screen"
   Screen.Register.route -> "register_screen"

3. Passing Arguments:
   When a user clicks a course card:
   navController.navigate(Screen.CourseDetail.passCourseId(course.id))
   The NavHost intercepts the route:
   composable(
       route = Screen.CourseDetail.route,
       arguments = listOf(navArgument("courseId") { type = NavType.StringType })
   ) { backStackEntry ->
       val courseId = backStackEntry.arguments?.getString("courseId") ?: ""
       CourseDetailScreen(courseId = courseId, onBackClick = { navController.popBackStack() })
   }

4. Going Back:
   Calling navController.popBackStack() pops the current screen and returns to the previous screen on the stack with zero data loss.`,

  howToRunInAndroidStudio: [
    "Step 1: Open Android Studio and choose 'New Project' -> 'Empty Activity' (Compose).",
    "Step 2: Set Name to 'University Courses' and Package name to 'com.example.universitycourses'. Select Kotlin and Minimum SDK 24.",
    "Step 3: Replace or add the dependencies in app/build.gradle.kts as provided in the build.gradle.kts tab.",
    "Step 4: Create the subpackages (model, data, navigation, ui/screens, ui/theme) and copy each file's complete code.",
    "Step 5: Click 'Sync Project with Gradle Files' (Elephant icon with blue arrow).",
    "Step 6: Select an Android Emulator (e.g. Pixel 8 API 34) or your connected physical Android phone and click the green 'Run' (Play) button!"
  ]
};
