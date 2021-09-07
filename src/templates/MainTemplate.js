import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import mainTheme from 'theme/mainTheme';

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MainTemplate;
