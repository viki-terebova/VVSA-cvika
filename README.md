# VVSA Frontend (Angular 20+)

This project is generated to match the exercise brief:
- Standalone components (no NgModules)
- Router-based navigation with `loadComponent` lazy loading
- HTTP client provided globally in `app.config.ts`
- Proxy config at dev server for `/api` → `http://localhost:5000`
- Transactions service, list and detail screens
- A standalone pipe for transaction type labels

## Quickstart

```bash
# 1) Install dependencies
npm install

# 2) (Optional) Start a mock API at http://localhost:5000
npm run mock:api

# 3) Start Angular dev server
npm start
```

Open http://localhost:4200

## API Endpoints (expected)

- `GET http://localhost:5000/api/transactions`
- `GET http://localhost:5000/api/transactions/:id`

You can use the included mock server to return example responses.