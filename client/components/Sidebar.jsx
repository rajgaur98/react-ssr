import React from "react";
import { user } from "../../const/user";
import { wrapPromise } from "../wrapPromise";

const networkRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(user), 1000);
  });
};

const getData = () => {
  const promise = networkRequest();
  return wrapPromise(promise);
};

const resource = getData();

const Sidebar = () => {
  const user = resource.read();

  return (
    <nav>
      <img src={user.logo} alt="Profile Picture" />
      <p>{user.name}</p>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
