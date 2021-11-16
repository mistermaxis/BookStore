function AddBook() {
  return (
    <form>
      <input type="text" required placeholder="Book Title"></input>
      <input type="text" required placeholder="Book Author"></input>
      <button type="button">Add Book</button>
    </form>
  );
}

export default AddBook;