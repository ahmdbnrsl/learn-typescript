export namespace MathUtil {
  export const PI: number = 3.14;
  export function sum(...values: Array<number>): number {
    let total = 0;
    for (let value of values) {
      total += value;
    }
    return total;
  }
}

export namespace Via {
  
}