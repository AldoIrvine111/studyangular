import { Component } from '@angular/core';



@Component({
  selector: 'pm-root',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
      <div>My first Component</div>
      <div>Pacar ku adalah {{pacar}}</div>
  </div>`
})

export class AppComponent {
  pageTitle: string = 'Aldo Irvine Product Management' ;
  pacar: string = 'Beatrice' ;
}