import React from 'react';
import { useInView } from 'react-intersection-observer';
import aboutImg from '../assets/about.png';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Adjust the root margin as needed
  });

  const containerStyle = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'opacity 1s, transform 1s',
  };

  return (
    <div
      className="text-white max-w-[1200px] mx-auto my-12"
      id="about"
      ref={ref}
      style={containerStyle}
    >
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
My name is Abe Takayoshi, I am half Chinese and Japanese and I mainly speak Cantonese and English. I am thrilled to be joining the web development industry. I recently completed a comprehensive web development course where I gained a strong foundation in front-end technologies like HTML, CSS, JavaScript and React. Additionally, I have experience working with back-end frameworks such as node js and express js.

<br/><br/>I am truly passionate about web development and excited to apply my skills in real-world projects. During my course, I had the opportunity to work on various projects, including the canvas project, a simple login system website and a hotel booking website with a server using mongo db. Which allowed me to refine my problem-solving abilities and collaborate effectively in a team environment.

I am eager to take the next step in my career and contribute to the growth of innovative web solutions. I am constantly seeking opportunities to learn and grow within this industry.

<br/><br/>If there are any available opportunities or if anyone could provide guidance or mentorship, I would greatly appreciate it. I am looking forward to connecting with all of you and being part of the web development community.            </p>
          </div>
        </div>

        <img
          className="mx-auto my-auto rounded-3xl py-8 md:py-0"
          src={aboutImg}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;