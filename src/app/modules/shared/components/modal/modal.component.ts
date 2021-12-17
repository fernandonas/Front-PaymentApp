import { Component, Input } from '@angular/core';

export interface IModal {
  title: string;
  content: Component;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent {

  @Input() content: IModal;

  isVisible = false;
  isOkLoading = false;

  openModal(): void {
    this.isVisible = true;
  }

  closeModal(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.closeModal();
  }

  handleOk(): void {
    this.closeModal();
  }

}
