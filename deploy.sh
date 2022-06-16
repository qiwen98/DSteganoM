#!/usr/bin/env sh

set -e

npm i 
npm run build

npm run deploy

## update master
git add -A
git commit -m 'New Deployment'
git push -f -u origin master



### update gh-pages
git checkout gh-pages

git fetch --all

####

# rebase
git rebase gh-pages
# git rm -r models
git checkout master -- models




git add -A

git commit -m "Adding 'models' directory from 'master' branch."
git push -f -u origin gh-pages

git checkout master