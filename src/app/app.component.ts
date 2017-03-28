import { Component, ViewChild, ElementRef, Renderer, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('main') main: ElementRef;

  constructor(
    private renderer: Renderer
  ) {}

  skipLink() {
    this.renderer.invokeElementMethod(this.main.nativeElement, 'focus');
  }

  ngOnInit() {

  }
}