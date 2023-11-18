import React from 'react';
import '../lang/i18n.config';
import PublicRoutes from './public';
import PrivateRoutes from './private';
import { useAuthContext } from '../contexts/auth/authContext';

export default function Routes() {
  const { isAuthenticated } = useAuthContext();
  console.log('isAuth', isAuthenticated);
  return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
}
