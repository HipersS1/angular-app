export type PlayGroundSymbol = 'X' | 'O';

export enum GameState {
  InProgress = 'In Progress',
  StartNewGame = 'New Game',
  NextGame = 'Next round',
}

export interface Count {
  [key: string]: number;
}
