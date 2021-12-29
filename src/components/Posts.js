import React from "react";

export default function Posts({ currentPosts }) {
  return (
    <ul className="list-group my-4">
      {currentPosts().map((post) => {
        return (
          <li key={post.id} className="list-group-item">
            {post.id}-{post.title}
          </li>
        );
      })}
    </ul>
  );
}
