import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay'; 
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-custom-select',
  standalone: true,
  imports: [OverlayModule, MatIconModule],
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.scss'
})
export class CustomSelectComponent {
  @Input() options: { value: any; label: string }[] = [];
  @Input() placeholder: string = 'Select an option';
  @Output() selectionChange = new EventEmitter<any>();

  isOpen = false;
  selectedOption: { value: any; label: string } | null = null;

  toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }

  onOptionSelected(option: { value: any; label: string }): void {
    this.selectedOption = option;
    this.isOpen = false;
    this.selectionChange.emit(option.value);
  }

  ngOnInit() {
    document.addEventListener('click', this.onDocumentClick.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.onDocumentClick.bind(this));
  }

  private onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  constructor(private elementRef: ElementRef) {}
}
