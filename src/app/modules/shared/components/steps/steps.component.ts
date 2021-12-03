import { Component } from '@angular/core';
import { IStep, Step } from './stepHandler';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.less']
})

export class StepsComponent {

  username: string = '';
  step: IStep;

  constructor() {
    this.step = new Step();
  }
}
