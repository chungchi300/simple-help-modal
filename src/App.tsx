import * as React from "react";
import HelpModal, { DEVICE_TYPE } from "./lib/HelpModal";
class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
  }
  private toggleHelp() {
    this.setState({
      on: !this.state.on
    });
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple Help Modal</h1>
        </header>
        <p className="App-intro" />
        <HelpModal
          onRequestClose={() => {
            console.log("request close");
            this.toggleHelp.bind(this)();
          }}
          deviceType={DEVICE_TYPE.DESKTOP}
          isOpen={this.state.on}
        >
          <img className="content-img" src="./manual.jpg" />
        </HelpModal>

        <button onClick={this.toggleHelp.bind(this)}>
          Toggle Help Modal On{" "}
        </button>
      </div>
    );
  }
}

export default App;
