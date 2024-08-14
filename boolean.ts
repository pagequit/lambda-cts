export type BOOLEAN = (x: BOOLEAN) => (y: BOOLEAN) => BOOLEAN;

// λx.λy.x
export const TRUE: BOOLEAN = (x) => (_y) => x;

// λx.λy.y
export const FALSE: BOOLEAN = (_x) => (y) => y;
