import React from 'react'
import { Store } from './Store'
import { IEpisodeProps } from './interfaces'
import { fetchDataAction, toggleFavAction } from './Actions'
import Spinner from './ui/Spinner'


const EpisodeList = React.lazy<any>(() => import('./EpisodeList'))

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store)

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch)
  })


  const props: IEpisodeProps = {
    episodes: state.episodes,
    toggleFavAction,
    favourites: state.favourites,
    store: { state, dispatch }
  }
  return (
    <React.Fragment>
      <React.Suspense fallback={(<Spinner />)}>
        <section className="episode-layout" >
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  )
}
