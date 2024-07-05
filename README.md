<img alt="Rentify - house rental platform" src="/frontend/public/1.png">

<h1 align="center">Rentify</h1>

<p align="center">
    House Rental Platform
</p>

<p align="center">
  <a href="https://twitter.com/anchit1909" target="_blank">
    <img src="https://img.shields.io/twitter/follow/anchit1909?style=flat&label=anchit1909&logo=twitter&color=0bf&logoColor=fff" alt="Anchit Sinha Twitter follower count" />
  </a>
  <a href="https://github.com/Anchit1909/rentify-house-rental-django-nextjs" target="_blank">
    <img src="https://img.shields.io/github/stars/Anchit1909/rentify-house-rental-django-nextjs?label=Anchit1909%2FRentify" alt="SocialAPI repo star count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

## Introduction

Rentify is a house rental platform. The frontend of the application is built using NextJs, Typescript, Tailwind CSS and the backend is built using Python, Django, PostgreSQL. The backend is containerized and is deployed on a VM instance in the cloud using an Nginx Server.

## Features

- Register and Login to the platform
- Create a new apartment listing.
- Explore all listed apartments on the home page.
- Filter apartments based on categories, location, no. of bedrooms, bathrooms and no. of guests.
- Chat with apartment host using socket connection.
- Book your favorite apartment.
- View listed properties.
- View favorite properties.
- View your reservations.

## Tech Stack

- [Python](https://www.python.org/)
- [Django](https://www.djangoproject.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [NextJs](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Socket IO](https://socket.io/)
- [Docker](https://www.docker.com/)
- [Nginx](https://nginx.org/en/)

## Screenshots

### Home Page

<img alt="Home Page" src="/frontend/public/1.png">

### Apartment Page

<img alt="Apartment Page" src="/frontend/public/7.png">

### Search Modal

<img alt="Search Modal" src="/frontend/public/2.png">

### Add Property Modal

<img alt="Add Property Modal" src="/frontend/public/3.png">

### Chat screen

<img alt="Chat screen" src="/frontend/public/4.png">

### My Reservations Page

<img alt="My Reservations Page" src="/frontend/public/6.png">

### My Favorites Page

<img alt="My Favorites Page" src="/frontend/public/8.png">

## Running Locally

### Cloning the repository to the local machine.

```bash
git clone
```

### Go to frontend folder

```bash
cd frontend
```

### Installing the dependencies.

```bash
npm install
```

### Running the application.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```

### Go to backend

```bash
cd backend
```

### Storing API key in .env file.

Create a file in backend root directory of project named **.env.dev**. And store your postgresDB keys in it, as shown in the .env.dev file.

### Build the image

```bash
docker compose -f docker-compose.yml build
```

### Run the container

Then, run the application in the command line and it will be available at `http://localhost:8000`.

```bash
docker compose -f docker-compose.yml up -d
```

## Author

- Anchit Sinha ([@anchit1909](https://twitter.com/anchit1909))
