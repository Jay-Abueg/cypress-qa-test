# cypress-qa-test
Welcome to the Cypress QA Test for ImageQuix

This test consists of a git repository created using the following Create React App command:
`npx create-react-app cypress-qa-test --template typescript`

## Project description
The project is a very small React SPA that loads the front page of posts from reddit.com.
It has the option to navigate to subreddits using the searchbar at the top. It renders the results that are returned from the API request to reddit and parsing the JSON.

You can run the project by typing `npm start` or build it by typing `npm run build`

## QA Requirements
The goal is to create an automated QA setup using Cypress (https://www.cypress.io/).

These are the requirements:
* All of your Cypress Tests should be written in Typescript
* Write a test that checks that the main route (without a subreddit) will load from the /r/all subreddit, verify it displays content. Verify the main route adds 'posted to /r/...' to the author line.
* Write a test that checks that routing to a subreddit through the search bar loads the posts for that subreddit. Verify it displays content, assuming there is some.
* Write a test that checks that routing to a non-existent subreddit displays an error message, and verify the network request failed.
* Write a test that checks that the number of posts rendered for a subreddit matches the number of items returned in the network request

Bonus points for testing scenarios that we missed, or after looking at the components, you think can be useful.

You are welcome to change any component code, install any packages, or update `package.json` scripts to get everything up and running.

Please fork this repository and build the QA tests on the fork, then submit the link to your repository to us. Please include instructions on how to run your tests.

If you have any questions, please don't hesitate to ask!