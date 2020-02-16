module.exports = {
  verbose: true,
  moduleFileExtensions: ["ts", "js", "tsx", "jsx"],
  transform: { "^.+\\.(ts|tsx)$": "ts-jest" },
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.json"
    }
  },
  testMatch: ["**/__tests__/*.spec.+(ts|tsx|js)"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js"
  }
};
