import { test, expect } from '../src/fixtures';

test('YouTube scenario', async ({ screenManager }) => {

  await screenManager.onHomeScreen().clickOnHomeButton();
  await screenManager.onHomeScreen().middleSwipeUp();
  await screenManager.onHomeScreen().clickOnYouTubeApplicationIcon();
  await screenManager.onHomeScreen().bottomSwipeUp();
  await screenManager.onHomeScreen().middleSwipeUp();
  await screenManager.onHomeScreen().clickOnYouTubeApplicationIcon();
  await screenManager.onYouTubeScreen().clickOnSearchIcon();
  await screenManager.onYouTubeScreen().fillSearchField('MobileWright');
  await screenManager.onYouTubeScreen().pressOkOnKeyboard();
  await screenManager.onYouTubeScreen().clickOnVideo();
  await screenManager.onYouTubeScreen().clickOnSkipAdButton();
  await screenManager.onYouTubeScreen().swipeVideoProgressSliderRight(1000);

});
