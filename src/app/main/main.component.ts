import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [`
    #main-container {
      height: 100vh;
      display: grid;
      grid-template-columns: 300px 1fr;
    }
    aside {
      grid-column: 1;
    }
    main {
      grid-column: 2;
      padding: 50px 90px;
    }
  `]
})
  
export class MainComponent {

  ngOnInit() { 
  }
  
}
