import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="card about-me-section">
      <div className="avatar-container">
        <img src="/CodeForeSolutions.png" alt={`CodeFore Solutions Logo`} className="avatar" />
      </div>
      <h2>Who We Are</h2>
      <p>
        At CodeFore, we build high-performing websites with the precision of a perfect swing. We blend clean front-end design with custom backend development to help brands win online.
      </p>
      <h2>What We Do</h2>
<h3>Web Design</h3>
<h5>Design that Delivers.</h5>
<p> We craft visually striking, user-friendly websites that reflect your brand’s identity and drive real engagement.</p>

<h3>Web Development</h3>
<h5>Scalable. Secure. Seamless.</h5>
<p> Our custom-built websites and applications are developed with clean code, modern tech stacks, and performance in mind — ready to grow with your business.</p>

<h3>SEO & Optimization</h3>
<h5>Be Seen. Be Found. Be Ahead.</h5>
<p> We implement strategic SEO and performance optimizations to boost your visibility, rankings, and page speed — turning traffic into results.</p>

<h3>Brand Identity</h3>
<h5>Make Your Mark.</h5>
<p> We help you define a bold, consistent brand presence that connects with your audience and stands out in a crowded digital space.</p>

    </section>
  );
};

export default AboutMe;
