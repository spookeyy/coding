# Makefile
include .env    # loads the environment file into the makefile
export $(shell sed 's/=.*//' .env)   # exports all the environment variables

DB_URL ?= postgres://demo:password@localhost:5432/goMigrationDemo?sslmode=disable

# ?= sets a default value if the defined varable is not set. if there are env values, these will be overwritten

migrate-up:
	docker run -v $(PWD)/db/migrations:/db/migrations --network host migrate/migrate \
		-path=/db/migrations -database $(DB_URL) up

migrate-down:
	docker run -v $(PWD)/db/migrations:/db/migrations --network host migrate/migrate \
		-path=/db/migrations -database $(DB_URL) down


# to run up migrations on terminal run:
# make migrate-up

# to run down migrations on terminal run:
# make migrate-down





#BREAKDOWN OF THE UP AND DOWN COMMANDS
# docker run - creates and runs a new container
# -v $(PWD)/db/migrations:/db/migrations:  - Mounts your local db.migrations directory to /db/migrations in container
#                                            $(PWD) = Print Working Directory (current directory)4

# --network host: - Connects the container to the host network, allowing it to access the host's network stack
# migrate/migrate: Uses the official migrate image

# -path=/db/migrations: Path to migrations inside container

# -database $(DB_URL): Connection string from environment variable

# up/down: Direction of migration