import api from "../../api/api";

const search = async (query, { rejectWithValue }) => {
  try {
    const response = await api.get(`/places/search?query=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || 'Seraching faild failed');

  }
};


const searchServices = { search };
export default searchServices;
