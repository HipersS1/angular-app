import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KnobModule } from 'primeng/knob';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [KnobModule, CommonModule, FormsModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent {
  @Input() timerStartEvent!: EventEmitter<void>;
  @Input() timerStartValue!: number;

  @Output() timerFinished: EventEmitter<void> = new EventEmitter();

  count!: number;
  interval!: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.timerStartEvent) {
      this.timerStartEvent.subscribe(() => {
        this.startCountDown();
      });
    }
  }

  startCountDown() {
    this.count = this.timerStartValue;

    this.interval = setInterval(() => {
      this.count--;

      if (this.count === 0 || this.count < 0) {
        clearInterval(this.interval);
        this.timerFinished.emit();
      }
    }, 1000);
  }
}
