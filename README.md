# Project Overview

## Project Name

Cocktail Build Beautifier

## Project Description

This app will provide an opinionated tool for formatting of raw cocktail recipe data; step three in the implementation of a searchable cocktail database.

1. Gather/digitize all recipe data
2. Convert to csv and upload to Airtable 
3. __Standardize format and build JSON database__  
4. Use formatted data to implement searchable database
5. Be able to search for recipes at service speed
6. Profit


## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

## Component Hierarchy

![Component Hierarchy](https://github.com/patraydev/build-beautifier/p2cd.jpg)

## API and Data Sample

RAW:

Blue Ridge Manhattan
2 oz	Rittenhouse Rye
¾ oz	Carpano Antica Sweet Vermouth
½ oz	Noilly Pratt Dry Vermouth
2 dash	Peychaud’s Bitters

Rinse
1 dash	Peach Bitters
Laphroig

Glass:		Coupe
Garnish:	Lemon Pigtail Twist

Rinse Coupe with Laphroig and Peach Bitters.  Shake.  Strain.  Serve Up.

This drink should taste like a pulled pork sandwich but made with booze.

BEAUTIFIED:

    {
    "name": "Blue Ridge Manhattan",
    "build": [
      {
       "ingredientNum": 0,
       "amount": 2,
       "unit": "oz",
       "thing": "Rittenhouse Rye"
      },
      {
       "ingredientNum": 1,
       "amount": .75,
        "unit": "oz",
        "thing": "Carpano Antica Sweet Vermouth
      },
      {
       "ingredientNum": 2,
       "amount": .5,
       "unit": "oz",
       "thing": "Noilly Pratt Dry Vermouth"
      },
      {
       "ingredientNum": 3,
       "amount": 2,
       "unit": "dash",
       "thing": "Peychaud’s Bitters"
      }
    ],
    "glass": "Coupe",
    "rinse": "Rinse Coupe with Laphroig and Peach Bitters.",
    "Garnish": "Lemon Pigtail Twist",
    "method": "Shake.  Strain.  Serve Up."
    "description": "This drink should taste like a pulled pork sandwich but made with booze.",
  }


### MVP/PostMVP

#### MVP 

- Build navbar, contact, about/home components
- Condense airtable into single column format
- Display airtable and beautiful cocktail template form side-by-side
- Implement movement from airtable to template form
- write completed cocktail to JSON with form submit

#### PostMVP  

- Implement drag/drop functionality from table to form
- Log stats of cocktails/menus beautified
- Create progress dashboard 

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Feb 16| Pitch / Greenlight | Incomplete
|Feb 17| React Structure / Modules / Link to Airtable | Incomplete
|Feb 18| Core Application Functionality / Basic CSS | Incomplete
|Feb 19| MVP | Incomplete
|Feb 20,21,22| Post MVP, Advanced CSS  | Incomplete
|Feb 23| Presentations | Incomplete

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| initialize app + packages | H | 1hr|  |  |
| basic structure  | H | 6hrs|  |  |
| contact form | H | 2hrs|  |  |
| read/display airtable | H | 4hrs|  |  |
| airtable update on form submit | H | 4hr|  |  |
| CSS | H | 6hrs|  |  |
| Total | H | 23hrs|  |  |

## SWOT Analysis

### Strengths:
I am following the class material relatively well.

### Weaknesses:
I lack exposure to material outside this course.

### Opportunities:
I can expose myself to outside material for this project.

### Threats:
I have little idea what we will cover in units 3 and 4.
