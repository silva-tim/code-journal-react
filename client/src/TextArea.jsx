export default function TextArea() {
  return (
    <div className="row margin-bottom-1">
      <div className="column-full">
        <label className="margin-bottom-1 d-block" htmlFor="formNotes">
          Notes
        </label>
        <textarea
          required
          className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
          name="formNotes"
          id="formNotes"
          cols="30"
          rows="10"></textarea>
      </div>
    </div>
  );
}
