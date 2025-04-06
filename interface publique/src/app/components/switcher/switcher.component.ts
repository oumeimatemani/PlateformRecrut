import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-switcher',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './switcher.component.html',
  styleUrl: './switcher.component.scss'
})
export class SwitcherComponent {
  toggleMode() {
    const switcherRtl = document.getElementById("switchRtl") as any;
    if (switcherRtl.innerText === "LTR") {
      document.documentElement.dir = "ltr"
    }
    else {
      document.documentElement.dir = "rtl"
    }
  }

  changeMode(e:any) {
    e.preventDefault();
    
    const htmlTag = document.documentElement;
    if (htmlTag.className.includes("dark")) {
      htmlTag.className = 'light'
    } else {
      htmlTag.className = 'dark'
    }
  }
  topFunction(e:any) {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

scrolled: boolean = false;

@HostListener("window:scroll", [])

onWindowScroll() {
    this.scrolled = window.scrollY > 0;
}

}
