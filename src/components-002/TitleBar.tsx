import { Heading } from "@chakra-ui/react";

interface titleBarProps {
  titleName: string;
}

export default function TitleBar({ titleName }: titleBarProps) {
  return (
    <Heading mb={2} fontSize="lg" marginRight={28}>
      {titleName}
    </Heading>
  );
}
