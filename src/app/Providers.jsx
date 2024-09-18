'use client'

import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect } from 'react';

function ThemeWatcher() {
  const { theme, resolvedTheme } = useTheme();
  
  useEffect(() => {
    console.log('Current theme:', theme);
    console.log('Resolved theme:', resolvedTheme);
  }, [theme, resolvedTheme]);

  return null;
}

export default function Providers({children}) {
  return (
    <ThemeProvider attribute="class">
      <ThemeWatcher />
        <div className='text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-900 min-h-screen select-none transition-colors duration-300'>
            {children}
        </div>
    </ThemeProvider>
  )
}
