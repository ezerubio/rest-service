Rest service
===============

A solution to NY Marathon APP


Note: This project needs mongodb to run.

How to use:
================

Download from repository and do in the project folder:

	npm install

Once dependencies are installed run with

	npm start will start in http://localhost:8080
	
Available endpoints:

	GET /api/config            Retrieve configuration
	GET /api/inscriptions      List inscriptions (for internal use)
	POST /api/inscription      Create inscription
