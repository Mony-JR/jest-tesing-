module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/__test__/**/*.ts',
    '**/?(*.)+(spec|test).ts'
  ],
  moduleFileExtensions: ['ts', 'js'],
};
