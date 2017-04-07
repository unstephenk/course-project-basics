import { CourseProjectBasicsPage } from './app.po';

describe('course-project-basics App', () => {
  let page: CourseProjectBasicsPage;

  beforeEach(() => {
    page = new CourseProjectBasicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
