import { FaJava, FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa'
import { SiMysql, SiSpringboot } from 'react-icons/si'

import logo from "./lobato-icon.svg";
import logo_dark from "./dark_logo.svg";
import arrow_icon from "./arrow-icon.svg"
import close_icon from "./close_icon.svg"
import menu_icon from './menu_icon.svg'
import menu_icon_dark from './menu_icon_dark.svg'
import sun_icon from './sun_icon.svg'
import moon_icon from './moon_icon.svg'
import group_profile from './trusted_icon.svg'
import hero_image from './hero_image.jpg'
import bgImage1 from './bgImage1.jpg'
import plmarket_img from './plmarket.png'
import plstock_img from './plstock.png'

export const assets = {
  logo,
  logo_dark,
  arrow_icon,
  close_icon,
  menu_icon,
  menu_icon_dark,
  sun_icon,
  moon_icon,
  group_profile,
  hero_image,
  bgImage1
};

export const techList = [
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
]

export const workData = [
  {
    title: 'PLMARKET',
    category: 'FULL-STACK',
    year: '2026',
    description: 'E-commerce completo com controle de produtos e carrinho.',
    image: plmarket_img, 
    link: 'https://plmarket.netlify.app/',
  },
  {
    title: 'PLSTOCK',
    category: 'FULL-STACK',
    year: '2026',
    description: 'Sistema de gestão e controle de estoque de produtos.',
    image: plstock_img,
    link: 'https://plstock.netlify.app/',
  },
]


export default assets;
