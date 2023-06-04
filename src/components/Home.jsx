import React from 'react';
import vg from '../assets/2.webp';
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';

const Home = () => {
    return (
        <>
            <div className='home' id="home">
                <main>
                    <h1>Innov8ors</h1>
                    <p>Evolution through Innovation</p>
                </main>

            </div>
            <div className='home2'>
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are a bunch of enthusiastic young tech nerds willing to solve all of your problems at a common place.
                    </p>
                </div>


            </div>
            <div className='home3' id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officia deserunt necessitatibus maiores corporis quaerat quasi asperiores cum, fugiat doloribus quae eaque nobis nihil animi! Quo magni explicabo expedita iusto.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eius at explicabo distinctio deserunt culpa dignissimos maiores? Iusto aspernatur, labore placeat odit, dolore est reiciendis optio suscipit quis quibusdam repudiandae.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus distinctio praesentium temporibus consequatur tempora repellendus libero aliquid tenetur facilis ratione, animi, explicabo ipsam error obcaecati, dolorum atque sint saepe cupiditate.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ad quibusdam aliquid, tempore dolorum totam sed alias eum odit provident, eligendi assumenda qui reiciendis deleniti beatae officiis dolore? Libero, alias.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore excepturi amet perspiciatis fugiat illo porro veritatis vitae dolore libero eius. Maxime laboriosam voluptates temporibus, doloremque assumenda numquam consequatur aspernatur aperiam.

                    </p>
                </div>
            </div>
            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{animationDelay:'0.3s'}}>
                            <AiFillGoogleCircle/>
                            <p>Google</p>
                        </div>
                        <div style={{animationDelay:'0.5s'}}>
                            <AiFillAmazonCircle/>
                            <p>Amazon</p>
                        </div>
                        <div style={{animationDelay:'0.7s'}}>
                            <AiFillYoutube/>
                            <p>Youtube</p>
                        </div>
                        <div style={{animationDelay:'1s'}}>
                            <AiFillInstagram/>
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home;
