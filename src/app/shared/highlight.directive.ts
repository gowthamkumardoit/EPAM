import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) { }
  @Input() set appHighlight(condition: number) {
    if (condition == 10) {
      this.render.setStyle(this.el.nativeElement, 'background-color', 'red');
    }
  }

  ngOnInit() { }
}
