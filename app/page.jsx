"use client";

const HomePage = () => {
  return (
    <section>
      <h1>Hello World</h1>
      <button
        onClick={() => {
          alert("hello");
        }}
      >
        Click
      </button>
    </section>
  );
};

export default HomePage;
