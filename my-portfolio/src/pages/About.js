import React from 'react';
import {Skill} from '.././components';

function About() {
  return (
    <div className="about">
      <div className="about__left">
        <img
          className=""
          src="https://lh3.googleusercontent.com/proxy/Wwm67T0UrKuSzJs4BKbbrS3wX687gGsnQKpBG2MOZ-ykvtui5zMVyEw02L5onmdxGy20iVI9buARV824TtTGetW7dyfo2Zd0ZppZtSeWG8HWp3RIZoICVA" alt=""/>
        <h2 className="about__left-name">Артименя Кмрилл</h2>
        <p className="about__left-info">Возрост: 21 год</p>
        <p className="about__left-info">Место жительства : Минск</p>

        <h2 className="about__left-title">Коротко обо мне</h2>
        <p className="about__left-text">Увлеченный и целеустремленный разработчик. Постоянно улучшаю свои навыки во всех областях, начиная с разработки и заканчивая повседневными делами.Заканчивал курсы Frontend-разработчика в BelHard. Занимаюсь баскетболом, читаю книги, люблю рок.</p>
      </div>
      <div className="about__right">
        <h2 className="about__right-title">Мои скиллы</h2>
        <Skill
          skillName={"HTML/CSS"}
          skillInfo={"Изучил семантические теги HTML5 и умею их применять.Умею  работать с анимациями. Использую в верстке Flexbox и Grid, а также методологию BEM. Есть опыт адаптивной верстки. Работаю с препроцессором SASS(SCSS)."}
          />
        <Skill
           skillName={"JS"}
           skillInfo={"На хорошем уровне знаком и умею использовать : ES6 синтаксис | Event loop | promise | Async/await | Замыкания | Fetch и не только"}
           />
        <Skill
           skillName={"React"}
           skillInfo={"На хорошем уровне знаю React. Умею работать с Hooks и Lifecycle methods, использовать  React-router. Могу работать с Redux (знаю что такое actions, redusers, store)."}
           />
      </div>
    </div>
  );
}

export default About;
