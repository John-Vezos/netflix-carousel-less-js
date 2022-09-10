module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest/presets/js-with-babel',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.test.{js,jsx,ts,tsx}',
    '!src/*/RbGenerated*/*.{js,jsx,ts,tsx}',
    '!src/app.tsx',
    '!src/global-styles.ts',
    '!src/*/*/Loadable.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1',
    '^@images(.*)$': '<rootDir>/src/assets/images$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/image.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/internals/testing/test-bundler.js',
    '@testing-library/jest-dom/extend-expect',
  ],
  testRegex: 'tests/.*\\.test\\.(js|ts(x?))$',
  transform: {
    '^.+\\.(ts(x?)|js)$': 'ts-jest',
  },
  snapshotSerializers: [],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
