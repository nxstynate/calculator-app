import { Button } from "@chakra-ui/react";

interface Props {
  number: number;
  onClick: (number: number) => void;
}

export default function InputNumber({ number, onClick }: Props) {
  const handleButtonClick = () => {
    onClick(number);
  };

  return <Button onClick={handleButtonClick}>{number}</Button>;
}
