import bfsSearch from "../utils/bfsSearch";

const providedGraph = [
	{
		"players":{
			"name": "L. Hughes",
			"nationality": "Northern Ireland",
			"team_name": "Liverpool",
		},
		"next_pos": [1,2],
	},
	{
		"players":{
			"name": "Malachi Michael Fagan-Walcott",
			"nationality": "Northern Ireland",
			"team_name": "Liverpool",
		},
		"next_pos": [0, 2, 3, 5],
	},
	{
		"players":{
			"name": "Björn Bryan Hardley",
			"nationality": "Northern Ireland",
			"team_name": "Liverpool",
		},
		"next_pos": [0, 1, 4, 5],
	},
	{
		"players":{
			"name": "L. Hughes",
			"nationality": "Northern Ireland",
			"team_name": "Liverpool",
		},
		"next_pos": [1, 6],
	},
	{
		"players":{
			"name": "J. Simmons",
			"nationality": "Northern Ireland",
			"team_name": "Liverpool",
		},
		"next_pos": [2, 7],
	},
	{
		"players":{
			"name": "K. Jabi",
			"nationality": "Northern Ireland",
			"team_name": "Liverpool",
		},
		"next_pos": [1, 2, 6, 7, 8],
	},
	{
		"players":{
			"name": "M. Joash",
			"nationality": "Northern Ireland",
			"team_name": "Liverpool",
		},
		"next_pos": [3, 5, 9],
	},
	{
		"players":{
			"name": "James Storer",
			"nationality": "Northern Ireland",
			"team_name": "Liverpool",
		},
		"next_pos": [4, 5, 10],
	},
	{
		"players":{
			"name": "Jacob Bunch",
			"nationality": "Northern Ireland",
			"team_name": "Liverpool",
		},
		"next_pos": [5, 9, 10],
	},
	{
		"players":{
			"name": "K. Bale",
			"nationality": "Northern Ireland",
			"team_name": "Liverpool",
		},
		"next_pos": [6, 8],
	},
	{
		"players":{
			"name": "Jamie Patrick Bowden",
			"nationality": "Northern Ireland",
			"team_name": "Liverpool",
		},
		"next_pos": [7, 8],
	},
]

it('should match players compability sum', () => {
    expect(bfsSearch(providedGraph)).toBe(32)
})