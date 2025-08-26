/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { UpscaleIcon } from './icons';

interface UpscalePanelProps {
  onApplyUpscale: () => void;
  isLoading: boolean;
}

const UpscalePanel: React.FC<UpscalePanelProps> = ({ onApplyUpscale, isLoading }) => {
  return (
    <div className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex flex-col items-center gap-4 animate-fade-in backdrop-blur-sm text-center">
      <UpscaleIcon className="w-12 h-12 text-blue-400 mb-2" />
      <h3 className="text-xl font-bold text-gray-200">Upscale Image</h3>
      <p className="max-w-md text-gray-400">
        Increase the image resolution and enhance details for a sharper, clearer picture. This process can take a moment.
      </p>
      <button
        onClick={onApplyUpscale}
        className="w-full max-w-xs mt-4 bg-gradient-to-br from-blue-600 to-blue-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-px active:scale-95 active:shadow-inner text-base disabled:from-blue-800 disabled:to-blue-700 disabled:shadow-none disabled:cursor-not-allowed disabled:transform-none"
        disabled={isLoading}
      >
        Start Upscaling
      </button>
    </div>
  );
};

export default UpscalePanel;
