export default function Footer() {
  const basicPath = '/location';

  return (
    <footer>
      <hr />
      <nav>
        <ul>
          <li>
            <a href={basicPath}>home</a>
            <a href={`${basicPath}/about`}>about</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
