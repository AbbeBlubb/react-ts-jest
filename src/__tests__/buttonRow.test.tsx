import * as React from "react";
import * as ReactDOM from "react-dom";
import { render as render2, fireEvent, waitForElement } from "@testing-library/react";
//import { ReactDOM, render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ButtonRow from '../ButtonRow';

describe("<ButtonRow>", () => {

  let container: any = null;

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    // cleanup on exiting
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  const first = document.querySelector('#first');
  const second = document.querySelector('#second');
  const third = document.querySelector('#third');
/*
  act(() => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab" }));
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab" }));
  });

  let focused = document.activeElement

  expect(focused).toBe(first);
*/
  //render2(<ButtonRow />, container);
  ReactDOM.render(<ButtonRow />, container);
  const buttonTarget = document.querySelector('#first')

  act(()=> {
    buttonTarget.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  })

  expect(document.activeElement).toBe(first);

});