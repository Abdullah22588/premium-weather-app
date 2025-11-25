// src/utils/helpers.js
export function groupForecastByDay(forecastJson) {
  // forecastJson.list: array with 3-hour entries
  if (!forecastJson || !forecastJson.list) return [];
  const days = {};

  forecastJson.list.forEach(item => {
    const d = new Date(item.dt * 1000);
    const dayKey = d.toISOString().slice(0,10); // YYYY-MM-DD
    if (!days[dayKey]) days[dayKey] = [];
    days[dayKey].push(item);
  });

  // convert to array and pick summary values (we pick the midday item or average)
  const daily = Object.keys(days).map(date => {
    const items = days[date];
    // pick item at midday if possible
    let midday = items.find(i => new Date(i.dt * 1000).getHours() === 12) || items[Math.floor(items.length/2)];
    const temps = items.map(i => i.main.temp);
    const min = Math.min(...temps);
    const max = Math.max(...temps);
    return {
      date,
      tempMin: min,
      tempMax: max,
      weather: midday.weather[0],
      raw: items
    };
  });

  // return next 5 days (including today)
  return daily.slice(0, 5);
}

export function formatDateHuman(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
}
