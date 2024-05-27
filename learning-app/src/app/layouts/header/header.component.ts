import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  @Input() items!: MenuItem[];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.items = [
      {
        label: 'Home',
        command: () => this.router.navigateByUrl(''),
      },
      {
        label: 'Games',
        items: [
          {
            label:
              '<span class="display flex"><img src="assets/images/games/tic-tac-toe.png" class="size-7"> Tic-Tac-Toe </span>',
            command: () => this.router.navigateByUrl('/tic-tac-toe'),
          },
        ],
      },
    ];
  }
}
