import React from 'react';
import OurTeamBanner from '../components/OurTeamBanner';
import TeamGrid from '../components/TeamGrid';
import TeamModal from '../components/TeamModal';

const OurTeamPage = () => {
    return (
        <div>
            <OurTeamBanner/>
            <TeamGrid gridName="OUR TEAM" nameColor="#163f81"/>
            <TeamModal/>
        </div>
    );
};

export default OurTeamPage;