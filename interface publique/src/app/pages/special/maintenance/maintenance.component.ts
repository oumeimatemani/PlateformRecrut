import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackToHomeComponent } from '../../../components/back-to-home/back-to-home.component';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [
    CommonModule,
    BackToHomeComponent
  ],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss'
})
export class MaintenanceComponent {
  minutes: number = 60;
  seconds: number = 0;
  interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  private updateTimer(): void {
    if (this.seconds > 0) {
      this.seconds--;
    } else if (this.minutes > 0) {
      this.minutes--;
      this.seconds = 59;
    } else {
      // Timer expired, you can add additional logic here
      clearInterval(this.interval);
    }
  }
}
