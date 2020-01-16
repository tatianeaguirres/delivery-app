## Technical Decisions

### Tech stack

- [React](https://reactjs.org/) as javaScript framework
- [Prettier](https://prettier.io/) to format the code
- [Pretty Quick](https://github.com/azz/pretty-quick) to run Prettier on the changed files
- [Husky](https://github.com/typicode/husky) to add pre commit settings
- [JSON Server](https://github.com/typicode/json-server) to get a fake REST API from a JSON
- [Reach Router](https://reach.tech/router) to manage app routes
- [Jest](https://jestjs.io/) as unit javaScript testing framework
- [React Testing Library](https://github.com/testing-library/react-testing-library) to test UI components in a user-centric way
- [DOM Testing Library](https://github.com/testing-library/dom-testing-library) to test web pages by querying and interacting with DOM nodes
- [Jest DOM Testing Library](https://github.com/testing-library/jest-dom) to custom jest matchers to test the state of the DOM
- [Cypress](https://www.cypress.io/) as javaScript e2e testing framework
- [Cypress Image Snapshot](https://github.com/palmerhq/cypress-image-snapshot) to visual regression tests
- [Node Sass](https://github.com/sass/node-sass) to prodive binding for Node.js to Sass
- [React Load Script](https://github.com/blueberryapps/react-load-script) used to import Google Maps script in React
- [React Google Places Autocomplete](https://github.com/Tintef/react-google-places-autocomplete) as a React component for easily use Google Places Autocomplete
- [React Time Range Slider](https://github.com/ashvin27/react-time-range-slider) as a React component to integrate the time range slider
- [BEM](http://getbem.com/introduction/) as CSS architecture
- [Google Fonts](https://fonts.google.com/) to provide the default Muli font
- [Material Design Icons](https://material.io/resources/icons/?style=baseline) to provide the icons
- [Gitmoji](https://gitmoji.carloscuesta.me/) as emoji guide for commit messages

## Architectural Decisions

- **Hooks > Classes**: I used Hooks instead of classes as a new feature of React 16, because no need to use lifecycle methods and it's easier to reuse stateful logic between components. It's infinitely easier to write and understand code using functional programming.
- **Fetch**: I used Fetch API because it's perfect to a simple API, as well as being a native JavaScript API and it's supported by most browsers today.
- **Split the form into three parts**: The first form component got huge (over 300 lines), and I had no other way out, just refactored it. I researched a lot about how the behavior between components works with react hooks and forms, and I was able to extract the form to three other components.
- **Mocks**: I used mocks to simulate a backend and with the help of the amazing `json-server` I had the experience of working with a real api.
- **Small Commits**: Every developer knows the good practice of performing small commits. This leads to improved accuracy, and makes it easier to change tracking. My history of commits can be seen [here](https://github.com/tatianeaguirres/delivery-app/commits/master).
- **Design**: I chose to follow the screenshot layout template. I searched for a similar font in Google Fonts and got the same colors by color picker.
- **Desktop version**: I always worked with mobile first, but as responsive design was not a requirement I ended up doing just the desktop layout. I already regret it 😅 and, in a separate branch, I already started rewriting the layout using mobile first technique.
- **BEM**: I decided to use BEM because it's a great naming convention for modular and maintainable CSS classes. It's simple and easy, and guarantee a good legibility of code. _"BEM is a kind of superhero — it keeps the world of CSS safe from mess and clutter."_ - Joanna Erd
