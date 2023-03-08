
const apiKey = process.env.REACT_APP_YELP_API_KEY

const Yelp = { 
    search(term, location, sortBy) {
        return fetch(`https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        }).then((response) => {
            return response.json()
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map((restaurant) => {
                    console.log(restaurant)
                    return {
                        id: restaurant.id,
                        imageSrc: restaurant.image_url,
                        name: restaurant.name,
                        address: restaurant.location.address1,
                        city: restaurant.location.city,
                        state: restaurant.location.state,
                        zipCode: restaurant.location.zipcode,
                        category: restaurant.categories[0].title,
                        rating: restaurant.rating,
                        reviewCount: restaurant.review_count,
                    }
                })
            }
        })
    }

}


export default Yelp;