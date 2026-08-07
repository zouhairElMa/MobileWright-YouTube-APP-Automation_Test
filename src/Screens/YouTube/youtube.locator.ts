import type { Screen } from '@mobilewright/core';

export class YouTubeLocator {
  public readonly searchIconLocator;
  public readonly searchFieldLocator;
  public readonly videoLocator;
  public readonly skipAdButtonLocator;
  public readonly videoProgressSliderLocator;

  constructor(private readonly screen: Screen) {
    this.searchIconLocator = this.screen.getByRole('image', { name: 'Search' });
    this.searchFieldLocator = this.screen.getByRole('textfield');
    this.videoLocator = this.screen.getByLabel('Automate Mobile Apps with AI | Mobilewright + Copilot Demo | End of Appium | Android & IOS App - 13 minutes, 48 seconds - Go to channel Viplove QA - SDET - Viplove QA - SDET - 1.5 thousand views - 2 months ago - play video');
    this.skipAdButtonLocator = this.screen.getByTestId('com.google.android.youtube:id/skip_ad_button_icon');
    this.videoProgressSliderLocator = this.screen.getByRole('slider', { name: '0 minutes 3 seconds of 13 minutes 47 seconds' });
  }
}