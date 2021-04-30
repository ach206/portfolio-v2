import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import './App.css'
import {TypingAni} from './comps/'
import {invertedLogo} from './images'

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <ReactFullpage
                    licenseKey={'wobwH@p8'}
                    css3={true}
                    autoScrolling={true}
                    responsiveWidth={769}
                    responsiveHeight={600}
                    fadingEffect={true}
                    sectionsColor={['#000']}
                    render={({state, fullpageApi}) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <div className='section home fp-auto-height-responsive'>
                                    <img src={invertedLogo} alt='invertedLogo' className='home-img' />
                                    <TypingAni />
                                    <div className='fade-in-text'>
                                        <p className='sm-cap-heading'>Camille Hall</p>
                                    </div>
                                </div>
                            </ReactFullpage.Wrapper>
                        )
                    }}
                />
            </div>
        )
    }
}
export default App
