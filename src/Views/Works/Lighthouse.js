import React, {useEffect, useState} from 'react';
import { db } from '../../firebase';

export const Lighthouse = () => {
    const [workData, setWorkData] = useState(null);
    const slug = 'lighthouse'

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
                    <p className="intro-p">Personal photo manipulation project.</p>
                    <p>Started as a dream of being inside a fish tank and ended up like a dream of flying fishes.</p>
                </div>
            </div>
        </section>
        <section className="lighthouse-container">
            <div>
            <img src={workData.imageFull} alt="Retouching work: Lighthouse Final Results"  />
            </div>
            <div className="row">
            <div className=" col-12 col-md-6 col-lg-6">
                <img src={workData.detailImageI} alt="Retouching work: Lighthouse detail" />
            </div>
            <div className=" col-12 col-md-6 col-lg-6">
                <img src={workData.detailImageII} alt="Retouching work: Lighthouse detail" />
            </div>
            </div>
            <div>
            <img src={workData.resourceImage} alt="" />
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <img className="w-100" src={workData.detailImageIII} alt="Retouching work: Lighthouse Process" />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <img className="w-100" src={workData.gif} alt="Retouching work: Lighthouse Process" />
                </div>
            </div>
        </section>
    </>
  )
}
