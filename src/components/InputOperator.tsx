import { Button } from "@chakra-ui/react";

interface Props {
  operator: string;
  onClick: (operator: string) => void;
}

export default function InputOperator({ operator, onClick }: Props) {
  const handleButtonClick = () => {
    onClick(operator);
  };

  return <Button onClick={handleButtonClick}>{operator}</Button>;
}
