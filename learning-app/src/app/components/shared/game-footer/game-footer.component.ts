import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GameState } from '../../../types';

@Component({
  selector: 'app-game-footer',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './game-footer.component.html',
  styleUrl: './game-footer.component.scss',
})
export class GameFooterComponent {
  @Input() isVisible!: boolean;
  @Input() winningMessage!: string;
  @Input() nextState!: GameState;

  @Output() nextStateEvent: EventEmitter<GameState> =
    new EventEmitter<GameState>();

  sendNextState() {
    this.nextStateEvent.emit(this.nextState);
  }
}
