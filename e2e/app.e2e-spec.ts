import { CommunicationPage } from './app.po';

describe('communication App', () => {
  let page: CommunicationPage;

  beforeEach(() => {
    page = new CommunicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
