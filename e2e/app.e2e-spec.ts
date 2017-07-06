import { RecepyBookPage } from './app.po';

describe('recepy-book App', () => {
  let page: RecepyBookPage;

  beforeEach(() => {
    page = new RecepyBookPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to rb!!'))
      .then(done, done.fail);
  });
});
