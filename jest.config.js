module.exports = {
  verbose: true,
  moduleFileExtensions: ["ts", "js", "tsx", "jsx"],
  transform: { "^.+\\.(ts|tsx)$": "ts-jest" },
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.json"
    }
  },
  testMatch: ["**/__tests__/*.spec.+(ts|tsx|js)"]
};
