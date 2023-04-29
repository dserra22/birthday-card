import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./Home.module.css";
import { birthdayName } from "@/store/data/data";
import { useEffect, useState } from "react";
import Buttons from "@/components/Buttons/Buttons";

const boundaries = 15; // how big

// get an svg of a tree
export default function Home() {
  const [worldSpin, setWorldSpin] = useState(0);

  const [backgroundMover, setBackgroundMover] = useState(boundaries);
  const [changeDirection, setChangeDirection] = useState(-1);
  const [isChanged, setChange] = useState(false);

  useEffect(() => {
    // we create an interval function that adds changeDirection to backgroundMover
    // backgroundMover += changeDirection is new background position
    const timerFunction = () => {
      setBackgroundMover((prevState: number) => {
        prevState += changeDirection;
        return prevState;
      });
      setWorldSpin((prevState: number) => {
        prevState += 1;
        return prevState;
      });
    };
    const time = setInterval(timerFunction, 20); // speed

    return () => clearInterval(time);
  }, [backgroundMover]);

  useEffect(() => {
    // We must only change setChangeDirection once
    if (Math.abs(backgroundMover) >= boundaries + 1 && isChanged === false) {
      setChange(true);
      setChangeDirection((prevDirection) => 0 - prevDirection); // flip direction
    }
    // we turn it back on once we've hit 0.
    if (backgroundMover === 0) {
      setChange(false);
    }
  }, [backgroundMover]);

  // console.log(backgroundMover);
  console.log(backgroundMover * 0.01 + 2);

  let allPages: any = [
    {
      first: (
        <>
          <h1 className={styles.happyBirthday}>
            Feliz Cumpleanos Estefany{" "}
            <span
              style={{
                fontSize: `${backgroundMover * 0.02 + 2.4}rem`,
              }}
            >
              ❤️
            </span>
          </h1>
          <p className={styles.abre}>abre la pagina!</p>
        </>
      ),
      second: (
        <>
          <p className={styles.desc}>Estefany,</p>
          <p className={styles.desc}>
            Tu sonrisa es tan brillante como el sol{" "}
            <span
              style={{
                transform: `rotate(${worldSpin % 360}deg)`,
              }}
            >
              ☀️
            </span>
            . Es una sonrisa de un deseo genuino vivir en el borde de vida.
          </p>
          <p className={styles.desc}>
            Has viajaste veinteseis viajes al redador del sol. Que increible.
            Con tu corazon encendido de pasion{" "}
            <span
              style={{
                transform: `scaleY(${1 + backgroundMover * 0.005})`,
              }}
            >
              🔥
            </span>{" "}
            y lleno de amor{" "}
            <span
              style={{
                fontSize: `${backgroundMover * 0.02 + 2.4}rem`,
              }}
            >
              ❤️
            </span>
            , tus viajes alrededor del sol mejoran cada año{" "}
            <span
              style={{
                transform: `rotate(${worldSpin % 360}deg)`,
              }}
            >
              🌎
            </span>
            . Yo se que tus sueños realizaran y le daras al mundo. Extiende tus
            raices lejos y anchos para aferrarse a la verdad.
          </p>
        </>
      ),
    },
    {
      first: (
        <>
          <p className={styles.desc}>
            Tus ojos estan abiertos Estefany (y son hermosos). Es un otro año
            mostrar el mundo la luz <span>💡</span> entre la oscuridad y
            bendiciar la tierra con tu presencia. Ya eres una bendicion a mi
            vida.
          </p>
          <p className={styles.desc}>
            Bailaremos juntos{" "}
            <span
              style={{
                transform: `translateX(${-backgroundMover * 0.005 + 0.3}rem)`,
              }}
            >
              🕺
            </span>
            <span
              style={{
                transform: `translateX(${backgroundMover * 0.005 - 0.3}rem)`,
              }}
            >
              💃
            </span>
            mientras nos miramos en los ojos. Te dare tus besitos de cumpleaños
            algun dia. Agradezco concerte mucho, y espero que podamos crecer
            juntos. Eso es real.
            <span>😉</span>
          </p>
          <p>&nbsp;</p>
          <p className={styles.desc}>Con mucho amor,</p>
          <p className={styles.name}> David Serrano</p>
        </>
      ),
      second: (
        <h1 className={styles.back}>no piensa en besitos en el cuello jaja</h1>
      ),
    },
  ];

  const [onPage, changePage] = useState(0);

  const pages = allPages.map((page: number, i: number) => {
    // onPage = 0; page = 0; we're on page 0
    // onPage = 1; page = 0; flip
    let zIndex: number = 0;

    // Make the next page viewable
    if (onPage === 0) {
      if (i === 0) {
        zIndex = 2;
      } else if (i === 1) {
        zIndex = 1;
      }
    } else if (onPage === 1) {
      if (i === 0) {
        zIndex = 1;
      } else if (i === 1) {
        zIndex = 2;
      }
    } else if (onPage === 2) {
      if (i === 0) {
        zIndex = 1;
      } else if (i === 1) {
        zIndex = 2;
      }
    }

    return (
      <div
        className={styles.page + ` ${onPage > i ? styles.flipped : ""}`}
        id={String(i)}
        style={{
          zIndex: `${zIndex}`,
        }}
        key={i}
      >
        <div className={styles.cardFront}>
          <div className={styles.frontContent}>
            {allPages[i].first}
            <Buttons onPage={0} changePage={changePage} />
          </div>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.backContent}>
            {allPages[i].second}
            <Buttons onPage={1} changePage={changePage} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <Head>
        <title>Happy Birthday {birthdayName}</title>
      </Head>

      <section className={styles.section}>
        <figure
          className={
            styles.card +
            ` ${onPage > 0 ? styles.shiftRight : ""}` +
            ` ${onPage >= 2 ? styles.shiftLeft : ""}`
          }
        >
          {pages}
        </figure>
      </section>
    </>
  );
}
