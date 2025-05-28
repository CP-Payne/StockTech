import React from "react";
import Hero from "../../Components/Hero/Hero";
import { useAuth } from "../../Context/useAuth";
import { Navigate } from "react-router";

interface Props {}

const HomePage = (props: Props) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn()) {
    return <Navigate to="/search" replace />;
  }

  return (
    <div>
      <Hero />
    </div>
  );
};

export default HomePage;
