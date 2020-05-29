import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-header .tm-logo')).getText() as Promise<string>;
  }

  getLoginButton(){
    return element(by.css('[data-target="#modalLRForm"]'));
  }

  getTextByCss(css: string){
    return element(by.css(css));
  }
}
