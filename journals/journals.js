const time = [
    {
        time: "8.00-8.45",
        monday: "Fizika",
        tuesday: "Informatika",
        wednesday: "Matematika",
        thursday: "Jismoniy Tarbiya",
        friday: "Musiqa",
        saturday: "Ona tili",
    },
    {
        time: "9.00-9.45",
        monday: "Musiqa",
        tuesday: "Informatika",
        wednesday: "Adabiyot",
        thursday: "Chet tili",
        friday: "Fizika",
        saturday: "Ona tili",
    },
    {
        time: "10.00-10.45",
        monday: "Kimyo",
        tuesday: "Tasviriy san`at",
        wednesday: "Rus tili",
        thursday: "Mehnat",
        friday: "Biologiya",
        saturday: "Ona tili",
    },
    {
        time: "11.00-11.45",
        monday: "Chet tili",
        tuesday: "Fizika",
        wednesday: "Matematika",
        thursday: "Botanika",
        friday: "Adabiyot",
        saturday: "Zoologiya",
    },
    {
        time: "12.00-13.00",
        monday: "Tushlik!",
        tuesday: "Tushlik!",
        wednesday: "Tushlik!",
        thursday: "Tushlik!",
        friday: "Tushlik!",
        saturday: "Tushlik!",
    },
    {
        time: "13.00-13.45",
        monday: "Jismoniy Tarbiya",
        tuesday: "Dars yo`q!",
        wednesday: "Matematika",
        thursday: "Zoologiya",
        friday: "Dars yo`q",
        saturday: "Dars yo`q",
    },
]


const watch = document.getElementById('watch');

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();

const currentTime = hours + ':' + minutes;
    

watch.innerHTML = currentTime;

console.log(currentTime);

const timeTable = document.getElementById("timeTable");
const tbodyTimeTable = timeTable.children[1];
console.log(tbodyTimeTable);

const loaded = () => {
    tbodyTimeTable.innerHTML = "";

    time.map((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <tr>
            <td class="text-success"><b>${item.time}</b></td>
            <td class="fw-bold text-primary">${item.monday}</td>
            <td class="fw-bold text-primary">${item.tuesday}</td>
            <td class="fw-bold text-primary">${item.wednesday}</td>
            <td class="fw-bold text-primary">${item.thursday}</td>
            <td class="fw-bold text-primary">${item.friday}</td>
            <td class="fw-bold text-primary">${item.saturday}</td>
            <td>
                <button class="btn btn-danger" onclick="btnRemove()">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
        `;

        tbodyTimeTable.appendChild(row);
    })
}

const btnRemove = () => {
    for(let i = 0; i <= time.length; i++) {
        tbodyTimeTable.children[i].remove();
        return;
    }
}