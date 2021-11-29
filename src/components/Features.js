import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Features.module.css'
import repute from './repute.jpeg'
//  import appstore from './Apple Dowload.png'
//  import iphone1 from './iphone1.png'
//  import iphone2 from './iphone2.png'
import phone from './phonerate.png'
//  import Frame from './Frame 29.png'


function Features() {
    return(
        <div className={styles.features}>
            <div className={styles.feat}>
                <div className={styles.match}>
                  <div className={styles.perfect}>
                    <h4 class="role">Own and leverage the value in the reputation you
                    have built online.
                     {/* in the number of people who know, like and trust you.  */}
                    </h4>
                    <p> Your most valued asset is the number of people who know and trust you.
                        You can use it
                         to improve your life Situation. You can own your 
                         online ratings to get a wide range of opportunities in various aspects of Living</p>
                     
                     <div className={styles.btn1} >
                        <Link to='/' className={styles.getStarted}><button>Get started</button></Link>
                        <Link to='/' className={styles.learnMore}><button>Learn More</button></Link>
                     </div> 
                  </div>
                  <div className={styles.ref}>
                       <img src={repute} alt="Repute" className={styles.retain} /> 
                  </div>
                </div>
                <div className={styles.job}>
                  <div className={styles.immediate}>
                    <div className={styles.fill}>
                        <img src={phone} alt="phone" className={styles.phone} />
                    </div>
                    <div className={styles.company}>
                        <h4>Avoid unnecessary stress while searching</h4>
                        <p>Get access to jobs, rental services, loans and other 
                            opportunies easily by proving to them you canbe trustwothy
                            without giving them access to your profile.
                        </p>
                    </div>
                  </div>
                  <div className={styles.councel}>
                    <div className={`${styles.forth} ${styles.councellor}`}>
                        <h4>Meet a councellor.</h4>
                        <p className={styles.chat}>Get chatting with a councellor to guide
                             you on right jobs , adequate roles suitable 
                             to your personality, passion and profile. Say
                              good bye to confusion and back and forth</p>
                    </div>
                    <div className={`${styles.interview} ${styles.councellor}`}>
                        <h4>Get help with your cv.</h4>
                        <p>Let the best hands review and redo your cv</p>
                    </div>
                    <div className={`${styles.prep} ${styles.councellor}`}>
                       <h4>Job Application guidance and Interview Preparation</h4>
                       <p>Adequate help to prepare and guide you 
                           through the application process 
                        </p>
                    </div>
                </div>
                </div >

                <div className={styles.experience}>
                  <div className={styles.perfect}>
                    <h4 class="role">Download the mobile app
                    for a whole new experience</h4>
                    {/* <div className={styles.btn1} >
                        <Link to='/'><img className={styles.play} src={playstore} alt="playstore" /></Link>
                        <Link to='/'><img className={styles.app} src={appstore} alt="appstore" /></Link>
                     </div> */}
                  </div>
                  {/* <div className={styles.iphone}>
                       <img src={iphone1} alt="iphone" className={styles.iphone1} /> 
                       <img src={iphone2} alt="iphone" className={styles.iphone4} /> 
                  </div> */}
                </div>
                <div className={styles.job}></div>
                
                <div className={styles.convince}>
                    <div className={styles.perfect}>
                    Our Track record
                    </div>
                    <div className={styles.track}>
                        <div className={styles.track}>
                            <div className={styles.record}>
                                i needed help with a job and aaaaaaaaaaaaricah helped get it and now I have a 3 figure job
                            </div>
                            <div className={styles.record}>
                                My cv was poor and so not convincing. Aricah helped me out
                            </div>
                            <div className={styles.record}>
                                My interviews always flattered so Aricah helped me out
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* Will be a slider of different people we have helped */}
                        {/* <img src={iphone1} alt="track" /> */}
                    </div>
                </div>
              <div className={styles.address}>
                <div className={styles.today}>
                <p className={styles.contact}>Contact Us</p>
                {/* <img src={Frame} alt="frame" className={styles.frame} /> */}
                </div>
                <div className={styles.talk}>
                    <div><button type={"submit"} className={styles.details}>Email Adress</button></div>
                    <div><button type={"submit"} className={styles.help}>Type a message </button></div>
                    <div><button type={"submit"} className={styles.send}>Send a message </button></div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Features
