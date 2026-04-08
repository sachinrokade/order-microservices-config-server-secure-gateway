# Order Payment Frontend

`Angular 15` frontend application for Order and Payment microservices. This is a comprehensive web UI for managing orders and processing payments through a microservices architecture.

**Status**: ✅ Development server running on `http://localhost:4200`

## Project Structure

```
order-payment-frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── order/           # Order booking component
│   │   │   ├── payment/         # Payment processing component
│   │   │   └── dashboard/       # Dashboard component
│   │   ├── services/
│   │   │   ├── order.service.ts
│   │   │   └── payment.service.ts
│   │   ├── app.component.*
│   │   ├── app-routing.module.ts
│   │   └── app.module.ts
│   ├── index.html
│   ├── main.ts
│   ├── styles.scss
│   └── proxy.conf.json         # API proxy configuration
├── angular.json
├── package.json
└── tsconfig.json
```

## Quick Start

### Prerequisites
- **Node.js** >= 14.0
- **npm** >= 6.0
- **Angular CLI** >= 15.0

### Installation & Running

1. Navigate to the project directory:
   ```bash
   cd order-payment-frontend
   Prerequisites & Configuration

### Backend Services Required

Before running the frontend, ensure the following backend services are running:

| Service | Port | API Base URL |
|---------|------|--------------|
| Order Service | 9192 | `http://localhost:9192` |
| Payment Service | 9191 | `http://localhost:9191` |
| Config Server | 8888 | `http://localhost:8888` |
| Service Registry (Eureka) | 8761 | `http://localhost:8761` |

### Proxy Configuration

The development server is configured with a proxy to route API calls to the backend services. See `src/proxy.conf.json`:

```json
{
  "/order": {
    "target": "http://localhost:9192",
    "secure": false,
    "changeOrigin": true
  },
  "/payment": {
    "target": "http://localhost:9191",
    "secure": false,
    "changeOrigin": true
  }
}
```
   ```
   The application will open at `http://localhost:4200`

## Configuration

### Backend Services

The application communicates with the following backend services:


### Running the Development Server

The development server starts automatically with proxy configuration for backend communication:

```bash
npm start
```

**Alternative command:**
```bash
ng serve --proxy-config src/proxy.conf.json
```

The application will:
- Start on `http://localhost:4200`
- Auto-reload when you modify source files
- Route API calls through the configured proxy to backend services

### Development Environment

- **Hot Module Replacement**: Enabled by default
- **Source Maps**: Enabled for debugging
- **Proxy**: Configured for order and payment services
- **CORS**: Handled through proxy configuration
  - Request: `{ orderId, transactionId, amount, paymentMode, paymentStatus, referenceNumber }`
  - Response: `{ paymentId, orderId, amount, paymentMode, paymentStatus, referenceNumber }`

- **GET** `/payment/{orderId}` - Get payment history
  - Response: `{ paymentId, orderId, amount, paymentMode, paymentStatus, referenceNumber }`

## Development Server

Run the development server with proxy configuration:

```bash
npm star & Production

### Development Build

```bash
npm run build
```

### Production Build

```Application Features

### 🏠 Dashboard
- System overview with service information
- Quick navigation to Order and Payment sections
- Available API endpoints display
- Service URLs and port information

### 📦 Order Management
**Book Orders with:**
- User ID (numeric validation)
- Amount (currency format)
- Product Details (minimum 3 characters)
- Account Number (10-20 digits)

**Features:**
- Real-time form validation
- Order response display with:
  - Transaction ID
  - Order ID
  - Status (Success/Pending/Failed)
  - Amount
  - Messagey Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Angular | 15.2.10 | Frontend Framework |
| Angular Material | 15.0.0 | UI Component Library |
| TypeScript | 4.8.0 | Language |
| RxJS | 7.5.0 | Reactive Programming |
| SCSS | - | Styling |
| Node.js | 14+ | Runtime |
| npm | 6+ | Package Manager |

## Architecture

### Components
- **AppComponent** - Root component with navigation
- **DashboardComponent** - Landing page with system overview
- **OrderComponent** - Order booking form and display
- **PaymentComponent** - Payment processing and history

### Services
- **OrderService** - Handles order API calls
  - `bookOrder()` - Create new orders
- **PaymentService** - Handles payment API calls
  - `doPayment()` - Process payments
  - `getPaymentHistory()` - Retrieve payment records

### Features
- Material Design UI with responsive layout
- Reactive Forms with real-time validation
- HTTP error handling with user notifications
- Auto-refresh on file changes (development)
- Proxy routing for API calls
- Color-coded status indicators

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── order/
│   │   └── payment/
│   ├── services/
│   │   ├── order.service.ts
│   │   └── payment.service.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   └── app-routing.module.ts
├── assets/
├── index.html
├── main.ts
├── proxy.conf.json
└── styles.scss
```

## Troubleshooting

### Port Already in Use
If port 4200 is already in use:
```bash
ng serve --port 4300
```

### Dependencies Installation Issues
Use legacy peer deps flag:
```bash
npm install --legacy-peer-deps
```

### Backend Connection Issues
- Verify Order Service is running on port 9192
- Verify Payment Service is running on port 9191
- Check proxy configuration in `src/proxy.conf.json`

### Form Validation Not Working
Check browser console for Angular errors. Ensure all Material modules are imported in `app.module.ts`

## Testing

```bash
npm test
```

Run unit tests with Karma and Jasmine.

## Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [Angular Material Docs](https://material.angular.io)
- [RxJS Documentation](https://rxjs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Create a pull request

## License

These materials are provided for educational purposes

### Order Management
- Book new orders with product details
- Enter user ID, amount, product details, and account number
- View order response with transaction and order IDs

### Payment Management
- Process payments for orders
- View payment history by order ID
- Support for multiple payment modes:
  - Credit Card
  - Debit Card
  - Net Banking
  - UPI
  - Wallet

## Technologies Used

- **Angular 15**
- **Angular Material**
- **RxJS**
- **TypeScript**
- **SCSS**

## UI Components

- Material Toolbar for navigation
- Material Forms with validation
- Material Tables for data display
- Material Snack Bar for notifications
- Responsive Grid Layout

## Running Tests

```bash
npm test
```

## Additional Notes

- The application uses Angular Material for UI components
- CORS proxy configuration is set up for development
- Form validation is implemented using Angular Reactive Forms
- HTTP interceptor can be added for authentication/error handling if needed

## Support

For more information about Angular, visit the [Angular documentation](https://angular.io/docs).
