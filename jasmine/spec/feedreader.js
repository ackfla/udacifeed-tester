/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have URLs', function() {
          for (let feed of allFeeds) { // Loops through each feed
            expect(feed.url).toBeDefined(); // Checks that an url is defined
            expect(feed.url.length).toBeGreaterThan(0); // Checks length of 'url' string is greater than 0 (not empty)
          }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have names', function() {
          for (let feed of allFeeds) { //Loops through each feed
            expect(feed.name).toBeDefined(); // Checks that a name is defined
            expect(feed.name.length).toBeGreaterThan(0); // Checks length of 'name' string is greater than 0 (not empty)
          }
        });


    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        let bodyClass

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
          bodyClass = $('body').hasClass('menu-hidden'); // See if the body has a 'menu-hidden' class
          expect(bodyClass).toBe(true); // Checks that the body DOES have a 'menu-hidden' class
        });

       /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('changes visibility when the menu icon is clicked', function() {

          $('.menu-icon-link').trigger( "click" ); // First click menu icon
          bodyClass = $('body').hasClass('menu-hidden'); // See if the body has a 'menu-hidden' class
          expect(bodyClass).toBe(false);  // Checks that the body DOESN'T have a 'menu-hidden' class

          $('.menu-icon-link').trigger( "click" ); // Second click menu icon
          bodyClass = $('body').hasClass('menu-hidden'); // See if the body has a 'menu-hidden' class
          expect(bodyClass).toBe(true); // Checks that the body DOES have a 'menu-hidden' class

        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done){ // Make sure feed has loaded before testing
          loadFeed(3, done);
        });

        it('are present', function() {
           let entries = $('.feed .entry').length; // Gets number of entries in feed
           expect(entries).toBeGreaterThan(0);  // Checks that entries are more than 0 (at least 1)
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
      let entryOne,
          entryTwo;

      /* Load first 2 feeds asyncronously and store first entry title in a
       * var for testing
       */
      beforeEach(function(done){
        loadFeed(0, function(){ // Load 1st feed
          entryOne = $('.feed .entry:first').children('h2').text(); // Get inner text of feed 1 title
          loadFeed(1, function(){ // Load 2nd feed
            entryTwo = $('.feed .entry:first').children('h2').text(); // Get inner text of feed 2 title
            done(); // Signal to Jasmine that async is complete
          });
        });
      });

      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
      it('successfully updates', function() {
        expect(entryOne.length).toBeGreaterThan(0); // Check that content loaded for 1st feed
        expect(entryTwo.length).toBeGreaterThan(0); // Check that content loaded for 2nd feed
        expect(entryOne).not.toBe(entryTwo); // Check that the title of the 1st entry in both tested feeds are NOT the same
      });


    });

}());
