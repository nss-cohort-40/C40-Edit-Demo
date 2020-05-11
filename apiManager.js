const apiURL = "http://localhost:5050/songs"

const apiManager = {
  getAllSongs() {
    return fetch(`${apiURL}`)
      .then(data => data.json())
  },
  getSongById(songId) {
    return fetch(`${apiURL}/${songId}`)
      .then(data => data.json())
  },
  deleteSong(songId) {
    return fetch(`${apiURL}/${songId}`, {
      method: "DELETE"
    })
  },
  updateSong(updatedSong, id) {
    return fetch(`${apiURL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedSong)
    })
  },
  createSong(newSong) {
    return fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newSong)
    })
  }
}

export default apiManager