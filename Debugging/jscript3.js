// Function to process student scores and return object + array
function generateGradeReport(studentName, scores) {
  debugger; // Inspect 'studentName' and 'scores' here

  const total = scores.reduce((sum, score) => sum + score, 0);
  const average = total / scores.length;

  const grades = scores.map(score => {
    return score >= 90 ? "A" :
           score >= 80 ? "B" :
           score >= 70 ? "C" :
           score >= 60 ? "D" : "F";
  });

  const report = {
    name: studentName,
    total,
    average,
    gradeSummary: grades
  };

  return [report, grades]; // return object and array
}

// Function call with parameters
const [studentReport, gradeList] = generateGradeReport("Pavithra", [95, 82, 74, 88, 67]);

// Output the result
console.log("Full Report:", studentReport);
console.log("Grades List:", gradeList);