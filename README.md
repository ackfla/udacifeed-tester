# UdaciFeeds Tester Project

The UdaciFeeds Tester is a test suite created for Udacity's Front End Nanodegree Programme.

## Table of Contents

* [Instructions](#instructions)
* [Tests](#tests)

## Instructions

- To load the testing suite, open index.html in your browser.
- The tests will automatically run.
- Scroll to the bottom of your browser to see the test results.
- If an any errors occur the Jasmine interface will list them here, including details on where the error occured.

## Tests

The UdaciFeeds Tester will test for the following:

* **RSS Feeds**
  - The `allFeeds` variable has been defined and has content.
  - Within this `allFeeds` array, each feed has a name defined and has content.
  - Within this `allFeeds` array, each feed has an URL defined and has content.
* **Menu**
  - The menu is hidden by default
  - The menu changes visibility when clicked
- **Initial Entries**
  - When the `loadFeed` function is run, at least a single `.entry` element within the `.feed` container is created.
  - When a new feed is loaded by the `loadFeed` function, the content actually changes.
