import React from 'react';
import  Header  from '@components/parts/Header';
import  Footer  from '@components/parts/Footer';
import HeroSection  from '@components/parts/HeroSection';
import FeaturedProducts  from '@components/parts/FeaturedProducts';
import Testimonials from '@components/parts/Testimonials';
import NewsletterSignup from '@components/parts/NewsletterSignup';    

const Home = () => {
    return (
        <div className="min-h-screen">            
            <Header />
            <main>
                <HeroSection />
                <FeaturedProducts />
                <Testimonials />
                <NewsletterSignup />
            </main>
            <Footer />
        </div>
  );
}

export default Home;    