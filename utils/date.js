export function showDateUtility(container) {
  const now = new Date();
  container.innerHTML = `<p>Current date: ${now.toLocaleString()}</p>`;
}
