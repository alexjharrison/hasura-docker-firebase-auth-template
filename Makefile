DC=docker-compose
HCLI=$(DC) exec hasura hasura-cli

rebuild:
	@$(DC) build --no-cache

migration: 
	@$(HCLI) migrate create init --from-server
	sudo chown -R `id -u`:`id -g` ./hasura

export:
	@$(HCLI) metadata export
	sudo chown -R `id -u`:`id -g` ./hasura
