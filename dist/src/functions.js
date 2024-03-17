export function say(name = "guest", lastName) {
    const last = lastName ? lastName : '';
    return `Hello ${name} ${last}`;
}
export function printf(name) {
    console.info(name);
}
export function sum(...values) {
    let total = 0;
    for (const value of values) {
        total += value;
    }
    return total;
}
export function callMe(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        return value + 1;
    }
}
export function anu(name, filter) {
    return `Hello ${filter(name)}`;
}
export function toUpper(name) {
    return name.toUpperCase();
}
