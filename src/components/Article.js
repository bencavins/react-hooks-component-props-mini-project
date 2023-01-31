function Article({title, preview, minutes, date="January 1, 1970"}) {

  let minutesEmojis = ''
  if (minutes < 30) {
    let roundedMins = Math.ceil(minutes / 5)
    minutesEmojis = '☕️'.repeat(roundedMins)
  } else {
    let roundedMins = Math.ceil(minutes / 10)
    minutesEmojis = '🍱'.repeat(roundedMins)
  }

  return (
    <article>
      <h3>{title}</h3> 
      <small>{date}</small>
      <p>{preview}</p>
      <p>{minutesEmojis}</p>
    </article>
  )
}

export default Article;