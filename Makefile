install:
	(cd ui & npm install)

docker:
	(cd ~ && docker compose up)

test:
	(cd e2e && npm run e2e)