# rs-react-modal

## Example of use

### Example 1: by default

```js
    <Modal
        open = {active}
        close = {close}
    />
```

![Alt text](/example/By_default.PNGraw=true) 

## Default option

```js
Modal.defaultProps = {
  buttonContent: "Close", // Allows the user to customize the button content
  escape: true, //Allows the user to close the modal by pressing `ESC`
  fadeDelay: null, //Point during the overlay's fade-in that the modal begins to fade in (number between 0 and 1)
  fadeDuration: null, // Number of milliseconds the fade transition takes (null means no transition)
  modalContent: "React modal is open!", // Allows the user to customize the modal content
  open: false, // Allows the user to open the modal
  outside: true, // Allows the user to close the modal by clicking the overlay
  showClose: false, // Allows the user to activate button x
  styleButton: {}, // Allows the user to customize button style
  styleButtonX: {}, // Allows the user to customize button x style
  styleContainer: {}, // Allows the user to customize overlay style
  styleContent: {} // Allows the user to customize modal content style
}
```

```js
Modal.propTypes = {
  buttonContent: PropTypes.string,
  close: PropTypes.func.isRequired,
  escape: PropTypes.bool,
  fadeDelay: PropTypes.number,
  fadeDuration: PropTypes.number,
  modalContent: PropTypes.string,
  open: PropTypes.bool.isRequired,
  outside: PropTypes.bool,
  showClose: PropTypes.bool,
  styleButton: PropTypes.object,
  styleButtonX: PropTypes.object,
  styleContainer: PropTypes.object,
  styleContent: PropTypes.object
}
```

