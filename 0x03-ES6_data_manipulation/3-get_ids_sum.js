export default function getStudentIdsSum(studentList) {
  return studentList.reduce((x, y) => x + y.id, 0);
}
