import { NgapptestPage } from './app.po';

describe('ngapptest App', () => {
  let page: NgapptestPage;

  beforeEach(() => {
    page = new NgapptestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
