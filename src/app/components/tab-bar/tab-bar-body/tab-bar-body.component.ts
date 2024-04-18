import { Component, TemplateRef, ViewChild } from "@angular/core";

import { CommonModule } from "@angular/common";

@Component({
  selector: "dw-tab-bar-body",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./tab-bar-body.component.html"
})
export class TabBarBodyComponent {
  @ViewChild(TemplateRef) public contentTemplate!: TemplateRef<HTMLTemplateElement>;
}
