import React from "react";
import { post } from "../../const/post";
import { wrapPromise } from "../wrapPromise";

const networkRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(post), 2000);
  });
};

const getData = () => {
  const promise = networkRequest();
  return wrapPromise(promise);
};

const resource = getData();

const Main = () => {
  const post = resource.read();

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        <div>
          <address>{post.author}</address>
          <time dateTime={post.createdAt}>~ {post.createdAt}</time>
        </div>
        <section>
          <p>{post.content.p1}</p>
          <p>{post.content.p2}</p>
          <p>{post.content.p3}</p>
        </section>
      </article>
    </main>
  );
};

export default Main;
