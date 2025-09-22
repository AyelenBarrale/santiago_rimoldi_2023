import React, {useState, useEffect} from 'react';
import { db } from '../../firebase';
import { WorkItem } from '../WorkItem/WorkItem';

export const WorkList = ({filter}) => {
    const [works, setWorks] = useState([]);

    // Static data for testing the square layout
    const staticWorks = [
        {
            title: "Forest",
            subtitle: "Photo Manipulation",
            workType: "Photo Manipulation",
            slug: "/forest",
            previewImage: "/assets/img/Portadas/Portada_Forest.jpg"
        },
        {
            title: "Lighthouse",
            subtitle: "Photo Manipulation", 
            workType: "Photo Manipulation",
            slug: "/lighthouse",
            previewImage: "/assets/img/Portadas/Portada_Lighthouse.jpg"
        },
        {
            title: "Logos",
            subtitle: "Branding",
            workType: "Branding", 
            slug: "/logos",
            previewImage: "/assets/img/Portadas/Portada_Logos.jpg"
        },
        {
            title: "MUT Studio",
            subtitle: "Branding",
            workType: "Branding",
            slug: "/mut",
            previewImage: "/assets/img/Portadas/Portada_Mut.jpg"
        },
        {
            title: "Plan V",
            subtitle: "Branding",
            workType: "Branding", 
            slug: "/planv",
            previewImage: "/assets/img/Portadas/Portada_PlanV.jpg"
        },
        {
            title: "Shark",
            subtitle: "Photo Manipulation",
            workType: "Photo Manipulation",
            slug: "/shark", 
            previewImage: "/assets/img/Portadas/Portada_Shark.jpg"
        },
        {
            title: "Suns Race",
            subtitle: "Branding",
            workType: "Branding",
            slug: "/sunsrace",
            previewImage: "/assets/img/Portadas/Portada_SR.jpg"
        },
        {
            title: "Utah",
            subtitle: "Photo Manipulation", 
            workType: "Photo Manipulation",
            slug: "/utah",
            previewImage: "/assets/img/Portadas/Portada_Utah.jpg"
        },
        {
            title: "Vineyard",
            subtitle: "Photo Manipulation",
            workType: "Photo Manipulation", 
            slug: "/vineyard",
            previewImage: "/assets/img/Portadas/Portada_Vineyard.jpg"
        }
    ];

    useEffect(() => {
        // Try Firebase first, fallback to static data
        db.collection('works')
        .get()
        .then((querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
            data.push(doc.data());
            });
            if (data.length > 0) {
                setWorks(data);
            } else {
                // Fallback to static data
                setWorks(staticWorks);
            }
        })
        .catch((error) => {
            console.error('Error getting documents, using static data: ', error);
            // Fallback to static data on error
            setWorks(staticWorks);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const filteredWorks = filter === 'All' || '' ? works : works.filter(work => work.workType === filter);

  return (
    <>
        {filteredWorks.map((work, index) => (
            <WorkItem work={work} index={index} key={work.slug || index}/>
        ))}
    </>
  )
}