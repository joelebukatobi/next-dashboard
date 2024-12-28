import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { IStaticMethods } from 'preline/preline';

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    const loadPreline = async () => {
      try {
        // Import the preline module
        const prelineModule = await import('preline/preline');
        // Check if HSStaticMethods is defined and has the autoInit method
        if (prelineModule.HSStaticMethods && prelineModule.HSStaticMethods.autoInit) {
          // If so, call autoInit
          prelineModule.HSStaticMethods.autoInit();
        } else {
          // If not, log a warning
          console.warn('autoInit method not found on HSStaticMethods');
        }
      } catch (error) {
        console.error('Error loading preline module:', error);
      }
    };

    loadPreline();
  }, [path]);

  return null;
}
