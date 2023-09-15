import { useState } from 'react';

export function LikeButton({ liked }: { liked: boolean }) {
  const [_liked, setLiked] = useState<boolean>(liked);

  return (
    <button type="button" onClick={() => setLiked(!_liked)}>
      <svg
        className={`transition-all ease-out duration-300 ${
          !_liked
            ? 'stroke-gray-400 fill-gray-500'
            : 'stoke-red-400 fill-red-500'
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
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
    </button>
  );
}
