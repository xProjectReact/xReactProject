import { UPDATE_CURRENT_MEDIA } from './types';

export const updateCurrentMedia = path => {
  return {
    type: UPDATE_CURRENT_MEDIA,
    path
  };
};
