import { SearchBar } from 'components/SearchBar/SearchBar';
import { ArticleList } from 'components/ArticleList/ArticleList';

export const Home = () => {
  return (
    <section>
      <h1 className="visually-hidden"> Home page</h1>
      <SearchBar />
      <ArticleList />
    </section>
  );
};
