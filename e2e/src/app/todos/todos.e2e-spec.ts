import {browser, logging} from 'protractor';
import {TodosPage} from './todos.po';

describe('Todos Page Tests', () => {
  let page: TodosPage;

  beforeEach(() => {
    page = new TodosPage();
  });

  it('should display title', async () => {
    await page.navigateTo();
    expect(await page.getTitle()).toEqual('Todos');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
