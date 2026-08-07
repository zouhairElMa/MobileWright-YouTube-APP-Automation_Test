import type { Screen } from '@mobilewright/core';

export class ScreenBase {
  protected readonly screen: Screen;

  constructor(screen: Screen) {
    this.screen = screen;
  }
  
  async clickOnApplicationIcon(locator: any): Promise<void> {
    await locator.tap();
  }

  async swipeUpFromScreenPoint(startX: number, startY: number, distance: number, duration?: number): Promise<void> {
    await this.screen.swipe('up', {startX, startY, distance, duration});
  }

  async swipeDownFromScreenPoint(startX: number, startY: number, distance: number, duration?: number): Promise<void> {
    await this.screen.swipe('down', {startX, startY, distance, duration});
  }

  async fillTextField(locator: any, text: string): Promise<void> {
    await locator.fill(text);
  }

  async tapOnSpecificScreenPoint(x: number, y: number): Promise<void> {
    await this.screen.tap( x, y );
  }

  async scrollToElement(locator: any): Promise<void> {
    await locator.scrollIntoViewIfNeeded();
  }

  async swipeLeftFromLocator(locator: any, distance: number, duration?: number): Promise<void> {
    const box = await locator.boundingBox();
    if (box) {
      const startX = box.x + box.width - 1;
      const startY = box.y + box.height / 2;
      await this.screen.swipe('left', { startX, startY, distance, duration });
    }
  }

  async swipeRightFromLocator(locator: any, distance: number, duration?: number): Promise<void> {
    const box = await locator.boundingBox();
    if (box) {
      const startX = box.x + 1;
      const startY = box.y + box.height / 2;
      await this.screen.swipe('right', { startX, startY, distance, duration });
    }
  }

}