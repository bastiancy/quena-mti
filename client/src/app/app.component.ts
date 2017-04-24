import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <nav>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/categorias" routerLinkActive="active">Categorias</a>
        <a routerLink="/productos" routerLinkActive="active">Productos</a>
        <a routerLink="/establecimientos" routerLinkActive="active">Establecimientos</a>
      </nav>
      <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Quena Store';
}
