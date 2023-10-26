import { PlaceItem } from './types';

export function getImageUrl(place: PlaceItem) {
  return 'https://i.imgur.com/' + place.imageId + 'l.jpg';
}
