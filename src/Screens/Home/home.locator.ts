import type { Screen } from '@mobilewright/core';

export class HomeLocator {
  public readonly youTubeApplicationIconLocator;

  constructor(private readonly screen: Screen) {
    this.youTubeApplicationIconLocator = this.screen.getByRole('text', { name: 'YouTube' });
  }
}