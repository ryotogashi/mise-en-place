import * as React from 'react';
import { action } from '@storybook/addon-actions';

import { SampleIcon } from './SampleIcon';

import { IconButton } from './IconButton';

export default {
  title: 'Button',
  component: IconButton
};

export const _IconButton = () => (
  <IconButton onClick={action('clicked')}>
    <SampleIcon />
  </IconButton>
);
