module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
};
