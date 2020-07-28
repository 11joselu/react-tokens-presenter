import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import Text from '../../ui/Text/Text';

import { TokenDeclaration } from '../TokenDeclaration';

type BorderProps = TokenDeclaration;

const Border: FC<BorderProps> = ({ declaration, value }: BorderProps) => {
  return (
    <Card data-testid="border">
      <Box border={value}></Box>
      <Text>{declaration}</Text>
      <Text isAlternative={true}>{value}</Text>
    </Card>
  );
};

export default Border;
