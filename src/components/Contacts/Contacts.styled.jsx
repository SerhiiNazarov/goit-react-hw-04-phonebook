import styled from 'styled-components';

export const ContactsList = styled.ul`
  margin-top: 30px;
  color: var(--secondaryTextColor);
  font-weight: 500;
  font-size: 18px;
`;

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    border-bottom: 1px solid var(--accentColor);
  }
`;

export const ContactsText = styled.p`
  font-size: 12px;
`;

export const Button = styled.button`
  width: 30px;
  height: auto;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  transition: transform 250ms var(--timingFn);

  &:hover {
    transform: scale(1.3);
  }
`;
