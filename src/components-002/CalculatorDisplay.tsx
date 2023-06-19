// CalculatorDisplay.tsx
import { Box } from "@chakra-ui/react";

interface CalculatorDisplayProps {
  value: string;
}

export default function CalculatorDisplay({ value }: CalculatorDisplayProps) {
  return (
    <Box bg="gray.600" p={4} mb={4} textAlign="right" rounded="md">
      {value}
    </Box>
  );
}
