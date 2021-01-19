import { Fragment } from 'react';

import { StyledInput } from './Input.styles';

import Label from '../../components/Label/Label';

const Input = ({ big, label, ...props }) => (
  <Fragment>
    {label && <Label htmlFor={label}>{label}</Label>}
    <StyledInput id={label} big={big} {...props} />
  </Fragment>
);

export default Input;
