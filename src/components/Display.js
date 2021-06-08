import iu from '../assets/iu.png'
import fourDBC from "../assets/4dbc.png";
import webDev from "../assets/webdevelopment.png";
import photoshop from "../assets/photoshop.png";
import premiere from "../assets/premiere.png";
import afterEffects from "../assets/aftereffects.png";
import html from "../assets/html.webp";
import css from "../assets/css.webp";
import javascript from "../assets/javascript.png"
import unity from "../assets/unity.svg";
import obs from "../assets/obs.png";
import logic from "../assets/logic.png";
import cssCreature from "../assets/csscreature.png";
import staticLayout from "../assets/staticlayout.png";
import apiOne from "../assets/api1.png";
import glitchArt from "../assets/glitchart.png";
import github from "../assets/github.png";
import linkedIn from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import corksAndForks from "../assets/corksandforks.png"

const Display = () => {
    return (
        <div className="display">
            <div class="landing">
                <div id="landingTitle">
                    <h1>REED BROWN</h1>
                </div>

                <div id="services">
                    <h3 id="cycle"></h3>
                </div>
            </div>

            <div id="about">
                <div id="aboutMeTitle">
                    <h1>ABOUT ME</h1>
                </div>

                <div id="imageBoard">
                    <img src={iu} class="image" alt="" />
                    <img src={fourDBC} class="image" alt="" />
                    <img src={webDev} class="image" alt="" />
                </div>

                <div id="aboutMeParagraph">
                    <p class="copyFont">
                        I've always had a passion for exploring how things work, and
                        oftentimes more interestingly, how they break. This has inspired my
                        creative driven work with video, sound, and most recently,
                        programming.</p>

                    <p class="copyFont">
                        I love working in teams whether that be on video shoots or in my two
                        years of experience as an adult educator.</p>

                    <p class="copyFont">
                        In the wake of COVID-19, I found myself wanting to make a career
                        transition, so I enrolled in 1150's Javascript program. This has
                        offered me many opportunities for challenge and growth, and I can't
                        wait to continue my journey into web development.</p>
                </div>
            </div>

            <div id="skills">
                <h1>SKILLS</h1>

                <div id="skillBoard">
                    <img src={photoshop} class="skill" alt="" />
                    <img src={premiere} class="skill" alt="" />
                    <img src={afterEffects} class="skill" alt="" />
                    <img src={html} class="skill" alt="" />
                    <img src={css} class="skill" alt="" />
                    <img src={javascript} class="skill" alt="" />
                    <img src={unity} class="skill" alt="" />
                    <img src={obs} class="skill" alt="" />
                    <img src={logic} class="skill" alt="" />
                </div>

                <a href="assets/resume.pdf" id="resume"><h3>RESUME</h3></a>
            </div>

            <div id="projects">
                <div id="projectsTitle">
                    <h1>PROJECTS</h1>
                </div>

                <div id="projectBoard">
                    <div class="project">
                        <img src={cssCreature} class="projectImage" alt="" />
                        <a href="https://codepen.io/reedbrown5/pen/wvoYmzV" class="hiddenText">
                            CSS Creature<br /><br />
                                An original rendering of the Moog Grandmother synthesizer made in CSS.</a>
                    </div>

                    <div class="project">
                        <img src={staticLayout} class="projectImage" alt="" />
                        <a href="https://reedbrownart.github.io/staticlayout/" class="hiddenText">
                            Static Layout<br /><br />
                                A recreation of the Kast home page using HTML and CSS.</a>
                    </div>

                    <div class="project">
                        <img src={apiOne} class="projectImage" alt="" />
                        <a href="https://reedbrownart.github.io/pokemonAPI/" class="hiddenText">
                            Pokemon API Project<br /><br />
                                An original storytelling app that allows users to pick two Pokemon and have them battle.</a>
                    </div>

                    <div class="project">
                        <img src={glitchArt} class="projectImage" alt="" />
                        <a href="https://reedbrownart.github.io/giphyAPI/" class="hiddenText">
                            Glitch Gif Generator<br /><br />
                                An original app for generating psychedelic glitch art out of GIFs.</a>
                    </div>

                    <div class="project">
                        <img src={corksAndForks} class="projectImage" alt="" />
                        <a href="http://braintwins.info/" class="hiddenText">
                            Corks and Forks<br /><br />
                                A virtual cocktail party at Banker's Life Field House, built in Unity.</a>
                    </div>

                    <div class="project">
                        <img src={glitchArt} class="projectImage" alt="" />
                        <a href="https://agora-client-side.herokuapp.com/" class="hiddenText">
                            Agora<br /><br />
                                Ecommerce platform for makers and artists with full database implementation.</a>
                    </div>

                    <div class="project">
                        <img src={glitchArt} class="projectImage" alt="" />
                        <a href="https://final-project-client.herokuapp.com/" class="hiddenText">
                            Gif Gallery<br /><br />
                                A fully realized version of the Gif Generator, allowing users to create and share their creations.</a>
                    </div>
                </div>
            </div>

            <div id="contact">
                <h1>CONTACT</h1>
                <form action="https://formspree.io/f/mnqlarkp" method="POST" id="contactForm">
                    <input type="email" name="_replyto" value="Your email" />
                    <textarea name="message"
                        id="messageBox" onclick="myFunction()">Type your message here and I'll return your email as soon as possible!</textarea>

                    <button type="submit">Send</button>
                </form>
                <div id="contactLinks">
                    <a href="https://github.com/reedbrownart"><img src={github} class="contactImage" id="github" /></a>
                    <a href="https://www.linkedin.com/in/reed-brown-7a149311a/"><img src={linkedIn} class="contactImage"
                        id="linkedIn" /></a>
                    <a href="https://www.instagram.com/4dbroadcasting/"><img src={instagram} class="contactImage"
                        id="instagram" /></a>
                </div>
            </div>
        </div>
    )
}

export default Display;