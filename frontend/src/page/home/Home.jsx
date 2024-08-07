import React, { Fragment } from "react";
import Users from "../../components/users/Users";
import CreateUsers from "../../components/createUsers/CreateUsers";
import Profile from "../../components/profile/Profile";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Users />
      <Profile />
    </Fragment>
  );
};

export default Home;
