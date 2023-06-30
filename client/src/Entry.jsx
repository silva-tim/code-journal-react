export default function Entry({ entry }) {
  return (
    <li>
      <div className="row margin-bottom-1">
        <div className="column-half">
          <img
            className="input-b-radius form-image"
            id="formImage"
            src={entry.photoUrl}
            alt="image of entry image"
          />
        </div>
        <div className="column-half">
          <div className="row">
            <div className="column-full d-flex justify-between align-center">
              <h3>{entry.title}</h3>
              <i class="fa-solid fa-pencil"></i>
            </div>
          </div>
          <p>{entry.notes}</p>
        </div>
      </div>
    </li>
  );
}
