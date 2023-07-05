export default function Input() {
  return (
    <div className="column-half">
      <label className="margin-bottom-1 d-block" htmlFor="formTitle">
        Title
      </label>
      <input
        required
        className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
        type="text"
        id="formTitle"
        name="formTitle"
      />
      <label className="margin-bottom-1 d-block" htmlFor="photoUrk">
        Photo URL
      </label>
      <input
        required
        className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
        type="text"
        id="formURL"
        name="formURL"
      />
    </div>
  );
}
