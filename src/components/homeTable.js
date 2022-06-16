import * as React from 'react';
import Text from './text';
import Box from './box';

export function TableMain({children, ...props}) {
  return (
    <Box alignItems="center" flexDirection="column" mt={-40} {...props}>
      <Box
        width="85%"
        flexDirection="row"
        alignItems="center"
        position="relative"
        zIndex={3}
        justifyContent="space-between"
        bg="white"
        p={10}
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.14,
          shadowRadius: 4.27,
          elevation: 2,
        }}>
        <Text fontSize={16} fontWeight="bold">
          Positif
        </Text>
        <Text fontSize={16} fontWeight="bold">
          Negatif
        </Text>
        <Text fontSize={16} fontWeight="bold">
          Reaktif
        </Text>
        <Text fontSize={16} fontWeight="bold">
          Vaksin
        </Text>
      </Box>
      <Box
        position="relative"
        zIndex={2}
        width="85%"
        bg="white"
        flexDirection="column">
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}

export function TableCountry({children}) {
  return <Text width={'25%'}>{children}</Text>;
}

export function TableCase({children}) {
  return <Text width={'25%'}>{children}</Text>;
}

export function TableDeath({children}) {
  return <Text width={'25%'}>{children}</Text>;
}

export function TableInject({children}) {
  return <Text width={'25%'}>{children}</Text>;
}
