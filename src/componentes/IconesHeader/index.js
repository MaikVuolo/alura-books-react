import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const icones = [perfil, sacola];

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const Icone = styled.li `
    margin-right: 40px;
    width: 25px;
`

function IconesHeader (){
    return (
        <Icones>
            {icones.map( (imagem) => (
            <Icone><img src={imagem} alt={imagem}></img></Icone>
            ))}
       </Icones>
    )
}

export default IconesHeader;