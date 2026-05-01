function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    var [key, ...value] = pair.split("=");
    value = value.join("=");
    queryParams[key] = value;
  }

  return queryParams;
}
parseQueryString("equation=x=y+1");
module.exports = parseQueryString;
