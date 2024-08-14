import { expect, test } from "bun:test";
import { AND, FALSE, IF, NOT, OR, TRUE, XOR } from "./index.ts";

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

test("IF", () => {
	expect(IF(TRUE)(TRUE)(FALSE)).toBe(TRUE);
	expect(IF(FALSE)(TRUE)(FALSE)).toBe(FALSE);
});

test("XOR", () => {
	expect(XOR(TRUE)(TRUE)).toBe(FALSE);
	expect(XOR(TRUE)(FALSE)).toBe(TRUE);
	expect(XOR(FALSE)(TRUE)).toBe(TRUE);
	expect(XOR(FALSE)(FALSE)).toBe(FALSE);
});
