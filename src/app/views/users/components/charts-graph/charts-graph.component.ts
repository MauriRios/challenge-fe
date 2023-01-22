import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { forkJoin } from 'rxjs';
import { Day } from 'src/app/models/day.model';
import { GraphService } from 'src/app/services/graph.service';
Chart.register(...registerables)

@Component({
  selector: 'app-charts-graph',
  templateUrl: './charts-graph.component.html',
  styleUrls: ['./charts-graph.component.css']
})
export class ChartsGraphComponent implements OnInit {

  days: string[]=[];
  balance1: number[]=[];
  balance2: number[]=[];
  label1!: string;
  label2!: string;

  constructor(
    private graphService : GraphService,
    ) { 
      
    }

  ngOnInit(): void {
    this.RenderDataCombined();
  }

  RenderDataCombined(){
    forkJoin([
        this.graphService.getDays(),
        this.graphService.getBalances()
    ]).subscribe(([days, balances]) => {
      //days
      this.days = days.map(data => data.name);  
      //balances
      this.balance1 = balances.map(data => data.deposit);
      this.balance2 = balances.map(data => data.withdraw);
      //renderiza y actualiza el grafico
      this.renderChart();
      
    });
}

  renderChart(){
    let myChart = new Chart("linechart", {
      type: 'line',
      data: {
        labels: [...this.days],
        datasets: [{
          label: 'Income',
          data: [...this.balance1],
          borderWidth: 1,
          backgroundColor: "#d1bdff",
          borderColor: "#d1bdff",
          pointRadius: 3,
          tension: 0.5,
        },
        {
          label: 'Withdrawals',
          data: [...this.balance2],
          borderWidth: 1,
          backgroundColor: "#ffe5ab",
          borderColor: "#ffe5ab",
          pointRadius: 3,
          tension: 0.5,
        }]
      },

      options: {
        scales: {
          y: {
            max:10,
            border:{
              display: true
            },
            beginAtZero: true,
            grid: {
              display: true,
            },
            ticks: {
              display: true
          }
          },
          x: {
            border:{
              display: true
            },
            beginAtZero: true,
            grid: {
              display: true,
            }
          },
        },
        plugins:{
          legend:{
            display: true
          }
        }
      }
    });

    // hago un update de la data que le llega al campo de dataset, necesario para que renderize bien el grafico
    myChart.data.labels = this.days;
    myChart.data.datasets[0].data = this.balance1;
    myChart.data.datasets[1].data = this.balance2;
    myChart.update();
  }

}
