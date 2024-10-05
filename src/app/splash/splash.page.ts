import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  isVisible: boolean = true;

  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 4000);
  }

  ngOnInit() {
    this.ocultarIso();
  }

  ocultarIso() {
    setTimeout(() => {
      this.isVisible = false;
    }, 2000);
  }
}
