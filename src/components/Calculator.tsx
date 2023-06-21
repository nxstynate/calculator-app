import { Box, Container, Flex, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";
import TitleBar from "./TitleBar";
import { calculateResult } from "./calculatorUtils";

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState<string>("");
  const [storedValue, setStoredValue] = useState<string>("");
  const [operator, setOperator] = useState<string>("");

  // const [memory, setMemory] = useState<number>(0);
  // const [result, setResult] = useState<number>(0);
  // const [waitingForOperand, setWaitingForOperand] = useState<boolean>(true);
  // const [pendingOperator, setPendingOperator] = useState<Operator>();

  const spacingForButtons = 2;

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      handleCalculateClick();
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      handleOperatorClick(value);
    } else {
      setDisplayValue(prevValue => {
        if (prevValue === "=" || prevValue === "Error") {
          return value;
        } else {
          return prevValue + value;
        }
      });
    }
  };

  const handleOperatorClick = (value: string) => {
    if (displayValue !== "") {
      setStoredValue(displayValue);
      setOperator(value);
      setDisplayValue("");
    }
  };

  const handleClearClick = () => {
    setDisplayValue("");
    setStoredValue("");
    setOperator("");
  };

  const handleCalculateClick = () => {
    try {
      const result = calculateResult(storedValue + operator + displayValue);
      setDisplayValue(result.toString());
      setStoredValue(storedValue);
      setOperator("");
    } catch (error) {
      setDisplayValue("Error");
      setStoredValue("");
      setOperator("");
    }
  };

  return (
    <Container maxW="xs" mt={10} p={4} boxShadow="lg" rounded="md">
      <Box
        boxShadow="outline"
        border="1px"
        borderColor="gray.300"
        p={4}
        rounded="md"
      >
        <TitleBar titleName={"Calculator"} />
        <CalculatorDisplay
          value={displayValue}
          expression={storedValue + operator + storedValue}
        />
        <VStack spacing={spacingForButtons}>
          <Flex width={48}>
            <CalculatorButton value="C" onClick={handleClearClick} />
          </Flex>
          <Flex>
            <HStack spacing={spacingForButtons}>
              <CalculatorButton value="7" onClick={handleButtonClick} />
              <CalculatorButton value="8" onClick={handleButtonClick} />
              <CalculatorButton value="9" onClick={handleButtonClick} />
              <CalculatorButton value="*" onClick={handleButtonClick} />
            </HStack>
          </Flex>
          <Flex>
            <HStack spacing={spacingForButtons}>
              <CalculatorButton value="4" onClick={handleButtonClick} />
              <CalculatorButton value="5" onClick={handleButtonClick} />
              <CalculatorButton value="6" onClick={handleButtonClick} />
              <CalculatorButton value="-" onClick={handleButtonClick} />
            </HStack>
          </Flex>
          <Flex>
            <HStack spacing={spacingForButtons}>
              <CalculatorButton value="1" onClick={handleButtonClick} />
              <CalculatorButton value="2" onClick={handleButtonClick} />
              <CalculatorButton value="3" onClick={handleButtonClick} />
              <CalculatorButton value="+" onClick={handleButtonClick} />
            </HStack>
          </Flex>
          <Flex>
            <HStack spacing={spacingForButtons}>
              <CalculatorButton value="0" onClick={handleButtonClick} />
              <CalculatorButton value="." onClick={handleButtonClick} />
              <CalculatorButton value="=" onClick={handleButtonClick} />
              <CalculatorButton value="/" onClick={handleButtonClick} />
            </HStack>
          </Flex>
        </VStack>
      </Box>
    </Container>
  );
}
