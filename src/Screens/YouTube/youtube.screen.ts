import { ScreenBase } from '../screenBase';
import type { Screen } from '@mobilewright/core';
import { YouTubeLocator } from './youtube.locator';

export class YouTubeScreen extends ScreenBase {
    
  private readonly youTubeLocator: YouTubeLocator;

  constructor(screen: Screen) {
    super(screen);
    this.youTubeLocator = new YouTubeLocator(screen);
  }

  async clickOnSearchIcon(): Promise<void> {
    await this.clickOnApplicationIcon(this.youTubeLocator.searchIconLocator);
  }

  async fillSearchField(text: string): Promise<void> {
    await this.fillTextField(this.youTubeLocator.searchFieldLocator, text);
  }

  async pressOkOnKeyboard(): Promise<void> {
    await this.tapOnSpecificScreenPoint(436, 759);
  }

  async clickOnVideo(): Promise<void> {
    await this.scrollToElement(this.youTubeLocator.videoLocator);
    await this.clickOnApplicationIcon(this.youTubeLocator.videoLocator);
  }

  async clickOnSkipAdButton(): Promise<void> {
    if (await this.youTubeLocator.skipAdButtonLocator.isVisible({timeout : 5000}) && !(await this.youTubeLocator.videoProgressSliderLocator.isVisible({timeout : 5000}))) {
      await this.clickOnApplicationIcon(this.youTubeLocator.skipAdButtonLocator);
    } else {
      console.log('Skip Ad button not found, proceeding without skipping.');
    }
  }
  
  async swipeVideoProgressSliderRight(distance: number, duration?: number): Promise<void> {
    await this.swipeRightFromLocator(this.youTubeLocator.videoProgressSliderLocator, distance, duration);
  }
}
