function parseQueryString(queryString) {
  const queryParams = {};
 if (!queryString) {
    return queryParams;
  }
  if (queryString.startsWith('?')) {
  queryString = queryString.slice(1);
}

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) continue;
    var [key, ...value] = pair.split("=");
    value = value.join("=");
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
