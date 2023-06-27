# Show this help message
help:
    just --list

# Run the development server
run:
    yarn run dev

favicon_source := "static/favicon.svg"

# Generate the favicons
generate-favicons:
    convert -background none {{favicon_source}} -resize 64x64 static/favicon.ico
    convert -background none {{favicon_source}} -resize 16x16 static/favicon-16x16.png
    convert -background none {{favicon_source}} -resize 32x32 static/favicon-32x32.png
    convert -background none {{favicon_source}} -resize 96x96 static/favicon-96x96.png
    convert -background none {{favicon_source}} -resize 160x160 static/favicon-160x160.png
    convert -background none {{favicon_source}} -resize 196x196 static/favicon-196x196.png

# Deploy to the production branch
deploy:
    git switch production
    git rebase main
    git push origin production
    git switch -
