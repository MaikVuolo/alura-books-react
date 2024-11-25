import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import './estilo.css';

const icones = [perfil, sacola];

function IconesHeader (){
    return (
        <ul className='icones'>
            {icones.map( (imagem) => (
            <li className='icone'><img src={imagem} alt={imagem}></img></li>
            ))}
       </ul>
    )
}

export default IconesHeader;