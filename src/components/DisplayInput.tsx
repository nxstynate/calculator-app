import { Container } from "@chakra-ui/react";

interface Props {
  pressedButtons: number[];
}

export default function DisplayInput({ pressedButtons }: Props) {
  return (
    <>
      <Container
        overflow="hidden"
        fontSize={40}
        display="flex"
        borderRadius="md"
        bg="blackAlpha.600"
        height="80px"
        p={4}
        color="white"
        width="220px"
      >
        {pressedButtons.join("")}
      </Container>
    </>
  );
}
