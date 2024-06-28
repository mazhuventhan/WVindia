import React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

const HelmetWrapper = ({ title, description }) => {
  const defaultTitle = "My Awesome App";
  const defaultDescription = "This is the default description for my awesome app.";

  return (
    <>
      <Helmet>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
      </Helmet>
      <Outlet />
    </>
  );
};
export default HelmetWrapper;