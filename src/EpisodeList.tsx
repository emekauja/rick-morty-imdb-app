import React from 'react'
import { IEpisode } from './interfaces'


export default function EpisodeList(props: any): Array<JSX.Element> {
   const {episodes, toggleFavAction, favourites, store} = props
   const  {state, dispatch} = store
  return episodes.map((episode: IEpisode) => (
    <section key={episode.id} className="episode-box">
      <img 
        src={episode.image.medium} 
        alt={`Rick and Mort ${episode.name}`} 
      />
      <div className="">{episode.name}</div>
      <section>
        <div>
          Season: {episode.season} Episode: {episode.number}
        </div>
        <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
          {favourites.includes(episode) ? 
          (<span aria-label="black" role="img">💓</span>   ): 
          (<span aria-label="black" role="img">🖤</span>)  }
        </button>
      </section>
    </section>
  ))
}
