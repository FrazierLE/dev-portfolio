import { useState } from 'react';
import ptLogo from '../../assets/chatchpt_logo.png';
import digistripLogo from '../../assets/i-logo.png';
import gatewayLogo from '../../assets/gateway-logo.png';
import world from '../../assets/around-the-world.png';
import wrns from '../../assets/wnrs.png';
const useProjects = () => {
  const [view, setView] = useState<number | null>(null);

  const handleMouseOver = (index: number) => {
    setView(index);
  }

  const handleMouseOff = () => {
    setView(null)
  }

  const projectsArray = [
    {
      id: '1',
      title: 'Admin Portal & Webstore',
      description:
        'Admin portal & webstore for zoos, museums, botanical gardens, and theme parks',
      date: '2023-present',
      image: gatewayLogo,
      link: '',
      technologies: 'React, MaterialUI, Typescript, Storybook, Playwright',
      githubLink: '',
      liveLink: '',
    },
    {
      id: '2',
      title: 'Digistrip',
      description:
        'Data visualization tool used for attorneys in trial for medical malpractice cases.',
      date: 'July 2023-January 2024',
      image: digistripLogo,
      link: '',
      technologies: 'React, MaterialUI, Typescript, Jest',
      githubLink: '',
      liveLink: '',
    },
    {
      id: '3',
      title: 'CHatch',
      description:
        'Cami Hatch is a pelvic floor physical therapist in Denver who needed a website for her new practice.',
      date: 'Spring 2023',
      image: ptLogo,
      link: '',
      technologies: 'React, Tailwind, Typescript',
      githubLink: '',
      liveLink: '',
    },
    {
      id: '4',
      title: 'WNRS Project',
      description:
        'WNRS Project is a web application inspired by the card game "We\'re Not Really Strangers", and designed to deepen relational connections by encouraging emotional vulnerability through meaningful conversations.',
      date: 'Spring 2023',
      image: wrns,
      link: '',
      technologies: 'React, Javascript, Cypress',
      githubLink: '',
      liveLink: '',
    },
    {
      id: '5',
      title: 'Around The World',
      description:
        "Around The World is a world trivia game application testing the user's knowledge of capitals and flags.",
      date: 'Winter 2023',
      image: world,
      link: '',
      technologies: 'React, Typescript, Cypress, GraphQL',
      githubLink: '',
      liveLink: '',
    },
  ];

  return {
    view,
    setView,
    projectsArray,
    handleMouseOver,
    handleMouseOff,
  };
};

export default useProjects;
