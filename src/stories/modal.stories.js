import React from "react";
import { useState, Fragment } from "react"
import { storiesOf } from "@storybook/react"

import Modal from "../components/Modal";

const stories = storiesOf("Example", module);

stories.add("Ex1", () => {
    const [active, setActive] = useState(false)

    const close = () => {
      setActive(!active)
    }
  
    return (
      <Fragment>
        <div className = "container">
          <h1>React Modal</h1>
          <h2>By default</h2>
          <button onClick = {() => setActive(true)}>Open</button>
          <Modal
              open = {active}
              close = {close}
          />
        </div>
      </Fragment>
  
    )
});

stories.add("Ex2", () => {
  const [active, setActive] = useState(false)

  const close = () => {
    setActive(!active)
  }

  const customButton = {
    display: "none"
  }

  return (
    <Fragment>
      <div className = "container">
        <h2>With close button only (showClose = true)</h2>
        <button onClick = {() => setActive(true)}>Open</button>
        <Modal
            open = {active}
            escape = {false}
            outside = {false}
            close = {close}
            showClose = {true}
            styleButton = {customButton}
        />
      </div>
    </Fragment>
  )
});