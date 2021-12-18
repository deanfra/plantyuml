
# PlantyUML NodeJS Server

A simple NodeJS server to serve PlantUML SVG diagrams.

This project can be run with Docker, which builds a Node/Java container that installs Graphvis.

---

## Endpoints
The `/svg` endpoint accepts a `POST` method and the data is expected to be a JSON object with the key `uml`. The `uml` value should be a valid PlantUML string. For example:

```JSON
{ "uml": "@startuml\nAlice -> Bob\n@enduml" }
```

---

## Run locally (dev server)

```bash
$ npm run dev
```

Deploys to `http://localhost:3001`

---

## Run with Docker

Navigate to the parent directory in this project and run:

```bash
$ docker-compose build
$ docker-compose up
```

Server deploys to `http://localhost:3001`  
UI deploys to `http://localhost:9001`

---

## Test the server

To test the server, then you can run this curl:

```bash
curl -d '{ "uml": "@startuml\nAlice -> Bob\n@enduml" }' -H "Content-Type: application/json" -X POST http://localhost:3001/svg
```