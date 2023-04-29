import React, { FC } from "react";

import styles from "./Buttons.module.css";

interface Props {
  changePage: any;
  onPage: any;
}

// We're going to apply the button for each page so that you can flip it from the top right corner
// if page is even, no left button, only right page. if page is odd, no right button, only left button
const Buttons: FC<Props> = ({ onPage, changePage }) => {
  let button: JSX.Element = <></>;
  if (onPage === 1) {
    button = (
      <button
        className={styles.leftButton + " " + styles.button}
        onClick={() => {
          changePage((prevPage: any) => {
            return prevPage - 1;
          });
        }}
      >
        (
      </button>
    );
  } else if (onPage === 0) {
    button = (
      <button
        className={styles.rightButton + " " + styles.button}
        onClick={() => {
          changePage((prevPage: any) => {
            return prevPage + 1;
          });
        }}
      >
        )
      </button>
    );
  }

  return <div className={styles.buttonBox}>{button}</div>;
};

export default Buttons;
