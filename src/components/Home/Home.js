import React from 'react';
import Card from '../Card/Card';
import useServices from '../Hooks/useServices';
import './Home.css'
const Home = () => {
    const [services, setServices] = useServices();
    return (
        <div >
            <section className='banner d-flex align-items-center justify-content-center flex-column'>
                <h1 className='text-white display-3 fw-bold'>Hire the best tutor today!</h1>
                <button className='btn btn-primary '>Hire Me</button>
            </section>
            <section className='mt-5 container'>
                <h2 className='text-primary text-center'>Services</h2>
                <div className="row row-cols-md-3 row-cols-1">
                    {
                        services.map(service => <Card
                            key={service.id}
                            service={service}

                        ></Card>)
                    }
                </div>
            </section>

        </div>
    );
};

export default Home;