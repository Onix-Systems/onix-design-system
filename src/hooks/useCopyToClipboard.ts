import { useState } from 'react';

const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState<string | null>('');

  const copy = async (text: string) => {
    if (!navigator?.clipboard) {
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      setCopiedText(null);
      return false;
    }
  };

  return [copiedText, copy, setCopiedText] as const;
};

export default useCopyToClipboard;
