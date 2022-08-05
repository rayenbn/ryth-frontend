import React from "react";
import { Card } from "react-bootstrap";
import StartupCoverImage from "./StartupCoverImage";
import StartupAvatarSection from "./StartupAvatarSection";

const StartupProfileHeader = ({coverImg, avatar, companyName, country}) => {
  return (
    <>
      <StartupCoverImage coverImg={coverImg} />
      <StartupAvatarSection 
          avatar={avatar}
          companyName={companyName}
          country={country} />

    </>
  );
};

export default StartupProfileHeader;