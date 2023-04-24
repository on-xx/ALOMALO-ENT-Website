import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div id="header">
            <div className="header container">
                <div className="header-logo">
                    <Link to='/'>
                        <img className="main-logo" src="./img/logo2.png" alt="Main-logo" />
                    </Link>
                </div>
                <div className="header-menu">
                    <ul className="header-menu-wrapper flex-row">
                        <Link style={{ textDecoration: 'none' }} to='/company'>
                            <li>COMPANY</li>
                        </Link>

                        <Link style={{ textDecoration: 'none' }} to='/news'>
                            <li>NEWS</li>
                        </Link>

                        <Link style={{ textDecoration: 'none' }} to='/artist'>
                            <li>ARTIST</li>
                        </Link>

                        <Link style={{ textDecoration: 'none' }} to='/audition'>
                            <li>AUDITION</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header