import { Post, User } from '../../data/interfaces';
import { CommentButton } from '../buttons/CommentButton.component';
import { LikeButton } from '../buttons/LikeButton.component';
import { SendButton } from '../buttons/SendButton.component';

interface Props {
  post: Post;
}

export function PostCard({ post }: Props) {
  return (
    <div className="bg-gray-900 rounded-md px-10 py-5">
      <div className="flex flex-col h-full gap-4 justify-between">
        <div className="flex-1 flex flex-col gap-4">
          <UserHeader user={post.user} />
          <div className="">
            <p className="text-gray-400">{post.body}</p>
          </div>
        </div>
        <div className="px-5 py-1  rounded-md bg-gray-700 flex items-center justify-center gap-2 m-auto">
          <LikeButton liked={post.liked || false} />
          <SendButton shared={post.shared || false} />
          <CommentButton commented={post.commented || false} />
        </div>
      </div>
    </div>
  );
}

function UserHeader({ user }: { user: User }) {
  return (
    <div className="flex items-center gap-3">
      <img
        className="w-12 h-12 rounded-full object-cover"
        src="https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg"
        alt={user.username}
      />
      <p className="text-gray-300 font-medium">{user.name}</p>
    </div>
  );
}
