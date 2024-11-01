import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';

const DynamicBreadcrumbs = () => {
  const location = useLocation();

  // Split the pathname and filter out empty segments
  const pathnames = location.pathname
    .split('/')
    .filter((x) => x); // Filter out empty segments

  // Remove the last segment if it matches the ID format
  if (pathnames.length > 1 && /^[A-Za-f0-9]{4,}$/.test(pathnames[pathnames.length - 1])) {
    pathnames.pop(); // Remove the last segment if it's an ID
  }

  return (
    <nav aria-label="breadcrumb" className="mb-4">
      <ol className="flex">
        <li>
          <RouterLink to="/" className="text-blue-500 hover:text-blue-700">
            Home
          </RouterLink>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          // Render last breadcrumb as plain text
          if (isLast) {
            return (
              <li key={to} className="flex items-center">
                <span className="mx-2 text-gray-500">/</span>
                <span className="font-semibold text-gray-800 cursor-default">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </span>
              </li>
            );
          }

          // Render other segments as links
          return (
            <li key={to} className="flex items-center">
              <span className="mx-2 text-gray-500">/</span>
              <RouterLink to={to} className="text-blue-500 hover:text-blue-700">
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </RouterLink>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default DynamicBreadcrumbs;
