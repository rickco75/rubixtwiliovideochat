import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignalRService } from './services/signal-r.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rubix';

  constructor(private router: Router, public signalRService: SignalRService, private http: HttpClient) { }

  ngOnInit() {
    // this.signalRService.startConnection();
    // this.signalRService.addTransferChartDataListener();
    // this.startHttpRequest();
  }


  private startHttpRequest = () => {
    this.http.get('https://localhost:5001/api/chart')
      .subscribe(res => {
        console.log(res);
      })
  }


  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login'])

  }
}
