import type { Screen } from '@mobilewright/core';
import type { Locator } from '@mobilewright/core';

export class HomeLocator {
  public readonly youTubeApplicationIconLocator: Locator;

  constructor(private readonly screen: Screen) {
    this.youTubeApplicationIconLocator = this.screen.getByRole('text', { name: 'YouTube' });
  }
}