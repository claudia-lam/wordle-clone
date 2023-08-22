import React from "react";

/** Form for submitting guesses
 *
 * Props:
 * - none
 *
 * State:
 * - formValue: 5 letter string
 *
 * Game -> GuessForm
 */

function GuessForm() {

  const formInitialVal = '';
  const [formValue, setFormValue] = React.useState(formInitialVal);
  console.log(formValue, 'formValue');

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ formValue });
    setFormValue(formInitialVal);
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5,5}"
        value={formValue}
        title="please enter a 5 letter word"
        onChange={(event) => (
          setFormValue(event.target.value.toUpperCase())
        )}
      />
    </form>
  );
}

export default GuessForm;
