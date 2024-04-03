const LayoutDemo = () => {
  //This is an artificially slows down rendering
  let now = performance.now();
  while (performance.now() - now < 200) {
    //Do nothing for a bit...
  }

  return (
    <div>
      <p>userId:</p>
      <p>Admin:</p>
    </div>
  );
};

export default LayoutDemo;
