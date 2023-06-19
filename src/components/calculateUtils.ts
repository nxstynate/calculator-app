export function calculateResult(numbers: number[], operator: string): number {
  const [num1, num2] = numbers;
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return NaN;
  }
}
