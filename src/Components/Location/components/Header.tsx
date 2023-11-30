import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleClickLogout = () => {
    navigate('/logout');
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            {/* <Link to="/logout">logout</Link> */}

            {/* <Link to="/home">home</Link> */}

            {/* <Link to="/about">about</Link> */}

            <NavLink to="/home">home</NavLink>

            <NavLink to="/about">about</NavLink>

            {/* <NavLink to="/logout">logout</NavLink> */}

            <button type="button" onClick={handleClickLogout}>
              logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
