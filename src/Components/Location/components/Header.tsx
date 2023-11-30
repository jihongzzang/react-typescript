export default function Header() {
  const basicPath = '/location';

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href={basicPath}>home</a>
            <a href={`${basicPath}/about`}>about</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
