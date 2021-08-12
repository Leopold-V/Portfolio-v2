import React, { useState } from 'react';
import styles from '../styles/pages/articles.module.scss';
import { CardArticle } from '../components/CardArticle';
import { Searchbar } from '../components/Searchbar';
import { TitleSecondary } from '../components/Typography/Title';

const articles = ({ articles }: { articles: any }) => {
  const [articlesFilter, setArticlesFilter] = useState(articles.data);

  const handleSearch = (input: string) => {
    setArticlesFilter(
      articles.filter((art: any) => art.title.toLowerCase().match(input.toLowerCase()))
    );
  };

  return (
    <div className={styles.container}>
      <TitleSecondary>Articles</TitleSecondary>
      <Searchbar search={handleSearch} />
      {articles && (
        <ul className={styles.list_wrapper}>
          {articlesFilter.map((art: any) => (
            <CardArticle key={art.id} article={art} />
          ))}
        </ul>
      )}
    </div>
  );
};

export async function getStaticProps(context: any) {
  const BASE_URL = 'https://dev.to/api/articles?username=leopold';

  const response = await fetch(BASE_URL);
  const json = await response.json();

  const articleSorted = {
    data: json.sort((a: any, b: any) => b.positive_reactions_count - a.positive_reactions_count),
  };

  return {
    props: {
      articles: articleSorted,
    },
  };
}

export default articles;
