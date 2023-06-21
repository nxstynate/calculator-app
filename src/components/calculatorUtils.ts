// calculatorUtils.ts;
// export function calculateResult(expression: string): number {
//   return eval(expression); // Use eval with caution; this is a simplified example
// }

export function calculateResult(expression: string): number | null {
  const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, ""); // Remove any invalid characters

  // Check if the sanitized expression contains only valid characters
  if (sanitizedExpression !== expression) {
    return null; // Indicate invalid expression error
  }

  try {
    const result = eval(sanitizedExpression); // Use eval() to directly evaluate the expression

    // Check if the result is a valid number
    if (Number.isNaN(result) || !Number.isFinite(result)) {
      return null; // Indicate invalid expression error
    }

    return result;
  } catch (error) {
    return null; // Indicate evaluation error
  }
}
