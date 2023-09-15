import { useState } from 'react';

export function CommentButton() {
  const [comment, serComment] = useState<boolean>(false);

  return (
    <button type="button" onClick={() => serComment(!comment)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-all ease-out duration-300 ${
          !comment
            ? 'stroke-gray-400 fill-gray-500'
            : 'stoke-blue-400 fill-blue-500'
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
        <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
      </svg>
    </button>
  );
}
