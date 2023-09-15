import { PostCard } from './components/cards/PostCard.component';
import { posts } from './data/posts';
import { Post } from './data/interfaces';
import { useFilter } from './hooks/useFilter';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState<string>('');
  const filtered = useFilter(posts, search);

  return (
    <main className="bg-gray-800 min-h-screen">
      <div className="container mx-auto">
        <div className="py-10 flex flex-col gap-10">
          <h1 className="text-white text-4xl text-center font-bold">Victter</h1>
          <input
            type="text"
            className="bg-gray-700 border border-gray-500 py-2 px-5 rounded-md text-white"
            placeholder="Enter a username"
            onChange={(event) => setSearch(event.target.value as string)}
          />
          <h6 className="text-white text-center font-medium">
            {filtered.length} results
          </h6>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filtered.map((post: Post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <h1 className="text-3xl text-center text-gray-400 font-bold">
              Data no available
            </h1>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
