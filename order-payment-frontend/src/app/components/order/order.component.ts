import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderService, TransactionResponse } from '../../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderForm!: FormGroup;
  isLoading = false;
  orderResponse: TransactionResponse | null = null;
  displayedColumns: string[] = ['transactionId', 'orderId', 'status', 'amount', 'message'];

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.orderForm = this.fb.group({
      userId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      amount: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      productDetails: ['', [Validators.required, Validators.minLength(3)]],
      accountNumber: ['', [Validators.required, Validators.pattern(/^\d{10,20}$/)]]
    });
  }

  bookOrder(): void {
    if (this.orderForm.invalid) {
      this.snackBar.open('Please fill all fields correctly', 'Close', { duration: 3000 });
      return;
    }

    this.isLoading = true;
    const request = this.orderForm.value;

    this.orderService.bookOrder(request).subscribe({
      next: (response) => {
        this.orderResponse = response;
        this.isLoading = false;
        this.snackBar.open('Order booked successfully!', 'Close', { duration: 3000 });
        this.orderForm.reset();
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error booking order:', error);
        this.snackBar.open('Error booking order: ' + (error.error?.message || error.message), 'Close', { duration: 5000 });
      }
    });
  }

  resetForm(): void {
    this.orderForm.reset();
    this.orderResponse = null;
  }
}
