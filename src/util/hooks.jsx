import { useContext } from 'react';
import { MobileContext } from './MobileContext';

export function useIsMobile() {
  const value = useContext(MobileContext)
  return value;
}
