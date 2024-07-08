import React, { useState } from 'react';
import API_1 from '../../../assets/images/API_1.png';
import API_2 from '../../../assets/images/API_2.png';
import API_3 from '../../../assets/images/API_3.png';
import API_4 from '../../../assets/images/API_4.png';

const images = [
    { src: API_1, alt: 'Image 1' },
    { src: API_2, alt: 'Image 2' },
    { src: API_3, alt: 'Image 3' },
    { src: API_4, alt: 'Image 4' }
];

const Web5 = () => {
    const [expanded1, setExpandedImage1] = useState(false);
    const [expanded2, setExpandedImage2] = useState(false);
    const [expanded4, setExpandedImage4] = useState(false);
    const [expanded3, setExpandedImage3] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = (index) => {
        switch (index) {
            case 1:
                setExpandedImage1(!expanded1);
                console.log(index);
                break;
            case 2:
                setExpandedImage2(!expanded2);
                console.log(index);
                break;
            case 3:
                setExpandedImage3(!expanded3);
                console.log(index);
                break;
            case 4:
                setExpandedImage4(!expanded4);
                console.log(index);
                break;

        }
    };
    return (
        <div className="game-content">
            <div className='description'>
                <h1>Secrets API</h1>
                <p>Request a random secret using API.</p>
                <ul>
                    <li>Built with EJS</li>
                    <li>Github link: <a href="https://github.com/Kevigan/RandomSecret.git" target="_blank" rel="noopener noreferrer"> Link</a></li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={API_1} className={expanded1 ? 'expanded' : 'normal'} alt="Game 1" onClick={() => toggleExpand(1)} />
                    <img src={API_2} className={expanded2 ? 'expanded' : 'normal'} alt="Game 2" onClick={() => toggleExpand(2)} />
                    <img src={API_3} className={expanded3 ? 'expanded' : 'normal'} alt="Game 3" onClick={() => toggleExpand(3)} />
                    <img src={API_4} className={expanded4 ? 'expanded' : 'normal'} alt="Game 4" onClick={() => toggleExpand(4)} />
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Web5;