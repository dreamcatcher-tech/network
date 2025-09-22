#!/usr/bin/env bash
set -euo pipefail

sync_codex_config() {
  local dest_dir="$HOME/.codex"
  local host_dir="/tmp/host-codex"
  mkdir -p "$dest_dir"

  for f in auth.json config.toml; do
    if [[ -f "$host_dir/$f" ]]; then
      cp -f "$host_dir/$f" "$dest_dir/"
    fi
  done
}

main() {
  sync_codex_config
  echo "postCreate: synced Codex configuration"
}

main
