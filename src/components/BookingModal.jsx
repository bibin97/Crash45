import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Check } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        grade: '',
        subject: '',
        location: ''
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = (e) => {
        e.preventDefault();
        if (step === 1 && formData.name && formData.whatsapp) {
            setStep(2);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for submission logic
        console.log("Form Submitted", formData);
        alert("Thank you! We will contact you soon.");
        onClose();
        // Reset form after closing
        setStep(1);
        setFormData({
            name: '',
            whatsapp: '',
            grade: '',
            subject: '',
            location: ''
        });
    };

    const gccLocations = ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"];
    const grades = ["KG", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-white dark:bg-zinc-900 w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-yellow-500/20 bg-yellow-400">
                            <div>
                                <h3 className="text-xl font-bold text-black">
                                    {step === 1 ? "Start Your Journey" : "Academic Preferences"}
                                </h3>
                                <p className="text-sm text-black/80 mt-1">
                                    {step === 1 ? "Let's assume you get the best." : "Tell us what you need."}
                                </p>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-black/10 rounded-full transition-colors">
                                <X size={20} className="text-black" />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={step === 1 ? handleNext : handleSubmit} className="p-6 space-y-5">
                            {step === 1 ? (
                                <motion.div
                                    key="step1"
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-5"
                                >
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Student Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#008080] outline-none transition-all placeholder:text-gray-400"
                                            placeholder="Enter student's full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">WhatsApp Number</label>
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            required
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#008080] outline-none transition-all placeholder:text-gray-400"
                                            placeholder="e.g. +971 50 123 4567"
                                        />
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="step2"
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-5"
                                >
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Grade</label>
                                        <select
                                            name="grade"
                                            required
                                            value={formData.grade}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#008080] outline-none transition-all"
                                        >
                                            <option value="">Select Grade</option>
                                            {grades.map(g => <option key={g} value={g}>Grade {g}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#008080] outline-none transition-all placeholder:text-gray-400"
                                            placeholder="e.g. Mathematics, Physics"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Location (GCC)</label>
                                        <select
                                            name="location"
                                            required
                                            value={formData.location}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#008080] outline-none transition-all"
                                        >
                                            <option value="">Select Location</option>
                                            {gccLocations.map(l => <option key={l} value={l}>{l}</option>)}
                                        </select>
                                    </div>
                                </motion.div>
                            )}

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-xl font-bold text-lg bg-[#008080] text-white shadow-lg hover:bg-[#006666] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                >
                                    {step === 1 ? (
                                        <>Next Step <ChevronRight size={20} /></>
                                    ) : (
                                        <>Submit Enquiry</>
                                    )}
                                </button>
                            </div>
                        </form>

                        {/* Steps Indicator */}
                        <div className="flex justify-center gap-2 pb-6">
                            <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 1 ? 'w-8 bg-[#008080]' : 'w-2 bg-gray-200 dark:bg-zinc-700'}`} />
                            <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 2 ? 'w-8 bg-[#008080]' : 'w-2 bg-gray-200 dark:bg-zinc-700'}`} />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
