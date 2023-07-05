export default function NavBarButton({ name, onSwap }) {
  return (
    <h3>
      <a onClick={onSwap} href="#" className="white-text entries-link">
        {name}
      </a>
    </h3>
  );
}
