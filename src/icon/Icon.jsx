import React from 'react';
import LinkedinIcon from './LinkedinIcon';
import GithubIcon from './GithubIcon';

const Icon = ({name}) => {
    switch (name) {
        case 'linkedin':
            return <LinkedinIcon />;
        case 'github':
            return <GithubIcon />;
    }
}

export default Icon
