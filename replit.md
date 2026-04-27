# Blossom Group Website

## Overview
A simple static "Coming Soon" placeholder website for the Blossom Group.

## Project Structure
- `index.html` — Main landing page with "Coming Soon" message
- `README.md` — Basic project documentation

## Running the Project
The site is served using Python's built-in HTTP server:
```
python3 -m http.server 5000 --bind 0.0.0.0
```
This runs on port 5000 and serves the static files from the project root.

## Deployment
Configured as a static site deployment with the project root as the public directory.
