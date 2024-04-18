import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from "@angular/core";

import { CommonModule } from "@angular/common";
import { TabBarHeaderComponent } from "../tab-bar-header/tab-bar-header.component";
import { TabHeaderLabelDirective } from "../tab-bar-header/tab-bar-header.directive";

@Component({
  selector: "dw-tab-bar-tab",
  standalone: true,
  imports: [CommonModule, TabBarHeaderComponent, TabHeaderLabelDirective],
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: "./tab-bar-tab.component.html"
})
export class TabBarTabComponent implements AfterViewInit, AfterViewChecked, AfterContentChecked {
  @ViewChild(TemplateRef, { static: true }) public contentTemplate!: TemplateRef<HTMLTemplateElement>;

  private _templateLabel!: TabHeaderLabelDirective;
  @ContentChild(TabHeaderLabelDirective)
  get templateLabel(): TabHeaderLabelDirective {
    return this._templateLabel;
  }
  set templateLabel(value: TabHeaderLabelDirective) {
    this._setTemplateLabelInput(value);
  }

  // @ContentChildren(TabHeaderLabelDirective) details!: QueryList<TemplateRef<any>>;
  // @ContentChildren(AbstractTabHeaderLabel, { descendants: true }) details!: QueryList<TemplateRef<AbstractTabHeaderLabel>>;
  // @ContentChildren(TabHeaderLabelDirective, { read: TemplateRef }) details: QueryList<TemplateRef<HTMLTemplateElement>>;
  // @ContentChild(TabHeaderLabelDirective, { read: TemplateRef }) details: QueryList<TemplateRef<HTMLTemplateElement>>;
  // @ContentChildren(TemplateRef) details: QueryList<TemplateRef<HTMLTemplateElement>>;
  // @ContentChildren(TemplateRef, { read: TemplateRef }) details!: QueryList<TemplateRef<HTMLTemplateElement>>;

  @Input() label?: string;
  ngAfterViewInit(): void {
    // console.log(this.details);
  }
  ngAfterViewChecked(): void {
    console.log(this._templateLabel);
  }
  ngAfterContentChecked(): void {
    // console.log(this.details);
  }
  log(args: object) {
    console.log(args);
  }
  private _setTemplateLabelInput(value: TabHeaderLabelDirective | undefined) {
    // Only update the label if the query managed to find one. This works around an issue where a
    // user may have manually set `templateLabel` during creation mode, which would then get
    // clobbered by `undefined` when the query resolves. Also note that we check that the closest
    // tab matches the current one so that we don't pick up labels from nested tabs.
    if (value) {
      this._templateLabel = value;
    }
  }
}
