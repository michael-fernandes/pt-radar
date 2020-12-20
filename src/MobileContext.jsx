import { createContext } from 'react';

export default function MobileContext() {
  const Context = createContext({ mobile: false });
  return Context;
}
