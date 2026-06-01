import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields.')
      return
    }
    toast.success('Message sent! We\'ll be in touch soon.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Contact us"
        desc="Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you."
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex flex-col gap-4"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 flex items-center gap-3 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-gray-900">
            <img src={assets.person_icon} alt="" className="w-5 opacity-50" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-transparent outline-none text-sm text-gray-700 dark:text-white placeholder-gray-400"
            />
          </div>
          <div className="flex-1 flex items-center gap-3 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-gray-900">
            <img src={assets.email_icon} alt="" className="w-5 opacity-50" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full bg-transparent outline-none text-sm text-gray-700 dark:text-white placeholder-gray-400"
            />
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-gray-900">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            rows={6}
            className="w-full bg-transparent outline-none text-sm text-gray-700 dark:text-white placeholder-gray-400 resize-none"
          />
        </div>

        <button
          type="submit"
          className="self-start flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full hover:scale-105 transition-transform text-sm"
        >
          Send message <img src={assets.arrow_icon} width={14} alt="" />
        </button>
      </motion.form>
    </motion.div>
  )
}

export default ContactUs
