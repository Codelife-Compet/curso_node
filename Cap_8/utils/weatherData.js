exports.getWeatherData = async () => [
  {
    location: {
      name: "Portland",
      coordinates: { lat: 45.5154586, lng: -122.6793461 },
    },
    forecastUrl: "https://api.weather.gov/gridpoints/PQR/112,103/forecast",
    iconUrl: "https://api.weather.gov/icons/land/day/tsra,40?size=medium",
    weather: "Chance showers and thunderstorms",
    temp: "59 F",
  },
  {
    location: {
      name: "Bend",
      coordinates: { lat: 45.0100022, lng: -120.6793461 },
    },
    forecastUrl: "https://api.weather.gov/gridpoints/PDT/34,40/forecast",
    iconUrl: "https://api.weather.gov/icons/land/day/tsra_sct,50?size=medium",
    weather: "Chance showers and thunderstorms",
    temp: "51 F",
  },
  {
    location: {
      name: "Manzanita",
      coordinates: { lat: 45.7100022, lng: -123.6793461 },
    },
    forecastUrl: "https://api.weather.gov/gridpoints/PQR/73,120/forecast",
    iconUrl: "https://api.weather.gov/icons/land/day/tsra,90?size=medium",
    weather: "Chance showers and thunderstorms",
    temp: "55 F",
  },
];
