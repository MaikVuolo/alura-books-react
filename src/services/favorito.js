import axios from "axios";

const livrosFavoritosAPI = axios.create({baseURL:"http://localhost:8000/favoritos"});

async function getFavoritos () {
    const response = await livrosFavoritosAPI.get("/");

    return response.data
}

async function postFavoritos(id) {
   await livrosFavoritosAPI.post(`/${id}`)

}

async function deleteFavoritos(id) {
    await livrosFavoritosAPI.delete(`/${id}`)


}

export { getFavoritos, postFavoritos ,deleteFavoritos };