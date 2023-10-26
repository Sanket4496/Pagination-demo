# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Pagination Component
What are the values we need for our pagination component

1. totalCount - It represents the total count of available from the source.
2. currentPage - represents the current active page, we are using 1-based index.
3. pageSize - represents the maximum data that is visible in a single page.
4. onPageChange - call back function invoked with the updated page value when the page is changed.
5. siblingCount - represents the min number of page buttons to be shown on each side of the current page button. Defaults to 1.

