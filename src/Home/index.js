import {Component} from 'react'
import data from '../data.json'
import games from '../games.json'
import './index.css'


class Home extends Component {
    filterContent = (content, query) => {
        this.filteredGames = [];
        if (!query) {
            return content;
        }
        return content.filter((content) => {
            const name = content.name ? content.name.toLowerCase(): '';
            return name.includes(query.toLowerCase()) ;
        })
    }

    render() {
        const {searchQuery} = this.props
        const filteredData = this.filterContent(data, searchQuery);
        const filteredGames = this.filterContent(games, searchQuery);
      
        return ( 
            <div className='total-container'>
                
                {/* //left side container for ads// */}
                <div className='left-container'>
                    <h1> ADS</h1>
                </div>   

            {/* this is total middle container for 8dsongs, shorts, gameing, playlist */}
            <div className="home-container" >
                
                {/* first is 8dSongs container */}
                <div className="home-container-first" id='Songs'>
                    <h1 className='heading'>8D Songs</h1>
                    <div className='cards'>
                            {filteredData.map((d) => (
                                <div className='song-container' key={d.name}>
                                <iframe src={d.link} width="300" height="200" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen className='video'></iframe>
                                 <div className='content-container'>
                                 <p className='content'>Movie: {d.name}</p>
                                </div>
                                </div>
                            ))}
                    </div>
                </div>

                    {/* second is shorts container */}
                <div className="home-container-second" id='Shorts'>
                    <h1 className='heading'>Shorts</h1>
                    <div className='cards'>
                         {filteredData.map((d) => (
                         <div className='song-container' key={d.name}>
                          <iframe width="200" height="315" src={d.shorts} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video'></iframe>
                          <div className='content-container'>
                            <p className='content'>Movie: {d.name}</p>
                         </div>
                </div>
            ))}
            </div>
        </div>

        {/* third is gameing container */}
        <div className="home-container-third" id='Gaming'>
                    <h1 className='heading'>Gaming</h1>
                    <div className='cards'>
                            {filteredGames.map((g) => (
                                <div className='song-container' key={g.name}>
                               <iframe width="300" height="200" src={g.game} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video'></iframe>
                                <div className='content-container'>
                                 <p className='content'>{g.name}</p>
                                </div>
                                </div>
                            ))}
                    </div>
                </div>

        {/* fourth is playlist container */}
        <div className="home-container-fourth" id='Playlist'>
            <h1 className='heading'>PlayList</h1>
            <div className='card-container'>
            <div className='card'>
            <iframe width="350" height="215" src="https://www.youtube.com/embed/videoseries?si=Sv7Wh2W26SEHbmdj&amp;list=PLPW3GWjJnMG_mzAvysEsckvUDaLLNYnvx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video'></iframe> 
            <p className='content'>Gaming</p>
            </div>
            <div className='card'>
            <iframe width="200" height="215" src="https://www.youtube.com/embed/videoseries?si=OYkqzFpQ9xjTTtko&amp;list=PLPW3GWjJnMG8uNaevWTyM-6_TYr2Hf1zR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video'></iframe> 
            <p className='content'>Shorts</p>
            </div>
            <div className='card'>
            <iframe width="350" height="215" src="https://www.youtube.com/embed/videoseries?si=kdqUU9lZD0kE3UUa&amp;list=PLPW3GWjJnMG9wLLqdLnokyTerXzws72P7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video'></iframe>
            <p className='content'>8D Songs</p>
            </div>
            </div>
        </div>
           </div>

           {/* right side container for the ads */}
        <div className='right-container'>
                <h1> ADS</h1>
        </div>  

        {/* //Footer// */}
        <div className='footer' id='About'>
       <h1 className='copyright'>Copyright © 2024 <a href="https://www.youtube.com/@Frustrated_codegamer" className='youtube-link'>Frustrated_CodGamer</a></h1>
        </div>
    </div>
            
        )
    }
}

export default Home