import { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

class _GoogleMap extends Component {

    state = {
        style: {
            maxWidth: "1280px",
            height: "500px",
            overflowX: "hidden",
            overflowY: "hidden"
        },
        pos: {
            lat: 32.109333,
            lng: 34.855499
        }
    }

    componentDidMount() {
        const { lat, lng } = this.props.loc
        const pos = { lat, lng }
        this.setState({ pos })
    }

    render() {
        return (

            <div className="map-container flex">
                <Map
                    google={this.props.google}
                    zoom={13}
                    initialCenter={{ lat: 13.736717, lng: 100.523186 }}
                    center={this.state.pos}
                    style={this.state.style}
                >
                    <Marker
                        position={this.state.pos}
                        name={'branch location'}
                    />
                    <InfoWindow />
                </Map>
            </div>
        )
    }
}

export const GoogleMap = GoogleApiWrapper({
    apiKey: ('AIzaSyDUWCE4l1Qle1kbFkti_JHwA2OQ6_i25_U')
})(_GoogleMap)