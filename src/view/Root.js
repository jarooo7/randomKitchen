import React from 'react';
import { collection, doc, updateDoc, setDoc } from "firebase/firestore"; 
import db from 'service/dbFirebase';
import MainTemplate from 'templates/MainTemplate';

const Root = () => {
  return (
    <MainTemplate>
      tekst
    </MainTemplate>
  );
};

export default Root;
