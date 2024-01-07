import React from 'react'
import MainCarousels from "./maincarousels";
import DescCards from './descCard';
import CardCarousels from '../carousels/carousels';
import MyPage from './cardimg';
import FormPage from './contactform/contactform';

const main = () => {
  return (
    <div>
      <MainCarousels/>
      <CardCarousels/>
      <DescCards/>
      <MyPage/>
      <FormPage/>
    </div>
  )
}

export default main;