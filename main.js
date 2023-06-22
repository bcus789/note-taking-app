const txtArea= document.getElementById("text-area")
const sbmtBtn = document.getElementById("note-submit-btn")
const notesDiv = document.getElementById("notes-div")
const noteSnippit = document.getElementsByClassName("note-snippet")
const localNoteStorage = JSON.parse(localStorage.getItem("notes"))
let notesArray = []



sbmtBtn.addEventListener("click", function(){
    notesArray.push(txtArea.value)
    localStorage.setItem("notes", JSON.stringify(notesArray))
    renderNotes()
})

const renderNotes = () => {
    notesDiv.innerHTML = ""
    for (let i = 0; i<notesArray.length; i++){
        notesDiv.innerHTML += `<p class="note-snippet">${notesArray[i]}</p><button class="delete-button" onclick="remove(${i})">Delete</button>`
    }
    txtArea.value = ""
}

if(localNoteStorage){
    notesArray = localNoteStorage
    renderNotes()
}

function remove(index){
    notesArray.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesArray))
    renderNotes()
}