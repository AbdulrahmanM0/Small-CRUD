
let notes = [];
let input = document.getElementById('input');
let noteList = document.getElementById('note-list');
let updateButton = document.getElementById('update');
let addButton = document.getElementById('add');
createNote=()=>{
    if(input.value != ''){
        notes.push(input.value);
        localStorage.setItem('notes',JSON.stringify(notes));
        readeNote();
        // input.value = '';
    }
}
    input.onkeyup = (e)=>{
        if(e.key === 'Enter'){
            createNote()
        }
    }
    let stored =  JSON.parse(localStorage.getItem('notes'));
    readeNote = () =>{
    let note='';
    for(let i = 0; i < notes.length ; i++){
        note += `<li><textarea>${notes[i]}</textarea><span><button onclick=update(${i})>update</button><button onclick=del(${i})>delete</button></span></li>`;
    }
    noteList.innerHTML = note;
}

del=(index)=>{
    notes.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notes))
    readeNote();
}
let i;
update=(index)=>{
    input.value = notes[index];
    updateButton.style.display = 'block';
    addButton.style.display = 'none';
    i = index;
}
updateNote=()=>{
    notes[i] = input.value;
    readeNote();

    updateButton.style.display = 'none';
    addButton.style.display = 'block';
}
readeNote()
