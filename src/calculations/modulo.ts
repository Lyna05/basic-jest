import { Calculation } from "../types/calculation";

export function modulo(calculation: Calculation): number {
  if (calculation.operator !== '%') {
    throw new Error('Invalid operator');
  }

  if (calculation.number2 === 0) {
    throw new Error('Cannot calculate modulo with divisor 0');
  }

  return calculation.number1 % calculation.number2;
}