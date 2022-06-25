import xmltodict
import csv
from owslib.wfs import WebFeatureService

ENDPOINT = "https://api.atmonormandie.fr/index.php/lizmap/service/?repository=dindice&project=flux_indice_atmo_normandie&SERVICE=WFS&VERSION=1.3.0&REQUEST=GetCapabilities"

wfs = WebFeatureService(ENDPOINT, version='1.1.0')
print(wfs.identification.title)
print(list(wfs.contents))

keys = wfs.get_schema("indice_atmo_actuel")["properties"].keys() 

atmo_actuel = wfs.getfeature(typename="indice_atmo_actuel", propertyname=list(keys))

with open("out.xml", "wb+") as f:
  f.write(atmo_actuel.read())

with open("out.xml") as xmlfile:
  xml = xmltodict.parse(xmlfile.read())

with open("data.csv", "w") as f:
  writer = csv.writer(f)
  writer.writerow(keys)

  for line in xml["wfs:FeatureCollection"]["gml:featureMember"]:
    line = line['qgs:indice_atmo_actuel']
    writer.writerow(list(line.values())[1:])
