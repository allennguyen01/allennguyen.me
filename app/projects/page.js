import Image from 'next/image';

import PeakFitLogo from '../../public/images/projects/peakfit/logo.png';
import PeakFitHome from '../../public/images/projects/peakfit/home.png';
import PeakFitAIBuilder from '../../public/images/projects/peakfit/ai-builder.png';
import PeakFitNutrition from '../../public/images/projects/peakfit/nutrition.png';
import PeakFitExercise from '../../public/images/projects/peakfit/exercise.png';
import PeakFitYou from '../../public/images/projects/peakfit/you.png';
import PeakFitColorPalette from '../../public/images/projects/peakfit/color-palette.png';

import UCalgaryCSSDesktop from '../../public/images/projects/ucalgary-css/css-desktop-homepage.jpg';
import UCalgaryCSSMobile from '../../public/images/projects/ucalgary-css/css-phone-homepage.jpg';
import UCalgaryCSSlogo from '../../public/images/projects/ucalgary-css/ucalgarycss-logo.png';

import cgClosetScreen from '../../public/images/projects/closetgenie/closet-screen.png';
import cgOutfitsScreen from '../../public/images/projects/closetgenie/outfits-screen.png';
import cgLaundryScreen from '../../public/images/projects/closetgenie/laundry-screen.png';
import cgProfileScreen from '../../public/images/projects/closetgenie/profile-screen.png';
import cgLogo from '../../public/images/projects/closetgenie/closetgenie-logo.png';

import seekicksWebpage from '../../public/images/projects/seekicks/webpage.jpg';
import seekicksLogo from '../../public/images/projects/seekicks/seekicks-logo.png';

import slientOwlApp from '../../public/images/projects/silent-owl/silent-owl.png';
import slientOwlLogo from '../../public/images/projects/silent-owl/silent-owl-logo.png';

const techBadges = {
  'React.js':
    'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
  JavaScript:
    'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
  HTML: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
  CSS: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
  TailwindCSS:
    'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
  'Chakra UI':
    'https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white',
  Netlify:
    'https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7',
  'React Native':
    'https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
  Figma:
    'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white',
  Expo: 'https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37',
  Python:
    'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54',
  PyTorch:
    'https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white',
  'Google Colab':
    'https://img.shields.io/badge/Google_Colab-F9AB00.svg?style=for-the-badge&logo=google%20colab&logoColor=white',
  Pandas:
    'https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white',
  NumPy:
    'https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white',
  'Node.js':
    'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
  MongoDB:
    'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white',
  'Express.js':
    'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
  Java: 'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white',
  TypeScript:
    'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
  ChatGPT:
    'https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white',
};

export default function Projects() {
  const peakFitTechStack = [
    'React Native',
    'Expo',
    'TypeScript',
    'Node.js',
    'Express.js',
    'ChatGPT',
  ];

  const ucalgaryCSSTechStack = [
    'React.js',
    'JavaScript',
    'HTML',
    'CSS',
    'TailwindCSS',
    'Chakra UI',
    'Netlify',
  ];

  const closetgenieTechStack = [
    'React Native',
    'JavaScript',
    'Figma',
    'Expo',
    'TailwindCSS',
  ];

  const seekicksTechStack = [
    'Python',
    'PyTorch',
    'Google Colab',
    'Pandas',
    'NumPy',
  ];

  const onlineForumTechStack = [
    'JavaScript',
    'HTML',
    'CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
  ];

  const silentOwlTechStack = ['Java'];

  function SinglePreviewImg({ src, alt }) {
    return (
      <Image
        src={src}
        alt={alt}
        className='rounded-xl'
      />
    );
  }

  function PeakFitPreviewImg() {
    const previewImages = [
      {
        src: PeakFitHome,
        alt: 'PeakFit home screen',
      },
      {
        src: PeakFitAIBuilder,
        alt: 'PeakFit AI builder screen',
      },
      {
        src: PeakFitNutrition,
        alt: 'PeakFit nutrition screen',
      },
      {
        src: PeakFitExercise,
        alt: 'PeakFit exercise screen',
      },
      {
        src: PeakFitYou,
        alt: 'PeakFit you screen',
      },
      {
        src: PeakFitColorPalette,
        alt: 'PeakFit color palette',
      },
    ];

    return (
      <section className='grid grid-cols-3 gap-1 lg:gap-4 items-center justify-center lg:w-3/4'>
        {previewImages.map((img) => {
          return (
            <Image
              key={img.alt}
              src={img.src}
              alt={img.alt}
              className='rounded-md'
            />
          );
        })}
      </section>
    );
  }

  function ClosetGeniePreviewImg() {
    const previewImages = [
      {
        src: cgClosetScreen,
        alt: 'ClosetGenie closet screen',
      },
      {
        src: cgOutfitsScreen,
        alt: 'ClosetGenie outfits screen',
      },
      {
        src: cgLaundryScreen,
        alt: 'ClosetGenie laundry screen',
      },
      {
        src: cgProfileScreen,
        alt: 'ClosetGenie profile screen',
      },
    ];

    return (
      <section className='flex gap-2 justify-center'>
        {previewImages.map((img) => {
          return (
            <Image
              key={img.alt}
              src={img.src}
              alt={img.alt}
              className='rounded-sm w-1/4'
            />
          );
        })}
      </section>
    );
  }

  function UCalgaryCSSPreviewImg() {
    const previewImages = [
      {
        src: UCalgaryCSSDesktop,
        alt: 'UCalgary CSS website desktop view',
        width: 'w-3/4',
      },
      {
        src: UCalgaryCSSMobile,
        alt: 'UCalgary CSS website mobile view',
        width: 'w-1/4',
      },
    ];

    return (
      <section className='flex gap-2 justify-center items-center'>
        {previewImages.map((img) => {
          return (
            <Image
              key={img.alt}
              src={img.src}
              alt={img.alt}
              className={`rounded-sm ${img.width}`}
            />
          );
        })}
      </section>
    );
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-center m-8 gap-8'>
      <h1>projects 📚</h1>

      <Project
        title={'PeakFit'}
        logo={PeakFitLogo}
        projectType={'Personal Health Startup mobile application'}
        previewImages={<PeakFitPreviewImg />}
        githubLink={'https://github.com/allennguyen01/peakfit'}
        summaryPoints={[
          'Develop a mobile application that provides personalized workout plans and nutrition advice to users based on their fitness goals and preferences',
          'Design a UI using Figma prototypes and mockups based on customer interviews and validation testing',
          'Construct a mobile interface using Expo, React Native, and TypeScript for seamless navigation and custom component modularity',
          'Integrate a RESTful API backend with Node.js and Express.js to store user data and AI generated plans from ChatGPT API',
        ]}
        techStack={peakFitTechStack}
        datesWorked={'Jan - Apr 2024'}
      />

      <Project
        title={"University of Calgary Chinese Students' Society"}
        logo={UCalgaryCSSlogo}
        projectType={'Business website'}
        previewImages={<UCalgaryCSSPreviewImg />}
        previewLink={'https://ucalgarycss.com/'}
        githubLink={'https://github.com/allennguyen01/ucalgary-css'}
        summaryPoints={[
          'Develop a website to display information regarding club events, member/executive recruitment, and community engagement resources',
          'Built an intuitive user interface using ReactJS and JavaScript for seamless navigation and custom component modularity',
          'Employed UI/UX design with TailwindCSS and Chakra UI to ensure consistent styling and responsiveness across various devices',
          'Deployed the website with Netlify and Google Domains to increase SEO and view analytical trends',
        ]}
        techStack={ucalgaryCSSTechStack}
        datesWorked={'July - Aug 2023'}
      />

      <Project
        title={'ClosetGenie'}
        logo={cgLogo}
        projectType={'Mobile application'}
        previewImages={<ClosetGeniePreviewImg />}
        githubLink={'https://github.com/allennguyen01/ClosetGenie'}
        summaryPoints={[
          'Design a interactive frontend using Figma prototypes and mockups based on custom design specifications and requirements',
          'Construct reusable React Native components for a responsive IOS/Android app on Expo and add styling with TailwindCSS framework',
          'Integrated REST API endpoints from the backend to retrieve and send data to the cloud with JavaScript',
        ]}
        techStack={closetgenieTechStack}
        datesWorked={'Jan - Apr 2023'}
      />

      {/* <Project
        title={'Online Discussion Forum'}
        projectType={'Full Stack Web App'}
        previewImages={<SinglePreviewImg />}
        githubLink={'https://github.com/allennguyen01/chat-app'}
        summaryPoints={[
          'Built a single-page dynamically rendered web frontend using HTML and CSS following a MVC pattern and object-oriented programming',
          'Implemented the client-side and server-side functionalities with RESTful API endpoints using JavaScript, Node.js, and Express.js',
          'Programmed the app to store and retain chat messages data in a MongoDB non-relational database',
        ]}
        techStack={onlineForumTechStack}
        datesWorked={'Sept - Dec 2021'}
      /> */}

      <Project
        title={'SeeKicks'}
        logo={seekicksLogo}
        projectType={'Machine learning application'}
        previewImages={
          <SinglePreviewImg
            src={seekicksWebpage}
            alt='SeeKick webpage'
          />
        }
        githubLink={'https://github.com/allennguyen01/SeeKicks'}
        summaryPoints={[
          'Implemented a machine learning image recognition app that identifies over 850 sneaker models with 98% accuracy',
          'Tested and trained a PyTorch convolutional neural network model with an manipulated dataset of 50 000 images using Python',
          'Deployed the web application using Heroku and used Streamlit to construct the UI',
        ]}
        techStack={seekicksTechStack}
        datesWorked={'Jan - Apr 2021'}
      />

      <Project
        title={'Silent Owl'}
        logo={slientOwlLogo}
        projectType={'BC Hacks 2.0 Hackathon Project'}
        previewImages={
          <SinglePreviewImg
            src={slientOwlApp}
            alt='Silent Owl desktop application'
          />
        }
        githubLink={'https://github.com/allennguyen01/Silent-Owl'}
        summaryPoints={[
          "Developed a Java app that listens to a user's microphone and alerts them if they are being too loud",
          'Integrated a user-friendly GUI with a Java Swing frontend and backend using Java Sound API',
          'Awarded top 3 in first-time hackers category',
        ]}
        techStack={silentOwlTechStack}
        datesWorked={'Feb 2021'}
      />
    </main>
  );
}

function Project({
  logo,
  title,
  projectType,
  previewImages,
  previewLink = '',
  githubLink,
  summaryPoints,
  techStack,
  datesWorked,
}) {
  return (
    <>
      <div className='collapse collapse-arrow justify-center items-center max-w-4xl'>
        <input type='checkbox' />
        <div className='collapse-title flex flex-col gap-4'>
          <section className='flex items-center gap-2 lg:gap-4'>
            <Image
              src={logo}
              alt={`${title} logo`}
              className='w-20 rounded-lg'
            />

            <div>
              <h3>{title}</h3>
              <p className='text-base lg:text-xl text-gray-400'>
                {projectType}
              </p>
            </div>
          </section>

          <section className='flex flex-wrap justify-center gap-2 lg:mx-10'>
            {previewImages}
          </section>
        </div>

        <div className='collapse-content bg-base-200 flex flex-col gap-4 lg:mx-10 pt-4 lg:px-6 rounded-lg'>
          <section className='flex flex-row text-lg justify-evenly font-semibold'>
            <ProjectButtons
              previewLink={previewLink}
              githubLink={githubLink}
            />
          </section>

          <section>
            <p className='lg:text-xl'>Summary</p>
            <ul className='list-disc list-inside text-sm lg:text-base text-gray-400 leading-relaxed'>
              {summaryPoints.map((pt) => {
                return <li key={pt}>{pt}</li>;
              })}
            </ul>
          </section>

          <section>
            <p>Technologies</p>
            <section className='flex flex-wrap gap-2'>
              {techStack.map((t) => (
                <img
                  key={t}
                  src={techBadges[t]}
                  alt={`${t} logo`}
                  // width={100}
                  // height={100}
                  className='h-7 object-contain rounded'
                />
              ))}
            </section>
          </section>

          <section>
            <p>
              Date <span className='text-gray-400'>{datesWorked}</span>
            </p>
          </section>
        </div>
        <div className='divider divider-primary m-0'></div>
      </div>
    </>
  );
}

function ProjectButtons({ previewLink, githubLink }) {
  return (
    <section className='flex gap-4'>
      {previewLink ? (
        <button className='btn btn-primary btn-sm lg:btn-md h-10 text-[10px] rounded-xl'>
          <a href={previewLink}>Live preview -&gt;</a>
        </button>
      ) : (
        <></>
      )}
      <button className='btn btn-secondary btn-sm lg:btn-md h-10 text-[10px] rounded-xl'>
        <a href={githubLink}>View code -&gt;</a>
      </button>
    </section>
  );
}
