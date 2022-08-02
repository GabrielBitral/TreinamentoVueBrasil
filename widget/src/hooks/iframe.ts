import {
  setApiKey,
  setCurrentPage,
  setFingerPrint
} from '@/store'

interface IFrameControl {
  updateCoreValuesOnStore(): void;
  notifyOpen(): void;
  notifyClose(): void;
}

export default function useIframeControl(): IFrameControl {

  function updateCoreValuesOnStore(): void {
    if (process.env.NODE_ENV !== 'production') {
      const query = new URLSearchParams(window.location.search);
      const apiKey = query.get('apiKey') ?? '';
      const page = query.get('page') ?? '';
      const fingerprint = query.get('fingerPrint') ?? '';

      setCurrentPage(page);
      setFingerPrint(fingerprint);
      setApiKey(apiKey);
      return
    }

    setCurrentPage('https://playground-url.com');
    setFingerPrint('123123123123123');
    setApiKey('fcd5015c-10d3-4e9c-b395-ec7ed8850165');
  }

  function notifyOpen (): void {
    window.parent.postMessage({
      isWidget: true,
      isOpen: true
    }, '*')
  }

  function notifyClose (): void {
    window.parent.postMessage({
      isWidget: true,
      isOpen: false
    }, '*')
  }

  return {
    updateCoreValuesOnStore,
    notifyOpen,
    notifyClose
  }
}
