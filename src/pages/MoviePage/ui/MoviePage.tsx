import { MoviePreview } from '@features/moviePreview'
import { MovieProvider } from '@features/moviePreview/model/MovieProvider'

export const MoviePage = () => {
	return (
		<MovieProvider>
			<MoviePreview />
		</MovieProvider>
	)
}
