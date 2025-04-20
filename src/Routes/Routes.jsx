import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Book from '../pages/Book/Book';
import BookDetails from '../pages/BookDetails/BookDetails';
import About from '../pages/about/About';
import ReadList from '../pages/readList/readList';

  
export  const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage/>,
      children: [
        {
            index: true,
            loader: () => fetch('booksData.json'),
            path: "/",
            Component: Home,
        },
        {
            path: "about",
            Component: About,
        },
        {
            path: "/bookDetails/:id",
            loader: () => fetch('booksData.json'),
            Component: BookDetails,
        },
        {
            path: "readList",
            loader: () => fetch('booksData.json'),
            Component: ReadList,
        }
    ]
    },
  ]);