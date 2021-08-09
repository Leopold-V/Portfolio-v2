function Article({article}: { article: string}) {

    return <div>Loading...</div>
}

/*
export async function getStaticPaths() {
    const rep = await fetch('https://api-webdev.herokuapp.com/articles');
    let articles = await rep.json();
    articles = articles.map((ele) => {return {params: {slug: encodeURI(ele.title)}}});
    return {
      paths: [...articles],
      fallback: true
    }
  }*/

  /*
export async function getStaticProps(context) {

    const slug = context.params.slug; // get slug from params

    const articles = await fetch('https://api-webdev.herokuapp.com/articles');
    const res = await articles.json();

    const article = res.find((ele) => ele.title === slug);

    return {
        revalidate : 1,
        props: {
            strategies : article !== undefined ? res.filter((ele) => ele.Category === article.Category) : [],
            article: article !== undefined ? article : '',
            slug,
        }
    }
}
*/

export default Article;
