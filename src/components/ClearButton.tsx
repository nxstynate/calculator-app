import { Button } from "@chakra-ui/react";

interface Props {
  onClick: () => void;
}

export default function ClearButton({ onClick }: Props) {
  const handleButtonClick = () => {
    onClick();
  };

  return <Button onClick={handleButtonClick}>Clear</Button>;
}
