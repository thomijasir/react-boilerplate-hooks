import React, { useState, useEffect } from 'react';
import isAfter from 'date-fns/isAfter';
import packageJson from '../package.json';

const buildDateGreaterThan = (latestDate, currentDate) => {
  const momLatestDateTime = new Date(latestDate);
  const momCurrentDateTime = new Date(currentDate);
  if (isAfter(momLatestDateTime, momCurrentDateTime)) {
    return true;
  }
  return false;
};

function withClearCache(Component) {
  function ClearCacheComponent(props) {
    const [isLatestBuildDate, setIsLatestBuildDate] = useState(false);

    useEffect(() => {
      fetch('meta.json')
        .then((response) => response.json())
        .then((meta) => {
          const latestVersionDate = meta.buildDate;
          const currentVersionDate = packageJson.buildDate;

          const shouldForceRefresh = buildDateGreaterThan(
            latestVersionDate,
            currentVersionDate,
          );
          if (shouldForceRefresh) {
            setIsLatestBuildDate(false);
            refreshCacheAndReload();
          } else {
            setIsLatestBuildDate(true);
          }
        });
    }, []);

    const refreshCacheAndReload = () => {
      if (caches) {
        caches.keys().then((names) => {
          names.forEach((name) => {
            caches.delete(name);
          });
        });
      }
      window.location.reload();
    };
    return isLatestBuildDate ? <Component {...props} /> : null;
  }
  return ClearCacheComponent;
}

export default withClearCache;
