import { expand, getChoiceLabel, convertUserValueRaw } from "../../core/utilities/rdfParsing";

describe('expand', () => {
    it('should expand ff URIs', () => {
        const result = expand("ff:example");
        expect(result).toBe("https://foerderfunke.org/default#example");
    });

    it('should return the same URI if it does not start with ff:', () => {
        const result = expand("other:example");
        expect(result).toBe("other:example");
    });

    it('should return an empty string if input is empty', () => {
        const result = expand("");
        expect(result).toBe("");
    });
});

describe('getChoiceLabel', () => {
    let t;
    beforeEach(() => {
        t = jest.fn(key => key);
    });
    const dfObj = {
        choices: [
            { value: "ff:test", label: "Test Label" },
            { value: "other:test", label: "Other Label" }
        ]
    };

    it('should return the yes translation for value "true"', () => {
        const result = getChoiceLabel("true", dfObj, t);
        expect(result).toBe('app.benefitPage.rulesTable.yes');
    });

    it('should return the no translation for value "false"', () => {
        const result = getChoiceLabel("false", dfObj, t);
        expect(result).toBe('app.benefitPage.rulesTable.no');
    });

    it('should return the matching label from choices', () => {
        const result = getChoiceLabel("ff:test", dfObj, t);
        expect(result).toBe("Test Label");
    });

    it('should return undefined if no match is found in choices', () => {
        const result = getChoiceLabel("ff:unknown", dfObj, t);
        expect(result).toBe('app.benefitPage.rulesTable.unknown');
    });
});

describe('convertUserValueRaw', () => {
    let t;
    beforeEach(() => {
        t = jest.fn(key => key);
    });
    const dfObj = {
        choices: [
            { value: "ff:test", label: "Test Label" }
        ]
    };

    it('should convert an array of values', () => {
        const result = convertUserValueRaw(["ff:test", "true"], dfObj, t);
        expect(result).toBe("Test Label, app.benefitPage.rulesTable.yes");
    });

    it('should convert a boolean value to yes/no', () => {
        const result = convertUserValueRaw(true, dfObj, t);
        expect(result).toBe("app.benefitPage.rulesTable.yes");
    });

    it('should convert a string boolean to yes/no', () => {
        const result = convertUserValueRaw("true", dfObj, t);
        expect(result).toBe("app.benefitPage.rulesTable.yes");
    });

    it('should convert numeric values to numbers', () => {
        const result = convertUserValueRaw("123", dfObj, t);
        expect(result).toBe(123);
    });

    it('should call getChoiceLabel for ff URIs', () => {
        const result = convertUserValueRaw("ff:test", dfObj, t);
        expect(result).toBe("Test Label");
    });

    it('should format valid date strings as YYYY-MM-DD', () => {
        const result = convertUserValueRaw("2023-01-01T00:00:00.000Z", dfObj, t);
        expect(result).toBe("2023-01-01");
    });

    it('should return raw value if it is not a special case', () => {
        const result = convertUserValueRaw("random string", dfObj, t);
        expect(result).toBe("random string");
    });

    it('should return raw value for invalid date strings', () => {
        const result = convertUserValueRaw("invalid-date", dfObj, t);
        expect(result).toBe("invalid-date");
    });
});
