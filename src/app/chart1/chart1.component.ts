import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {

  result: any;
  coinPrice: any;
  coinName: any;
  chart: any = [];

  constructor(private service: AuthService) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.service.cryptoData().then((res) => {
      this.result = res;
      this.coinPrice = this.result.data.coins.map((coins: any) => coins.price);
      this.coinName = this.result.data.coins.map((coins: any) => coins.name);
      // console.log(this.coinPrice);
      // console.log(this.coinName);

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.coinName,
          datasets: [
            {
              data: this.coinPrice,
              borderColor: '#3e95cd',
              fill: false,
              label: 'Coin Price',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 3,
            },
          ],
        },
      });
    });
  }

}