export function sayHello(name: string): string {
  return `Hello ${name}`;
}

export function helloSay(name?: string | null): void {
  if(name) {
    console.info(`Hello ${name}`);
  } else {
    console.info('Hello Unknown');
  }
}