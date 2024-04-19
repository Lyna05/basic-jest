import { describe, it, expect } from "@jest/globals"
import { modulo as moduleFunction } from "../../calculations/modulo"
import { Calculation } from "../../types/calculation"





describe("Modulo Function", () => {
  it("should return the correct result for positive numbers", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  it("should return the correct result for negative numbers", () => {
    expect(modulo(-10, 3)).toBe(2);
  });

  it("should return 0 when dividing by 1", () => {
    expect(modulo(10, 1)).toBe(0);
  });


});
export function modulo(a: number, b: number): number {
    return a % b;
    
}


  