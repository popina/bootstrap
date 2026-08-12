#!/usr/bin/env bash

set -Eeuo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
readonly ROOT_DIR
readonly INSTALLER="$ROOT_DIR/public/install"

bash -n "$INSTALLER"

help_output="$(bash "$INSTALLER" --help)"
grep -Fq 'Popina macOS developer setup' <<< "$help_output"
grep -Fq -- '--skip-project' <<< "$help_output"

error_output="$(mktemp)"
trap 'rm -f "$error_output"' EXIT
if bash "$INSTALLER" --profile mobile --skip-apps --skip-project 2> "$error_output"; then
  printf 'Expected the unavailable mobile profile to fail.\n' >&2
  exit 1
fi
grep -Fq 'mobile developer profile is coming later' "$error_output"
grep -Fq 'DEFAULT_POPINA_CLI_VERSION="5.0.5-20260728234909Z"' "$INSTALLER"
grep -Fq "mise exec \"node@\${NODE_VERSION}\" -- popina init" "$INSTALLER"

printf 'Installer checks passed.\n'
