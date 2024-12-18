import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavoritos, getFavoritos } from '../services/favorito';
import livroImg from '../imagens/livro.png'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);

`
const ResultadoContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`

const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 20px 0;
   cursor: pointer;
   text-align: center;
   padding: 0 100px;
   p {
       width: 200px;
       color: #FFF;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`

const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px
`

function Favoritos() {
  const [livrosFavoritos, setLivrosFavoritos ] = useState([])

  async function fetchDataFavoritos(){
    const favoritosAPI = await getFavoritos()
    return setLivrosFavoritos(favoritosAPI)
  }
  useEffect(() =>{
    fetchDataFavoritos()}
    ,[])

  async function deletaFavorito(id) {
    await deleteFavoritos(id)
    alert(`Livro de id ${id} deletado com sucesso!`)
    fetchDataFavoritos()
  } 

  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
      { livrosFavoritos.map( livro => (
        <Resultado onClick={() => deletaFavorito(livro.id)}>
          <p>{livro.nome}</p>
          <img src={livroImg} alt='livroImagem'></img>
          </Resultado>  
          ))}
        </ResultadoContainer>

      </div>
    </AppContainer>
  );
}

export default Favoritos;
