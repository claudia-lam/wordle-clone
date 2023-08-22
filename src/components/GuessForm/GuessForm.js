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

  const [formValue, setFormValue] = React.useState('');

  return (
    <form
      class="guess-input-wrapper"
    >
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={formValue}
      />
    </form>
  );
}

export default GuessForm;
