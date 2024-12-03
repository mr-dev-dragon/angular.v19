import { Component,  Signal, WritableSignal, signal, computed} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {





  count: WritableSignal<number> = signal(0); // Remove 'const'
  doubleCount: Signal<number> = computed(() => this.count() * 2); // Use 'this.count'
  increment() {
    this.count.set(this.count() + 1);
  }




}

