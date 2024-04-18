import { Directive, ElementRef, OnInit, TemplateRef, ViewContainerRef, forwardRef } from "@angular/core";

@Directive({
  selector: "[dw-tab-label], [dwTabLabel]",
  standalone: true
})
export class TabHeaderLabelDirective implements OnInit {
  constructor(public templateRef: TemplateRef<any>) {
  }

  ngOnInit(): void {
    // console.log(this.el);
  }
}
