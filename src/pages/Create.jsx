import { useState } from "react";
import { POST_URL } from "../constants";
import style from "../css/form.module.css";
import NavBar from "../components/NavBar";

export default function Create() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [house, setHouse] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const character = { name, gender, house, image };
    setLoading(true);

    await fetch(POST_URL, {
      method: "POST",
      headers: { "Content-Type": "applicattion/json" },
      body: JSON.stringify(character),
    })
      .then(() => {
        console.log(JSON.stringify(character));
      })
      .then(() => {
        setName("");
        setGender("");
        setHouse("");
        setImage("");
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }

  return (
    <>
      <NavBar />
      <section className={style.section}>
        <h3 className={style.title}>Crear Personaje</h3>

        <form onSubmit={handleSubmit} className={style.form}>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Género"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <input
            type="text"
            placeholder="Casa"
            value={house}
            onChange={(e) => setHouse(e.target.value)}
          />
          <input
            type="url"
            placeholder="URL de la imagen"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          {!loading && (
            <button className={style.btn} type="submit">
              Crear Personaje
            </button>
          )}

          {loading && (
            <button disabled className={style.btn2} type="submit">
              Creando Presonaje...
            </button>
          )}
        </form>
      </section>
    </>
  );
}
