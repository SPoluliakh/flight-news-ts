import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

const ArticlePage = lazy(() =>
  import('../../Pages/ArticlePage/ArticlePage').then(module => ({
    ...module,
    default: module.ArticlePage,
  }))
);

const HomePage = lazy(() =>
  import('../../Pages/HomePage/HomePage').then(module => ({
    ...module,
    default: module.HomePage,
  }))
);

const NotFoundPage = lazy(() =>
  import('../../Pages/NotFoundPage/NotFoundPage').then(module => ({
    ...module,
    default: module.NotFoundPage,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="articlePage/:id" element={<ArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
