'use strict';

import {
  Dimensions
} from 'react-native';

export const Size = Dimensions.get('window');

export const BoardWidth = Size.width;

export const CellSize = Math.floor(BoardWidth / 10);

export const BorderWidth = 3;

