install: # При первом клонировании репозитория.
	npm ci

brain-games: # Запуск игры.
	node bin/brain-games.js

brain-even: # Запуск игры Even or No.
	node bin/brain-even.js	

publish: # Публикация.
	npm publish --dry-run

lint: # Запуск линтера.
	npx eslint .
