import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimerComponent } from '../../shared/timer/timer.component';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { BestOfMatchesComponent } from '../../shared/best-of-matches/best-of-matches.component';
import { GameHeaderComponent } from '../../shared/game-header/game-header.component';
import { GameState, PlayGroundSymbol } from '../../../types';
import { GameFooterComponent } from '../../shared/game-footer/game-footer.component';
import { TimelineModule } from 'primeng/timeline';
import { RoundHistoryComponent } from '../../shared/round-history/round-history.component';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [
    CommonModule,
    TimerComponent,
    ButtonModule,
    ButtonGroupModule,
    BestOfMatchesComponent,
    GameHeaderComponent,
    GameFooterComponent,
    TimelineModule,
    RoundHistoryComponent,
  ],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.scss',
})
export class TicTacToeComponent {
  playGroundSpaces: PlayGroundSymbol[] = new Array(9).fill(null);
  playGroundWinPositions: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  // Components communication
  isGameVisible: boolean = false;
  currentRound: number = 0;
  maxRounds: number = 0;
  winningMessage: string = '';
  nextState!: GameState;

  // Game logic
  isNextPlayerX: boolean = true;
  isPlayGroundDisabled: boolean = true;
  roundHistory!: string[];

  starNewGame(event: boolean) {
    this.isGameVisible = event;
    this.resetPlayGround();
  }

  resetPlayGround() {
    this.playGroundSpaces = new Array(9).fill(null);
    this.roundHistory = new Array(this.maxRounds).fill('');
    this.isNextPlayerX = true;
    this.isPlayGroundDisabled = false;
    this.currentRound = 1;
    this.winningMessage = '';
  }

  nextPlayGround() {
    this.playGroundSpaces = new Array(9).fill(null);
    this.isPlayGroundDisabled = false;
    this.currentRound++;
    this.winningMessage = '';
  }

  selectPlayBox(i: number) {
    if (this.playGroundSpaces[i]) {
      return;
    }

    this.playGroundSpaces[i] = this.getCurrentPlayer();

    this.checkWinningCondition();

    this.isNextPlayerX = !this.isNextPlayerX;
  }

  checkWinningCondition() {
    for (let index = 0; index < this.playGroundWinPositions.length; index++) {
      const currentWinningLine = this.playGroundWinPositions[index];

      if (this.playGroundSpaces[currentWinningLine[0]] === null) {
        continue;
      }

      if (
        this.playGroundSpaces[currentWinningLine[0]] ===
          this.playGroundSpaces[currentWinningLine[1]] &&
        this.playGroundSpaces[currentWinningLine[0]] ===
          this.playGroundSpaces[currentWinningLine[2]]
      ) {
        this.isPlayGroundDisabled = true;
        this.winningMessage = `Player ${this.getCurrentPlayer()} won`;
        this.roundHistory[this.currentRound - 1] = this.getCurrentPlayer();
        this.getNextRoundState();
      }
    }

    if (
      !this.isPlayGroundDisabled &&
      this.playGroundSpaces.every((pgs) => pgs)
    ) {
      this.winningMessage = 'Players tied';
      this.roundHistory[this.currentRound - 1] = 'Tie';
    }
  }

  setNextState($event: GameState) {
    switch ($event) {
      case GameState.StartNewGame:
        this.resetPlayGround();
        break;
      case GameState.NextGame:
        this.nextPlayGround();
        break;
      default:
        console.log('Not good');
        break;
    }
  }

  getCurrentPlayer(): PlayGroundSymbol {
    return this.isNextPlayerX ? 'X' : 'O';
  }

  getNextRoundState() {
    if (this.currentRound == this.maxRounds) {
      this.nextState = GameState.StartNewGame;
    } else {
      this.nextState = GameState.NextGame;
    }
  }
}
