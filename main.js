const txtArea= document.getElementById("text-area")
const sbmtBtn = document.getElementById("note-submit-btn")
const notesDiv = document.getElementById("notes-div")
let notesArray = []

sbmtBtn.addEventListener("click", function(){
    notesArray.push(txtArea.value)
    renderNotes()
})

const renderNotes = () => {
    notesDiv.innerHTML = ""
    for (let i = 0; i<notesArray.length; i++){
        notesDiv.innerHTML += `<p class="note-snippet">${notesArray[i]}</p><button>Hello</button>`
    }
}