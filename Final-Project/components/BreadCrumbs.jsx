// components/BreadCrumbs.jsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BreadCrumbs = ({ breadCrumbs }) => {
  const router = useRouter();
  const currentPath = router.asPath;

  // Find the index of the current path in the breadcrumbs array
  const currentIndex = breadCrumbs.findIndex(
    (breadCrumb) => breadCrumb.url === currentPath
  );

  return (
    <div>
      <section className='py-5 sm:py-7 bg-white'>
        <div className='container max-w-screen-xl mx-auto px-4'>
          <ol className='inline-flex flex-wrap text-black space-x-1 md:space-x-3 items-center'>
            {breadCrumbs?.map((breadCrumb, index) => (
              <li key={index} className='inline-flex items-center'>
                <Link
                  href={breadCrumb.url}
                  className={`${
                    index <= currentIndex
                      ? 'text-black'
                      : 'text-gray-400 hover:text-blue'
                  }`}
                >
                  {breadCrumb.name}
                </Link>
                {breadCrumbs.length - 1 !== index && (
                  <i className='ml-3 text-gray-400 fas fa-chevron-right'>{">"}</i>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default BreadCrumbs;
