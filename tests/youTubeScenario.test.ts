import { test, expect } from '../src/fixtures';

test('YouTube scenario', async ({ screenManager }) => {

  await screenManager.OnHomeScreen().clickOnHomeButton();
  await screenManager.OnHomeScreen().middleSwipeUp();
  await screenManager.OnHomeScreen().clickOnYouTubeApplicationIcon();
  await screenManager.OnHomeScreen().bottomSwipeUp();
  await screenManager.OnHomeScreen().middleSwipeUp();
  await screenManager.OnHomeScreen().clickOnYouTubeApplicationIcon();
  await screenManager.OnYouTubeScreen().clickOnSearchIcon();
  await screenManager.OnYouTubeScreen().fillSearchField('MobileWright');
  await screenManager.OnYouTubeScreen().pressOkOnKeyboard();
  await screenManager.OnYouTubeScreen().clickOnVideo();
  await screenManager.OnYouTubeScreen().clickOnSkipAdButton();
  await screenManager.OnYouTubeScreen().swipeVideoProgressSliderRight(1000);

});
