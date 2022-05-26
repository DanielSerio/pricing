import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//TODO: SETUP:
// Implement ColorSchemeProvider & MantineProvider
//TODO: Component: Page
//TODO: Component: Header
//TODO: Component: Footer
//TODO: Component: ActionIcon (for theme toggle)
//TODO: Component: PageSection
//TODO: Component: TypographyContainer
//TODO: Component: PricingCard
//TODO: Component: Logo
//TODO: Page: Pricing/Index
//TODO: Page: About
//TODO: Page: Contact
