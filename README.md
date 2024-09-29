 ## For the new committee
- welcome to your website!
- this is exciting! We have made it easy for you to transition your new committee roles into this super optimized system
- with json files containing all the information you would like to publish, all you need to do is write json
- how easy is that?!
- now for the fun bit, the explanations on operation below

## How to run it
- clone the code `git clone https://github.com/Exeter-Computer-Science-Society/excs-website-2.git`
- go into the directory `cd excs-website-2`
- run `npm run dev`

## Transition
- we have written a simple script that configures the website for a new committee!
- please use carefully, we have tried to make it as fool-proof as possible
```
run file here
```

## JSON 
- here we will describe each json file ( you will hopefully only need to interact with these )

#### The new file
- This file contains new concepts and ideas that your committee would like to implement this year
- This will be shown on the front page of the site in a list format
```
[
	{
		"name": "Welcome Our New Committee",
		"description": "With warm hearts we welcome our new committee for the 2024/25 academic year!",
		"footnote": "",
		"image": "/public/images/<REST OF LINK>",
		"link": "/committee"
	}
]
```

#### Committee file
- please add your committee photos to the {public/images/people} folder
- please update the json file `/data/committee.json` with your names, positions and image locations
- committee images are stored in `/public/images/people/`
```
[
	{
		"name": "",
		"position": "",
		"description": "",
		"image": "/images/people/<ENTER NAME>.jpeg",
		"links": [
			{
				"type": "linkedin",
				"url": "https://www.linkedin.com/in/<ENTER ID>"
			},
			{
				"type": "github",
				"url": "https://github.com/<ENTER USERNAME>"
			},
			{
				"type": "instagram",
				"url": "https://www.instagram.com/<ENTER USERNAME>"
			},
			{
				"type": "other",
				"url": "<LINK HERE>"
			}
		]
	}
]
```

#### Past committee file
- this file commemorates fallen committee soldiers
- the transition script should migrate all current committees into the previous committee folder `/data/past_committee.json` ( please fix if it doesnt )
- committee images are stored in `/public/images/people/past`
- below is a description of how to add a committee to the json file
```
[
	{
		"name": "",
		"position": "",
		"description": "",
		"image": "/images/people/<ENTER NAME>.jpeg",
		"links": [
			{
				"type": "linkedin",
				"url": "https://www.linkedin.com/in/<ENTER ID>"
			},
			{
				"type": "github",
				"url": "https://github.com/<ENTER USERNAME>"
			},
			{
				"type": "instagram",
				"url": "https://www.instagram.com/<ENTER USERNAME>"
			},
			{
				"type": "other",
				"url": "<LINK HERE>"
			}
		]
	}
]
```

#### Events
- here will be described how to publish an event to the website
- please locate the json file `/data/events.json`
- the date must be in the provided format, otherwise it wont work
- the id must not be repeated
```
[
	{
		"id": 1,
		"title": "<SOCIAL NAME>",
		"description": "<DESCEIPTION>",
		"image": "/images/events/<IMAGE NAME>.jpeg",
		"date": "<YEAR>-<MONTH>-<DAY>",
		"time": "<TIME>",
		"location": "<VENUE NAME>",
		"location_link": "<ENTER GOOGLE LINK>",
		"fixr": "<ENTER FIXR LINK>",
		"link": "<ENTER INSTA LINK OR OTHER>",
		"tags": ["<TAG 1>", "<TAG 2>"],
		"longitude": <ENTER LONGITUDE>,
		"latitude": <ENTER LATITUDE>
	}
]
```

#### Featured Projects
- if you wish to include featured projects please update the `/data/featured_projects.json` file regularly
```
[
	{
		"title": "the project name",
		"languages": "python | julia ...",
		"description": "",
		"image": "/public/images/<LINK>",
		"link": "https://www.github.com/<USERNAME>/<PUBLIC REPO>",
		"author": "Wiktor Wiejak"
	}
]
```

- please also update the winning project using the same format every month if you are doing this!

## Future Features Ideas
- Reformat the events icons in the `/events` page
- Add images to past events so people can see what our events look like
- maybe divide past events and incoming events into two different sections for better representation
- maybe remove incoming events as the fixr tickets ommit this
- integrate the new hack south west website as a subdomain

