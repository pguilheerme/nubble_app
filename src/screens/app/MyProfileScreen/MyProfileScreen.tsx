import React from 'react';

import {Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function MyProfileScreen({}: AppTabScreenProps<'MyProfileScreen'>) {
  return <Text preset="headingLarge">My Profile Screen</Text>;
}
