import Home from '@/pages/index';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('some tests', () => {
    test("renders at least one link to https://github.com in the first child of 'main' ", () => {
  const {container} = render(<Home />);

  // attempt to fetch the first child element within the "main" element
  const child = container.querySelector('main *');

  // ensure the the child element exists
  expect(child).toBeTruthy();

  // get all "a" elements within the child element
  const childLinks = child.querySelectorAll("a");

  // ensure there is at least 1 "a" element within the child
  expect(childLinks.length).toBeGreaterThan(0); // at least one link

  let githubLinks = 0;

  childLinks.forEach(link => {
    if(link.href.includes("https://github.com"))
      githubLinks++;
  });

  // ensure that there is at least one link that includes "https://vercel.com"
  expect(vercelLinks).toBeGreaterThan(0); // at least one vercel link
});
});