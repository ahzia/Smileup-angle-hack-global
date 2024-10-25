// src/redux/Providers.tsx
"use client";

import { Provider } from 'react-redux';
import store from './store';  // Path to your store

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}