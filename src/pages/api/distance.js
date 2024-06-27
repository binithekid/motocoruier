// pages/api/distance.js

export default async function handler(req, res) {
  const { pickupPostcode, deliveryPostcode } = req.query;

  const apiKey = "AIzaSyC7tH-vP_tDyPi42ZKivORunFrQ_WRa2v0";
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${pickupPostcode}&destinations=${deliveryPostcode}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const distanceText = data.rows[0].elements[0].distance.text;

    console.log(distanceText);

    if (response.ok) {
      res
        .status(200)
        .json({ distance: data.rows[0].elements[0].distance.text });
    } else {
      res.status(500).json({ error: "Unable to calculate distance." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching data from Google Maps API." });
  }
}
