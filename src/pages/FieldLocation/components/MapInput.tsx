import ReactMapGl, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { ENV_VARS } from '@/constants/envVars'
import useThemeStore from '@/stores/theme'

const MapInput = ({
	coordinates,
	onMove,
}: {
	coordinates: [number, number]
	onMove: (coordinates: [number, number]) => void
}) => {
	const theme = useThemeStore((state) => state.theme)

	return (
		<div className="h-[450px] lg:h-[500px]">
			<ReactMapGl
				mapboxAccessToken={ENV_VARS.MAP.ACCESS_TOKEN}
				mapStyle={
					theme === 'light'
						? ENV_VARS.MAP.LIGHT_STYLE_URL
						: ENV_VARS.MAP.DARK_STYLE_URL
				}
				style={{ width: '100%', height: '100%', borderRadius: '0.25rem' }}
				longitude={coordinates[0]}
				latitude={coordinates[1]}
				initialViewState={{ zoom: 15 }}
				onMove={(e) => onMove([e.viewState.longitude, e.viewState.latitude])}

				// onMove={(e) => setViewPort(e.viewState)}
			>
				<Marker
					longitude={coordinates[0]}
					latitude={coordinates[1]}
					color="red"
					anchor="bottom"
				/>
			</ReactMapGl>
		</div>
	)
}

export default MapInput
