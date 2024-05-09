# Blog App Using Node.js

Welcome to the Blog App! This is a basic web application developed using Node.js where users can add and delete blogs. This README provides an overview of the application, installation instructions, and basic usage guidelines.

## Features

- **Add Blogs**: Users can create and publish their own blogs by providing a title and content.
- **Delete Blogs**: Users can remove blogs that they no longer wish to keep.

## Technologies Used

- **Node.js**: Backend JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js used for routing.
- **MongoDB**: NoSQL database used for storing blog data.
- **Mongoose**: MongoDB object modeling tool used for Node.js.
- **EJS**: Embedded JavaScript templates for generating HTML markup.
- **Lodash**: Utility library providing helper functions for handling data manipulation.
- **Morgan**: HTTP request logger middleware for Node.js.

## Installation

Follow these steps to set up the Blog App on your local machine:

1. Clone the repository:

    ```bash
    git clone https://github.com/roman-thapa/blog-App-using-node.git
    ```

2. Navigate to the project directory:

    ```bash
    cd blog-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up MongoDB:
    - Install MongoDB if you haven't already.
    - Start MongoDB service.

5. Create a `.env` file in the root directory of the project and add the following environment variables:

    ```plaintext
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/blogApp
    ```

    Adjust the MongoDB URI as per your local MongoDB configuration.

6. Start the application:

    ```bash
    npm start
    ```

7. Visit `http://localhost:3000` in your web browser to access the Blog App.

## Usage

1. **Adding a Blog**:
    - Click on the "Add Blog" button.
    - Fill in the title and content of the blog.
    - Click on the "Publish" button to add the blog.

2. **Deleting a Blog**:
    - Locate the blog you wish to delete.
    - Click on the "Delete" button associated with the blog.
    - Confirm the deletion when prompted.

