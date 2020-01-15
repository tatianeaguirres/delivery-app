import React, { useEffect, useRef } from 'react'

const Map = ({ options, onMount, className }) => {
  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
  const URL_GOOGLE_API = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`
  const ref = useRef()

  useEffect(() => {
    const onLoad = () => {
      const map = new window.google.maps.Map(ref.current, options)
      if (typeof onMount === `function`) onMount(map)
    }
    if (!window.google) {
      const script = document.createElement(`script`)
      script.src = URL_GOOGLE_API
      document.head.append(script)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
  }, [onMount, options])

  return <div {...{ ref, className }} />
}

Map.defaultProps = {
  options: {
    center: { lat: 52.3667, lng: 4.8945 },
    zoom: 7
  }
}

export default Map
