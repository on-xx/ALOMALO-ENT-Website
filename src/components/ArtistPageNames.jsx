import { Link } from "react-router-dom"

const ArtistPageNames = () => {
    return (
        <ul className="artist-page-names">
            <Link style={{ textDecoration: 'none' }} to='/artist'>
                <li>곽현준</li>
            </Link>

            <Link style={{ textDecoration: 'none' }} to='/artist'>
                <li>신지민</li>
            </Link>

            <Link style={{ textDecoration: 'none' }} to='/artist'>
                <li>양승호</li>
            </Link>

            <Link style={{ textDecoration: 'none' }} to='/artist'>
                <li>강민길</li>
            </Link>

            <Link style={{ textDecoration: 'none' }} to='/artist'>
                <li>김민기</li>
            </Link>

            <Link style={{ textDecoration: 'none' }} to='/artist'>
                <li>김정민</li>
            </Link>

            <Link style={{ textDecoration: 'none' }} to='/artist'>
                <li>손화령</li>
            </Link>

            <Link style={{ textDecoration: 'none' }} to='/artist'>
                <li>심태영</li>
            </Link>

            <Link style={{ textDecoration: 'none' }} to='/artist'>
                <li>안예인</li>
            </Link>

            <Link style={{ textDecoration: 'none' }} to='/artist'>
                <li>윤해빈</li>
            </Link>

            <Link style={{ textDecoration: 'none' }} to='/artist'>
                <li>이민우</li>
            </Link>

            <Link style={{ textDecoration: 'none' }} to='/artist'>
                <li>이상우</li>
            </Link>

            <Link style={{ textDecoration: 'none' }} to='/artist'>
                <li>군조</li>
            </Link>
        </ul>
    )
}

export default ArtistPageNames