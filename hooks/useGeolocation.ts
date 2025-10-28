import { useState, useEffect } from "react";

interface GeolocationState {
  loading: boolean;
  position: { latitude: number; longitude: number } | null;
  error: string | null;
}

export const useGeolocation = (): GeolocationState => {
  const [state, setState] = useState<GeolocationState>({
    loading: navigator.geolocation ? true : false,
    position: null,
    error: navigator.geolocation
      ? null
      : "Geolocation is not supported by your browser.",
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }

    const onSuccess = (position: GeolocationPosition) => {
      setState({
        loading: false,
        position: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
        error: null,
      });
    };

    const onError = (error: GeolocationPositionError) => {
      setState({
        loading: false,
        position: null,
        error: error.message,
      });
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: true,
      timeout: 10000,
    });
  }, []);

  return state;
};
