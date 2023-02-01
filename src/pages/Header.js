import React from "react";
import HeadTags from "./HeadTags";

const Header = (props) => {
  const { metaDescription, title } = props;
  return (
    <div>
      <HeadTags title={title} metaDescription={metaDescription}></HeadTags>
    </div>
  );
};

export default Header;
