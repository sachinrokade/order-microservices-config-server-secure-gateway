import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PaymentService, Payment } from '../../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentForm!: FormGroup;
  historyForm!: FormGroup;
  isLoading = false;
  paymentResponse: Payment | null = null;
  paymentHistory: Payment | null = null;
  displayedColumns: string[] = ['paymentId', 'orderId', 'amount', 'paymentMode', 'paymentStatus', 'referenceNumber'];

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initializePaymentForm();
    this.initializeHistoryForm();
  }

  initializePaymentForm(): void {
    this.paymentForm = this.fb.group({
      orderId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      transactionId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      amount: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      paymentMode: ['', Validators.required],
      paymentStatus: ['PENDING', Validators.required],
      referenceNumber: ['', Validators.required]
    });
  }

  initializeHistoryForm(): void {
    this.historyForm = this.fb.group({
      orderId: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });
  }

  doPayment(): void {
    if (this.paymentForm.invalid) {
      this.snackBar.open('Please fill all fields correctly', 'Close', { duration: 3000 });
      return;
    }

    this.isLoading = true;
    const payment = this.paymentForm.value;

    this.paymentService.doPayment(payment).subscribe({
      next: (response) => {
        this.paymentResponse = response;
        this.isLoading = false;
        this.snackBar.open('Payment processed successfully!', 'Close', { duration: 3000 });
        this.paymentForm.reset();
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error processing payment:', error);
        this.snackBar.open('Error processing payment: ' + (error.error?.message || error.message), 'Close', { duration: 5000 });
      }
    });
  }

  getPaymentHistory(): void {
    if (this.historyForm.invalid) {
      this.snackBar.open('Please enter a valid Order ID', 'Close', { duration: 3000 });
      return;
    }

    this.isLoading = true;
    const orderId = this.historyForm.get('orderId')?.value;

    this.paymentService.getPaymentHistory(orderId).subscribe({
      next: (response) => {
        this.paymentHistory = response;
        this.isLoading = false;
        this.snackBar.open('Payment history retrieved successfully!', 'Close', { duration: 3000 });
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error fetching payment history:', error);
        this.snackBar.open('Error fetching payment history: ' + (error.error?.message || error.message), 'Close', { duration: 5000 });
      }
    });
  }

  resetPaymentForm(): void {
    this.paymentForm.reset();
    this.paymentResponse = null;
  }

  resetHistoryForm(): void {
    this.historyForm.reset();
    this.paymentHistory = null;
  }
}
