const rooms = [
    {
        room: "Informatika",
        roomNumber: "23",
        roomStep: '2',
    },
    {
        room: "Fizika",
        roomNumber: "2",
        roomStep: '1',
    },
    {
        room: "Matematika",
        roomNumber: "3",
        roomStep: '1',
    },
    {
        room: "Kutubxona",
        roomNumber: "30",
        roomStep: '2',
    },
]

const roomsTable = document.getElementById("roomsTable");
const tbodyRoomsTable = roomsTable.children[1];
// console.log(tbodyRoomsTable);

const btnRemove = () => {
    for(let i = 0; i <= rooms.length; i++){
        tbodyRoomsTable.children[i].remove();
        return;
    }
}

const loaded = (filters = {}) => {
    tbodyRoomsTable.innerHTML = "";

    const data = rooms.filter((item, index) => item.room.includes(filters.room || ""));

    data.map((item, index) => {

        const row = document.createElement('tr');
        row.innerHTML = `
        <tr>
            <td>${index + 1}</td>
            <td>${item.room}</td>
            <td>${item.roomNumber}</td>
            <td>${item.roomStep}</td>
            <td>
                <button class="btn btn-danger" onclick="btnRemove()">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
        `;

        tbodyRoomsTable.appendChild(row);
    })
}