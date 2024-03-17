export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(new Error(res.statusText));
}
