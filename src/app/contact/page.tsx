"use client"

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [state, handleSubmit] = useForm("xzzvwdao"); // Recovered ID

    return (
        <div className="min-h-screen pt-32 px-6 bg-saisei-dark text-saisei-light flex flex-col items-center">
            <h1 className="text-[8vw] font-serif mb-8 leading-none">LET'S TALK</h1>

            {state.succeeded ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-serif text-saisei-accent"
                >
                    Message Sent. Thank you.
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6 opacity-80 font-sans">
                    <div>
                        <label htmlFor="email" className="block text-xs uppercase tracking-widest mb-2">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="w-full bg-transparent border-b border-saisei-light/20 py-2 focus:border-saisei-accent outline-none transition-colors"
                            required
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-xs uppercase tracking-widest mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="w-full bg-transparent border-b border-saisei-light/20 py-2 focus:border-saisei-accent outline-none transition-colors"
                            required
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="px-8 py-3 bg-saisei-light text-saisei-dark font-serif uppercase text-sm tracking-widest hover:bg-saisei-accent transition-colors disabled:opacity-50"
                    >
                        Send Message
                    </button>
                </form>
            )}

            <div className="mt-20">
                <a href="mailto:manashatwar1@gmail.com" className="text-saisei-accent text-lg font-sans tracking-widest hover:text-white transition-colors">
                    MANASHATWAR1@GMAIL.COM
                </a>
            </div>
        </div>
    )
}
