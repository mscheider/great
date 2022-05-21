import '../NavBar.css';
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <h1 className='titulo'> Great!</h1>
            <div className='container'>
                <button className=''>Remeras</button>
                <button>Tops</button>
                <button>Calzas</button>
            </div>
            <CartWidget className="cart"/>
            
        </nav>
    )
}

export default NavBar   