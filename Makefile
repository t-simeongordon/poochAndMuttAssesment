install:
	(cd ui && npm install)

localUI:
	(cd ui && npm run dev)

docker:
	(cd ~ && docker compose up)

test:
	(cd e2e && ls && npx cypress run)