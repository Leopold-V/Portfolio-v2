import React, { useState } from 'react';
import styles from '../styles/pages/articles.module.scss';
import { CardArticle } from '../components/CardArticle';
import { Searchbar } from '../components/Searchbar';
import { TitleSecondary } from '../components/Typography/Title';
import { motion } from 'framer-motion';

const articles = ({ articles }: { articles: any }) => {
  const [articlesFilter, setArticlesFilter] = useState(articles.data);

  const handleSearch = (input: string) => {
    setArticlesFilter(
      articles.data.filter((art: any) => art.title.toLowerCase().match(input.toLowerCase()))
    );
  };

  return (
    <div className={styles.container}>
      <TitleSecondary>Articles</TitleSecondary>
      <Searchbar search={handleSearch} />
      {articles && (
        <motion.ul 
        initial="hidden"
        animate="visible"
        variants={list}
        className={styles.list_wrapper}>
          {articlesFilter.map((art: any, i: number) => (
            <motion.div variants={item} custom={i} key={art.id}><CardArticle article={art} /></motion.div>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

const list = {
  visible: { 
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: { 
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
   },
}

const item = {
  visible: { 
    opacity: 1, x: 0 
  },
  hidden: (i: number) => {
    if (i % 2 === 0) {
      return ({ opacity: 0, x: -200 })
    } else {
      return ({ opacity: 0, x: +200 })
    }
  }
}

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
