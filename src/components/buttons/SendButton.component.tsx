import { useState } from 'react';

export function SendButton({ shared }: { shared: boolean }) {
  const [send, setSend] = useState<boolean>(shared);

  return (
    <button type="button" onClick={() => setSend(!send)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-all ease-out duration-300 ${
          !send
            ? 'stroke-gray-400 fill-gray-500'
            : 'stoke-green-400 fill-green-500'
        }`}
        width="30"
        height="30"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
      </svg>
    </button>
  );
}
