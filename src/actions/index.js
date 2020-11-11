import { LOADING_OPEN, LOADING_CLOSE } from './actionType'

export const loadingOpen = () => {
  return { type: LOADING_OPEN }
}

export const loadingClose = () => {
  return { type: LOADING_CLOSE }
}
