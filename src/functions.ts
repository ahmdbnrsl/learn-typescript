export function say(name: string = "guest", lastName?: string): string {
  const last: string = lastName ? lastName : '';
  return `Hello ${name} ${last}`
}

export function printf(name: string): void {
  console.info(name);
}

export function sum(...values: number[]): number {
  let total = 0;
  for (const value of values) {
    total+= value
  }
  return total
}

export function callMe(value: number): number;
export function callMe(value: string): string;
export function callMe(value: any) {
  if(typeof value === 'string') {
    return value.toUpperCase();
  } else {
    return value + 1;
  }
}

export function anu(name: string, filter: (name: string) => string) {
  return `Hello ${filter(name)}`;
}

export function toUpper(name: string): string {
  return name.toUpperCase();
}
