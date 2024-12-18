/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Dimensions} from 'react-native';

import {Post} from '@domain';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

interface PostItemProps {
  post: Post;
}
export function PostItem({post}: PostItemProps) {
  return (
    <Box marginBottom="s24">
      <Box flexDirection="row" alignItems="center" mb="s16">
        <Image
          source={{uri: post.author.profileURL}}
          style={{width: 32, height: 32, borderRadius: 14}}
        />
        <Text preset="paragraphMedium" semiBold ml="s12">
          {post.author.userName}
        </Text>
      </Box>
      <Image
        source={{uri: post.imageURL}}
        resizeMode="cover"
        style={{width: Dimensions.get('screen').width, height: 300}}
      />
    </Box>
  );
}
