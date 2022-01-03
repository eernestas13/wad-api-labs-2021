# Assignment 2 - Web API.
​
Name: Ernestas Trakys
​
## Features.
​
 
 + Feature 1 - Attempt on integrating FireBase as a method of authentication, reverted to JWT.
​
## Installation Requirements
​
Describe what needs to be on the machine to run the API.
​
```bat
git clone http:\myrepo.git
```
​
followed by installation
​
```bat
git install
```
​
## API Configuration
Describe any configuration that needs to take place before running the API.

​.env file is needed so that passwords/key can remain hidden when commiting to your repository. Your app access these keys/passwords that are used to access your DB or TMDB.

```bat
NODE_ENV=development
PORT=8080
HOST=
SECRET=YourJWTSecret

MONGO_DB=mongodb:YourMongoURL
SEED_DB=True

TMDB_KEY=YourKey
REACT_APP_TMDB_KEY=YourKey
```
​
​
## API Design
Give an overview of your web API design, perhaps similar to the following: 
​
| -- | -- | -- | -- | -- 
| /api/movies/tmdb/movies |Gets a list of movies | 

| /api/movies/tmdb/upcoming | Gets a list of upcoming movies |

| /api/movies/tmdb/toprated | Gets a list of toprated movies |

| /api/movies/tmdb/popular | Gets a list of popular movies |

| /api/movies/tmdb/nowplaying | Gets a list of nowplaying movies |

| /:userName/favourites | Gets the favourites selected by the current user |

| /:userName/watchlists | Gets the watchlist selected by the current user |

| / | Post used to register or authenticate a user |

| /:id | Put used to update a user |

| /:userName/favourites | Post used to add a favourite |

| /:userName/favourites | Post used to add a watchlist |

​
​
## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

 I used JWT, passports to check against the seedData inside of the DB. If a users credentials are there, they can pass login.   
 
 I attempted to bring in signup that writes to the DB of new user credential registration.
 
 I have the homepage protected (/ ), anytime a user visits the website they are brought to the homepage and a check is done to see if they are signed in or not,
 they get brought to the loginpage, where they can login or click a link to get directed to the signup page.
​
## Integrating with React App
​
Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

​My React app pulls requests from a proxy linked to my API app. It uses a fetch to access the API to retrieve info from a TMDB link to display movies.

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies/tmdb/movies?page=2&limit=10',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
};
​
~~~
​
​
## Independent learning
​Attempt on integrating FireBase instead of JWT as a means of authentication.
