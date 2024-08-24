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
For the backend:
Navigate to the backend directory:
cd backend

Create a virtual environment:
python -m venv venv

Activate the virtual environment:
On Windows:
.\venv\Scripts\activate
On macOS/Linux:
source venv/bin/activate

Install dependencies:
pip install -r requirements.txt

Run migrations:
python manage.py migrate

Start the Django server:
python manage.py runserver

For the frontend
Navigate to the frontend directory:
cd frontend

Install dependencies:
npm install

Start the React development server:
npm start
