import Article from "./Article";

function ArticleList({posts}) {
  return (
    <main>
      {posts.map(post => {
        return <Article {...post} key={post.id} />
      })}
    </main>
  )
}

export default ArticleList;