import './App.css';
import NavBar from './NavBar';
import NewEntry from './NewEntry';
import Entries from './Entries';
import { useState } from 'react';

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

function App() {
  const [visible, setVisible] = useState('hidden');

  function handleSwap() {
    setVisible('hidden');
  }

  function handleNew() {
    setVisible('shown');
  }

  return (
    <div>
      <NavBar onSwap={handleSwap} />
      <NewEntry visible={visible} data={data} />
      <Entries
        entryList={data.entries}
        visible={visible === 'hidden' ? 'shown' : 'hidden'}
        onNew={handleNew}
      />
    </div>
  );
}

export default App;
