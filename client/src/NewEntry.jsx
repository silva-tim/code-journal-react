import Picture from './Picture';
import TextArea from './TextArea';
import Button from './Button';
import Input from './Input';

export default function NewEntry({ data, visible }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formValues = {
      title: event.target.elements.formTitle.value,
      photoUrl: event.target.elements.formURL.value,
      notes: event.target.elements.formNotes.value,
    };
    if (data.editing === null) {
      formValues.entryId = data.nextEntryId++;
      data.entries.unshift(formValues);
    }
  }

  return (
    <div className={`container ${visible}`} data-view="entry-form">
      <div className="row">
        <div className="column-full d-flex justify-between">
          <h1 id="formH1">New Entry</h1>
        </div>
        <form id="entryForm" onSubmit={handleSubmit}>
          <div className="row margin-bottom-1">
            <Picture />
            <Input />
          </div>
          <TextArea />
          <Button data={data} />
        </form>
      </div>
    </div>
  );
}
