import { ScreenBase } from '../screenBase';
import type { Screen } from '@mobilewright/core';

export class YouTubeScreen extends ScreenBase {
    private readonly searchIconLocator = this.screen.getByRole('image', { name: 'Search' });
    private readonly searchFieldLocator = this.screen.getByRole('textfield');
    private readonly videoLocator = this.screen.getByLabel('Automate Mobile Apps with AI | Mobilewright + Copilot Demo | End of Appium | Android & IOS App - 13 minutes, 48 seconds - Go to channel Viplove QA - SDET - Viplove QA - SDET - 1.5 thousand views - 2 months ago - play video');
    private readonly skipAdButtonLocator = this.screen.getByTestId('com.google.android.youtube:id/skip_ad_button_icon');
    private readonly videoProgressSliderLocator = this.screen.getByRole('slider', { name: '0 minutes 3 seconds of 13 minutes 47 seconds' });


  constructor(screen: Screen) {
    super(screen);
  }

  async clickOnSearchIcon(): Promise<void> {
    await this.clickOnApplicationIcon(this.searchIconLocator);
  }

  async fillSearchField(text: string): Promise<void> {
    await this.fillTextField(this.searchFieldLocator, text);
  }

  async pressOkOnKeyboard(): Promise<void> {
    await this.tapOnSpecificScreenPoint( 436, 759 );
  }

  async clickOnVideo(): Promise<void> {
    await this.scrollToElement(this.videoLocator);
    await this.clickOnApplicationIcon(this.videoLocator);
  }

  async clickOnSkipAdButton(): Promise<void> {
    if (await this.skipAdButtonLocator.isVisible({ timeout: 11000 })) {
      await this.clickOnApplicationIcon(this.skipAdButtonLocator);
    }
    else {
      console.log('Skip Ad button not found, proceeding without skipping.');
    }
  }

  async swipeVideoProgressSliderRight(distance: number, duration?: number): Promise<void> {
    await this.swipeRightFromLocator(this.videoProgressSliderLocator, distance, duration);
  }

}