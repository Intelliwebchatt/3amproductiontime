/* General Styles */
body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    color: #333;
}

/* Hero Section */
.hero {
    /* If you have a hero image, uncomment the line below and replace 'hero-image.jpg' with your image path */
    /* background: url('hero-image.jpg') no-repeat center center/cover; */
    background-color: #f0f8ff; /* Light blue background as a fallback */
    height: 100vh;
    position: relative;
    text-align: center;
    color: #333; /* Dark text color for visibility */
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.hero h1 {
    font-size: 3rem;
    margin: 0;
    color: #2c3e50; /* Darker text color */
}

.tagline {
    font-size: 1.5rem;
    color: #34495e; /* Darker text color */
}

/* Slot Machine Section */
.slot-machine {
    padding: 50px 20px;
    background-color: #f9f9f9;
    text-align: center;
}

.slot-machine h2 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.controls {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}

.btn {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 15px 20px;
    margin: 5px;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 5px;
    transition: background-color 0.3s, box-shadow 0.3s;
}

.btn:hover {
    background-color: #45a049;
}

.reels-container {
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 20px;
}

.reel {
    width: 30%;
    margin: 0 10px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.reel a {
    text-decoration: none;
    font-size: 1.2rem;
    color: #333;
    font-weight: 600;
}

.reel p {
    font-size: 1rem;
    color: #666;
}

.reel.spinning {
    animation: spin 1s ease-in-out;
}

@keyframes spin {
    0% { transform: translateY(0); }
    50% { transform: translateY(-100%); }
    100% { transform: translateY(0); }
}

.reel.flash {
    animation: flash 0.5s;
}

@keyframes flash {
    0% { background-color: white; }
    50% { background-color: #ffff99; }
    100% { background-color: white; }
}

/* Contact Sheet */
.contact-sheet {
    padding: 50px 20px;
    background-color: #fff;
}

.contact-sheet h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 30px;
}

#contact-form {
    max-width: 600px;
    margin: 0 auto;
}

#contact-form label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
}

#contact-form input,
#contact-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

#contact-form button {
    width: 100%;
    padding: 15px;
    background-color: #2196F3;
    color: white;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s, box-shadow 0.3s;
}

#contact-form button:hover {
    background-color: #0b7dda;
}

/* Footer */
footer {
    background-color: #333;
    color: white;
    padding: 20px;
}

.social-media {
    text-align: center;
    margin-bottom: 15px;
}

.social-btn {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: 0 5px;
    background-color: #444;
    border-radius: 50%;
    color: white;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
}

.social-btn.linkedin::before {
    content: '\f08c'; /* Font Awesome LinkedIn icon */
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
}

.social-btn.facebook::before {
    content: '\f09a'; /* Font Awesome Facebook icon */
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
}

.social-btn.twitter::before {
    content: '\f099'; /* Font Awesome Twitter icon */
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
}

.footer-nav {
    text-align: center;
}

.footer-nav a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
}

.footer-nav a:hover {
    text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero h1 {
        font-size: 2rem;
    }
    .tagline {
        font-size: 1.2rem;
    }
    .reels-container {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }
    .reel {
        flex: 0 0 auto;
        width: 80%;
        margin: 0 10px;
    }
    .btn {
        padding: 15px 20px;
        font-size: 1.2rem;
    }
    #contact-form input,
    #contact-form textarea {
        font-size: 1.2rem;
        padding: 15px;
    }
    #contact-form button {
        font-size: 1rem;
    }
}

/* Glow Effect */
.btn.spin-btn,
#contact-form button {
    box-shadow: 0 0 10px rgba(33, 150, 243, 0.5);
}

.btn.spin-btn:hover,
#contact-form button:hover {
    box-shadow: 0 0 15px rgba(33, 150, 243, 0.7);
}
