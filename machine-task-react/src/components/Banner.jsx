// src/components/BackgroundImageComponent.js
import React from 'react';
import { motion } from 'framer-motion';

const BannerImageComponent = () => {
    return (
        <div
            className="relative h-80 bg-cover bg-center"
            style={{ backgroundImage: "url('https://img.freepik.com/free-photo/plates-with-chocolate-sticks-dark-background_23-2148340440.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white p-4">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        MENU
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-sm md:text-xl fontfamily-kelly-slab"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                    >
                        Please take a look at our menu featuring food, drinks, and brunch.
                    </motion.p>
                    <motion.p
                        className="mt-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
                    >
                        If you'd like to place an order, use the "Order Online" button located below the menu.
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default BannerImageComponent;
