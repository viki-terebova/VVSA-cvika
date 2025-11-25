#!/usr/bin/env sh
set -e

(
  cd uloha2/vvsa-frontend
  npm install
  ng serve --proxy-config proxy.conf.json
) &

(
  cd uloha3
  dotnet watch run
) &

wait