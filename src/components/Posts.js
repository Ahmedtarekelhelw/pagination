export default function Posts({ currentPosts }) {
  return (
    <ul className="list-group my-4">
      {currentPosts().map((post) => (
        <li key={post.id} className="list-group-item">
          {post.id}-{post.title}
        </li>
      ))}
    </ul>
  );
}
