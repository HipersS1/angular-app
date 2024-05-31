import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-round-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './round-history.component.html',
  styleUrl: './round-history.component.scss',
})
export class RoundHistoryComponent {
  @Input() events: any[] = ['s', 's'];
}
