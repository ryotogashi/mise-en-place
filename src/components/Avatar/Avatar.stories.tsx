import * as React from 'react';

import { Avatar } from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar
};

export const _Avatar = () => (
  <>
    <Avatar src={'https://picsum.photos/1200/1200/?image=1062'} height={'70px'} width={'70px'} />
    <Avatar src={'https://picsum.photos/1200/1200/?image=1062'} height={'100px'} width={'100px'} />
    <Avatar src={'https://picsum.photos/1200/1200/?image=1062'} height={'130px'} width={'130px'} />
  </>
);
