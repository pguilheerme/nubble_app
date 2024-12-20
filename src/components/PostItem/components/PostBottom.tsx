import React from 'react';

import {Post} from '@domain';

import {Box, Text} from '@components';

type PostBottomProps = Pick<Post, 'text' | 'author' | 'commentCount'>;
export function PostBottom({text, author, commentCount}: PostBottomProps) {
  return (
    <Box>
      <Text mt="s16" preset="paragraphMedium" bold>
        {author.name}
      </Text>
      <Text color="gray1" preset="paragraphMedium">
        {text}
      </Text>
      {commentCount > 0 && (
        <Text mt="s8" preset="paragraphSmall" bold color="primary">
          {getCommentText(commentCount)}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
}
