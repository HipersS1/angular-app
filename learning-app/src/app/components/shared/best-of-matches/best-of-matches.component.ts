import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-best-of-matches',
  standalone: true,
  imports: [
    ButtonModule,
    ButtonGroupModule,
    CommonModule,
    ToastModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './best-of-matches.component.html',
  styleUrl: './best-of-matches.component.scss',
})
export class BestOfMatchesComponent {
  @Input() values!: number[];
  @Input() numberOfRounds!: number;

  @Output() gameStarted: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() numberOfRoundsChange: EventEmitter<number> =
    new EventEmitter<number>();

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  modeClicked(value: number, $event: Event) {
    this.confirmationService.confirm({
      target: $event?.target as EventTarget,
      message: `Are you sure you want to play best of ${value}?`,
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have started the game',
        });

        this.numberOfRoundsChange.emit(value);
        this.gameStarted.emit(true);
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Cancelled',
          detail: 'You have cancelled the game',
        });

        this.gameStarted.emit(false);
      },
    });
  }
}
