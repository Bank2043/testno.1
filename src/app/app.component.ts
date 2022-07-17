import { Component } from '@angular/core';
declare function get(): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  ngOnInit(): void {
    // call the externaljs functions
    get(); // without param
}
}
//external js function declaration


