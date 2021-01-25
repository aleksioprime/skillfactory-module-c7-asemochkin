import {reverseString} from "../reverseString";

describe(
    "Test for string inversion", () => {
        it('Reverse String', () => {
            expect(reverseString('abcdefg')).toBe(`gfedcba`);
            expect(reverseString('12345678')).toBe(`87654321`);
            expect(reverseString('the global environment')).toBe(`tnemnorivne labolg eht`);
        })
    });