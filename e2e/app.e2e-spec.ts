import { IncentivePage } from './app.po';

describe('Incentive App', function() {
  let page: IncentivePage;

  beforeEach(() => {
    page = new IncentivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
