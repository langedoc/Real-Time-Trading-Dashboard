# Trading Dashboard

## Getting Started

To set up and run the application locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/langedoc/Real-Time-Trading-Dashboard.git
   cd trading_dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## Approach

The application is built using Next.js, React, and Tailwind CSS. The main components include a trading pairs menu, a price chart, and an order book. 

## Architecture and Project Structure

The application follows a component-based architecture.

```plaintext
/src
    ├── app
        ├── api                    # Services to interact with the API
        ├── components             # Reusable UI components
        ├── context                # Global contexts for managing shared states
        ├── globals.css            # Global styles for the application
        ├── layout.tsx             # Global layout of the application
        ├── page.jsx               # Main page of the application 
```

## External Libraries Used

- **Next.js:** Framework for server-rendered React applications.
- **React:** JavaScript library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Lightweight Charts:** Library for rendering financial charts.
- **ESLint:** Tool for identifying and fixing problems in JavaScript code.
- **PostCSS:** Tool for transforming CSS with JavaScript plugins.

## License

This project is licensed under the MIT License.
