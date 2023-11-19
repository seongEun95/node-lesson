import { getArtists,getArtistById, createArtist, updateArtist, deleteArtist } from "./artist.serv"

const artistService ={
  getArtists,
  getArtistById,
  createArtist,
  updateArtist,
  deleteArtist
}

export default artistService