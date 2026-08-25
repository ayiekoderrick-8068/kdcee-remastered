# KDCCE Remastered

Group Project — Module 6.

```
kdcee-remastered/
├── frontend/     React + Vite + Tailwind
├── backend/      Flask + SQLAlchemy + JWT
└── .env.example  Environment variable template (root-level; each side
                   also has its own .env.example for its own variables)
```

Dependencies are already declared and verified installable in both
`frontend/package.json` (+ `package-lock.json`) and `backend/requirements.txt` —
you only need to run the install step once per machine.

## Getting started

```bash
# backend
cd backend
python3 -m venv .venv
./.venv/bin/pip install -r requirements.txt
cp .env.example .env
FLASK_APP=wsgi.py ./.venv/bin/python3 -m flask run --port 5000

# frontend (separate terminal)
cd frontend
npm install
cp .env.example .env
npm run dev
```

Backend health check: `GET http://localhost:5000/api/health` → `{"status":"ok"}`

## Branches

`main` is the integration branch and currently holds the verified scaffold
above. Each team member works on their own `<name>-frontend` /
`<name>-backend` branch and opens a pull request into `main` when ready —
nothing is merged automatically.

## Team

- imani
- john
- jeremy
- allan
- derrick
