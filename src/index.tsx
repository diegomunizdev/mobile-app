import './lang/i18n.config';
import React from 'react';
import Routes from './routes';
import AuthProvider from './components/providers/auth/AuhtProvider';
import LayoutProvider from './components/providers/layout/LayoutProvider';

export default function Application() {
  return (
    <LayoutProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </LayoutProvider>
  );
}
