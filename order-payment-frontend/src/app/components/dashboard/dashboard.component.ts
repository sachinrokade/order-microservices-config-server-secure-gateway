import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  features = [
    {
      title: 'Book Order',
      description: 'Create a new order with product details and account information',
      icon: 'shopping_cart',
      link: '/order',
      color: '#3f51b5'
    },
    {
      title: 'Process Payment',
      description: 'Process payment for orders using various payment methods',
      icon: 'payment',
      link: '/payment',
      color: '#4caf50'
    },
    {
      title: 'Payment History',
      description: 'View payment history for specific orders',
      icon: 'history',
      link: '/payment',
      color: '#ff9800'
    }
  ];
}
