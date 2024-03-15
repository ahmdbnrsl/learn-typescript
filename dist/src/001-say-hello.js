export function sayHello(name) {
    return `Hello ${name}`;
}
export function helloSay(name) {
    if (name) {
        console.info(`Hello ${name}`);
    }
    else {
        console.info('Hello Unknown');
    }
}
