import logo from '../../imagens/logo.svg';
import './estilo.css';

function Logo(){
    return  (
        <div className='logo'>
            <img 
            src={logo} 
            alt='logo'
            className='img-logo'
            ></img>
            <p> <strong>Alura</strong> books</p>
        </div>)
}

export default Logo;