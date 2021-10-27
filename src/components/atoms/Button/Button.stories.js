import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Atoms/buttons/Button', module)
  .add('Primary', () => <Button>Buttons</Button>) .add('Radius', () => <Button radius>Buttons</Button>);
 
