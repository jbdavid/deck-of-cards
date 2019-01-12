import {Suit} from './suit';
import {FaceValue} from './face-value';

export interface Card {
  suit: Suit;
  faceValue: FaceValue;
}
