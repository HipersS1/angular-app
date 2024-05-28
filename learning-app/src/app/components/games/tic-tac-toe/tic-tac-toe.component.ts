import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { TimerComponent } from '../../shared/timer/timer.component';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';

type PlayGroundSymbol = 'X' | 'O';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [CommonModule, TimerComponent, ButtonModule, ButtonGroupModule],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.scss',
})
export class TicTacToeComponent {
  @Output() countDownStartEvent: EventEmitter<void> = new EventEmitter<void>();

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

  isStartGameButtonDisabled: boolean = false;
  isNextPlayerX: boolean = true;

  startGame() {
    console.log('Game started');
    this.countDownStartEvent.emit();
    this.isStartGameButtonDisabled = true;
  }

  finishGame() {
    console.log('Game finished');
    this.isStartGameButtonDisabled = false;
  }

  selectPlayBox(i: number) {
    this.playGroundSpaces[i] = this.getCurrentPlayer();

    this.checkWinningCondition();

    this.isNextPlayerX = !this.isNextPlayerX;
  }

  getCurrentPlayer(): PlayGroundSymbol {
    return this.isNextPlayerX ? 'X' : 'O';
  }

  checkWinningCondition() {
    for (let index = 0; index < this.playGroundWinPositions.length; index++) {
      const currentWinningLine = this.playGroundWinPositions[index];

      if (this.playGroundSpaces[currentWinningLine[0]] === null) {
        return;
      }

      if (
        this.playGroundSpaces[currentWinningLine[0]] ===
          this.playGroundSpaces[currentWinningLine[1]] &&
        this.playGroundSpaces[currentWinningLine[0]] ===
          this.playGroundSpaces[currentWinningLine[2]]
      ) {
        console.log(`Player ${this.getCurrentPlayer()} won the game`);
      }
    }
  }
}
