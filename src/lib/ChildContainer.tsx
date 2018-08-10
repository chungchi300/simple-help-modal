import styled from "styled-components";
import * as React from "react";
export const DEVICE_TYPE = {
  PHONE: "PHONE",
  DESKTOP: "DESKTOP"
};
interface Props {
  /* This prop is optional, since TypeScript won't know that it's passed by the wrapper */
  className?: string;
  deviceType: string;
  children: any;
}
function ChildContainer({ className, children }: Props) {
  return <div className={className}>{children}</div>;
}

export default styled(ChildContainer)`
  & > img {
    max-width: ${props => {
      if (props.deviceType == DEVICE_TYPE.DESKTOP) {
        return "1004px";
      } else {
        return "none";
      }
    }};
  }
  & > img {
    width: ${props => {
      if (props.deviceType == DEVICE_TYPE.DESKTOP) {
        return "auto";
      } else {
        return "100%";
      }
    }};
  }
`;
