import React from 'react';

import {Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function NewPostScreen({}: AppTabScreenProps<'NewPostScreen'>) {
  return <Text preset="headingLarge">New Post Screen</Text>;
}
