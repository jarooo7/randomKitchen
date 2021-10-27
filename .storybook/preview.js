import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import mainTheme  from '../src/theme/mainTheme';
import GlobalStyle from '../src/theme/GlobalStyle';


addDecorator((story) => (
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        {story()}
      </ThemeProvider>
));
