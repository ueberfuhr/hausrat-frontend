import {Component, Input, OnInit} from '@angular/core';
import {CalculationResult} from '../../models/calculation-result.model';

@Component({
  selector: 'app-view-calculation',
  templateUrl: './view-calculation.component.html',
  styleUrls: ['./view-calculation.component.scss']
})
export class ViewCalculationComponent implements OnInit {

  @Input() calculation?: CalculationResult;

  constructor() {
  }

  ngOnInit(): void {
  }

}
