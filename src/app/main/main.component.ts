import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <div id="main-container">
    <aside>
      <app-menu></app-menu>
    </aside>

    <main>
      <router-outlet></router-outlet>
    </main>
  </div>`,

  styles: [`
    #main-container {
      height: 100vh;
      display: grid;
      grid-template-columns: 15vw 85vw;
    }
    aside {
      z-index: 100;
      grid-column: 1;
    }
    main {
      padding:3em;
      grid-column: 2;
      
    }
    @media only screen and (max-width: 900px) {
      #main-container {
        display:initial;
        main {
          padding:4em 0.5em;
        }
      }
    }
  `]
})
  
export class MainComponent {

}
