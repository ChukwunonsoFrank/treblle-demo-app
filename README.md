## Treblle Hackathon Example Project

This project is a Sails.js application which integrates a custom built Treblle SDK layer for the purpose of this hackathon. 

### Usage
To demo the app, you need an API client or any tool you would normally use to make requests to an API(Postman, Insomnia, etc). It features a CRUD setup to a demo Blog API and uses ```sails-disk``` as a test database. Here are the list of available endpoints:

* GET ```/articles``` HTTP/1.1
```json
// Example request body
{}
```

* GET ```/articles/:articleId``` HTTP/1.1
```json
// Example request body
{
    "articleId": 1
}
```

* POST ```/articles``` HTTP/1.1
```json
// Example request body
{
    "title": "Building SDKs with Treblle",
    "description": "This is an article on how to build Treblle SDKs",
    "content": "Lorem ipsum dolor init..."
}
```

* PUT ```/articles/:articleId``` HTTP/1.1
```json
// Example request body
{
    "articleId": 1,
    "title": "Building performant SDKs with Treblle",
    "description": "This is an article on how to build Treblle SDKs",
    "content": "Lorem ipsum dolor init..."
}
```

* DELETE ```/articles/:articleId``` HTTP/1.1
```json
// Example request body
{
    "articleId": 1
}
```

