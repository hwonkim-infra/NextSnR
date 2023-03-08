import axios from "axios";

export async function loadPosts() {
    // Call an external API endpoint to get posts
    const HEXresponse = await axios.get("http://127.0.0.1:3000/api/HEXmodels/");
    const WEXresponse = await axios.get("http://127.0.0.1:3000/api/WEXmodels/");
    const GEOresponse = await axios.get("http://127.0.0.1:3000/api/PSC/Global");

    const HEXmodels = HEXresponse.data;
  const WEXmodels = WEXresponse.data;
  const geometries = GEOresponse.data;
  
    return {HEXmodels, WEXmodels, geometries};
  }