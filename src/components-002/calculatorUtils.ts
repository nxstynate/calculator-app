// calculatorUtils.ts;
// export function calculateResult(expression: string): number {
//   return eval(expression); // Use eval with caution; this is a simplified example
// }

export function calculateResult(expression: string): number | null {
  try {
    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, ""); // Remove any invalid characters

    // Use the Function constructor to create a function with the expression as its body
    const fn = new Function(`return ${sanitizedExpression};`);

    // Invoke the function to evaluate the expression and get the result
    const result = fn();

    // Check if the result is a valid number
    if (Number.isNaN(result) || !Number.isFinite(result)) {
      return null; // Indicate invalid expression error
    }

    return result;
  } catch (error) {
    return null; // Indicate evaluation error
  }
}
