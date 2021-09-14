import React from "react";
import { useState, Fragment } from "react"
import { storiesOf } from "@storybook/react"

import Modal from "../components/Modal";

const stories = storiesOf("Example", module);

stories.add("App", () => {
    const [active, setActive] = useState(false)

    const close = () => {
      setActive(!active)
    }
  
    return (
      <Fragment>
        <div className = "container">
          <h1>React Modal</h1>
          <button onClick = {() => setActive(true)}>Save</button>
          <Modal
            open = {active}
            modalContent = "Yeah ! The react modal is open !"
            close = {close}
          />
        </div>
      </Fragment>
  
    )
});