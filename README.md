This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```



# About Meal Mate

Meal Mate is a class assignment for practice in using APIs in angular. We were tasked with picking an API that was useful and build a simple SPA that followed these requirements:

* Reads from an API, something useful
* Has and uses more than two components
* Uses routing to switch betwene pages
* Styled professionally 
    * Reponsive and maintains appela on all platforms
    * Styles written in SASS (or SCSS)
* Only uses Angular, no 3rd party libraries or frameworks
* Must be useful with sufficient depth

## The Idea
I chose to make a meal planning app that utilizes the Spoontacular food api. Spoontacular has a large API that has resources for ingredients, meals, recipes, etc. 

The idea was to make a meal planner where users could search with the Spoontacular API for meals based on various filters. The user could then click on the a meal, view its information, and add it to their favorite meals. They could also assign meals for days of the week on their calendar or calculate things like the calories for a meal. 

## Website Theme
Colors: 
* Background color of overall site: #31312E
* Color for logo, links, call to action items: #8BC34A
* Highlights, alerts, etc. : #FFA07A
* Color of text on background: #FFFFFF

Text:
I'm using an import statement in my global styles.css from gogle fonts
* Font: Montserrat is my beloved

## API

# [Spoontacular](https://spoonacular.com/food-api/docs)
Spoontacular is a huge API that has a lot of the stuff that this project is trying to accomplish like making meals and such, but I just wanted to practice making my own meal planner and only utilize some of Spoontacular's resources. I decided to use the recipe and the food resource. 

This API has tiers for what you can/can't use. I'm using the free tier and that's more than enough for what I need for a school assignment, but if this project were to expand or if there's anyone that uses this for something bigger, it'll cost more for more calls and for the amount of calls you can make in a time frame. The free tier I'm using here is 150 points per day, 1 call per second. They explain in their docs how their [quotas](https://spoonacular.com/food-api/docs#Quotas) work. 

# Service
I made a config/envi file for the api key for Spoontacular that get's called in the food-api.service.ts file. This service is used to call the api and has methods for what to do with that data we get back.  For the HttpClient service that angular provides needs a provider in the app.config file. All we're doing is returning what the api sends us. We then call those services in the components we need to display the data in. We also have two different calls in the service for the two different resources as of right now. 