"use strict";

const config = require("../");
const stylelint = require("stylelint");

const validSCSS = "./__tests__/valid.scss";
const invalidSCSS = "./__tests__/invalid.scss";

describe("flags no warnings with valid scss", () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      files: [validSCSS],
      config
    });
  });

  it("did not error", () => {
    return result.then((data) => expect(data.errored).toBeFalsy());
  });

  it("flags no warnings", () => {
    return result.then((data) => {
      const warningsLength = data.results[0].warnings.length;
      if (warningsLength) {
        console.log(
          "\n============ Warnings ============\n\n",
          data.results[0].warnings,
          "\n\n========== End Warnings ==========\n"
        );
      }
      expect(warningsLength).toBe(0);
    });
  });
});
