<<<<<<< HEAD
https://happy-iris-ster.here.now/
=======
# AgriMind Lanka

AI + IoT powered agriculture analytics and marketplace MVP for Sri Lankan farmers and crop buyers.

## Stack

- Frontend: React, Vite, TailwindCSS, Framer Motion, Recharts, Lucide React
- Backend: FastAPI, SQLAlchemy, PostgreSQL-ready models, JWT auth, WebSockets
- AI: OpenAI-ready service with graceful mock fallback
- Realtime: simulated IoT telemetry over WebSockets

## Quick Start

### Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://127.0.0.1:5173`.

## Demo Login

The UI supports demo role switching without needing a live database:

- Farmer: `farmer@agrimind.lk`
- Buyer: `buyer@agrimind.lk`
- Password: any value

## Environment

Backend values are documented in `backend/.env.example`; frontend values in `frontend/.env.example`.

## Deployment Notes

- Set `DATABASE_URL` to a PostgreSQL URL in production.
- Set a strong `JWT_SECRET_KEY`.
- Add `OPENAI_API_KEY` for real AI calls; mock responses are returned when absent.
- Serve frontend build output from any static host and point `VITE_API_URL` / `VITE_WS_URL` to the backend.

## Structure

```text
AgriMind-Lanka/
  backend/
    app/
      api/
      core/
      models/
      schemas/
      services/
      main.py
  frontend/
    src/
      components/
      context/
      data/
      pages/
      services/
```
>>>>>>> 6f57d4c (Add local folder files)
