import React from 'react';

import {Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function FavoriteScreen({}: AppTabScreenProps<'FavoriteScreen'>) {
  return <Text preset="headingLarge">Favorite Screen</Text>;
}
