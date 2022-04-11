/* eslint no-console: 0 */
import { useEffect } from 'react';
const info = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.info(
      `[${getTimeStamp()}] [INFO] [${namespace}] ${message}`,
      object,
    );
  } else {
    console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
  }
};

const warn = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.warn(
      `[${getTimeStamp()}] [WARN] [${namespace}] ${message}`,
      object,
    );
  } else {
    console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
  }
};

const error = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.error(
      `[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`,
      object,
    );
  } else {
    console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
  }
};

const debug = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.debug(
      `[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`,
      object,
    );
  } else {
    console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
  }
};

const getTimeStamp = (): string => new Date().toISOString();

const useLog = (
  namespace: string,
  message: string,
  type?: string,
  object?: any,
): void => {
  useEffect(() => {
    switch (type) {
      case 'info':
        info(namespace, message, object);
        break;
      case 'warn':
        warn(namespace, message, object);
        break;
      case 'error':
        error(namespace, message, object);
        break;
      case 'debug':
        debug(namespace, message, object);
        break;
      default:
        info(namespace, message, object);
        break;
    }
  }, [type, namespace, message, object]);
};

export default useLog;
