# Show this help message
help:
    just --list

# Deploy to the production branch
deploy:
    git switch production
    git rebase main
    git push origin production
    git switch -
