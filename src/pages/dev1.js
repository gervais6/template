import React from "react";
import "../pages/dev.css"; // Assurez-vous que ce fichier contient vos styles personnalisés si nécessaire

const Dev1 = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

<nav class="bg-gray-800 px-2 py-2.5 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
        <a class="navbar-brand flex items-center text-white" href="#">
            VOLKENO
        </a>
        <button class="navbar-toggler text-white focus:outline-none md:hidden" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="hidden md:flex md:items-center md:justify-between md:w-auto "  id="navbarNav">
            <ul class="flex space-x-4">
                <li>
                    <a class="nav-link text-white font-medium uppercase hover:text-gray-300" aria-current="page" href="#">Home</a>
                </li>
                <li>
                    <a class="nav-link text-white font-medium uppercase hover:text-gray-300" href="#about">À propos</a>
                </li>
                <li>
                    <a class="nav-link text-white font-medium uppercase hover:text-gray-300" href="#service">Services</a>
                </li>

                <li>
                    <a class="nav-link text-white font-medium uppercase hover:text-gray-300" href="#home">Galeries</a>
                </li>
                <li>
                    <a class="nav-link text-white font-medium uppercase hover:text-gray-300 me-5" href="#contact">Contact</a>
                </li>
            </ul>
            <form class="flex items-center">
                <input class="form-control border border-gray-300 rounded-l-full py-2 px-4" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-light bg-transparent border border-white text-white rounded-r-full py-2 px-4 hover:bg-white hover:text-gray-800 transition duration-300" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>

<section id="about" class="py-20 bg-gray-100">
    <div class="container mx-auto px-4 lg:px-5">
        <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2">
                <h2 class="font-bold text-3xl mb-4">À propos </h2>
                <p class="text-lg mb-4">je suis passionnés par la  transformation numérique et l'autonomisation
                    les entreprises à prospérer à l’ère du numérique. Notre équipe d'experts combine une technologie de pointe avec
                    des solutions innovantes pour vous aider à garder une longueur d'avance sur la concurrence.</p>
                <a class="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mr-3" href="#features">Our Services</a>
                <a class="border border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded-lg" href="#contact">Get in Touch</a>
            </div>
            <div class="lg:w-1/2 pt-4">
                <img src="https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About TechNova" class="w-full h-auto rounded-lg"/>
            </div>
        </div>
    </div>
</section>
            <section id="service" className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-10">Nos prestations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="text-center">
                            <i className="fas fa-rocket feature-icon text-blue-500 text-6xl mb-4"></i>
                            <h3 className="text-xl font-semibold">Rapide</h3>
                            <p>Des performances ultra-rapides pour tous .</p>
                        </div>
                        <div className="text-center">
                            <i className="fas fa-lock feature-icon text-blue-500 text-6xl mb-4"></i>
                            <h3 className="text-xl font-semibold">Sécurisé</h3>
                            <p>Vos données sont en sécurité grâce à notre sécurité .</p>
                        </div>
                        <div className="text-center">
                            <i className="fas fa-cogs feature-icon text-blue-500 text-6xl mb-4"></i>
                            <h3 className="text-xl font-semibold">Personnalisable</h3>
                            <p>Adaptez notre produit à vos besoins spécifiques.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="home" className="py-20 bg-gray-100">
            <div class="container mx-auto my-10">

            <div class="container mx-auto my-10">
<div className="">
<div class="container mx-auto">
    <h1 class="text-4xl font-bold text-center mb-4">Gallery</h1>
    <p class="text-center text-gray-600 mb-8">Fluid Layout With Overlay Effect</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 m-11">
        <div class="mb-4">
            <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg">
            <img src="https://img.freepik.com/psd-gratuit/modele-page-destination-pour-villes-lieux-voyage_23-2148972725.jpg?t=st=1733244750~exp=1733248350~hmac=d04a7fb92b762a3767e94c56a1330c495ae76191fc818575dfa4e7a500480064&w=826" alt="Tunnel" class="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"/>
            </a>
        </div>

        <div class="mb-4">
            <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg">
            <img src="https://img.freepik.com/psd-gratuit/nouveau-modele-page-destination-langue_23-2149292179.jpg?t=st=1733244866~exp=1733248466~hmac=23d64bdc4008916ed2206cd166e17c4de3a20ca1a755aaaf5fe085cf4433df80&w=826" alt="Tunnel" class="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"/>
            </a>
        </div>

        <div class="mb-4">
            <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg">
                <img src="https://img.freepik.com/psd-gratuit/publications-instagram-application-suivi-objectifs_23-2150036959.jpg?t=st=1733244930~exp=1733248530~hmac=006d9395aa79814b9bc6eeccad60fb68bc85e6b49135cef55cb27cf60cd9060a&w=740" alt="Tunnel" class="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"/>
            </a>
        </div>

        <div class="mb-4 ">
            <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg">
            <img src="https://img.freepik.com/psd-gratuit/regles-du-modele-banniere-conception-interface-utilisateur_23-2149193131.jpg?t=st=1733244986~exp=1733248586~hmac=2826b08a827048155aff380d5ccbda138734e3201c447904ed45eeab35927951&w=826" alt="Tunnel" class="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"/>
            </a>
        </div>

        <div class="mb-4">
            <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg">
            <img src="https://img.freepik.com/psd-gratuit/modele-banniere-horizontale-temps-voyage_23-2148995498.jpg?t=st=1733245024~exp=1733248624~hmac=629304563408a14d7d5110c41a31ac276ede93df659a2287793b800584830c1f&w=826" alt="Tunnel" class="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"/>
            </a>
        </div>

        <div class="mb-4">
            <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg">
            <img src="https://img.freepik.com/vecteurs-libre/modele-application-pour-smartphone-suivi-entrainement_23-2148627887.jpg" alt="Tunnel" class="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"/>
            </a>
        </div>
    </div>
</div>
</div>
</div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js"></script>

<script>

baguetteBox.run('.tz-gallery');

</script></div>
            </section>

            <section id="contact" className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-10">Contact Us</h2>
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
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-800 text-white text-center py-3">
                <p>&copy; 2024 My Startup. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Dev1;