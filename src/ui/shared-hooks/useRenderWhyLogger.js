import { useEffect, useRef } from 'react';

const useRenderWhyLogger = (componentName = 'Component', trackedValues = {}) => {
  const previous = useRef(trackedValues);

  useEffect(() => {
    const allKeys = Object.keys({ ...previous.current, ...trackedValues });
    const changed = allKeys.filter(
      key => previous.current[key] !== trackedValues[key]
    );

    if (changed.length > 0) {
      console.group(`🔍 [${componentName}] Re-rendered due to:`);
      changed.forEach(key => {
        console.log(`• ${key}:`, {
          from: previous.current[key],
          to: trackedValues[key],
        });
      });
      console.groupEnd();
    } else {
      console.log(`🔄 [${componentName}] Re-rendered (no tracked changes)`);
    }

    previous.current = trackedValues;
  });
};

export default useRenderWhyLogger;