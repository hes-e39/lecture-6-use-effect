import { useEffect, useState } from 'react';
import Locations from './Locations';
import MapComponent from './MapComponent';
import { fetchLocations } from './api';

const MapApp = () => {
    const [locations, setLocations] = useState(null);
    const [favoriteIds, setFavoriteIds] = useState([]);

    useEffect(() => {
        fetchLocations().then(data => {
            setLocations(data);
        });
    }, []);

    const toggleFavorite = id => {
        const isFavorite = favoriteIds.includes(id);

        if (isFavorite) {
            setFavoriteIds(favoriteIds.filter(fid => fid !== id));
        } else {
            setFavoriteIds([...favoriteIds, id]);
        }
    };

    return (
        <div className="app">
            <div className="panel">
                <Locations setLocations={setLocations} locations={locations} favoriteIds={favoriteIds} toggleFavorite={toggleFavorite} />
                <MapComponent locations={locations} favoriteIds={favoriteIds} toggleFavorite={toggleFavorite} />
            </div>
        </div>
    );
};

export default MapApp;
