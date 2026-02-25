# How to Run the AI Career Compass Project

## Prerequisites Installed ✓
- Node.js v22.17.1
- Python 3.9.13
- All dependencies installed

## Running the Frontend (React + Vite)

Open a terminal and run:
```bash
npm run dev
```

The frontend will start at: http://localhost:5173

## Running the Backend (Django) - Optional

The backend code is provided but needs Django project setup. To set it up:

1. Create Django project structure:
```bash
django-admin startproject career_guidance .
python manage.py startapp users
python manage.py startapp assessments
python manage.py startapp recommendations
python manage.py startapp skills
python manage.py startapp career_paths
```

2. Run migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

3. Start the server:
```bash
python manage.py runserver
```

## Quick Start (Frontend Only)

Just run:
```bash
npm run dev
```

Then open your browser to http://localhost:5173 and start exploring the AI Career Compass!

## Features Available
- Interactive career assessment questionnaire
- AI-powered career recommendations
- Skills gap analysis
- Visual career path insights
- Personalized development roadmap
