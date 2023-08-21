const subjects = [
  {
    subject: "Informatika",
    subjectTeacher: "Davron Mamaraimov",
    subjectRoom: "1-qavat. 23-xona",
  },
  {
    subject: "Matematika",
    subjectTeacher: "Javlon Shodmonov",
    subjectRoom: "2-qavat. 3-xona",
  },
  {
    subject: "Fizika",
    subjectTeacher: "Ibrohim Niyozov",
    subjectRoom: "2-qavat. 17-xona",
  },
  {
    subject: "Jismoniy Tarbiya",
    subjectTeacher: "Shokir Mo`minov",
    subjectRoom: "1-qavat. Sportazal",
  },
];

const subjectsTable = document.getElementById("subjectsTable");
const tbodySubjectsTable = subjectsTable.children[1];
console.log(tbodySubjectsTable);

const btnRemove = () => {
  for (let i = 0; i <= subjects.length; i++) {
    tbodySubjectsTable.children[i].remove();
    return;
  }
};

const loaded = (filters = {}) => {
  tbodySubjectsTable.innerHTML = "";

  const data = subjects.filter(
    (item) =>
      item.subject.toLowerCase().includes(filters.subject || "") ||
      item.subjectTeacher.toLowerCase().includes(filters.subjectTeacher || "")
  );

  console.log(data);

  data.map((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <tr>
            <td>${index + 1}</td>
            <td>${item.subject}</td>
            <td>${item.subjectTeacher}</td>
            <td>${item.subjectRoom}</td>
            <td>
                <button class="btn btn-danger" onclick="btnRemove()">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
        `;

    tbodySubjectsTable.appendChild(row);
  });
};

const filter = (e) => {
  loaded({ subject: e.target.value, subjectTeacher: e.target.value });
};

const clearAll = () => {
  subjectsTable.innerHTML = "";
};
