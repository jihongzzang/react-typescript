import { PlaceItem } from '../types';

import { PlaceImage } from './PlaceImage';

export function Place({ place }: { place: PlaceItem }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}
