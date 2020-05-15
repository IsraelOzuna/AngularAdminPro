import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() public ChartLabels: Label[] = [];
  @Input()public ChartData: MultiDataSet  = [];
    // [350, 450, 100],
    // Gráfica dentro de la misma
    /*[50, 150, 120],
    [250, 130, 70],*/
  @Input() public ChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
