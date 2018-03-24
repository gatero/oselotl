// @flow
import * as React from 'react';
import {default as ButtonToolBox} from 'react-toolbox/lib/button/Button';
import type {ButtonProps} from 'Components/Button/types';

const UIConfig = {
  primary: true,
  raised: true
};

const Button = (props: ButtonProps): typeof ButtonToolBox => {
  const buttonConfig = {
    ...UIConfig,
    ...props
  };
  return <ButtonToolBox {...buttonConfig}/>
};

export default Button;
