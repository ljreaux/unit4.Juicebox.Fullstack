import React, { useEffect, useState } from "react";
import { getAllPosts } from "../API_Calls";
import Post from "./Post";

export default function Posts({ posts, header }) {
  const { posts: displayPosts } = posts;
  return (
    <div className="center">
      <h1>{header}</h1>
      {displayPosts?.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
