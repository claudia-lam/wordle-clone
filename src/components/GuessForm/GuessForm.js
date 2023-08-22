import React from "react";

/** Form for submitting guesses
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * Game -> GuessForm
 */

function GuessForm() {

  const formInitialVal = '';
  const [formValue, setFormValue] = React.useState(formInitialVal);
  console.log(formValue, 'formValue');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log("the word: ", formValue);
        setFormValue(formInitialVal);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="\w{5,5}"
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
