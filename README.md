## Usage

### React Component

```jsx
import {HelpModal,DEVICE_TYPE} from "simple-help-modal";

<HelpModal
          onRequestClose={() => {
            console.log("request close");
            this.setState({
              on:false
            })
          }}
          deviceType={DEVICE_TYPE.DESKTOP}
          isOpen={this.state.on}
        >
          <img className="content-img" src="./manual.jpg" />
</HelpModal>
```

### Redux usage

`Configure Store`

```jsx
import { createStore, combineReducers } from "redux";

import { reducer as help } from "simple-help-modal";

export function configureStore(initialState = {}) {
  return createStore(
    combineReducers({
      help
    }),
    initialState
  );
}
```

`Smart Component`

```jsx
import { HelpModal, DEVICE_TYPE, TOGGLE } from "simple-help-modal";

class App {
  render() {
    return (
      <div>
        <HelpModal
          onRequestClose={this.props.toggleHelp}
          deviceType={DEVICE_TYPE.DESKTOP}
          isOpen={this.props.help}
        >
          <img className="content-img" src="./manual.jpg" />
        </HelpModal>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleHelp: () => dispatch({ type: TOGGLE })
  };
}
function mapStateToProps(state) {
  return {
    help: state.help
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
```

# Adv:

1.  Support desktop and phone style
