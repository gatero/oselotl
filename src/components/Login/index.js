// @flow
import * as React from 'react';
import type {LoginProps} from 'Components/Login/types';
import Button from 'Components/Button';

const Login = (props: LoginProps): React.Element<typeof Button> => <Button {...props}/>;

export default Login;
