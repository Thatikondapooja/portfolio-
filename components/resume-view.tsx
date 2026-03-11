import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react"

export function ResumeView() {
  return (
    <div className="max-w-[800px] mx-auto p-8 bg-white text-slate-900 font-sans leading-relaxed shadow-lg my-8">
      {/* Header */}
      <header className="text-center border-b-2 border-slate-900 pb-6 mb-6">
        <h1 className="text-3xl font-bold uppercase tracking-wider mb-2">Pooja Thatikonda</h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <MapPin size={14} /> Siddipet, India
          </span>
          <span className="flex items-center gap-1">
            <Phone size={14} /> +91 8688868275
          </span>
          <a href="mailto:thatikondapooja888@gmail.com" className="flex items-center gap-1 hover:underline">
            <Mail size={14} /> thatikondapooja888@gmail.com
          </a>
        </div>
        <div className="flex justify-center gap-6 mt-3 text-sm font-medium">
          <a
            href="https://www.linkedin.com/in/thatikonda-pooja-76b2132ba"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-700 transition-colors"
          >
            <Linkedin size={14} /> linkedin.com/in/thatikonda-pooja-76b2132ba
          </a>
          <a
            href="https://github.com/Thatikondapooja"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-slate-600 transition-colors"
          >
            <Github size={14} /> github.com/Thatikondapooja
          </a>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 tracking-wide">
          Professional Summary
        </h2>
        <p className="text-[15px] leading-6">
          Highly motivated Web Developer with a robust foundation in front-end and back-end technologies. Experienced in
          building responsive and user-friendly web applications with a focus on clean design, accessibility, and
          performance. Adept at problem-solving and dedicated to continuous improvement and innovation within the
          technology sector. Proficient in delivering scalable solutions through meticulous coding standards and modern
          development methodologies.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 tracking-wide">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-[14px]">
          <p>
            <strong className="font-semibold">Languages:</strong> JavaScript (ES6+), TypeScript, SQL
          </p>
          <p>
            <strong className="font-semibold">Frontend:</strong> HTML5, CSS3, React.js, Redux, React Router, Tailwind
            CSS
          </p>
          <p>
            <strong className="font-semibold">Backend:</strong> Node.js, NestJS, RESTful APIs
          </p>
          <p>
            <strong className="font-semibold">Databases:</strong> PostgreSQL, DBMS
          </p>
          <p>
            <strong className="font-semibold">Tools:</strong> Git, GitHub, Visual Studio Code
          </p>
          <p><strong className="font-semibold">DevOps & Cloud:</strong> GitHub Actions, CI/CD Pipelines, AWS EC2, Vercel, Cloudflare, Render</p>
          <p>
            <strong className="font-semibold">Core Concepts:</strong> Data Structures & Algorithms, UI/UX Principles,
            Computer Networking
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 tracking-wide">Key Projects</h2>
        <div className="mb-4">
         
          {/* <li className="text-[14px] mb-2 text-slate-700">
            Car Social Network is a smart web-based application designed to enable secure and efficient communication between vehicle owners using license plate recognition. </li>
            <li> The system allows users to identify a vehicle through its number plate and contact the corresponding owner without exposing personal contact details.</li>


            The project is developed using the Django framework following the MVC (Model–View–Controller) architecture, ensuring scalability, security, and maintainability. 
            <li>Strong authentication, data privacy mechanisms, and encrypted communication are implemented to protect sensitive user information.

          </li> */}
          {/* <ul className="list-disc ml-5 text-[14px] space-y-1">
            <li className="text-[14px] mb-2 text-slate-700">
              Car Social Network is a smart web-based application designed to enable secure and efficient communication between vehicle owners using license plate recognition. </li>
            <li> The system allows users to identify a vehicle through its number plate and contact the corresponding owner without exposing personal contact details.</li>


            The project is developed using the Django framework following the MVC (Model–View–Controller) architecture, ensuring scalability, security, and maintainability.
            <li>Strong authentication, data privacy mechanisms, and encrypted communication are implemented to protect sensitive user information.

            </li>
            <li>
              The application leverages computer vision and OCR techniques to extract license plate numbers from vehicle images.  <strong className="font-medium">ReOCR (Optical Character Recognition) – Extracting license plate textact</strong> and{" "}
              <strong className="font-medium">OpenCV – Vehicle image processing and license plate detection</strong>, NumPy – Numerical and matrix operations for image processing.
            </li>
            <li>
              Once recognized, the system matches the plate number with registered user data stored in the database and enables communication through multiple channels such as SMS, email, or calls. This helps in real-world scenarios like parking issues, road incidents, traffic alerts, or emergency situations.
{" "}
              <strong className="font-medium"></strong>  <strong className="font-medium"></strong>.
            </li>
            <li>
              Implemented a secure user authentication system and dynamic real-time interaction features using{" "}
              <strong className="font-medium">Django Authentication System</strong> and <strong className="font-medium">Session Management</strong>.
            </li>
            <li>
              Overall, the system improves driver-to-driver interaction, enhances road safety, reduces misunderstandings, and supports smart transportation initiatives.

            </li>
            <li>Optimised application performance by implementing clean architecture and scalable backend services.</li>
          </ul>
          
        </div>
      </section> */}

        <ul className="list-disc ml-5 text-[14px] space-y-1">
           <div className="flex justify-between items-baseline mb-1">
            <h2 className="font-bold text-[16px] mb-3">Task Management Application</h2>
            <span className="text-sm italic">React · TypeScript · Redux Toolkit · NestJS · PostgreSQL · Tailwind CSS</span>
          </div>
<li className="text-[14px] mb-2 text-slate-700">	Built a responsive SPA using React, TypeScript, and Redux Toolkit with drag-and-drop Kanban board functionality via @dnd-kit.</li>
<li className="text-[14px] mb-2 text-slate-700">	Designed scalable REST APIs using NestJS and PostgreSQL with TypeORM; implemented JWT authentication with secure password hashing.</li>
<li className="text-[14px] mb-2 text-slate-700">	Developed automated email reminders for task deadlines using NodeMailer and NestJS Scheduler.</li>
<li className="text-[14px] mb-2 text-slate-700">	Implemented activity logging and member management for collaborative boards.</li>
<li className="text-[14px] mb-2 text-slate-700">	Configured CI/CD pipeline using GitHub Actions; deployed frontend on Vercel and backend on AWS EC2 using PM2.</li>
 <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-bold text-[16px] mb-3">Car Social Network	Django </h3>
            <span className="text-sm italic">· Python · MySQL · OCR · OpenCV · NumPy</span>
            <span className="text-sm italic">MCA Final Year Project</span>
          </div>
<li className="text-[14px] mb-2 text-slate-700">	Developed a web-based platform enabling secure communication between vehicle owners using licence plate recognition.</li>
<li className="text-[14px] mb-2 text-slate-700">	Built responsive frontend using React and Tailwind CSS with Django/Python backend and PostgreSQL database.</li>
<li className="text-[14px] mb-2 text-slate-700">	Applied OCR and OpenCV techniques to detect and extract licence plate numbers from vehicle images.</li>
<li className="text-[14px] mb-2 text-slate-700">	Enabled secure communication via SMS and email notifications while protecting personal contact details.</li>
</ul>
  </div></section>
  <section className="mb-6">
<h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 tracking-wide">DEVOPS & DEPLOYMENT EXPERIENCE</h2>
<ul className="list-disc ml-5 text-[14px] space-y-1">
<li className="text-[14px] mb-2 text-slate-700">	Implemented CI/CD pipelines using GitHub Actions for automated build and deployment.</li>
<li className="text-[14px] mb-2 text-slate-700">	Deployed full-stack applications with frontend hosted on Vercel and backend deployed on AWS EC2.</li>
<li className="text-[14px] mb-2 text-slate-700">	Configured PM2 process manager for application reliability and automatic restarts.</li>
<li className="text-[14px] mb-2 text-slate-700">Implemented Cloudflare Tunnel to securely expose backend APIs.</li>
<li className="text-[14px] mb-2 text-slate-700" >	Managed version control and collaboration using Git and GitHub</li>
    </ul>
     </section>   
    

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 tracking-wide">Education</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-baseline">
            <div>
              <strong className="font-bold">Master of Computer Applications (MCA)</strong>
              <p className="text-[14px]">Aurora's PG College</p>
            </div>
            <span className="text-sm font-medium">2025</span>
          </div>
          <div className="flex justify-between items-baseline">
            <div>
              <strong className="font-bold">Bachelor of Science (MPCS)</strong>
              <p className="text-[14px]">Prathibha Degree College</p>
            </div>
            <span className="text-sm font-medium">June 2022</span>
          </div>
          <div className="flex justify-between items-baseline">
            <div>
              <strong className="font-bold">Intermediate Education</strong>
              <p className="text-[14px]">Sadhana Junior College</p>
            </div>
            <span className="text-sm font-medium">March 2019</span>
          </div>
        </div>
      </section>

      {/* Languages & Interests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 tracking-wide">Languages</h2>
          <ul className="text-[14px] space-y-1">
            <li>
              <strong className="font-semibold">English:</strong> Upper Intermediate (B2)
            </li>
            <li>
              <strong className="font-semibold">Telugu:</strong> Fluent
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 tracking-wide">Interests</h2>
          <p className="text-[14px]">
            Digital Design, Sketching, Technology Blogs, Creative Storytelling, and Reading.
          </p>
        </section>
      </div>
    </div>
  )
}
