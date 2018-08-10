import styled from "styled-components";
import * as React from "react";
import X from "./asset/X";
interface Props {
  /* This prop is optional, since TypeScript won't know that it's passed by the wrapper */
  className?: string;
  onClick: any;
}
function Close({ className, onClick }: Props) {
  return (
    <div className={className}>
      <X style={{ cursor: "pointer" }} onClick={onClick} fill="white" />
    </div>
  );
}

export default styled(Close)`
  padding: 0px;

  background: transparent;

  border: 0px;

  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: #ffffff;
  text-shadow: 0 1px 0 #fff;
  padding-bottom: 4px;
  position: relative;
  text-align: right;
  display: block;
`;
