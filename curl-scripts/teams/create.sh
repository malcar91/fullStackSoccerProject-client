curl "http://localhost:4741/teams" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "team": {
      "name": "'"${NAME}"'",
      "league": "'"${LEAGUE}"'",
      "city": "'"${CITY}"'"
    }
  }'
