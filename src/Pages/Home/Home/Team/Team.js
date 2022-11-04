import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';

const Team = () => {
    const [teams, setTeams] = useState([])

    useEffect( ()=> {
        fetch('team.json')
        .then(res=> res.json())
        .then(data => setTeams(data))
    },[])

    return (
        <div>
            <div className='text-center'>
                <p className='font-bold text-2xl text-orange-600'>Team</p>
                <h1 className='font-bold text-5xl py-5'>Meet Our Team</h1>
                <p className=''>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6'>
                {
                    teams.map(team => 
                    <TeamCard
                     key={team._id} team={team}>
                    </TeamCard>)
                }
            </div>
            
        </div>
    );
};

export default Team;