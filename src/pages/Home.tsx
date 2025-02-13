const Home = () => {
  return (
    <div className="bg-white h-full">
      <h1 className="text-coralblue">Welcome Home</h1>
      <div className="content">
        <p>This is a sample home page component.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
