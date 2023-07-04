
export default function updateStudentGradeByCity(students, city, newgrades){

    return students.
    filter(student => student.location=== city)
    .map(student => {
      const gradeObject = newgrades.
      find(grade => grade.studentId === student.id);
      const grade = gradeObject ? gradeObject.grade : 'N/A';
      return {
        ...student,
        grade: grade
      };
    });;
}