import { TypeWithKey } from '../models'

export const getValidationError = (errorCode: any) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: 'Network error',
    ERR_TIMEOUT: 'Timeout error',
    ERR_CANCEL: 'Cancelled request',
    ERR_UNKNOWN: 'Unknown error',
    ERR_400: 'Error 400',
    ERR_401: 'Error 401',
    ERR_403: 'Error 403',
  }

  return codeMatcher[errorCode] ?? { errorCode }
}
