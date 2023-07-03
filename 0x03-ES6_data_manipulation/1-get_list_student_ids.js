export default function getListStudentIds(listStudent) {
  if (!Array.isArray(listStudent) || listStudent.length < 0) {
    return [];
  }
  return listStudent.map((x) => x.id);
}
