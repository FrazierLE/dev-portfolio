import { useState } from 'react';
const useProjects = () => {
  const [view, setView] = useState('');

  const projectsArray = [
    {
      id: '1',
      title: 'Project 1',
      description:
        'GATEWAY - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna vel arcu dignissim tempus.',
      date: '2023-present',
      image: '',
      link: '',
      technologies: 'React, MaterialUI, Typescript, Storybook, Playwright',
      githubLink: '',
      liveLink: '',
    },
    {
      id: '2',
      title: 'Project 2',
      description:
        'DIGISTRIP - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna vel arcu dignissim tempus.',
      date: 'July 2023-January 2024',
      image: '',
      link: '',
      technologies: 'React, MaterialUI, Typescript, Jest',
      githubLink: '',
      liveLink: '',
    },
    {
      id: '2',
      title: 'Project 3',
      description:
        'CAMI PT - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna vel arcu dignissim tempus.',
      date: 'Spring 2023',
      image: '',
      link: '',
      technologies: 'React, Tailwind, Typescript',
      githubLink: '',
      liveLink: '',
    },
    {
      id: '4',
      title: 'Project 4',
      description:
        'ATW - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna vel arcu dignissim tempus.',
      date: '2023-present',
      image: '',
      link: '',
      technologies: 'React, Typescript, Figma, Cypress',
      githubLink: '',
      liveLink: '',
    },
    {
      id: '5',
      title: 'Project 5',
      description:
        'WANRS - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna vel arcu dignissim tempus.',
      date: 'July 2023-January 2024',
      image: '',
      link: '',
      technologies: 'React, Javascript, Cypress',
      githubLink: '',
      liveLink: '',
    },
  ];

  return {
    view,
    setView,
    projectsArray,
  };
};

export default useProjects;
