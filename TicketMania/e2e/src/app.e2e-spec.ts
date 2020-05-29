import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app title', () => {
    page.navigateTo();
    browser.pause();
    expect(page.getTitleText()).toEqual('TicketMania');
  });

// TODO: doesnt work yet ion why tho, gotta figure it out later lol, time for tft now 
  it('should display login modal', () => {
    page.navigateTo();
    page.getLoginButton().click();
    expect(page.getTextByCss('[href="#panel7"]').getText()).toEqual('Inloggen');
   });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
