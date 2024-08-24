Simple Django-React Site
This repository contains a simple web application built with Django and React. 
The application includes a backend API created with Django and a frontend interface built with React.

Project Structure
frontend/: Contains the React frontend application.
backend/: Contains the Django backend application.

Features:
Home Page with an introduction
An All-About-Me Page meeting django api requirement 1
A To-Do List Page meeting django api requirement 2

How to run
Prerequisites
Node.js (for React)
Python (for Django)
pip (Python package installer)

Setup
1. For the backend:
a. Navigate to the backend directory:
cd backend

b. Create a virtual environment:
python -m venv venv

c. Activate the virtual environment:
On Windows:
.\venv\Scripts\activate
On macOS/Linux:
source venv/bin/activate

d. Install dependencies:
pip install -r requirements.txt

e. Run migrations:
python manage.py migrate

f. Start the Django server:
python manage.py runserver

2. For the frontend
a. Navigate to the frontend directory:
cd frontend

b. Install dependencies:
npm install

c. Start the React development server:
npm start
