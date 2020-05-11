console.log("Let's Rock!");

import apiManager from './apiManager.js';

// this gets a reference to song output container element
const songOutputContainer = document.getElementById("songs_container");

// this holds references to all of the song add / edit form elements
const songFormInputs = {
  id: document.getElementById("songId"),
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  yearReleased: document.getElementById("yearReleased"),
  length: document.getElementById("length")
};

// reference to form submit button
const formSubmitBtn = document.getElementById("form-submit");

formSubmitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // capture input values
  const songFormValues = {
    "title": songFormInputs.title.value,
    "artist": songFormInputs.artist.value,
    "yearReleased": songFormInputs.yearReleased.value,
    "length": parseInt(songFormInputs.length.value)
  }

  // get hidden input value (this is the song id if editing / or null if adding new)
  const songId = songFormInputs.id.value

  if (songId) {
    apiManager.updateSong(songFormValues, songId)
      .then(getAndRenderAllSongs)
    clearSongEditForm()
  } else {
    apiManager.createSong(songFormValues)
      .then(getAndRenderAllSongs)
    clearSongEditForm()
  }
})


songOutputContainer.addEventListener("click", (event) => {
  if (event.target.id.startsWith("edit--")) {
    const songId = event.target.id.split("--")[1]
    apiManager.getSongById(songId)
      .then((song) => {
        prepopulateSongEditForm(song)
      })
  }
  if (event.target.id.startsWith("delete--")) {
    const songId = event.target.id.split("--")[1]
    apiManager.deleteSong(songId)
      .then(getAndRenderAllSongs)
  }
});

function prepopulateSongEditForm(song) {
  songFormInputs.id.value = song.id
  songFormInputs.title.value = song.title
  songFormInputs.artist.value = song.artist
  songFormInputs.yearReleased.value = song.yearReleased
  songFormInputs.length.value = song.length
}

function clearSongEditForm(song) {
  songFormInputs.id.value = ""
  songFormInputs.title.value = ""
  songFormInputs.artist.value = ""
  songFormInputs.yearReleased.value = ""
  songFormInputs.length.value = ""
}



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

