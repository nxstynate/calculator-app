import { Box, Container, Flex, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";
import TitleBar from "./TitleBar";
import { calculateResult } from "./calculatorUtils";

export default function Calculator() {
  const [display, setDisplay] = useState<string>("0");
  const [operator, setOperator] = useState<string>("");
  const [prevValue, setPrevValue] = useState<string>("");

  const handleNumberClick = (num: string) => {
    if (display === "0") {
      setDisplay(num);
    } else {
      setDisplay(prevDisplay => prevDisplay + num);
    }
  };

  const handleOperatorClick = (op: string) => {
    setOperator(op);
    setPrevValue(display);
    setDisplay("");
  };

  const handleClearClick = () => {
    setDisplay("0");
    setOperator("");
    setPrevValue("");
  };

  const handleEqualsClick = () => {
    const result = calculateResult(prevValue + operator + display);
    if (result !== null) {
      setDisplay(result.toString());
    } else {
      null;
    }
  };

  const spacingForButtons = 2;

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
          value={display}
          expression={prevValue + operator + display}
        />
        <VStack spacing={spacingForButtons}>
          <Flex width={48}>
            <CalculatorButton value="C" onClick={handleClearClick} />
          </Flex>
          <Flex>
            <HStack spacing={spacingForButtons}>
              <CalculatorButton value="7" onClick={handleNumberClick} />
              <CalculatorButton value="8" onClick={handleNumberClick} />
              <CalculatorButton value="9" onClick={handleNumberClick} />
              <CalculatorButton value="*" onClick={handleOperatorClick} />
            </HStack>
          </Flex>
          <Flex>
            <HStack spacing={spacingForButtons}>
              <CalculatorButton value="4" onClick={handleNumberClick} />
              <CalculatorButton value="5" onClick={handleNumberClick} />
              <CalculatorButton value="6" onClick={handleNumberClick} />
              <CalculatorButton value="-" onClick={handleOperatorClick} />
            </HStack>
          </Flex>
          <Flex>
            <HStack spacing={spacingForButtons}>
              <CalculatorButton value="1" onClick={handleNumberClick} />
              <CalculatorButton value="2" onClick={handleNumberClick} />
              <CalculatorButton value="3" onClick={handleNumberClick} />
              <CalculatorButton value="+" onClick={handleOperatorClick} />
            </HStack>
          </Flex>
          <Flex>
            <HStack spacing={spacingForButtons}>
              <CalculatorButton value="0" onClick={handleNumberClick} />
              <CalculatorButton value="." onClick={handleNumberClick} />
              <CalculatorButton value="=" onClick={handleEqualsClick} />
              <CalculatorButton value="/" onClick={handleOperatorClick} />
            </HStack>
          </Flex>
        </VStack>
      </Box>
    </Container>
  );
}
