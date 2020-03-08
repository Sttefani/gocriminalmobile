import React from 'react';
import { Container, Text } from './styles';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';




export default function Button({ children, loading, ...rest }) {
  return (
      <Container { ...rest}>
          { loading ? (
            <ActivityIndicator size="small"
            color="#FFF" />
          ) : (
              <Text>{children}</Text>
          )}

      </Container>
  );
}


Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};
Button.defaultProps = {
  loading : false,

}
