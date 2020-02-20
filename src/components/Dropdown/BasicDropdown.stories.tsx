import * as React from 'react';

import { BasicDropdown } from './BasicDropdown';

export default {
  title: 'Dropdown',
  component: BasicDropdown
};

export const _BasicDropdown = () => (
  <BasicDropdown
    width={'70%'}
    title={'test item'}
    data={[
      ['val1', 'item 1'],
      ['val2', 'item 2'],
      ['val3', 'item 3'],
      ['val4', 'item 4']
    ]}
  />
);
