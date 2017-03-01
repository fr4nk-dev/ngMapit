import { NgMapitPage } from './app.po';

describe('ng-mapit App', () => {
  let page: NgMapitPage;

  beforeEach(() => {
    page = new NgMapitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
