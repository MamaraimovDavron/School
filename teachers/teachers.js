// const btnAddress1 = document.getElementById('btnAddress1');
// const btnAddress2 = document.getElementById('btnAddress2');
// const btnAddress3 = document.getElementById('btnAddress3');
// const btnAddress4 = document.getElementById('btnAddress4');
// const btnAddress5 = document.getElementById('btnAddress5');
// const btnAddress6 = document.getElementById('btnAddress6');
// const btnAddress7 = document.getElementById('btnAddress7');
// const btnAddress8 = document.getElementById('btnAddress8');

// let pupilName1 = document.getElementById('name1');
// let pupilName2 = document.getElementById('name2');
// let pupilName3 = document.getElementById('name3');
// let pupilName4 = document.getElementById('name4');
// let pupilName5 = document.getElementById('name5');
// let pupilName6 = document.getElementById('name6');
// let pupilName7 = document.getElementById('name7');
// let pupilName8 = document.getElementById('name8');

// let inputSearch = document.getElementById('input-search');
// const btnSearch = document.getElementById('btnSearch');

// const showInfo = () => {
//     for(let i = 0; i <= 8; i++){
//         // if(inputSearch.value === document.getElementById('name' + [i])){
//         //     console.log(true);
//         // }
//     console.log(document.getElementById('name' + [i]).children);

//     }

// }

// const showAddress1 = () => {
//     alert('Toshkent viloyati, Angren shahar, Uzumzor ko`chasi 13-uy');
// }

// const showAddress2 = () => {
//     alert('Andijon viloyati, Andijon shahar, Bug`doyzor ko`chasi 123-uy');
// }

// const showAddress3 = () => {
//     alert('Samarqand viloyati, Samarqand shahar, Lola ko`chasi 413-uy');
// }

// const showAddress4 = () => {
//     alert('Namangan viloyati, Qumko`prik shahar, Sobir Rahimov ko`chasi 1113-uy');
// }

// const showAddress5 = () => {
//     alert('Farg`ona viloyati, Qo`qon shahar, Chilangar ko`chasi 713-uy');
// }

// const showAddress6 = () => {
//     alert('Buxoro viloyati, G`ijduvon shahar, Zafar ko`chasi 456-uy');
// }

// const showAddress7 = () => {
//     alert('Sirdaryo viloyati, Oltinko`l shahar, Paxta ko`chasi 561-uy');
// }

// const showAddress8 = () => {
//     alert('Toshkent viloyati, Keles shahar, Toshkent ko`chasi 321-uy');
// }

const teachers = [
    {
        firstName: "Davron",
        lastName: "Mamaraimov",
        subject: "Fizika",
        phone: "99 937 49 96"
    },
    {
        firstName: "Azim",
        lastName: "Raimov",
        subject: "Informatika",
        phone: "99 337 39 96"
    },
    {
        firstName: "Abdusamat",
        lastName: "Fayzullayev",
        subject: "English",
        phone: "95 137 19 96"
    },
    {
        firstName: "Sobir",
        lastName: "Madraimov",
        subject: "Matematika",
        phone: "90 537 29 96"
    }
]

const teachersTable = document.getElementById("teachersTable");
const tbodyTeachersTable = teachersTable.children[1];
console.log(tbodyTeachersTable);

const btnRemove = () => {
    for(let i = 0; i <= teachers.length; i++){
        tbodyTeachersTable.children[i].remove();
        return;
    }
}

const loaded = (filters = {}) => {
    // tozalash
    tbodyTeachersTable.innerHTML = "";

    // filters.name;

    const data = teachers.filter((item, index) =>
        item.firstName.includes(filters.firstName || ""));


    data.map((item, index) => {

        const row = document.createElement('tr');
        row.innerHTML = `
        <tr>
            <td>${index + 1}</td>
            <td>${item.firstName}</td>
            <td>${item.lastName}</td>
            <td>${item.subject}</td>
            <td>${item.phone}</td>
            <td>
                <button class="btn btn-danger" onclick="btnRemove()"><i class="bi bi-trash"></i></button>
            </td>
        </tr>
        `;
    
        tbodyTeachersTable.appendChild(row);
    })
}

const filter = (e) => {
    console.log(e.target.value);
    loaded({firstName: e.target.value });
    loaded({lastName: e.target.value });
}