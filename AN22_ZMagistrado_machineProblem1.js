// ITCS227 Source Code Template for 2T AY 2022-2023
/*
      Program: Application Development and Emerging Technologies
      Programmer: Zach Stephan Magistrado
      Section: AN22
      Start Date: June 2, 2023
      End Date: June 2, 2023
*/

function calculateLetterGrade(grade) {
  if (grade >= 90 && grade <= 100) {
    return 'A';
  } else if (grade >= 80 && grade <= 89) {
    return 'B';
  } else if (grade >= 70 && grade <= 79) {
    return 'C';
  } else if (grade >= 60 && grade <= 69) {
    return 'D';
  } else {
    return 'F';
  }
}

var students = [];

for (var i = 0; i < 5; i++) {
  var student = {};

  student.name = prompt("Enter the name of student " + (i + 1) + ":");
  student.classParticipation = parseFloat(prompt("Enter the class participation grade for " + student.name + ":"));

  student.enablingAssessments = [];
  for (var j = 0; j < 5; j++) {
    student.enablingAssessments.push(parseFloat(prompt("Enter enabling assessment " + (j + 1) + " grade for " + student.name + ":")));
  }

  student.summativeAssessments = [];
  for (var k = 0; k < 3; k++) {
    student.summativeAssessments.push(parseFloat(prompt("Enter summative assessment " + (k + 1) + " grade for " + student.name + ":")));
  }

  student.finalExam = parseFloat(prompt("Enter the final examination grade for " + student.name + ":"));

  students.push(student);
}

for (var i = 0; i < students.length; i++) {
  var student = students[i];

  var enablingAssessmentsTotal = 0;
  for (var j = 0; j < student.enablingAssessments.length; j++) {
    enablingAssessmentsTotal += student.enablingAssessments[j];
  }
  student.enablingAssessmentsAverage = enablingAssessmentsTotal / student.enablingAssessments.length;

  var summativeAssessmentsTotal = 0;
  for (var k = 0; k < student.summativeAssessments.length; k++) {
    summativeAssessmentsTotal += student.summativeAssessments[k];
  }
  student.summativeAssessmentsAverage = summativeAssessmentsTotal / student.summativeAssessments.length;

  student.grade = (student.classParticipation * 0.3) + (student.summativeAssessmentsAverage * 0.3) + (student.finalExam * 0.4);

  student.letterGrade = calculateLetterGrade(student.grade);
}

console.log("======================================================================");
console.log("|    Name    | Class Participation | Summative Grade | Grade | Letter |");
console.log("======================================================================");
for (var i = 0; i < students.length; i++) {
  var student = students[i];
  console.log("| " + student.name + " | " + student.classParticipation + " | " + student.summativeAssessmentsAverage + " | " + student.grade + " |   " + student.letterGrade + "   |");
}
console.log("======================================================================");