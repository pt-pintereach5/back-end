# back-end

ENDPOINTS

POST /api/auth/register
Register a new user. Requires a unique username and password

POST /api/auth/login
Login after you register. Use same username and password as when you registered

GET /api/articles
Allows you to see all the articles in the database. Requires a valid JSON web token in the authorization header.

GET /api/articles/:id
Allows you to get a specific article in the database. Also requires a valid JSON web token.

POST /api/articles
Allows you to add a new article to the database. Requires you to provide a title, source, author, and contents.
