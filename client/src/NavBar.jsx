import NavBarButton from './NavBarButton';

export default function NavBar() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="column-full d-flex align-center">
            <h1 className="white-text">Code Journal</h1>
            <NavBarButton name="Entries" />
          </div>
        </div>
      </div>
    </header>
  );
}
