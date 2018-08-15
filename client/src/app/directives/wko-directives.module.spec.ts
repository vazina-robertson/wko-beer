import { WkoDirectivesModule } from './wko-directives.module';

describe('WkoDirectivesModule', () => {
  let wkoDirectivesModule: WkoDirectivesModule;

  beforeEach(() => {
    wkoDirectivesModule = new WkoDirectivesModule();
  });

  it('should create an instance', () => {
    expect(wkoDirectivesModule).toBeTruthy();
  });
});
