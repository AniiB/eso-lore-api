# Elder Scrolls Online Lorebooks: <a href="https://es-lore-api.herokuapp.com/" target="_blank">Check it out here!</a>
A collection of books from Elder Scrolls Online and the location to find them!


# CRUD operations for documents in the MongoDB collection(Experimental)

## Create or POST request
 
- Add a new book

  ![firefox_fR4wi71VYf](https://user-images.githubusercontent.com/96686113/174272031-a1a62152-e8b4-4f70-a083-5f946003f471.png)

- A new document is created in MongoDB

  ![Postman_QaU5fdfmyV](https://user-images.githubusercontent.com/96686113/174272546-d142f30a-6547-4a6a-a2d3-ee0521f1f2ed.png)


## Read or GET request

- <a href="https://es-lore-api.herokuapp.com/" target="_blank">Get URL from the website!</a>
  
  ![firefox_70kdtNqUwQ](https://user-images.githubusercontent.com/96686113/174269216-0e802a9b-f5cc-4f85-91b3-63d991c6d8a5.png)

  
- Send a GET request via <a href="https://www.postman.com/">Postman</a>
 
  ![Postman_YKL43f0Lgh](https://user-images.githubusercontent.com/96686113/174269704-91d4141c-ed6e-42b4-97a7-e817d0ec7f91.png)


- The API responds with the book collection.

  ![Postman_i9y17uLRtM](https://user-images.githubusercontent.com/96686113/174270399-185147ee-c4e2-4a1f-942b-2cf92bd2a176.png)


## Update or PUT request

- Here's a document with a missing author.

  ![Postman_xqYpfEL4DT](https://user-images.githubusercontent.com/96686113/174274658-50f6cc3e-59f0-4143-b006-67b7de442d0d.png)

- Update the author using Update Info(Book name is required)

  ![dgG9dXJVUT](https://user-images.githubusercontent.com/96686113/174275530-d1bf3b8e-1e76-4330-ac0b-cc44a4b9f654.png)

- Document after updating the information

  ![Postman_yxIXrf14co](https://user-images.githubusercontent.com/96686113/174275911-4303273e-7857-47ca-aa3c-308a21d0c57f.png)

- Entries can be set back to an empty string by updating it with "reset" string

  ![GK23bEQhqk](https://user-images.githubusercontent.com/96686113/174276168-98c58dd0-ca0a-4e6b-86f4-b961b0f8a3c5.png)


## Delete or DELETE request

- Press the x to delete it.

  ![firefox_nyHzLYVaOf](https://user-images.githubusercontent.com/96686113/174277056-685c6b03-4483-4b77-8cfb-cef6c44ce731.png)

## Tech used: HTML | CSS | JavaScript | MongoDB | Node.js | Express | eJS

A Backend project focused on using CRUD operations. API on MongoDB Atlas and backend created using JS, Node and Express. Used eJS to to render and serve a dynamic page.

## Optimizations

Optimizations I'd like to add in the future

MongoDB documents to hold more than a single entry in arrays or objects.


## Lessons Learned:

CRUD operations to manipulate a collection on mongoDB from a client.
