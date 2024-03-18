import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import classNames from 'classnames';
import {Link, useLocation, useNavigate} from 'react-router-dom';

import {
  RiShoppingCartLine,
  RiShoppingCartFill
} from 'react-icons/ri';

import Busca from '../Busca';

const iconeProps = {
  color: 'white',
  size: 24
}

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} onClick={() => navigate('/')}/>
      <div className={styles.links}>
        <div>
          <Link to='/' className={classNames(styles.link, {
            [styles.selected]: location.pathname === '/'
          })}>
            Página inicial
          </Link>
        </div>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <Link to="/carrinho">
          {location.pathname === '/carrinho'
            ? <RiShoppingCartFill {...iconeProps} />
            : <RiShoppingCartLine {...iconeProps} />
          }
        </Link>
      </div>
    </nav>
  )
}