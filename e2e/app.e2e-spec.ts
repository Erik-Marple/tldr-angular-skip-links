import { TldrPage } from './app.po';

describe('tldr App', () => {
  let page: TldrPage;

  beforeEach(() => {
    page = new TldrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
