from collections import defaultdict
import requests
import sys
import json
import csv
import geopy.distance

OPEN_WEAHTER_MAP_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather"
OPEN_WEAHTER_MAP_API_KEY = "3ca11b63c2ad4dc9fa4e0fc32d8708ae"


if len(sys.argv) != 3:
  print("usage: python genData.py <lat> <long>")
  sys.exit(0)

with open("data.csv", "r") as f:
  lines = list(csv.reader(f, delimiter=","))[1:]

lat, lon = map(float, sys.argv[1:])
weather_params = {"lat": lat, "lon": lon, "appid": OPEN_WEAHTER_MAP_API_KEY}

def is_near(coord_1, coord_2):
  return geopy.distance.geodesic(coord_1, coord_2).km <= 10


stations_by_id = defaultdict(lambda: [])
for line in lines:
  stations_by_id[line[0]].append(line)

near_stations = {station_id: station for station_id, station in stations_by_id.items() if is_near((float(station[0][16]), float(station[0][15])), (lat, lon))}

weather = requests.get(OPEN_WEAHTER_MAP_ENDPOINT, params=weather_params).json()

print(weather["weather"][0]["main"])

data = {"center": {"lat": lat, "lon": lon}, "weather": weather["weather"][0]["main"], "stations": [{"center":{"lat": station[0][16], "lon": station[0][15]}, "color": station[0][4], "radius": 40} for station in near_stations.values()]}

with open("data.json", "w+") as f:
  json.dump(data, f)
