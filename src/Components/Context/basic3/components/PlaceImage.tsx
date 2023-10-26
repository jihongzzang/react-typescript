import { useContext } from 'react';

import { ImageSizeContext } from '../ImageContext';

import { PlaceItem } from '../types';

import { getImageUrl } from '../utils';

export function PlaceImage({ place }: { place: PlaceItem }) {
  const imageSize = useContext(ImageSizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
