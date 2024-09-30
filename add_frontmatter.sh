#!/bin/bash

if ! grep -q "^---" "$1"; then
  title=$(basename "$1" .md)
  tmpfile=$(mktemp)
  {
    echo "---"
    echo "title: \"$title\""
    echo "---"
    cat "$1"
  } > "$tmpfile" && mv "$tmpfile" "$1"
fi
