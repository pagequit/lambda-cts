import { expect, test } from "bun:test";
import { TRUE, FALSE, NOT, AND, OR } from "./index.ts";

test("TRUE", () => {
	expect(TRUE(TRUE)(FALSE)).toBe(TRUE);
});

test("FALSE", () => {
	expect(FALSE(TRUE)(FALSE)).toBe(FALSE);
});

test("NOT", () => {
	expect(NOT(TRUE)).toBe(FALSE);
	expect(NOT(FALSE)).toBe(TRUE);
});

test("AND", () => {
	expect(AND(TRUE)(TRUE)).toBe(TRUE);
	expect(AND(TRUE)(FALSE)).toBe(FALSE);
	expect(AND(FALSE)(TRUE)).toBe(FALSE);
	expect(AND(FALSE)(FALSE)).toBe(FALSE);
});

test("OR", () => {
	expect(OR(TRUE)(TRUE)).toBe(TRUE);
	expect(OR(TRUE)(FALSE)).toBe(TRUE);
	expect(OR(FALSE)(TRUE)).toBe(TRUE);
	expect(OR(FALSE)(FALSE)).toBe(FALSE);
});
