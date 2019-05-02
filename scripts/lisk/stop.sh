#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck > /dev/null && shellcheck "$0"

# A temporary dir created to make the docker-compose files from
# https://github.com/LiskHQ/lisk/tree/1.2.0/docker available.
TMP_DIR="${TMPDIR:-/tmp}/@iov"
mkdir "$TMP_DIR" || true

LISK_DIR="lisk"
# can be a branch or tag
LISK_TAG="v1.4.0"

(
  cd "$TMP_DIR"
  echo "Navigated to temp directory $(pwd)"
  if [ -d "$LISK_DIR" ]; then
    cd "$LISK_DIR"
    if ! git describe --tags --exact-match --match="$LISK_TAG"; then
      echo "WARNING: Found incompatible Lisk repo. Deleting..."
      cd "$TMP_DIR"
      rm -rf "$LISK_DIR"
      git clone --depth 1 --branch "$LISK_TAG" https://github.com/LiskHQ/lisk.git
    else
      cd "$TMP_DIR"
    fi
  else
    git clone --depth 1 --branch "$LISK_TAG" https://github.com/LiskHQ/lisk.git
  fi

  (
    cd "lisk/docker"
    cp .env.development .env

    make mrproper
  )
)
