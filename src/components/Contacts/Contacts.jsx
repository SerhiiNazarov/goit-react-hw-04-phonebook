import { TiTimesOutline } from 'react-icons/ti';
import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactsItem,
  ContactsText,
  Button,
} from './Contacts.styled';

function Contacts({ contacts, onDeleteContact }) {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <ContactsText>
            {name}: {number}
          </ContactsText>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            <TiTimesOutline
              style={{
                color: 'var(--accentColor)',
              }}
            />
          </Button>
        </ContactsItem>
      ))}
    </ContactsList>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
