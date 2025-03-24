import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/bg.jpeg';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function Home({ innerRef }) {

   return (
      <Box ref={innerRef} component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
         justifyContent={'center'} minHeight={'calc(100vh - 175px)'} id={'home'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} style={{ background: info.gradient }} alt={'image of developer'} component={'img'} src={me} width={{ xs: '35vh', md: '35vh' }}
            height={{ xs: '35vh', md: '35vh' }}
            borderRadius={'50%'} p={'0.35rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
         <Box>
            <h1>Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'left'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}