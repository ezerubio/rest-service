module.exports = {
	"fields": [{
		"name": "email",
		"label": "Email",
		"type": "email",
		"isRequired": true,
		"regexp": "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{1}[a-zA-Z]+"
	},{
		"name": "firstName",
		"label": "Name",
		"type": "text",
		"isRequired": true
	},
	{
		"name": "surName",
		"label": "Surmame",
		"type": "text",
		"isRequired": false
	}],
	title: 'NYC'
};