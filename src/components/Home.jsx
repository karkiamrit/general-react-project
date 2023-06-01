import React from 'react';
import vg from '../assets/2.webp';

const Home = () => {
    return (
        <>
            <div className='home'>
                <main>
                    <h1>Innov8ors</h1>
                    <p>Evolution through Innovation</p>
                </main>

            </div>
            <div className='home2'>
                <img src={vg} alt="Graphics"/>
                <div>
                    <p>
                        We are a bunch of enthusiastic young tech nerds willing to solve all of your problems at a common place.
                    </p>
                </div>


            </div>
        </>
    )
}

export default Home;
