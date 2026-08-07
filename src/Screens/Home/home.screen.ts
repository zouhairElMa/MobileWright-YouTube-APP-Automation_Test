import { ScreenBase } from '../screenBase';
import type { Screen } from '@mobilewright/core';
import { HomeLocator } from './home.locator';

export class HomeScreen extends ScreenBase {
    
  private readonly homeLocator: HomeLocator;

  constructor(screen: Screen) {
    super(screen);
    this.homeLocator = new HomeLocator(screen);
  }

  async clickOnHomeButton(): Promise<void> {
    await this.screen.pressButton('HOME');
  }

  async clickOnYouTubeApplicationIcon(): Promise<void> {
    await this.clickOnApplicationIcon(this.homeLocator.youTubeApplicationIconLocator);
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