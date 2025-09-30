# Silver Pine State University - Course Registration Portal

A modern, interactive web-based college class registration system that simulates a real university student portal experience. Students can enter their information, browse a professional course catalog, register for up to 5 classes, and manage their personalized class schedule.

## Features

- **User-Friendly Interface**: Clean, professional design resembling an actual university portal
- **Course Catalog**: Browse 22+ courses across multiple departments with detailed information
- **Smart Registration**: Add up to 5 classes with automatic validation and duplicate prevention
- **Persistent Data**: Schedule and student information saved using browser localStorage
- **Schedule Management**: View registered courses and clear schedule for fresh registration
- **Responsive Design**: Fully functional on desktop, tablet, and mobile devices
- **Real Course Details**: Each course includes professor names, meeting times, days, building locations, and room numbers

## Tech Stack

- **Frontend Framework**: React.js (Functional Components)
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Data Persistence**: Browser localStorage
- **Build Tool**: Vite
- **Icons**: Heroicons

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd silver-pine-state-university

Install dependencies:
npm install

Install Tailwind CSS PostCSS plugin:
npm install -D @tailwindcss/postcss tailwindcss@latest autoprefixer

Running the Application
Start the development server:
npm run dev

Project Structure
src/
├── components/
│   ├── CourseCard.jsx        # Individual course display card
│   ├── Header.jsx            # University branding header
│   └── ScheduleItem.jsx      # Schedule view course item
├── pages/
│   ├── LandingPage.jsx       # Student name entry page
│   ├── CatalogPage.jsx       # Course browsing and selection
│   └── SchedulePage.jsx      # Registered courses view
├── context/
│   └── RegistrationContext.jsx  # Global state management
├── data/
│   └── courses.js            # Static course catalog data
├── App.jsx                   # Main app component with routing
├── main.jsx                  # Application entry point
└── index.css                 # Global styles and Tailwind imports

How to Use

Enter Your Name: Start by entering your full name on the landing page
Browse Courses: View the complete course catalog with all available classes
Add Classes: Select up to 5 courses by clicking "Add to Schedule"
Register: Click "Register Classes" once you've selected your courses
View Schedule: Review your complete class schedule with all course details
Manage Schedule: Clear your schedule to start fresh or return to catalog to adjust selections

Data Persistence
All student information and course selections are automatically saved to browser localStorage, ensuring your registration persists across page refreshes and browser sessions.


