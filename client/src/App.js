import './App.css';
import NavBar from './NavBar';
import NewEntry from './NewEntry';

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

window.addEventListener('beforeunload', function (event) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('code-journal-data', dataJSON);
});

const localData = JSON.parse(localStorage.getItem('code-journal-data'));
if (localData) {
  data = localData;
}

function App({ data }) {
  return (
    <div>
      <NavBar />
      <NewEntry data={data} />
    </div>
  );
}

export default App;
