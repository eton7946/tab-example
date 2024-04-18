import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from "@angular/core";

import { CommonModule } from "@angular/common";
import { TabBarHeaderComponent } from "./tab-bar-header/tab-bar-header.component";
import { TabBarTabComponent } from "./tab-bar-tab/tab-bar-tab.component";
import { TabHeaderLabelDirective } from "./tab-bar-header/tab-bar-header.directive";

/**
 * Angular Material tabs organize content into separate views where only one view can be visible at a time.
 */
@Component({
  selector: "dw-tab-bar",
  standalone: true,
  imports: [CommonModule, TabBarTabComponent, TabBarHeaderComponent],
  templateUrl: "./tab-bar.component.html",
  styleUrl: "./tab-bar.component.scss"
})
export class TabBarComponent implements AfterContentInit {
  @ContentChildren(TabBarTabComponent) private contentItems!: QueryList<TabBarTabComponent>;
  public tabs!: QueryList<TabBarTabComponent>;
  /**
   * Setting this to `true` prevents elements reloading when the view comes back.
   */
  @Input() preserveContent = false;

  /**
   * Theme color palette of the tab
   */
  @Input() color?: "primary" | "accent" | "warn";
  /**
   * The index of selected tab
   */
  @Input() selectedIndex = 0;
  /**
   * The event that triggers on seleted tab changes
   */
  @Output() selectedIndexChange: EventEmitter<number> = new EventEmitter<number>();

  ngAfterContentInit(): void {
    this.tabs = this.contentItems;
  }

  seletcedIndexChanged(event: number) {
    if (this.selectedIndex !== event) {
      this.selectedIndex = event;
      this.selectedIndexChange.emit(event);
    }
  }

  checkHasTabHeaderTemplate(index: number): boolean {
    return true;
    // if (!this.appItems) {
    //   return false;
    // }

    // const itemTemplate = this.appItems.get(index);
    // if (!itemTemplate) {
    //   return false;
    // }
    // return itemTemplate.contentTemplate?.elementRef.nativeElement.childNodes.length;
  }

  log(args: object) {
    console.log(args);
  }
}
