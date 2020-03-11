import * as React from 'react';

export default class ButtonRow extends React.Component {
  render() {
    return(
      <section>
        <button id='first'>First</button>
        <button id='second'>Second</button>
        <button id='third'>Third</button>
      </section>
    )
  }
}