import { Card } from "../components/Card";
import { CHARACTERS_URL } from "../constants";
import { useGetCharacters } from "../server/useGetCharacters";
import style from "../css/home.module.css";
import NavBar from "../components/NavBar";

export default function Home() {
  const { data, loading /* handleCancelRequest, error */ } =
    useGetCharacters(CHARACTERS_URL);

  return (
    <>
      <NavBar />
      <section className={style.section}>
        {loading && <p>Loading...</p>}

        {data &&
          data.map((c) => (
            <Card
              className={style.card}
              name={c.name}
              gender={c.gender}
              house={c.house}
              image={c.image}
              key={c.id}
            />
          ))}
      </section>
    </>
  );
}
