# TL;DR - Angular and Skip Links

## Dependencies

* [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.
* [Bootstrap](https://v4-alpha.getbootstrap.com/) version 4.0.0-alpha.6
* [jQuery](http://jquery.com/) version 3.2.1
* [Tether](http://tether.io/) version 1.4.0

##TL;DR - The Working Parts

#####app.component.html
```language-html
<a (click)="skipLink()" 
   href 
   onclick="return false;" 
   class="sr-only sr-only-focusable btn btn-link"
   accesskey="k">
  Skip to content
</a>
<app-nav></app-nav>
<div #main 
     tabindex="-1">
  ...
</div>
```

#####app.component.ts
```language-typescript
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
```