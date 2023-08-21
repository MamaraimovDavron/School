const workers = [
  {
    firstName: "Jaloliddin",
    lastName: "Ahmadaliyev",
    subject: "Cholg`u ustasi",
    phone: "99 137 23 93",
  },
  {
    firstName: "Doston",
    lastName: "Xatamov",
    subject: "Bog`bon",
    phone: "99 337 39 90",
  },
  {
    firstName: "Qayum",
    lastName: "Qaytmasov",
    subject: "Suvchi",
    phone: "95 137 19 96",
  },
  {
    firstName: "Farida",
    lastName: "Madraimova",
    subject: "Farrosh",
    phone: "91 132 29 16",
  },
];

const workersTable = document.getElementById("workersTable");
const tbodyWorkersTable = workersTable.children[1];
// console.log(tbodyWorkersTable);

const btnRemove = () => {
  for (let i = 0; i <= workers.length; i++) {
    tbodyWorkersTable.children[i].remove();
    return;
    // console.log(tbdoyWorkersTable.children[i]);
  }
};

const loaded = (filters = {}) => {
  // tozalash
  tbodyWorkersTable.innerHTML = "";

  // filters.name;

  const data = workers.filter(
    (item) =>
      item.firstName.toLowerCase().includes(filters.firstName || "") ||
      item.lastName.toLowerCase().includes(filters.lastName || "")
  );

  data.map((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <tr id="1">
            <td>${index + 1}</td>
            <td>${item.firstName}</td>
            <td>${item.lastName}</td>
            <td>${item.subject}</td>
            <td>${item.phone}</td>
            <td>
                <button class="btn btn-danger" onclick="btnRemove()">
                    <i class="bi bi-trash"></i></button>
            </td>
        </tr>
        `;

    tbodyWorkersTable.appendChild(row);
  });
};

const clearAll = () => {
  workersTable.innerHTML = "";
};

const filter = (e) => {
  loaded({ firstName: e.target.value, lastName: e.target.value });
};
