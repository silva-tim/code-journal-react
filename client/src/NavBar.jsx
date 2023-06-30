import NavBarButton from './NavBarButton';

export default function NavBar({ onSwap }) {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="column-full d-flex align-center">
            <h1 className="white-text">Code Journal</h1>
            <NavBarButton onSwap={onSwap} name="Entries" />
          </div>
        </div>
      </div>
    </header>
  );
}
