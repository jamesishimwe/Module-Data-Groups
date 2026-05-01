function parseQueryString(queryString) {
  const queryParams = {};
  
  if (!queryString) return queryParams;

  if (queryString.startsWith('?')) {
    queryString = queryString.slice(1);
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) continue;
    
    const [rawKey, ...rawValue] = pair.split("=");
    const key = decodeURIComponent(rawKey);
    const value = decodeURIComponent(rawValue.join("="));
    
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
