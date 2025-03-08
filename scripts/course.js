const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]



function renderCourses(courses) {
  const courseList = document.getElementById('course-list');
  courseList.innerHTML = '';

  courses.map((course) => {
    const courseCard = document.createElement('div');
    courseCard.classList.add('course-card');

    if (course.completed) {
      courseCard.classList.add('true');
    }

    courseCard.innerHTML = `
      <p>${course.title} ${course.number}</p>

    `;

    console.log(courseList.appendChild(courseCard));
    // console.log(courseCard)
  });
 
}


// ```

// *Step 3: Add filtering functionality*
// Create buttons for filtering courses. Use JavaScript's `filter()` method to filter the courses array based on the selected filter.

// ```
// const filterButtons = document.getElementById('filter-buttons');
// filterButtons.addEventListener('click', (e) => {
//   if (e.target.tagName === 'BUTTON') {
//     const filter = e.target.dataset.filter;
//     let filteredCourses = [];

//     switch (filter) {
//       case 'all':
//         filteredCourses = courses;
//         break;
//       case 'wdd':
//         filteredCourses = courses.filter((course) => course.subject === 'WDD');
//         break;
//       case 'cse':
//         filteredCourses = courses.filter((course) => course.subject === 'CSE');
//         break;
//       default:
//         filteredCourses = courses;
//     }

//     renderCourses(filteredCourses);
//   }
// });
// ```

// *Step 4: Display total credits*
// Use JavaScript's `reduce()` method to calculate the total credits for the currently displayed courses.

// ```
// function calculateTotalCredits(courses) {
//   return courses.reduce((total, course) => total + course.credits, 0);
// }

// function renderTotalCredits(courses) {
//   const totalCreditsElement = document.getElementById('total-credits');
//   totalCreditsElement.textContent = `Total Credits: ${calculateTotalCredits(courses)}`;
// }
// ```

// *Step 5: Initialize the application*
// Call the `renderCourses()` and `renderTotalCredits()` functions to initialize the application.

// ```
// renderCourses(courses);
// renderTotalCredits(courses);
// ```

// *Example HTML*
// ```
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Courses</title>
//   <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//   <h1>Courses</h1>
//   <div id="filter-buttons">
//     <button data-filter="all">All</button>
//     <button data-filter="wdd">WDD</button>
//     <button data-filter="cse">CSE</button>
//   </div>
//   <div id="course-list"></div>
//   <p id="total-credits"></p>

//   <script src="script.js"></script>
// </body>
// </html>
// ```

// *Example CSS*
// ```
// .course-card {
//   background-color: #f7f7f7;
//   padding: 20px;
//   margin-bottom: 20px;
//   border: 1px solid #ddd;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// }

// .completed {
//   background-color: #dff0d8;
// }

// #filter-buttons {
//   margin-bottom: 20px;
// }

// #filter-buttons button {
//   margin-right: 10px;
// }

// #total-credits {
//   font-weight: bold;
// }
// ```