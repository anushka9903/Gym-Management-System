import React from 'react'
import "./Footer.css"
import { Grid } from '@mui/material'

const Footer = () => {
  return (
    <>
         <section class="footer-section p-20">
        <div class="container">
            <Grid container spacing={10}>
                <Grid item sm={12} lg={4}>
                    <div class="fs-about space-y-5">
                        <h1 className="text-4xl font-bold">
                            FITME
                        </h1>
                        <p>At FITME GYM, we're dedicated to helping you achieve your fitness
            goals and live a healthier lifestyle. With state-of-the-art
            facilities, experienced trainers, and personalized workout programs,
            we provide a supportive environment where you can thrive. Join our
            community and embark on a journey to transform your body and mind..</p>
                        <div class="fa-social">
                            <a href="#"><i className="text-2xl fa fa-facebook"></i></a>
                            <a href="#"><i className="text-2xl fa fa-twitter"></i></a>
                            <a href="#"><i className="text-2xl fa fa-youtube-play"></i></a>
                            <a href="#"><i className="text-2xl fa fa-instagram"></i></a>
                            <a href="#"><i className="text-2xl fa  fa-envelope-o"></i></a>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={6} lg={2}>
                    <div class="fs-widget">
                        <h4>Useful links</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Classes</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </Grid>
                <Grid item sm={6} lg={2}
                 >
                    <div class="fs-widget">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">My account</a></li>
                            <li><a href="#">Subscribe</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </Grid>
                <Grid item sm={12} lg={4} 
                >
                    <div class="fs-widget">
                        <h4>Tips & Guides</h4>
                        <div class="fw-recent">
                            <h6><a href="#">Physical fitness may help prevent depression, anxiety</a></h6>
                            <ul>
                                <li>3 min read</li>
                                <li>20 Comment</li>
                            </ul>
                        </div>
                        <div class="fw-recent">
                            <h6><a href="#">Fitness: The best exercise to lose belly fat and tone up...</a></h6>
                            <ul>
                                <li>3 min read</li>
                                <li>20 Comment</li>
                            </ul>
                        </div>
                    </div>
                </Grid>
            </Grid>
            
        </div>
    </section>
    </>
  )
}

export default Footer