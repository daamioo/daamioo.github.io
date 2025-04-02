.PHONY: build clean serve sass

clean:
	rm -rf _site
build: clean sass
	npx @11ty/eleventy
serve: sass
	npx @11ty/eleventy --serve
sass:
	npx sass --style=compressed --no-source-map --load-path=node_modules src/assets/css/styles.scss src/assets/css/styles.css

