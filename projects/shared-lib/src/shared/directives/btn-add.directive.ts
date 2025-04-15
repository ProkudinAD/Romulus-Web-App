import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddButton]',
  standalone: true,
})
export class AddButtonDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'mat-raised-button');
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      'primary'
    );
  }

  ngOnInit() {
    console.log('AddButtonDirective initialized');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '4px');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '8px 16px');
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '14px');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }
}
