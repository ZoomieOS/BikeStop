const clientID = "BLGPGVNSA0PGBOARYJICW31V4UVSUNFHLQOA4KJI2UN1KD0K"
const clientSecret = "2DIQZPLFTO4JIPJ3QWO5BTGXDH04CRS3K3TJ3ESAKZZLKHHE"

export const getElementInfo = (venueID) =>
fetch(`https://api.foursquare.com/v2/venues/${venueID}?client_id=${clientID}&client_secret=${clientSecret}&v=20180910&locale=en`)
  .then(response => response.json())
  .then(data => data.response.venue)
  .catch(response => console.log(response))