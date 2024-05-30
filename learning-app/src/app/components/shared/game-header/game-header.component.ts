import { Component, Input } from '@angular/core';
import { PlayGroundSymbol } from '../../../types';

@Component({
  selector: 'app-game-header',
  standalone: true,
  imports: [],
  templateUrl: './game-header.component.html',
  styleUrl: './game-header.component.scss',
})
export class GameHeaderComponent {
  @Input() currentPlayer!: PlayGroundSymbol;
  @Input() currentRound!: number;
  @Input() maxRound!: number;
}
