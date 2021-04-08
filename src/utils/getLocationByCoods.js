const getLocationByCoords = async (lat, long) => {
  const res = await fetch(`https://cors.bridged.cc/https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`);

  const data = await res.json();

  return data[0].woeid;
}

export default getLocationByCoords;