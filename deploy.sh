#!/bin/bash

set -e

if [ $TRAVIS_PULL_REQUEST == "true" ]; then
  echo "Don't build PRs."
  exit 0
fi


pelican content
rm -rf ../blog
git clone https://${GH_TOKEN}@github.com/sunu/sunu.github.com.git ../blog
pushd ../blog
git rm -rf *
popd
cp -r output/* ../blog
cd ../blog
git config user.email "sunu0000@gmail.com"
git config user.name "Auto Deploy"
git add -A .
git commit -a -m "Travis #$TRAVIS_BUILD_NUMBER"
git push --quiet --force origin master > /dev/null 2>&1
