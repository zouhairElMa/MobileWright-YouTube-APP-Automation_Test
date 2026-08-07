import { test as base } from '@mobilewright/test'
import { ScreenManager } from './Screens/screenManager';

type Fixtures = {
  screenManager: ScreenManager;
};

export const test = base.extend<Fixtures>({
  screenManager: async ({ screen }, use) => {
    const screenManager = new ScreenManager(screen);
    await use(screenManager);
  },
});

export { expect } from '@mobilewright/test';
