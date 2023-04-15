/** @jest-environment jsdom */
import React from "react";
import { act, render, screen } from "@testing-library/react";
import { App } from "./App";

const initialFetch = window.fetch;

describe("App", () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [],
          }),
      })
    );
  });
  afterEach(() => {
    window.fetch = initialFetch;
  })

  initialFetch("Should render", async () => {
    await act(async () => {
        render(<App />)
    });

    const appContainer = screen.getByTestId("app");

    expect(appContainer).toBeIntheDocument();
  })
});

// In order to run the test suite shown in the code, you would need to have certain dependencies installed in your project. Here are the dependencies that are being used in the code:
        // jest: This is the testing library used for writing and running tests in JavaScript. You would need to have Jest installed in your project in order to use the jest functions like describe, beforeEach, afterEach, and expect.

        // @testing-library/react: This is a popular testing library for testing React components. It provides utilities for rendering and querying the DOM, which are used in the code to render the App component and query the rendered DOM using the screen object.

        // react-dom/test-utils: This is a package that provides utilities for testing React components, such as the act function used in the code to handle asynchronous updates to the DOM during tests.

// This code is a test suite for a React component called "App" using the Jest testing library with the jsdom environment, which provides a simulated DOM (Document Object Model) environment for testing React components in Node.js.

// The @jest-environment jsdom comment at the top specifies that the test suite will run in the jsdom environment, which is a JavaScript implementation of the DOM used for testing.

// The import statements bring in the necessary dependencies for testing React components with Jest,including React for using React in the tests, act for handling asynchronous updates to the DOM, render for rendering the React component, and screen for querying the rendered DOM.

// const initialFetch = window.fetch; creates a constant variable initialFetch to store the original implementation of the fetch function in the global window object. This is done so that it can be restored later in the afterEach block to prevent any potential side effects from affecting other tests.

// describe("App", () => { ... }) creates a test suite with the name "App" to group together related tests for the "App" component.

// beforeEach(() => { ... }) defines a setup function that will be run before each test in the test suite. In this case, it replaces the global window.fetch function with a mock implementation that returns a resolved Promise with an empty object as the response of the fetch request. This is commonly done to isolate the component being tested from external dependencies, such as network requests, by replacing them with predictable mock data.

// afterEach(() => { ... }) defines a teardown function that will be run after each test in the test suite. In this case, it restores the original implementation of the fetch function in the global window object by assigning it back to window.fetch.

// initialFetch("Should render", async () => { ... }) defines a test case with the description "Should render" and an asynchronous test function that contains the actual testing logic. The initialFetch function is used instead of the regular test function provided by Jest, and it wraps the test function to ensure that the fetch mock implementation is in place during the test. This is done to ensure that the fetch mock is used when the App component is rendered.

// Inside the test function, await act(async () => { ... }) wraps the rendering of the App component with the act function, which is provided by the react-dom/test-utils package. The act function is used to ensure that all updates to the DOM, including asynchronous updates, are processed before making assertions about the rendered component.

// render(<App />) renders the App component using the render function from @testing-library/react.

// const appContainer = screen.getByTestId("app"); queries the rendered DOM using the screen object to get the element with a data-testid attribute of "app", which is assumed to be the container element for the App component.

// expect(appContainer).toBeInTheDocument(); asserts that the appContainer element is present in the DOM, indicating that the App component has been successfully rendered.

// Overall, this test suite ensures that the "App" component can be rendered and that the fetch function is properly mocked during the test to isolate the component from external dependencies.
