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
    this.videoLocator = this.screen.getByLabel('Automate Mobile Apps with AI', { exact: false });
    this.skipAdButtonLocator = this.screen.getByTestId('com.google.android.youtube:id/skip_ad_button_icon');
    this.videoProgressSliderLocator = this.screen.getByRole('slider');
    
  }
}
