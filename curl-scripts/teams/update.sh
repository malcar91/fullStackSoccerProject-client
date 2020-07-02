curl "http://localhost:4741/teams/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "team": {
      "name": "'"${NAME}"'",
      "league": "'"${LEAGUE}"'",
      "city": "'"${CITY}"'"
    }
  }'
