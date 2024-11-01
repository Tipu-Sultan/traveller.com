import api from "../../api/api";

const fetchPlaceServices = async ({ placeId, placeName, city }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/places/place/services`, {
        params: { placeId, placeName, city }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Seraching faild failed');
  
    }
  };
  

  const fetchPlace = async (placeId, { rejectWithValue }) => {
    try {
        const response = await api.get(`/places/${placeId}`); // Use placeId as path parameter
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.error || 'Searching failed');
    }
};

  
  const tripServices = { fetchPlaceServices,fetchPlace };
  export default tripServices;