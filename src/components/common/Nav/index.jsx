import { Link } from 'react-router-dom';
import routes from '../../../lib/routes'

const Nav = () => {
    const { restricted, unrestricted } = routes;

    return (
        <nav>
            <ul>
                {
                    restricted.map(({ path, title }) =>
                        <li><Link to={path}>{title}</Link></li>)
                }
                {
                    unrestricted.map(({ path, title }) =>
                        <li><Link to={path}>{title}</Link></li>)
                }
            </ul>
        </nav>
    );
}

export default Nav;