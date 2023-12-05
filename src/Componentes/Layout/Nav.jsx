import styles from '../Layout/Nav.module.css'
import { Link } from 'react-router-dom'

function Nav(){
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Cadastro'>Cadastro</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav