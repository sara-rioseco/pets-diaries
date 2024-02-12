import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
  '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|webp|woff|woff2)$': 'identity-obj-proxy',
    '\\.(css)$': 'identity-obj-proxy'
  },
  testEnvironment: 'jsdom'
};
export default config;