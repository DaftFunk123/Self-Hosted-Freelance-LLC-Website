# ScheduleSync - Smart Business Scheduler

A comprehensive scheduling application for family-run businesses that handles appointments, payments, and client management automatically.

## 🚀 Elevator Pitch

ScheduleSync is the smart scheduling assistant for family-run businesses. Imagine having a personal secretary who manages your appointments, sends automatic reminders, enforces your policies, and processes payments—all while you focus on delivering exceptional service. Whether you're renting bounce houses, tutoring students, or running any service-based business, ScheduleSync eliminates scheduling headaches and ensures you never miss a booking or payment again.

## ✨ Key Features

- **Smart Availability**: Set your working hours with one click; the system automatically blocks out personal events
- **Policy Enforcement**: Automated late fees, cancellation charges, and rescheduling rules
- **Payment Integration**: Secure automatic charging for appointments and deposits
- **Client Portal**: Clients can book, reschedule, and view their appointment history
- **Automated Workflow**: Reminder emails/SMS, review requests, and promotional tracking
- **Multi-Business Support**: One account can manage multiple business types (tutoring, rentals, etc.)

## 🛠 Technology Implementation

### HTML
The application will use semantic HTML5 elements for structure. We'll have multiple HTML pages including a landing page, login/registration pages, client dashboard, and business owner admin panel. Each page will be properly structured with headers, navigation, main content areas, and footers. Forms will use appropriate input types for dates, times, emails, and phone numbers.

### CSS
We'll implement a responsive design that works on mobile, tablet, and desktop using Flexbox and CSS Grid. The styling will include custom color themes for different business types, smooth animations for modal transitions and hover effects, consistent component styling across the application, and special print styles for invoices and confirmations.

### React
The frontend will be built as a single-page application using React. We'll create reusable components including a CalendarView for date selection, AppointmentForm for booking, ClientDashboard for appointment management, and AdminPanel for business settings. React Router will handle navigation between different views, and we'll use React Context for managing global state like user authentication.

### Service (Backend)
The backend service will provide multiple RESTful endpoints including:
- User authentication (register, login, logout)
- Business management (create/update business profiles)
- Appointment scheduling (check availability, book, reschedule, cancel)
- Payment processing (create payment intents, confirm payments)
- Client management (send reminders, request reviews)

We'll integrate with the OpenWeatherMap API to check weather conditions. For outdoor services like bounce house rentals, the system will automatically warn about rain forecasts and suggest rescheduling options.

### Database
We'll store application data in a MongoDB database. This includes:
- User accounts with authentication credentials
- Business profiles with service offerings, pricing, and policies
- Appointment records with status, timing, and payment information
- Promotion codes and their usage tracking
- Reminder logs and review request history

### WebSocket
WebSocket connections will enable real-time features in the application. When a business owner updates their availability, connected clients will immediately see the changes without refreshing. Business owners will receive instant notifications when new appointments are booked. The system will also show live warnings if multiple users are considering the same time slot simultaneously.

## 🎨 Design Sketches

### Landing Page
![Landing Page Design](images/landing-page.svg)

*Homepage where users can select a business type or log into their account.*

### Booking Interface
![Booking Interface Design](images/booking-interface.svg)

*Calendar view showing available time slots with service selection options.*

### Admin Dashboard
![Admin Dashboard Design](images/admin-dashboard.svg)

*Business owner view showing appointments, revenue, and management controls.*

### Mobile View
![Mobile Design](images/mobile-view.svg)

*Responsive mobile interface for on-the-go booking.*


## HTML Deliverable

The HTML version of ScheduleSync includes:

1. **Homepage (index.html)** - Overview with all technology placeholders
2. **Booking Interface (booking.html)** - Calendar and appointment booking
3. **Admin Dashboard (admin.html)** - Business owner management
4. **Authentication (login.html)** - User login and registration

All required technology placeholders are included:
- Third-party API (Weather integration)
- Database data (Appointment tables)
- WebSocket (Live updates)
- Authentication (Login forms)

## HTML Deliverable Status ✅

The HTML version of ScheduleSync has been successfully deployed to https://startup.scheduling.click

### Pages Created:
1. **Homepage (index.html)** - Overview with all technology placeholders and design sketches
2. **Booking Interface (booking.html)** - Calendar and appointment booking with interactive design
3. **Admin Dashboard (admin.html)** - Business owner management with statistics
4. **Authentication (login.html)** - User login and registration forms

### Technology Placeholders Implemented:
- ✅ **Third-party API**: Weather integration section with OpenWeatherMap placeholder
- ✅ **Database Data**: Appointment tables showing mock MongoDB data
- ✅ **WebSocket**: Live updates section for real-time notifications
- ✅ **Authentication**: Login/registration forms and user session placeholders

### Design Elements:
- SVG design sketches embedded on relevant pages
- Semantic HTML structure with proper navigation
- Responsive design considerations
- Clear visual hierarchy and organization

### Deployment:
- Live at: https://startup.scheduling.click
- GitHub Repository: https://github.com/DaftFunk123/Self-Hosted-Freelance-LLC-Website
- Simon Example: https://simon.scheduling.click

Created by Jason Funk for CS 260 - Web Programming