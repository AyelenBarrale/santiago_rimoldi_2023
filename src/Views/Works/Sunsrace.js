import React, {useState, useEffect} from 'react'
import { db } from '../../firebase';

export const Sunsrace = () => {
    const [workData, setWorkData] = useState(null);
    const slug = 'sunsrace'

    useEffect(() => {
        let isMounted = true;

        const workRef = db.collection('works').where('slug', '==', slug);
    
        const unsubscribe = workRef.onSnapshot((querySnapshot) => {
        if (!isMounted) {
            return;
            }
          if (querySnapshot.size === 0) {
            console.log('No matching document found');
            setWorkData(null);
            return;
          }
            const documentData = querySnapshot.docs[0].data();
            setWorkData(documentData);
        });
    
        return () => {
            isMounted = false;
            unsubscribe();
          };
      }, [slug]);
    
      if (!workData) {
        return (
            <div className='loading'>
                <p>Loading...</p>
            </div>
        );
      }

  return (
    <>
        <div className='banner-about'>
            <img src={workData.imageTop} alt='' className='w-100'/>
        </div>
        <section className="intro-container">
            <div className="row">
                <div className="intro-left col-lg-4 col-12">
                    <div className="intro-title">
                        <h1 className="intro-h1">{workData.title}</h1>
                        <h2 className="intro-h2">{workData.workType}</h2>
                        <div className="line"></div>
                    </div>
                    
                    <div className="details-work container">
                        <div className="details">
                            <h3 className="details-1" >Client</h3>
                            <h3 className="details-2" >{workData.client}</h3>
                        </div>
                        <div className="details">
                            <h3 className="details-1">Services</h3>
                            <h3 className="details-2">{workData.services}</h3>
                        </div>
                        <div className="details">
                            <h3 className="details-1">Year</h3>
                            <h3 className="details-2">{workData.year}</h3>
                        </div>
                    </div>
                </div>

                <div className="intro-right col-lg-7 offset-lg-1 col-12">
                    <p className="intro-p">Since 2010, the organizing committee of this enduro race assigned me the task of redesigning its identity and updating it annually for each edition of this sporting event.</p>
                    <p>In this sample, you can see the work done for the 2016 edition in which I was inspired by the essence of this sport: reaching the goal at any cost.</p>
                    <p>In each edition, I develop a particular concept and transfer it to stationery design, posters, banners, merchandising, and more.</p>
                </div>
            </div>
        </section>
        <section className="sunsrace-container">
            <div className="sr-images">
                <img src={workData.detailImageI} alt="Enduro race merchandising, medals and trophy desing" />
                <img src={workData.detailImageII} alt="Enduro race brand identity display in several formats" />
            </div>
            <div className="row">
                <div className="video-progress col-12 col-md-6 col-lg-6">
                    <video
                        controls 
                        loop 
                        playsInline
                        autoPlay 
                        allowFullScreen 
                        poster="/assets/videos/sunsrace-diseno-poster-montage.jpg"
                        className='w-100'
                    >
                        <source
                        src="/assets/videos/sunsrace-diseno-poster.mp4" 
                        type="video/mp4" 
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="img-workdone col-12 col-md-6 col-lg-6">
                <img className="w-100" src={workData.detailImageIII} alt="Poster design for Sun's Race 2016 Edition" />
                </div>
            </div>
            
            <div className="workbanner-container col-12">
                <iframe title="panorama-photomontage-sunrace" src="https://player.vimeo.com/video/254495842" frameborder="0" allow="autolay; fullscreen"></iframe>
            </div>
        </section>
    </>
  )
}
