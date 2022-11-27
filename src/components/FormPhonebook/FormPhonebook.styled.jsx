import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Formbook = styled(Form)`
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Input = styled(Field)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  width: 100%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;

  &:focus {
    outline-color: var(--accentColor);
  }

  &:hover {
    border: 1px solid var(--accentColor);
  }

  &:hover::-webkit-input-placeholder {
    color: var(--accentColor);
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: var(--accentColor);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  outline: none;
  opacity: 0.8;
  transition: opacity 250ms var(--timingFn);

  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;

  &:hover {
    opacity: 1;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  color: var(--secondaryTextColor);
  font-weight: 500;
  font-size: 20px;

  &:hover {
    color: var(--accentColor);
  }
`;
