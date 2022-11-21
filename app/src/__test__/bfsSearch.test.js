import bfsSearch from "../utils/bfsSearch";

const providedGraph = [
	{
		"name": "L. Hughes",
		"nationality": "Northern Ireland",
		"team":{
			"name": "Liverpool"
		},
		"next_pos": [1,2],
        "visited": false
	},
	{
		"name": "Malachi Michael Fagan-Walcott",
		"nationality": "England",
		"team":{
			"name": "Tottenham"
		},
		"next_pos": [0, 2, 3, 5],
        "visited": false
	},
	{
		"name": "Björn Bryan Hardley",
		"nationality": "Netherlands",
		"team":{
			"name": "Manchester United",
		},
		"next_pos": [0, 2, 4, 5],
        "visited": false
	},
	{
		"name": "L. Hughes",
		"nationality": "Northern Ireland",
		"team":{
			"name": "Liverpool"
		},
		"next_pos": [1, 6],
        "visited": false
	},
	{
		"name": "J. Simmons",
		"nationality": "Netherlands",
		"team":{
			"name": "Manchester United"
		},
		"next_pos": [2, 7],
        "visited": false
	},
	{
		"name": "K. Jabi",
		"nationality": "Sweeden",
		"team":{
			"name": "Manchester United"
		},
		"next_pos": [1, 2, 6, 7, 8],
        "visited": false
	},
	{
		"name": "M. Joash",
		"nationality": "England",
		"team":{
			"name": "Liverpool"
		},
		"next_pos": [3, 5],
        "visited": false
	},
	{
		"name": "James Storer",
		"nationality": "England",
		"team":{
			"name": "Wolves"
		},
		"next_pos": [4, 5],
        "visited": false
	},
	{
		"name": "Jacob Bunch",
		"nationality": "England",
		"team":{
			"name": "Manchester United"
		},
		"next_pos": [5, 9, 10],
        "visited": false
	},
	{
		"name": "K. Bale",
		"nationality": "Northern Ireland",
		"team":{
			"name": "Manchester United"
		},
		"next_pos": [6, 8],
        "visited": false
	},
	{
		"name": "Jamie Patrick Bowden",
		"nationality": "Sweeden",
		"team":{
			"name": "Republic of Ireland"
		},
		"next_pos": [7, 8],
        "visited": false
	},
]

it('should console', () => {
    bfsSearch(providedGraph)
})