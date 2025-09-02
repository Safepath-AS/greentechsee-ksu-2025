#!/usr/bin/env sh

INDEX_HTML=/usr/share/nginx/html/index.html

# Replacements in production
# sed -i -e 's,__VARIABLE__,'"$VARIABLE"',g' $INDEX_HTML

exec "$@"
