import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./App.css";
import DisplayInput from "./components/DisplayInput";
import InputNumber from "./components/InputNumber";
import InputOperator from "./components/InputOperator";
import { calculateResult } from "./components/calculateUtils";
import ClearButton from "./components/ClearButton";

function App() {
  const [pressed, setPressed] = useState<number[]>([]);
  const [pressedOperator, setPressedOperator] = useState<string | null>(null);

  const spacingOfButtons = 4;

  const handleInputNumberClick = (number: number): void => {
    console.log(`Clicked number: ${number}`);
    setPressed(prevPressed => [...prevPressed, number]);
  };

  const handleOperatorClick = (operator: string): void => {
    console.log(`Clicked operator: ${operator}`);
    setPressedOperator(operator);

    if (pressed.length === 2) {
      const result = calculateResult(pressed, operator);
      setPressed([result]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      if (key === "Enter") {
        console.log("Enter key pressed");
      } else if (!isNaN(parseInt(key))) {
        handleInputNumberClick(parseInt(key));
      } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        handleOperatorClick(key);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <Box display="flex" borderRadius="md" bg="grey" p={4} color="white">
        <Flex direction="column" align="center">
          <VStack spacing={spacingOfButtons}>
            <DisplayInput pressedButtons={pressed} />
            <VStack spacing={spacingOfButtons}>
              <HStack spacing={spacingOfButtons}>
                <InputNumber number={7} onClick={handleInputNumberClick} />
                <InputNumber number={8} onClick={handleInputNumberClick} />
                <InputNumber number={9} onClick={handleInputNumberClick} />
                <InputOperator operator="+" onClick={handleOperatorClick} />
              </HStack>
            </VStack>
            <VStack spacing={spacingOfButtons}>
              <HStack spacing={spacingOfButtons}>
                <InputNumber number={4} onClick={handleInputNumberClick} />
                <InputNumber number={5} onClick={handleInputNumberClick} />
                <InputNumber number={6} onClick={handleInputNumberClick} />
                <InputOperator operator="-" onClick={handleOperatorClick} />
              </HStack>
            </VStack>
            <VStack spacing={spacingOfButtons}>
              <HStack spacing={spacingOfButtons}>
                <InputNumber number={1} onClick={handleInputNumberClick} />
                <InputNumber number={2} onClick={handleInputNumberClick} />
                <InputNumber number={3} onClick={handleInputNumberClick} />
                <InputOperator operator="*" onClick={handleOperatorClick} />
              </HStack>
            </VStack>
            <VStack spacing={spacingOfButtons}>
              <HStack spacing={spacingOfButtons}>
                <InputNumber number={0} onClick={handleInputNumberClick} />
                <InputOperator operator="." onClick={handleOperatorClick} />
                <InputOperator operator="=" onClick={handleOperatorClick} />
                <InputOperator operator="/" onClick={handleOperatorClick} />
              </HStack>
            </VStack>
            <VStack spacing={spacingOfButtons}>
              <HStack spacing={spacingOfButtons}>
                <ClearButton onClick={() => setPressed([])} />
              </HStack>
            </VStack>
          </VStack>
        </Flex>
      </Box>
    </>
  );
}

export default App;
