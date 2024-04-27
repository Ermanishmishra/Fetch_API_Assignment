const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };

//Problem 10: countCalculation [1]

  function countCalculation(school){

       const {
        departments : {
            math : {teachers : mathTeachersCount, students : mathStudentsCount},
            history : {teachers : historyTeachersCount, students : historyStudentsCount}
        }
       } = school 

       return {mathTeachersCount, mathStudentsCount, historyTeachersCount, historyStudentsCount}
  }

  console.log(countCalculation(school));


  //Problem 11: findTopStudent [1]


  function findTopStudent(students, courseName){

    const topStudents = school.students.reduce(function(acc,ele,i){

        return ele.scores[courseName] > acc.scores[courseName] ? ele : acc
    })

    return topStudents
  }

console.log(findTopStudent(Array, "math"));



// Problem 12: addNewDept [1]

let newDeparment = {art: { teachers: 2, students: 50 }}
function addNewDept(school, newDeparment){

    let updatedDeparments = {...school.departments, ...newDeparment}

    return {...school, departments: updatedDeparments}

}

console.log(addNewDept(school,newDeparment));


// Problem 13: highestStudentCountDepartment[1]

let store
function highestStudentCountDepartment(obj){
    let store = obj.departments
    // console.log(store)
    return store
}

let operation = (highestStudentCountDepartment(school))
// console.log(operation);
let eng =  operation.english.students
let maths = operation.math.students
let hist = operation.history.students
let scie = operation.science.students

if(eng>maths && eng>hist && eng>scie){
    console.log(school.departments["english"] = "english");
}

if(maths>eng && maths>hist && maths>scie){
    console.log(school.departments["math"] = "math");
}

if(hist>eng && maths<hist && hist>scie){
    console.log(school.departments["history"] = "hostory");
}

if(scie>eng && scie>hist && scie>maths){
    console.log(school.departments["science"] = "science");
}


// Problem 14: Greeting Message [1]


function generateGreeting(language,name){
    return (language+", "+name)
}

console.log(generateGreeting("!Hola","Bob!"));

console.log(generateGreeting("Hello","Alice"));

console.log(generateGreeting("Bonjour", "Charlie!"));
