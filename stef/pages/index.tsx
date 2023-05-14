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
  // const [worldSpin, setWorldSpin] = useState(0);

  // const [backgroundMover, setBackgroundMover] = useState(boundaries);
  // const [changeDirection, setChangeDirection] = useState(-1);
  // const [isChanged, setChange] = useState(false);

  // useEffect(() => {
  //   // we create an interval function that adds changeDirection to backgroundMover
  //   // backgroundMover += changeDirection is new background position
  //   const timerFunction = () => {
  //     setBackgroundMover((prevState: number) => {
  //       prevState += changeDirection;
  //       return prevState;
  //     });
  //     setWorldSpin((prevState: number) => {
  //       prevState += 1;
  //       return prevState;
  //     });
  //   };
  //   const time = setInterval(timerFunction, 20); // speed

  //   return () => clearInterval(time);
  // }, [backgroundMover]);

  // useEffect(() => {
  //   // We must only change setChangeDirection once
  //   if (Math.abs(backgroundMover) >= boundaries + 1 && isChanged === false) {
  //     setChange(true);
  //     setChangeDirection((prevDirection) => 0 - prevDirection); // flip direction
  //   }
  //   // we turn it back on once we&apos;ve hit 0.
  //   if (backgroundMover === 0) {
  //     setChange(false);
  //   }
  // }, [backgroundMover]);

  // // console.log(backgroundMover);
  // console.log(backgroundMover * 0.01 + 2);

  let allPages: any = [
    {
      first: (
        <>
          <h1 className={styles.happyBirthday}>Happy Mother&apos;s day Mom!</h1>
          <p className={styles.abre}>Open the page!</p>
        </>
      ),
      second: (
        <>
          <p className={styles.desc}>Dear Mom,</p>
          <p className={styles.desc}>
            Happy Mother&apos;s day! The last time I saw you, you stalked me at
            the airport ✈️ watching me get my boarding pass. That was really
            cute, and it goes to say how far you go for me. It&apos;s been like
            this my whole life, with all of the support you have given me. 😊
          </p>
        </>
      ),
    },
    {
      first: (
        <>
          <p className={styles.desc}>
            I appreciate everything that you have done for me. You are a
            reflection 🪞 of how I will raise my kids. 🚸
          </p>
          <p className={styles.desc}>Thank you for being such a good Mom.</p>
          <p className={styles.desc}>Da,</p>
          <p className={styles.name}> David Serrano</p>
        </>
      ),
      second: <h1 className={styles.back}>Da</h1>,
    },
  ];

  const [onPage, changePage] = useState(0);

  const pages = allPages.map((page: number, i: number) => {
    // onPage = 0; page = 0; we&apos;re on page 0
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
        <title>Happy Mother&apos;s day {birthdayName}</title>
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
