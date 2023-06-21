// CalculatorButton.tsx
import { Button } from "@chakra-ui/react";

interface CalculatorButtonProps {
  value: string;
  onClick: (value: string) => void;
}

export default function CalculatorButton({
  value,
  onClick,
}: CalculatorButtonProps) {
  const handleButtonClick = () => {
    onClick(value);
  };

  return (
    <Button flex={1} onClick={handleButtonClick}>
      {value}
    </Button>
  );
}
