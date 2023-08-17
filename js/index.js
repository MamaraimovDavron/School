const menuBtn = document.getElementById('menu-btn');
let leftSidebar = document.getElementById('leftSide');
const cards = document.getElementById('cards');
const selected = document.getElementById('selected');
const darkMode = document.getElementById('darkMode');

const hideSidebar = () => {
    // console.log(leftSide.className);

    // if(leftSide.className !== "") leftSide.className = "";
    // else leftSide.className = "left";

    // console.log(cards.children);
  
    
    if(leftSidebar.classList.contains('hide')){
        leftSidebar.classList.remove('hide');
    }
    else{
        leftSidebar.classList.add('hide');
    }
};

const keyUp = (e) => {
    if(e.key === 'Escape') leftSidebar.classList.add('hide');
};

for (const card of cards.children) {
    console.log(card.children[0]);
    card.children[0].onclick = () => {
        selected.innerHTML = card.children[0].innerHTML;
    };
}

const darkMoon = () => {
    document.getElementById('darkHeader').style.backgroundColor = 'black';
    document.getElementById('darkHeader').style.borderLeft = '1px solid white';
    darkMode.style.color = 'white';
    menuBtn.style.color = 'white';
    document.getElementById('darkAside').style.backgroundColor = 'black';
    document.getElementById('darkAside').style.borderLeft = '1px solid white';
    document.getElementById('selected').style.color = 'white';
    document.getElementById('darkH').style.color = 'white';
    for(let i = 1; i <= 6; i++){
        document.getElementById('dark-a' + [i]).style.color = 'white';
    }
    
    document.getElementById('leftSide').style.background = 'black';
}

const darkMoonDbl = () => {
    document.getElementById('darkHeader').style.background = 'rgb(230, 222, 222)';
    document.getElementById('darkHeader').style.borderLeft = '1px solid white';
    darkMode.style.color = 'black';
    menuBtn.style.color = 'black';
    document.getElementById('darkAside').style.backgroundColor = 'rgb(241, 239, 239)';
    // document.getElementById('darkAside').style.borderLeft = '1px solid white';
    document.getElementById('selected').style.color = 'black';
    document.getElementById('darkH').style.color = 'black';
    for(let i = 1; i <= 6; i++){
        document.getElementById('dark-a' + [i]).style.color = 'black';
    }
    
    document.getElementById('leftSide').style.background = 'linear-gradient(#000428,#004e92)';
}

let tableTeachers = document.getElementById('table-teachers');

const btnTeachers = document.getElementById('dark-a1');

const clickTeachers = () => {
    // tableTeachers.style.background = 'red';
    // console.log('working');
    tableTeachers.style.border = 'none';
}

// bolimlar 
const sections = [
    {title: "O`qituvchilar", link: "../teachers/teachers.html"},
    {title: "O`quvchilar", link: "../pupils/pupils.html"},
    {title: "Xodimlar", link: "../workers/workers.html"},
    {title: "Fanlar", link: "../subjects/subjects.html"},
    {title: "Xonalar", link: "../rooms/rooms.html"},
    {title: "Dars jadvallari", link: "../journals/journals.html"},
]

const setCards = () => {
    cards.innerHTML = "";

    sections.map(section => {
        
        const col = document.createElement('div');
        col.className = "section-div";

        const link = document.createElement("a");
        link.href = section.link;
        link.innerHTML = section.title;

        col.appendChild(link);
        cards.appendChild(col);
    })

    
}

setCards();