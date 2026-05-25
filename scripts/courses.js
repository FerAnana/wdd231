const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

createCourseButton(courses);

const showCse = document.querySelector("#cse");
const showWdd = document.querySelector("#wdd");
const showAll = document.querySelector("#all");

const wddCourses = courses.filter((course) => course["subject"] === "WDD");
const cseCourses = courses.filter((course) => course["subject"] === "CSE");

showCse.addEventListener("click", () => createCourseButton(cseCourses));
showWdd.addEventListener("click", () => createCourseButton(wddCourses));
showAll.addEventListener("click", () => createCourseButton(courses));

function createCourseButton(allCourses) {
  document.querySelector(".courses").innerHTML = "";
  let credits = 0;
  let span = document.createElement("span");
  allCourses.forEach((course) => {
    let courseButton = document.createElement("button");

    courseButton.textContent = `${course.subject} ${course.number}`;
    if (course.completed === true) {
      courseButton.setAttribute("class", "completed-course");
    }
    credits += course.credits;

    document.querySelector(".courses").appendChild(courseButton);
    courseButton.addEventListener("click", () => {
      displayModal(course);
    });
  });
  span.innerHTML = `<span>The total credits for course listed above is ${credits}</span>`;
  document.querySelector(".courses").appendChild(span);
}

function displayModal(course) {
  const modal = document.querySelector("#course-details");
  modal.innerHTML = "";

  let courseSubject = document.createElement("h3");
  let closeModal = document.createElement("button");
  let courseCredits = document.createElement("p");
  let courseTitle = document.createElement("p");
  let courseCertificate = document.createElement("p");
  let courseDescription = document.createElement("p");
  let courseTechnology = document.createElement("p");

  courseSubject.textContent = `${course.subject} ${course.number}`;
  closeModal.textContent = "❌";
  courseCredits.textContent = `${course.credits} credits`;
  courseTitle.textContent = `${course.title}`;
  courseTitle.setAttribute("class", "course-title");
  courseCertificate.textContent = `Certificate: ${course.certificate}`;
  courseDescription.textContent = `${course.description}`;
  courseTechnology.textContent = `Technology: ${course.technology.join(", ")}`;

  modal.appendChild(courseSubject);
  modal.appendChild(closeModal);
  modal.appendChild(courseTitle);
  modal.appendChild(courseCredits);
  modal.appendChild(courseCertificate);
  modal.appendChild(courseDescription);
  modal.appendChild(courseTechnology);

  modal.showModal();

  closeModal.addEventListener("click", () => {
    modal.close();
  });
}
