import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;

  // page is essential for tests to work, need more investigation/study about this
  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app title', () => {
    page.navigateTo();
    browser.pause();
    expect(page.getTitleText()).toEqual('TicketMania');
  });


  // it('should display login modal', () => {
  //   page.navigateTo();
  //   browser.pause();
  //   element(by.buttonText('Inloggen | Registreren')).click();
  //   expect(element(by.id('kanus')).getText()).toContain('Inloggen');
  //  });



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
