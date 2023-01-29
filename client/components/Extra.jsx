import React from "react";
import { posts } from "../../const/posts";
import { wrapPromise } from "../wrapPromise";

const networkRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(posts), 3000);
  });
};

const getData = () => {
  const promise = networkRequest();
  return wrapPromise(promise);
};

const resource = getData();

const Extra = () => {
  const posts = resource.read();

  return (
    <aside>
      <h1>Related Content</h1>
      {posts.map((p) => {
        return (
          <article key={p.title}>
            <h3>{p.title}</h3>
            <div>
              <address>{p.author}</address>
              <time dateTime={p.createdAt}>~ {p.createdAt}</time>
            </div>
          </article>
        );
      })}
    </aside>
  );
};

export default Extra;
