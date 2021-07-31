DC=docker-compose
HCLI=$(DC) exec hasura hasura-cli


migration: 
	@$(HCLI) migrate create init --from-server
	sudo chown -R `id -u`:`id -g` ./hasura

export:
	@$(HCLI) metadata export
	@$(DC) exec app npm run introspect
	# sudo chown -R `id -u`:`id -g` ./hasura ./app

rebuild:
	@$(DC) down
	@$(DC) build --no-cache
	@$(DC) up -d

reboot:
	@$(DC) down
	@$(DC) build 
	@$(DC) up -d

rebuild-prod:
	@$(DC) -f docker-compose.prod.yml down
	@$(DC) -f docker-compose.prod.yml build --no-cache
	@$(DC) -f docker-compose.prod.yml up -d

reboot-prod:
	@$(DC) -f docker-compose.prod.yml down
	@$(DC) -f docker-compose.prod.yml build 
	@$(DC) -f docker-compose.prod.yml up -d

