import { useEffect, useState } from "react";
import axios from "axios";

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCountries = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/countries");
      setCountries(res.data);
    } catch (err) {
      console.error("Error fetching countries", err);
    } finally {
      setLoading(false);
    }
  };

  const addCountry = async (country) => {
    const res = await axios.post("http://localhost:4000/api/countries", country);
    setCountries(res.data);
  };

  const deleteCountry = async (id) => {
    const res = await axios.delete(`http://localhost:4000/api/countries/${id}`);
    setCountries(res.data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return { countries, loading, addCountry, deleteCountry };
}
