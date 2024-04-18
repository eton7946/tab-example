import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
  ViewChild
} from "@angular/core";

import { CommonModule } from "@angular/common";
import { TabHeaderLabelDirective } from "./tab-bar-header.directive";

@Component({
  selector: "dw-tab-bar-header",
  // selector: "dw-tab-label",
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: "./tab-bar-header.component.html"
})
export class TabBarHeaderComponent implements AfterViewInit, AfterViewChecked, AfterContentChecked {
  @ViewChild(TemplateRef) public headerTemplate!: TemplateRef<HTMLTemplateElement>;
  @ContentChildren(TemplateRef) details!: QueryList<TemplateRef<HTMLTemplateElement>>;
  // @ContentChildren(TabHeaderLabelDirective) details: QueryList<TabHeaderLabelDirective>;
  // @ContentChildren(TabHeaderLabelDirective, { read: TemplateRef }) details: QueryList<TabHeaderLabelDirective>;
  // @ContentChild(TabHeaderLabelDirective, { read: TemplateRef }) details: TabHeaderLabelDirective;

  @Input() selectedIndex = 0;
  ngAfterViewInit(): void {
    // console.log(this.details);
  }
  ngAfterViewChecked(): void {
    // console.log(this.details);
  }
  ngAfterContentChecked(): void {
    // console.log(this.details);
  }

  static ngTemplateContextGuard(directive: TabHeaderLabelDirective, context: unknown): boolean {
    return true;
  }
}
