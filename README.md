# transaction-manager-app

# • TransactManager App

This app is designed for internal use to manage, view, and manipulate transaction records. It features CRUD operations: Create, Read, Update, and Delete.

## • Screens

### • Dashboard Page
Main landing page that provides a summary view of recent transactions and quick access to detailed views.

- **Behavior:** Fetches and displays a snapshot of the most recent transactions.
- **Layout:** Contains a 'Header', a 'SummaryPanel', and a 'TransactionList' section.

### • Transaction List Page
Displays a detailed list of all transactions with options to interact with each record.

- **Behavior:** 
  - Fetches detailed transaction data from the server. 
  - Supports sorting and filtering options.
- **Layout:** Comprises a 'Header', 'FilterBar', and a scrollable 'TransactionTable'.

### • Transaction Detail Page
Shows detailed information about a specific transaction and allows users to edit or delete the record.

- **Behavior:** 
  - On selection, displays detailed info from the database.
  - Provides options to edit or delete the transaction.
- **Layout:** Contains 'Header', 'TransactionInfo', and 'ActionButtons'.

## • Components

### • Header
Displays the app title and contains navigation elements to move between pages.

- **Behavior:** Contains links to 'Dashboard', 'Transaction List', and 'New Transaction'.
- **Styling:** Fixed at the top, uses a large font size, and a vibrant background color for visibility.

### • SummaryPanel
A quick overview panel showing key stats like total transactions, monthly breakdown, etc.

- **Styling:** Uses card-style layout with shadows and vibrant borders.

### • TransactionList
A list format display of transactions showcasing brief relevant details.

- **Behavior:** Allows tapping on a transaction to view more details.
- **Styling:** Each transaction displayed in a line item, alternating background for readability, vibrant accent colors for links.

### • FilterBar
Allows users to filter the transaction list by various parameters like date, amount, or status.

- **Behavior:** Inputs in the bar directly update the 'TransactionTable' dynamically.
- **Styling:** Predominantly light background with vibrant, standout buttons for applying filters.

### • TransactionTable
Shows a detailed, sortable, and filterable table of all transactions.

- **Behavior:** Each row can be selected for more operations. Includes pagination and infinite scroll.
- **Styling:** Clean lines, ample padding, and hierarchy in typography to emphasize key data.

### • TransactionInfo
Detailed view of each transaction, including all data points and edit/delete options.

- **Styling:** Clear division of sections with borders or different background shades, bold text for key info.

### • ActionButtons
Buttons for performing actions like edit and delete on transaction details page.

- **Styling:** Bold colors for actions like edit (blue) and delete (red), rounded corners for smoother feel.

## • General Principles

- **Layout & Colors:** Light backgrounds with a combination of vibrant colors for buttons and links; grey and black text for clarity.
- **Whitespace:** Generous use of space between elements to prevent clutter.
- **Navigation:** Simple, top-aligned navigation bar on all major screens.
- **Type Setting:** Varied text sizes and weights to guide users through content hierarchy.
- **CTAs:** Clear, easy to find action buttons with contrasting colors.

This design spec ensures that the TransactManager App is user-friendly, visually appealing, and efficient for managing transaction data within a company.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/transaction-manager-app.git
cd transaction-manager-app
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
