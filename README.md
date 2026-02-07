# MyShule Admin Dashboard (PERN Stack)

An admin dashboard for managing a school’s daily operations — students, staff, classes, fees, attendance, and reporting — built using the PERN stack (PostgreSQL, Express, React, Node.js).

## Overview

MyShule Admin Dashboard is designed for school administrators to centralize key school data and workflows in one place. It provides a secure admin portal to manage academic structures, student records, billing/fees, and operational reporting.

## Core Features

- **Authentication & Roles**
  - Secure login (JWT/session-based)
  - Role-based access control (e.g., Admin, Bursar, Teacher, Registrar)

- **Students & Guardians**
  - Register and manage students
  - Parent/guardian contact management
  - Student enrollment status and profile details

- **Staff & Teachers**
  - Staff profiles and department assignment
  - Teacher-class mapping

- **Classes, Streams & Subjects**
  - Manage classes/grades and streams
  - Subject catalog and allocations

- **Attendance**
  - Daily attendance capture
  - Attendance history and export

- **Fees & Payments**
  - Fee structures (term/year) and invoicing
  - Payment tracking and balances
  - Basic receipts and statements

- **Reports & Analytics**
  - Enrollment summary
  - Fee collection reports
  - Attendance metrics

## Tech Stack

- **Frontend:** React + Vite + TypeScript
- **Backend:** Node.js + Express
- **Database:** PostgreSQL
- **ORM/Query:** (choose one) Prisma / Sequelize / Knex / raw SQL
- **Auth:** JWT + bcrypt (recommended)
- **UI/Notifications:** (optional) Sonner / Refine UI components

## Project Structure (Typical)

```txt
myshule_app/
  myshule_app-frontend/   # React (Vite)
  myshule_app-backend/    # Node/Express API
  db/                     # migrations, seeds (optional)
