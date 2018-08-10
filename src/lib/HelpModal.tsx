import styled from "styled-components";
import * as React from "react";
import Close from "./Close";
import ChildContainer from "./ChildContainer";

const ReactModal = require("react-modal");
export const DEVICE_TYPE = {
  PHONE: "PHONE",
  DESKTOP: "DESKTOP"
};
interface Props {
  /* This prop is optional, since TypeScript won't know that it's passed by the wrapper */
  className?: string;
  isOpen: boolean;
  children: any;
  onRequestClose: any;
  deviceType: string;
}
function HelpModal(props: Props) {
  let overlayStyle = {
    backgroundColor: "rgba(0,0,0,0.19)",
    overflowY: "auto"
  };
  return (
    <ReactModal
      {...props}
      ariaHideApp={false}
      style={{
        overlay: overlayStyle
      }}
    >
      <Close onClick={props.onRequestClose}>Close</Close>
      <ChildContainer deviceType={props.deviceType}>
        {props.children}
      </ChildContainer>
    </ReactModal>
  );
}

export default styled(HelpModal)`
  width: ${props => {
    if (props.deviceType == DEVICE_TYPE.DESKTOP) {
      return "fit-content";
    } else {
      return "auto";
    }
  }};

  height: ${props => (props.deviceType == DEVICE_TYPE.PHONE ? "100%" : "auto")};
  margin: ${props => {
    if (props.deviceType == DEVICE_TYPE.DESKTOP) {
      return "40px auto";
    } else {
      return "0px auto";
    }
  }};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  position: relative;
`;
