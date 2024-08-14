import { expect, test } from "bun:test";
import { TRUE, FALSE } from "./index.ts";

test("TRUE", () => {
	expect(TRUE(TRUE)(FALSE)).toBe(TRUE);
});

test("FALSE", () => {
	expect(FALSE(TRUE)(FALSE)).toBe(FALSE);
});
