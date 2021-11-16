const Book = (title, author) => {
  return (
    <li>
      <span>{title}</span>
      <span> by </span>
      <span>"{author}"</span>
    </li>
  );
}
 
export default Book;title, author