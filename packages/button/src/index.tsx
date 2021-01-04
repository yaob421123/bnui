import React from 'react';

export interface ButtonFace {
  str?: string
}

const Button = (props: ButtonFace) => {
  return (
    <div>button2: {props.str}</div>
  )
}

export default Button;