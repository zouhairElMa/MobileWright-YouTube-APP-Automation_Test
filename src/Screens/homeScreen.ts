import { ScreenBase } from '../screenBase';
import type { Screen } from '@mobilewright/core';

export class HomeScreen extends ScreenBase {
  private readonly youTubeApplicationIconLocator = this.screen.getByRole('text', { name: 'YouTube' });

  constructor(screen: Screen) {
    super(screen);
  }

  async clickOnHomeButton(): Promise<void> {
    await this.screen.pressButton('HOME');
  }

  async clickOnYouTubeApplicationIcon(): Promise<void> {
    await this.clickOnApplicationIcon(this.youTubeApplicationIconLocator);
  }

  async middleSwipeUp(): Promise<void> {
    await this.swipeUpFromScreenPoint(238, 551, 1000);
  }

  async bottomSwipeUp(): Promise<void> {
    await this.swipeUpFromScreenPoint(224, 793, 1000);
  }

  async headSwipeDown(): Promise<void> {
    await this.swipeDownFromScreenPoint(243, 5, 1000);
  }
}
