import { FaDiscord, FaGithub, FaLinkedin, FaMailBulk, FaSkype, FaStackOverflow } from "react-icons/fa";

export const contactData = [
  {
    name: 'Discord',
    description: 'Join my DS server',
    url: 'https://discord.gg/s8WckBhbmP',
    icon: <FaDiscord color="#404eed" className="h-8 w-8"/>
  },
  {
    name: 'Skype',
    description: 'Call me on Skype',
    url: 'https://join.skype.com/invite/nHZLSNPId5DM',
    icon: <FaSkype color='#00a9e5'  className="h-8 w-8"/>
  },
  {
    name: 'eMail',
    description: "Send me an eMail",
    url: "mailto:jorgeb.dev.acc@gmail.com?Subject=We want to talk to you Jorge.",
    icon: <FaMailBulk className="h-8 w-8"/>
  },
  {
    name: 'LinkedIn',
    description: "Visit my LinkedIn profile",
    url: 'https://www.linkedin.com/in/jorge-balsamo-81b52a262/',
    icon: <FaLinkedin color="#005abc" className="h-8 w-8"/>
  },
  {
    name: 'StackOverflow',
    description: "Visit my SO Profile",
    url: 'https://es.stackoverflow.com/users/224775/infinit3loop',
    icon: <FaStackOverflow color="#edb407"  className="h-8 w-8"/>
  },
  {
    name: 'GitHub',
    description: 'Visit my Github profile',
    url: 'https://github.com/npminit-dev',
    icon: <FaGithub color="#333" className="h-8 w-8"/>
  }
]