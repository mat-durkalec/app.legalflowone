# LegalFlow One — Project Reference

## What This Project Is

Marketing website + REST API backend for **LegalFlow One**, a company that helps businesses establish and manage their companies. Includes a full-stack Docker deployment with CI/CD to an OVH VPS.

---

## Project Structure

```
app.legalflowone/
├── Dockerfile                  # Python backend image (builds from src/)
├── docker-compose.yml          # Orchestrates nginx, backend, db
├── .env                        # Local secrets (never commit)
├── .env.example                # Template for .env
├── nginx/
│   └── nginx.conf              # Serves static/, proxies /api/* to backend
├── static/
│   └── index.html              # Marketing landing page (pure HTML/CSS)
├── src/
│   ├── app.py                  # Flask API
│   └── requirements.txt        # Python dependencies
├── db/
│   └── init.sql                # MySQL schema + seed data
└── .github/
    └── workflows/
        └── deploy.yml          # GitHub Actions CI/CD pipeline
```

---

## Stack

| Layer    | Technology              |
|----------|-------------------------|
| Frontend | HTML/CSS (static)       |
| Backend  | Python 3.12 + Flask     |
| Database | MySQL 8.0               |
| Server   | NGINX (alpine)          |
| Runtime  | Docker + Docker Compose |
| CI/CD    | GitHub Actions          |

---

## Services (docker-compose)

| Service   | Image           | Port            | Role                              |
|-----------|-----------------|-----------------|-----------------------------------|
| `nginx`   | nginx:alpine    | `80` (public)   | Serves static + reverse proxy     |
| `backend` | Dockerfile      | `5000` (internal) | Flask REST API                  |
| `db`      | mysql:8.0       | `3306` (internal) | MySQL database                  |

NGINX routes:
- `/*` → serves `static/index.html`
- `/api/*` → proxies to `backend:5000/api/`

---

## API Endpoints

| Method | Path           | Description              |
|--------|----------------|--------------------------|
| GET    | `/api/health`  | DB connectivity check    |
| GET    | `/api/services`| Returns services table   |

---

## Database

- Database name: `legalflowone`
- App user: `legalflow`
- Initialized from `db/init.sql` on first run
- Data persisted in Docker volume `mysql_data`
- `services` table seeded with 6 company service records

---

## Environment Variables

Stored in `.env` (copy from `.env.example`):

```
DB_NAME=legalflowone
DB_USER=legalflow
DB_PASSWORD=<secret>
MYSQL_ROOT_PASSWORD=<secret>
```

---

## Running Locally

```bash
cp .env.example .env      # fill in passwords
docker compose up --build
```

- Frontend: http://localhost
- Health check: http://localhost/api/health

Stop: `docker compose down`
Logs: `docker compose logs -f backend`

---

## Deployment — OVH VPS

- **Host:** `vps-bc406ee6.vps.ovh.net`
- **User:** `ubuntu`
- **App directory:** `/home/ubuntu/app.legalflowone`
- **Docker & Docker Compose:** already installed on the VPS

### CI/CD Flow (GitHub Actions)

Triggered on every push to `main`:
1. Copies project files to VPS via SCP (excludes `.git`, `.env`)
2. SSHs in, writes `.env` from GitHub secrets
3. Runs `docker compose up --build -d`
4. Prunes unused Docker images

### Required GitHub Secrets

| Secret               | Description                  |
|----------------------|------------------------------|
| `VPS_PASSWORD`       | SSH password for ubuntu user |
| `DB_PASSWORD`        | MySQL app user password      |
| `MYSQL_ROOT_PASSWORD`| MySQL root password          |

Add at: `GitHub repo → Settings → Secrets and variables → Actions`

---

## Frontend — Marketing Page

Single-page marketing site at `static/index.html`. Sections:
- Sticky nav with CTA
- Hero with headline and actions
- Stats bar (2,500+ companies, 98% satisfaction, 15+ jurisdictions, 48h setup)
- Services grid (6 cards)
- How It Works (4 steps)
- Why Us (dark navy section)
- Testimonials (3 quotes)
- CTA banner (email link)
- Footer

Color palette: Navy `#0d1b2a`, Blue `#1a56db`, Gold `#f5a623`. No external dependencies.
