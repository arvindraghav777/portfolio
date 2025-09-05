import React, { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        /* try {
            const res = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error('Failed to send message');
            setSubmitted(true);
        } catch (err) {
            setError('Failed to send message. Please try again.');
        } */
        setSubmitted(true);
    };

    return (
        <div style={{ maxWidth: 500, margin: '40px auto', padding: 24, border: '1px solid #ddd', borderRadius: 8 }}>
            <h2>Contact Us</h2>
            {submitted ? (
                <div style={{ color: 'green', marginTop: 20 }}>Thank you for contacting us!</div>
            ) : (
                <form onSubmit={handleSubmit}>
                    {error && <div style={{ color: 'crimson', marginBottom: 12 }}>{error}</div>}
                    <div style={{ marginBottom: 16 }}>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: 8, marginTop: 4 }}
                        />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: 8, marginTop: 4 }}
                        />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label>Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            style={{ width: '100%', padding: 8, marginTop: 4 }}
                        />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label>Message</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            style={{ width: '100%', padding: 8, marginTop: 4 }}
                        />
                    </div>
                    <button type="submit" style={{ padding: '10px 24px' }}>Send</button>
                </form>
            )}
        </div>
    );
};

export default Contact;