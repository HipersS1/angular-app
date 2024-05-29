import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-header',
  standalone: true,
  imports: [],
  templateUrl: './game-header.component.html',
  styleUrl: './game-header.component.scss',
})
export class GameHeaderComponent {
  @Input() currentPlayer: string = '';
  @Input() currentRound!: number;
  @Input() maxRound!: number;
}
