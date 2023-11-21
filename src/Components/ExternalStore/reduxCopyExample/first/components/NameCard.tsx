import useSelector from '../hooks/useSelector';

export default function NameCard() {
  const name = useSelector((state) => state.name);

  return (
    <div>
      <p>NameCard: {name}</p>
    </div>
  );
}
