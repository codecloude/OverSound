import React, { useState } from "react";
import SoundCard from "../components/SoundCard/SoundCard";
import TutorialVideo from "../components/TutorialVideo";
import {
  DescWhatNewSC,
  DivBoxContentSC,
  DivBoxNewSoundsSC,
  DivBoxPlusesSC,
  DivBoxTextSC,
  DivBoxTutorialsSC,
  DivItemsVideoSC,
  DivPlusBoxSC,
  DivRowsHomeSC,
  DivRowsPlusesBox,
  DivSoundCardBoxSC,
  DivStartBoxSC,
  DivTitleBoxSC,
  DivWhatNewSC,
  DivWrapHomeSC,
  ImgPlusBoxSC,
  LinkAllSoundsSC,
  LinkHomeStartSC,
  ParagraphSC,
  PlusDescSC,
  PlusNameSC,
  TitlePlusSC,
  TitleSC,
  TitleWhatNewSC,
} from "../styled-component/style.home";

const CheckMark =
  "https://splice-res.cloudinary.com/image/upload/f_auto,q_auto,w_255,dpr_1.0/v1532113864/marketing_site/sounds/2018-08/featuresSounds-features_royaltyFree_2x.png";
const NoCommitments =
  "https://splice-res.cloudinary.com/image/upload/f_auto,q_auto,w_255,dpr_1.0/v1532113864/marketing_site/sounds/2018-08/featuresSounds-features_noCommitments_2x.png";
const Download =
  "https://splice-res.cloudinary.com/image/upload/f_auto,q_auto,w_255,dpr_1.0/v1532113865/marketing_site/sounds/2018-08/featuresSounds-features_yoursForever_2x.png";
const Preview =
  "https://splice-res.cloudinary.com/image/upload/f_auto,q_auto,w_255,dpr_1.0/v1532113864/marketing_site/sounds/2018-08/featuresSounds-features_individualSamples_2x.png";

const Home = () => {
  return (
    <>
      <DivRowsHomeSC>
        <DivWrapHomeSC>
          <DivBoxContentSC>
            <DivStartBoxSC>
              <TitleSC>
                Найди
                <br /> свой звук
              </TitleSC>
              <ParagraphSC>
                Получите доступ к миллионам уникальных one-shots, loops, FX,
                MIDI
              </ParagraphSC>
              <LinkHomeStartSC to="/sounds">Попробуй</LinkHomeStartSC>
            </DivStartBoxSC>
          </DivBoxContentSC>
        </DivWrapHomeSC>
        <DivRowsPlusesBox>
          <DivBoxTextSC>
            <TitlePlusSC>Почему стоит использовать наши звуки?</TitlePlusSC>
          </DivBoxTextSC>
          <DivBoxPlusesSC>
            <DivPlusBoxSC>
              <ImgPlusBoxSC src={CheckMark} />
              <PlusNameSC>Нет отчислений</PlusNameSC>
              <PlusDescSC>Используйте звуки для чего угодно.</PlusDescSC>
            </DivPlusBoxSC>
            <DivPlusBoxSC>
              <ImgPlusBoxSC src={NoCommitments} />
              <PlusNameSC>Никаких обязательств</PlusNameSC>
              <PlusDescSC>Используйте наши звуки без опасений.</PlusDescSC>
            </DivPlusBoxSC>
            <DivPlusBoxSC>
              <ImgPlusBoxSC src={Download} />
              <PlusNameSC>Твоё навсегда</PlusNameSC>
              <PlusDescSC>Сохраните все, что вы загружаете.</PlusDescSC>
            </DivPlusBoxSC>
            <DivPlusBoxSC>
              <ImgPlusBoxSC src={Preview} />
              <PlusNameSC>Семплы для тебя</PlusNameSC>
              <PlusDescSC>Предварительный просмотр и загрузка.</PlusDescSC>
            </DivPlusBoxSC>
          </DivBoxPlusesSC>
        </DivRowsPlusesBox>
        <DivBoxNewSoundsSC>
          <DivTitleBoxSC>
            <TitlePlusSC>Звуки</TitlePlusSC>
            <LinkAllSoundsSC to="/sounds">все</LinkAllSoundsSC>
          </DivTitleBoxSC>
          <DivWhatNewSC>
            <TitleWhatNewSC>Что нового?</TitleWhatNewSC>
            <DescWhatNewSC>
              Over Sound предоставляет неограниченный доступ к семплам, лупам,
              ваншотам. Вот последние.
            </DescWhatNewSC>
          </DivWhatNewSC>
          <DivSoundCardBoxSC>
            <SoundCard />
            <SoundCard />
            <SoundCard />
            <SoundCard />
            <SoundCard />
            <SoundCard />
          </DivSoundCardBoxSC>
        </DivBoxNewSoundsSC>
        <DivBoxTutorialsSC>
          <DivTitleBoxSC>
            <TitlePlusSC>Актуальные уроки по написанию музыки</TitlePlusSC>
          </DivTitleBoxSC>
          <DivWhatNewSC>
            <DescWhatNewSC>
              Полезные видео-уроки, подобранные нами для вас. Учитесь,
              развивайтесь, создавайте музыку, от которой по телу мурашки.
            </DescWhatNewSC>
          </DivWhatNewSC>
          <DivItemsVideoSC>
            <TutorialVideo setSrc={'https://www.youtube.com/embed/zMWep8rbbGs'}/>
            <TutorialVideo setSrc={'https://www.youtube.com/embed/o3NNEwY-aYE'}/>
            <TutorialVideo setSrc={'https://www.youtube.com/embed/5o91SXvklJc'}/>
          </DivItemsVideoSC>
        </DivBoxTutorialsSC>
      </DivRowsHomeSC>
    </>
  );
};

export default Home;
