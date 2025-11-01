# 🚌 Bus Ticketing and Payment System

A cloud-powered web application that enables travelers to easily book bus tickets, check seat availability, and make secure payments online.

## 🚀 Features
- Real-time bus listing and seat availability
- Secure ticket booking and payment process
- Dockerized for easy deployment
- Cloud-hosted using Render

## 🧰 Tech Stack
- **Backend:** Node.js, Express.js
- **Containerization:** Docker
- **Cloud Deployment:** Render
- **Language:** JavaScript

## 🖥️ Run Locally
```bash
git clone https://github.com/hamsika27/bus-ticketing-system.git
cd bus-ticketing-system
docker build -t myapp .
docker run -p 3000:3000 myapp
