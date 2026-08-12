import type { Screen } from '@mobilewright/core';
import type { Locator } from '@mobilewright/core';
export class YouTubeLocator {
  public readonly searchIconLocator: Locator;
  public readonly searchFieldLocator: Locator;
  public readonly videoLocator: Locator;
  public readonly skipAdButtonLocator: Locator;
  public readonly videoProgressSliderLocator: Locator;
  public readonly screenVideo: Locator;
  public readonly shortVideoButtonLocator: Locator;
  public readonly shortVideoLocator: Locator;
  public readonly miniScreenVideo: Locator;
  

  constructor(private readonly screen: Screen) {
    this.searchIconLocator = this.screen.getByRole('image', { name: 'Search' });
    this.searchFieldLocator = this.screen.getByRole('textfield');
    this.videoLocator = this.screen.getByLabel('Automate Mobile Apps with AI', { exact: false });
    this.skipAdButtonLocator = this.screen.getByTestId('com.google.android.youtube:id/skip_ad_button_icon');
    this.videoProgressSliderLocator = this.screen.getByRole('slider');
    this.screenVideo = this.screen.getByTestId('com.google.android.youtube:id/watch_while_time_bar_view');
    this.shortVideoButtonLocator = this.screen.getByRole('button', { name: 'Shorts' });
    this.shortVideoLocator = this.screen.getByTestId('com.google.android.youtube:id/reel_watch_player');
    this.miniScreenVideo = this.screen.getByTestId('com.google.android.youtube:id/mini_thumbnail');
  }
}
