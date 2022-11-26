import PropTypes from 'prop-types';
import { Box } from './Container.styled';

function Container({ children }) {
  return <Box>{children}</Box>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
