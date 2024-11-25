import IconesHeader from '../IconesHeader';
import Logo from '../logo'
import OpcoesHeader from '../OpcoesHeader';
import './estilo.css';

function Header() {
    return(
        <header className='App-header'>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>       
       </header>
        )
}

export default Header;