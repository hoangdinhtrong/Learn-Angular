import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input('appHighLight') appHighLight = 'blue';

  constructor(private el: ElementRef) { }

  public ngOnInit(): void{
    console.log('ngOnit HighLightDirective', this.appHighLight);
    this.el.nativeElement.style.color = this.appHighLight;
  }
}
