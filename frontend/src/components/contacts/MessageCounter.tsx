import React from 'react';
import Badge from '../Badge';
import { useAppSelector } from '../../state/hooks';
import { getCurrentName } from '../../conversation';

function MessageCounter() {
  const count: number = useAppSelector(state => state.conversations)
    .flatMap(({ messages }) => messages)
    .filter(({ name }) => name !== getCurrentName()).length;

  return (
    <Badge>{count}</Badge>
  );
}

export default MessageCounter;
