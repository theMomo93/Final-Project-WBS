import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BreadCrumbs = ({ breadCrumbs }) => {
  const router = useRouter();
  const currentPath = router ? router.asPath : ''; // Check if router exists before accessing its properties

  // Find the index of the current path in the breadcrumbs array
  const currentIndex = breadCrumbs.findIndex(
    (breadCrumb) => breadCrumb.url === currentPath
  );

  return (
    <div>
      <section>
        <div className='flex px-5 py-3 text-black bg-gradient-to-r from-cyan-900 to-blue-950 dark:border-black-700' aria-label="Breadcrumb">
          <ol className='inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse'>
            {breadCrumbs?.map((breadCrumb, index) => (
              <li key={index} className='inline-flex items-center ml-8'>
                <Link
                  href={breadCrumb.url}
                  className={`${
                    index <= currentIndex
                      ? 'text-xl hover:text-blue-600 dark:text-gray-300 dark:hover:text-white'
                      : 'text-xl hover:text-blue-600 dark:text-gray-300 dark:hover:text-white'
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
