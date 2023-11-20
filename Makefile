install: # При первом клонировании репозитория.
	npm ci

brain-games: # При первом клонировании репозитория.
	node bin/brain-games.js

publish: #Публикация
	npm publish --dry-run