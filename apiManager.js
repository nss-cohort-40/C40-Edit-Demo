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
  updateSong(songObject, id) {
    return fetch(`${apiURL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(songObject)
    })
      .then(data => data.json())
  },
  createSong(songObject) {
    return fetch(`${apiURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(songObject)
    })
      .then(data => data.json())
  }

}

export default apiManager