import { useState, useEffect, ReactElement } from 'react';
import axios, { AxiosResponse } from 'axios';
import packageJson from '../package.json';

interface IClearCache {
  children: ReactElement;
}

const ClearCache = ({ children }: IClearCache) => {
  const [isLatestBuildDate, setIsLatestBuildDate] = useState<boolean>(false);

  useEffect(() => {
    axios.get('/meta.json').then((response: AxiosResponse) => {
      const latestVersionDate = response.data.buildDate;
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

  const buildDateGreaterThan = (
    latestDate: string,
    currentDate: string,
  ): boolean => {
    const latestDateTime = new Date(latestDate).getTime();
    const currentDateTime = new Date(currentDate).getTime();
    if (currentDateTime > latestDateTime) {
      return true;
    }
    return false;
  };

  const refreshCacheAndReload = (): void => {
    if (caches) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name);
        });
      });
    }
    window.location.reload();
  };
  return isLatestBuildDate ? children : null;
};
export default ClearCache;
