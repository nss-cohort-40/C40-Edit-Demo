console.log("Let's Rock!");

import apiManager from './apiManager.js';

// this gets a reference to song output container element
const songOutputContainer = document.getElementById("songs_container");

// references to form inputs
const songIdInput = document.getElementById("songId")
const titleInput = document.getElementById("title")
const artistInput = document.getElementById("artist")
const yearReleasedInput = document.getElementById("yearReleased")
const lengthInput = document.getElementById("length")


songOutputContainer.addEventListener("click", (event) => {
  if (event.target.id.startsWith("edit--")) {
    const songId = event.target.id.split("--")[1]
    apiManager.getSongById(songId)
      .then(song => {
        prepopulateForm(song)
      })
  }
  if (event.target.id.startsWith("delete--")) {
    const songId = event.target.id.split("--")[1]
    apiManager.deleteSong(songId)
      .then(getAndRenderAllSongs)
  }
});


function prepopulateForm(song) {
  titleInput.value = song.title
  songIdInput.value = song.id
  artistInput.value = song.artist
  yearReleasedInput.value = song.yearReleased
  lengthInput.value = song.length
}

function clearForm() {
  titleInput.value = ""
  songIdInput.value = ""
  artistInput.value = ""
  yearReleasedInput.value = ""
  lengthInput.value = ""
}


const submitFormBtn = document.getElementById("form-submit")
submitFormBtn.addEventListener("click", event => {
  event.preventDefault();
  const songId = songIdInput.value

  const songFormValues = {
    "title": titleInput.value,
    "artist": artistInput.value,
    "yearReleased": yearReleasedInput.value,
    "length": parseInt(lengthInput.value)
  }

  if (songId != "") {
    apiManager.updateSong(songFormValues, songId)
      .then(getAndRenderAllSongs);
    clearForm()
  } else {
    apiManager.createSong(songFormValues)
      .then(getAndRenderAllSongs)
    clearForm()
  }

})

// this function:
// clears the output container
// gets all songs from API
// THEN sorts resulting song objects A-Z by title
// .maps over each song object to convert song data to HTML representations
// .forEach song HTML representation, renders them to DOM
function getAndRenderAllSongs() {
  songOutputContainer.innerHTML = ""
  apiManager.getAllSongs().then(songs => {
    songs.sort(sortAZ).map(songToHTML).forEach(renderToDOM)
  })
}

// get and render all songs on initial page load
getAndRenderAllSongs()


// convert one song object to HTML representation
function songToHTML(song) {
  return `
  <div class="song_card">
  <h2>${song.title}</h2>
  <h3>by: ${song.artist}</h3>
  <p>released: ${song.yearReleased}</p>
  <button id="edit--${song.id}" class="edit_btn">edit</button>
  <button id="delete--${song.id}" class="delete_btn">delete</button>
  </div>
  `
}

// render HTML representation of song to DOM
function renderToDOM(htmlRep) {
  songOutputContainer.innerHTML += htmlRep;
}

// helper function to sort songs alphabetically by title
function sortAZ(a, b) {
  return a.title.localeCompare(b.title)
}



// Handling edit button
// add edit button to HTML representation with an edit--(songId) and edit_btn class
// add (or in this case update) click event listener to songs_container to listen for edit buttons
// test^^
// get song Id from edit button using split - (code should already exist from delete)
// test^^

// Create edit form
// create a form on index.html containing input fields matching song properties and hidden input for id (!! if no id is present, same form can be used for creating a new song)

// Before we can edit a song, we need to get the current song details and pre-populate the form with that info:

// add getSongById method (which takes a songID as an argument) to API module
// call getSongById(songId) in edit button event listener
// test^^

// update form values with song returned from getSongById -- prepopulateSongForm(song)
// test^^

// Handling edit form
// add click event listener to form submit button
// test^^
// get references to input fields
// collect data from input fields on submit button click
// test^^ -->> add event.preventDefault() to prevent page refresh
// create object from data collected (*songFormValues*)
// test^^

// add condition to check for hidden id value (if there is an id, then the form acts like edit / otherwise you're adding a new song)
// test^^

// add updateSong method (which takes a song object and id as arguments) to API module (PUT request)
// call updateSong method in event listener and pass in the updated song and song id as arguments
// test^^ (how do we know if it was updated - refresh or check json)
// get all songs and re-render
// test^^
// clear form values (similar to prepopulate function)
// test^^


// BONUS:
// mention CSS custom properties(variables)
// add create song functionality
// test^^