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
]

const subjectsTable = document.getElementById("subjectsTable");
const tbodySubjectsTable = subjectsTable.children[1];
console.log(tbodySubjectsTable);

const btnRemove = () => {
    for(let i = 0; i <= subjects.length; i++){
        tbodySubjectsTable.children[i].remove();
        return;
    }
}

const loaded = (filters = {}) => {
    tbodySubjectsTable.innerHTML = "";

    const data = subjects.filter((item, index) => item.subject.includes(filters.firstName || ""));


    data.map((item, index) => {

        const row = document.createElement('tr');
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
    })
}


const clearAll = () => {
    subjectsTable.innerHTML = "";

    // tbodyPupilsTable.innerHTML = "";
}



const filter = (e) => {
    // if(e.target.value.toLowerCase() == subjects[2].subject.toLowerCase()){
    //     console.log('True')
    // };


    console.log(e.target.value);
    loaded({firstName: e.target.value });
    loaded({lastName: e.target.value });

    // subjects.map((item, index) => {
    //     if(subjects[index].subject.toLowerCase() == e.target.value.toLowerCase()){
    //         console.log(true);   
    //     }
    // })
}

