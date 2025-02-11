import "leaflet/dist/leaflet.css";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import mapData from "../components/mapData";
import pawMapIconUrl from "../assets/paw-icon-map.svg";
import falsePawMapIconUrl from "../assets/false-paw-icon-map.svg";

const pawMapIcon = new Icon({
  iconUrl: pawMapIconUrl,
  iconSize: [25, 25],
});

const falsePawMapIcon = new Icon({
  iconUrl: falsePawMapIconUrl,
  iconSize: [25, 25],
});

const MapLayout = () => {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-gray-900">
      <section className="h-[70vh] w-full">
        <Header />
      </section>
      <main className="flex-1 px-4 py-12">
        <div className="space-y-2 text-black mb-4 dark:text-white">
          <h1 className="text-2xl font-bold">
            Animal Shelters help to save animals all over the world
          </h1>
          <p className="font-light text-lg">
            Animal shelters help save animals by providing them with food, care,
            and a safe place to stay. They rescue animals in need, protect them,
            and find loving homes for them.
          </p>
        </div>
        <div className="mx-[-1rem] px-4">
          <MapContainer
            className="leaflet-container w-full h-[25rem] z-0"
            center={[0, 0]}
            minZoom={2}
            zoom={2}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mapData.map((marker) => (
              <Marker
                key={marker.id}
                position={[
                  marker.coordinates.latitude,
                  marker.coordinates.longitude,
                ]}
                icon={marker.status ? pawMapIcon : falsePawMapIcon}
              >
                <Popup>
                  <div>
                    <h2 className="text-center underline mb-1">
                      {" "}
                      {marker.country}{" "}
                    </h2>
                    <div>
                      <span className="underline">City</span>: {marker.city}
                    </div>
                    <div>
                      <span className="underline">Latitude</span>:
                      {marker.coordinates.latitude}
                    </div>
                    <div>
                      <span className="underline">Longitude</span>:
                      {marker.coordinates.longitude}
                    </div>
                    <div>
                      <span className="underline">Status</span>:
                      {marker.status ? "Saved" : "Found"}
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </main>
      <div className="w-full h-[40vh]">
        <Footer />
      </div>
    </div>
  );
};

export default MapLayout;
