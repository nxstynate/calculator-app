// CalculatorDisplay.tsx
import { Box } from "@chakra-ui/react";

interface CalculatorDisplayProps {
  value: string;
  expression: string;
}

export default function CalculatorDisplay({
  value,
  expression,
}: CalculatorDisplayProps) {
  return (
    <Box
      bg="gray.600"
      fontSize="2xl"
      p={4}
      mb={8}
      textAlign="right"
      rounded="md"
    >
      <Box color="gray.400" fontSize="xs" textAlign="right">
        {expression}
      </Box>
      {value}
    </Box>
  );
}
