export type BOOLEAN = (x: BOOLEAN) => (y: BOOLEAN) => BOOLEAN;

// λx.λy.x
export const TRUE: BOOLEAN = (x) => (_y) => x;

// λx.λy.y
export const FALSE: BOOLEAN = (_x) => (y) => y;

// λb.b(λx.λy.y)(λx.λy.x)
export const NOT = (b: BOOLEAN) => b(FALSE)(TRUE);

// λx.λy.xyx
export const AND = (x: BOOLEAN) => (y: BOOLEAN) => x(y)(x);

// λx.λy.yyx
export const OR = (x: BOOLEAN) => (y: BOOLEAN) => y(y)(x);

// λb.λx.λy.bxy
export const IF = (b: BOOLEAN) => (x: BOOLEAN) => (y: BOOLEAN) => b(x)(y);

// λx.λy.x(λb.b(λx.λy.y)(λx.λy.x))y
export const XOR = (x: BOOLEAN) => (y: BOOLEAN) => x(NOT(y))(y);
