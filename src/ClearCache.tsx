import { useState, useEffect, ReactElement, FC } from 'react';
import axios, { AxiosResponse } from 'axios';
import packageJson from '../package.json';

const ClearCache: FC<{ children: ReactElement }> = ({ children }) => {
  const [isLatestBuildDate, setIsLatestBuildDate] = useState<boolean>(false);

  useEffect(() => {
    axios.get('/meta.json').then((response: AxiosResponse) => {
      const latestBuild = response.data.buildDate;
      const currentBuild = packageJson.buildDate;
      // * CHECK CURRENT BUILD AND LATEST BUILD
      if (currentBuild > latestBuild) {
        // * CHECK CACHES BROWSER ABILITY
        if (caches)
          caches.keys().then((names) => {
            names.forEach((name) => {
              caches.delete(name);
            });
          });
        window.location.reload();
      } else {
        setIsLatestBuildDate(true);
      }
    });
  }, []);
  return isLatestBuildDate ? children : null;
};
export default ClearCache;
