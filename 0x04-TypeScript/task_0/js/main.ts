interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "Diallo",
    lastName: "Daouda",
    age: 10,
    location: "Louga"
  };
  
  const student2: Student = {
    firstName: "Sonko",
    lastName: "Ousmane",
    age: 22,
    location: "Dakar"
  };
  
  const studentsList: Student[] = [student1, student2];
  
  function renderTable() {
    const table = document.getElementById("student-table");
  
    studentsList.forEach((student) => {
      const row = document.createElement("tr");
  
      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = student.firstName;
      row.appendChild(firstNameCell);
  
      const locationCell = document.createElement("td");
      locationCell.textContent = student.location;
      row.appendChild(locationCell);
  
      table.appendChild(row);
    });
  }
  
  renderTable();
  