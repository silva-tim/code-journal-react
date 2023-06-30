import Entry from './Entry';

export default function Entries({ visible, onNew, entryList }) {
  const entryElements = [];
  for (let i = 0; i < entryList.length; i++) {
    console.log('hi');
    entryElements.push(<Entry entry={entryList[i]} />);
  }

  return (
    <div className={`container ${visible}`} data-view="entries">
      <div className="row">
        <div className="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <h3>
            <a
              onClick={onNew}
              id="formLink"
              className="white-text form-link"
              href="#">
              NEW
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <ul className="entry-ul" id="entryUl">
            {entryElements}
          </ul>
        </div>
      </div>
    </div>
  );
}
