import React, { ReactElement } from "react";

interface Props {
  style?: React.CSSProperties; //style? = Optional
}

export default function Footer({ style }: Props): ReactElement {
  return (
    <div style={style}>
      <span>Copyright © 1930 This is Order by Peaky Fucking Blinder</span>
    </div>
  );
}
