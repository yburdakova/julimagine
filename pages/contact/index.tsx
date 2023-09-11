import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { VscSend } from 'react-icons/vsc';

import { Circles } from '../../components';
import { fadeIn } from '../../variants';


function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://julimagine.vercel.app/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // clear form after successful POST request
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        alert('Data sent successfully!');
      } else {
        alert('An error occurred while sending data.');
      }
    } catch (error) {
      console.error('Error sending data:', error);
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
            action="submit"
            onSubmit={handleSubmit}
            className='flex flex-col flex-1 w-full gap-6 mx-auto'
          >
            <div className="flex w-full gap-x-6">
              <input type="text" placeholder='name' className="input" />
              <input type="email" placeholder='email' className="input" />
            </div>
            <input type="text" placeholder='subject' className="input" />
            <textarea placeholder='message' className="textarea" ></textarea>
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
