import React from 'react'
import { Store } from './Store'
import Spinner from './ui/Spinner'
import { toggleFavAction } from './Actions'
import { IEpisodeProps } from './interfaces'



const EpisodeList = React.lazy<any>(() => import('./EpisodeList'))


export default function FavPage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store)

  const props: IEpisodeProps = {
    episodes: state.favourites,
    toggleFavAction,
    favourites: state.favourites,
    store: {state, dispatch}
  }
  return (
    <React.Suspense fallback={(<Spinner />)}>
      <div className="episode-layout">
        <EpisodeList {...props} />
      </div>
    </React.Suspense>
  )
}
