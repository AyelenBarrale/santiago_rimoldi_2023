import React, {useState, useEffect} from 'react';
import { db } from '../../firebase';
import { WorkItem } from '../WorkItem/WorkItem';

export const WorkList = ({filter}) => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        db.collection('works')
        .get()
        .then((querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
            data.push(doc.data());
            });
            setWorks(data);
        })
        .catch((error) => {
            console.error('Error getting documents: ', error);
        });
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