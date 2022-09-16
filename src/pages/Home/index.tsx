import { useState } from "react";

export default function Home() {
  const [projects] = useState(["De alta", "DogBreed", "pokebook"]);

  const items = projects.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  return (
    <div>
      <h1> Olá, meu nome é Denilson!</h1>
      <section>
        <p>Projetos</p>
        <ul>{items}</ul>
      </section>
    </div>
  );
}
