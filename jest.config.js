module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testRegex: 'tests/.*\\.spec\\.(ts|tsx|js)$',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  transform: {
    '\\.(ts|tsx)': 'ts-jest',
  },
  moduleFileExtensions: ['tsx', 'ts', 'js'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
      tsconfig: 'tsconfig.jest.json',
    },
  },
};
