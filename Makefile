.EXPORT_ALL_VARIABLES:

.PHONY: ensure-node-version
ensure-node-version:
		node ./scripts/ensureNodeVersion

.PHONY: start
start: ensure-node-version
		yarn start

.PHONY: build
build: ensure-node-version
		yarn build

.PHONY: serve
serve: ensure-node-version
		yarn serve

.PHONY: clean
clean: ensure-node-version
		yarn clean

.PHONY: setup
setup: ensure-node-version
		yarn

.PHONY: reset
reset: ensure-node-version
		yarn clean
		rm -rf node_modules
