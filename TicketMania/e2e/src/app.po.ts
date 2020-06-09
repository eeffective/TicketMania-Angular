import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText() {
    return element(by.css('app-header .tm-logo')).getText();
  }

  

  loginBtn(){
    return element(by.id('login'));
  }

  elementByCss(css: string){
    return element(by.css(css));
  }

  elementById(id: string){
    return element(by.id(id));
  }
}
