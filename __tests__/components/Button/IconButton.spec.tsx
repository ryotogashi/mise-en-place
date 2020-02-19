import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { SampleIcon } from '../../../src/components/Button/SampleIcon';
import { IconButton } from '../../../src/components/Button/IconButton';

describe('IconButton test', () => {
  it('tests IconButton renders correctly ', () => {
    const iconButton = renderer
      .create(
        <IconButton>
          <SampleIcon />
        </IconButton>
      )
      .toJSON();
    expect(iconButton).toMatchSnapshot();
  });
});
