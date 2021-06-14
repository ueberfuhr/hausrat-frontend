import {browser, by, element} from 'protractor';

export class TodosPage {
  async navigateTo(): Promise<unknown> {
    return browser.get('todos');
  }

  async getTitle(): Promise<string> {
    return element(by.css('h2')).getText();
  }
}
