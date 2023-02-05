import { SearchBar } from '../SearchBar/SearchBar';
import { ArticleList } from '../ArticleList/ArticleList';

export const Home = () => {
  return (
    <section>
      <h1 className="visually-hidden"> Home page</h1>
      <SearchBar />
      <ArticleList />
    </section>
  );
};
