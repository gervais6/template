import React, { useState } from "react";
import "../pages/devs2.css"; // Assurez-vous que ce fichier contient vos styles personnalisés si nécessaire
import '../index.css'; // Assurez-vous que ce fichier CSS est importé
const Dev2 = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

            <section id="home" className="hero flex items-center justify-center text-center bg-gradient-to-r from-orange-400 to-pink-600 text-gray-100 min-h-screen"           style={{

background: 'linear-gradient(to right, #f97316, #ec4899)', // Dégradé de orange à rose

color: '#f9fafb', // Couleur du texte gris clair

minHeight: '100vh', // Hauteur minimale de l'écran

display: 'flex', // Utiliser Flexbox pour centrer le contenu

alignItems: 'center', // Centrer verticalement

justifyContent: 'center', // Centrer horizontalement

}}>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />

    <div className="container mx-auto" >
        <div className="flex justify-center">
            <div className="md:w-1/2 text-center">
                <h1 className="text-5xl font-bold mb-4">Bienvenue sur mon Portfolio </h1>
                <p className="text-lg mb-5">Développeur passionné, créateur de solutions innovantes.</p>



                <div className="mb-5">
                    <form className="flex justify-center">
                        <div className="flex items-center">
                            <input type="email" className="form-input rounded-l-md p-2" id="email" placeholder="Entrez votre email" />
                            <button type="submit" className="bg-white text-gray-800 font-semibold rounded-r-md p-2">prévenez-moi</button>
                        </div>
                    </form>
                </div>

                <div className="flex justify-center">
                    <a href="#" className="social-icon mx-2 text-2xl text-gray-100 hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-icon mx-2 text-2xl text-gray-100 hover:text-gray-300"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-icon mx-2 text-2xl text-gray-100 hover:text-gray-300"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-icon mx-2 text-2xl text-gray-100 hover:text-gray-300"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>






<section class="about-us  bg-gray-100 ">
    <div class="container mx-auto">
        <div class="flex flex-col md:flex-row items-center">
            <div class="  md:w-1/2  mb-6 md:mb-0  "   style={{marginLeft:60,marginRight:30}}>
                <h2 class="font-bold text-3xl mb-4">À propos </h2>
                <p class="text-gray-600 mb-4">En tant que développeur front-end et créatif, mon travail s'étend des sites Web 2D dynamiques avec des animations uniques aux expériences Web 3D immersives.

Diplômée de l'Ecole des Gobelins en 2018 en responsable technique en design interactif.</p>
                <div class="flex flex-col md:flex-row">
                    <div class="md:w-1/2 mb-4 md:mb-0">
                        <h5 class="text-gray-500 font-semibold">Notre mission</h5>
                        <ul class="list-none">
                            <li class="flex items-center mb-2"><i class="bi bi-check-circle me-2 text-orange-500"></i>Solutions innovantes</li>
                            <li class="flex items-center mb-2"><i class="bi bi-check-circle me-2 text-orange-500"></i>Satisfaction client</li>
                            <li class="flex items-center mb-2"><i class="bi bi-check-circle me-2 text-orange-500"></i>Pratiques durables</li>
                        </ul>
                    </div>
                    <div class="md:w-1/2">
                        <h5 class="text-gray-500 font-semibold">Notre Vision</h5>
                        <ul class="list-none">
                            <li class="flex items-center mb-2"><i class="bi bi-bullseye me-2 text-orange-500"></i>Portée mondiale</li>
                            <li class="flex items-center mb-2"><i class="bi bi-bullseye me-2 text-orange-500"></i>Leadership de l'industrie</li>
                            <li class="flex items-center mb-2"><i class="bi bi-bullseye me-2 text-orange-500"></i>Croissance continue</li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <a href="#" class="btn btn-primary  bg-orange-500 text-white py-2 px-4 rounded hover:shadow-lg transform transition-all duration-300 " >Apprendre encore plus</a>
            </div>
            <div class="md:w-1/2" style={{marginTop:90,marginRight:60,marginBottom:30}}>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wYW55fGVufDB8MHx8fDE3MjEyMTE5MDZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="About Us" class="w-full h-auto rounded shadow-lg transform transition-transform duration-300 hover:scale-105"/>
            </div>
        </div>
        
        <div class="flex flex-wrap mt-5">
            <div class="w-full md:w-1/4 mb-4" style={{marginBottom:50}}>
                <div class="text-center">
                    <i class="bi bi-people text-orange-500 text-5xl mb-2"></i>
                    <h2 class="font-bold text-2xl">500+</h2>
                    <p class="text-gray-600">Clients</p>
                </div>
            </div>
            <div class="w-full md:w-1/4 mb-4">
                <div class="text-center">
                    <i class="bi bi-briefcase text-orange-500 text-5xl mb-2"></i>
                    <h2 class="font-bold text-2xl">1000+</h2>
                    <p class="text-gray-600">Projets</p>
                </div>
            </div>
            <div class="w-full md:w-1/4 mb-4">
                <div class="text-center">
                    <i class="bi bi-trophy text-orange-500 text-5xl mb-2"></i>
                    <h2 class="font-bold text-2xl">50+</ h2>
                    <p class="text-gray-600">Récompenses</p>
                </div>
            </div>
            <div class="w-full md:w-1/4 mb-4">
                <div class="text-center">
                    <i class="bi bi-globe text-orange-500 text-5xl mb-2"></i>
                    <h2 class="font-bold text-2xl">20+</h2>
                    <p class="text-gray-600">Pays</p>
                </div>
            </div>
        </div>
    </div>
</section>

            <section id="contact" className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-10">Contactez-nous</h2>
                    <div className="max-w-md mx-auto">
                        <form>
                            <div className="mb-4">
                                <input type="text" className="form-control w-full p-3 border border-gray-300 rounded" placeholder="Your Name" required />
                            </div>
                            <div className="mb-4">
                                <input type="email" className="form-control w-full p-3 border border-gray-300 rounded" placeholder="Your Email" required />
                            </div>
                            <div className="mb-4">
                                <textarea className="form-control w-full p-3 border border-gray-300 rounded" rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="bg-orange-400 text-white py-2 px-4 rounded-lg w-full">Envoyer un message</button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className="bg-orange-400 -800 text-white text-center py-3">
                <p>&copy; 2024 My Startup. All rights reserved.</p>
            </footer>
        </div>    );
}

export default Dev2;