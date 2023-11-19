import { createArtist, deleteArtist, getArtists, getArtistById, updateArtist } from "./artist.ctrl";

const artistController ={
  getArtists,
  getArtistById,
  createArtist,
  updateArtist,
  deleteArtist
}

export default artistController