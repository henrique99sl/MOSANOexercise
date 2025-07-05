import Country from "../models/Country.js";

export const getCountries = async (req, res) => {
  const countries = await Country.find();
  res.json(countries);
};

export const createCountry = async (req, res) => {
  try {
    const data = req.body;

    // prevenir duplicação de _id
    if (data._id) delete data._id;

    const newCountry = new Country(data);
    await newCountry.save();
    const allCountries = await Country.find();
    res.json(allCountries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating country" });
  }
};

export const deleteCountry = async (req, res) => {
  try {
    await Country.findByIdAndDelete(req.params.id);
    const allCountries = await Country.find();
    res.json(allCountries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting country" });
  }
};

