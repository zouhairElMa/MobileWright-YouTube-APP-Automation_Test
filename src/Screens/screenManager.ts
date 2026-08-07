import { HomeScreen } from './Home/home.screen';
import { YouTubeScreen } from './YouTube/youtube.screen';
import type { Screen } from '@mobilewright/core';

export class ScreenManager {
  private readonly screen: Screen;
  public readonly homeScreen: HomeScreen;
  public readonly youTubeScreen: YouTubeScreen;


  constructor(screen: Screen) {
    this.screen = screen;
    this.homeScreen = new HomeScreen(this.screen);
    this.youTubeScreen = new YouTubeScreen(this.screen);
  }

  OnHomeScreen() {
    return this.homeScreen;
  }
  OnYouTubeScreen() {
    return this.youTubeScreen;
  }

}
