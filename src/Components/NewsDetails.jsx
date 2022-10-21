import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const detailsNews = useLoaderData();

  const { details, image_url, author, title } = detailsNews;
  return (
    <div>
      <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-10">
        <img class="object-cover w-full h-64" src={image_url} alt="Article" />

        <div class="p-6">
          <div>
            <Link
              href="#"
              class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabindex="0"
              role="link"
            >
              {title}
            </Link>
            <div>
              <div class="mt-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <img
                      class="object-cover h-10 rounded-full"
                      src={author?.img}
                      alt="Avatar"
                    />
                    <Link
                      href="#"
                      class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                      tabindex="0"
                      role="link"
                    >
                      {author?.name}
                    </Link>
                  </div>
                  <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">
                    {author?.published_date}
                  </span>
                </div>
              </div>
            </div>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
