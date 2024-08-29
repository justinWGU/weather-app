import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HelloService} from "./service/hello.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'weather-app';
  name: string = '';

  constructor(private helloService: HelloService) {} // creates and injects service to make http req

  ngOnInit() {
    this.helloService.getHelloMessage().subscribe(response => {
      this.name = response;
    })
  }
}
