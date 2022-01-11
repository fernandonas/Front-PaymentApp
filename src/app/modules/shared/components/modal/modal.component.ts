import { Component, Input } from '@angular/core';
import { IModal } from '@interfaces/modal.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})

export class ModalComponent {
  @Input() content: IModal;
  isVisible = false;
  isOkLoading = false;

  public openModal(): void {
    this.isVisible = true;
  }

  public closeModal(): void {
    this.isVisible = false;
  }

  public handleCancel(): void {
    this.closeModal();
  }

  public handleOk(): void {
    this.closeModal();
  }
}
