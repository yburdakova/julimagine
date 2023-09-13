import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { VscSend } from 'react-icons/vsc';
import { fadeIn } from '../../variants';


function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      console.log('Данные запроса перед отправкой:', JSON.stringify({ name, email, subject, message }));
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }), 
      });
  
      if (response.ok) {
        console.log('Data saved successfully');
      } else {
        console.error('An error occurred while sending data');
      }
    } catch (error) {
      console.error('An error has occurred:', error);
    }
  };
  
  return (
    <div className='h-full bg-primary/30'>
      <div className="container flex items-center justify-center h-full py-32 mx-auto text-center xl:text-left">
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className="mb-12 text-center h2"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            onSubmit={handleSubmit}
            className='flex flex-col flex-1 w-full gap-6 mx-auto'
          >
            <div className="flex w-full gap-x-6">
              <input 
                type="text" 
                placeholder='name' 
                className="input" 
                value={name} 
                name="name"
                autoComplete="on"
                onChange={(e) => setName(e.target.value)}
              />
              <input 
                type="email" 
                placeholder='email' 
                className="input" 
                value={email} 
                name="email"
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input 
              type="text" 
              placeholder='subject' 
              className="input" 
              value={subject} 
              name="subject"
              autoComplete="off"
              onChange={(e) => setSubject(e.target.value)} 
            />
            <textarea 
              placeholder='message' 
              className="textarea"
              value={message} 
              name="message"
              autoComplete="off"
              onChange={(e) => setMessage(e.target.value)} 
            ></textarea>
            <button className="border rounded-full btn border-white/50 max-w-[220px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Send me email</span>
              <VscSend className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact
