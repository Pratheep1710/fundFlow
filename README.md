# FundFlow - Chit Fund Management System

FundFlow is a modern web application designed to help fund managers efficiently manage their chit fund operations. The application provides intuitive tools for tracking payments, managing auctions, and streamlining chit fund administration.

## Features

- User authentication with Firebase
- Automated notification reminders for payments
- Smart premium calculator
- Client payment tracking
- Seamless fund loading
- Responsive design with dark/light mode support

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Authentication**: Firebase Authentication
- **Hosting**: Firebase Hosting
- **State Management**: React Context API
- **Styling**: Tailwind CSS with container queries support

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd fundflow
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Set up environment variables
   - Copy `.env.example` to `.env.local`
   - Fill in your Firebase configuration details

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the application

## Deployment

The application is configured for static HTML export for Firebase hosting:

```bash
# Build the application
npm run build

# Deploy to Firebase hosting
npm run firebase:deploy
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ using Next.js and Firebase
