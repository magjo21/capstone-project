import dbConnect from "@/db/connect";
import Restaurant from "@/db/models/Restaurant";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;
  switch (request.method) {
    case "GET":
      const restaurant = await Restaurant.findOne({ restaurantID: id });
      return response.status(200).json(restaurant);

    case "PUT":
      await Restaurant.findOneAndUpdate(
        { restaurantID: id },
        { $set: request.body }
      );
      return response.status(200).json({ status: "Restaurant Updated" });
  }
}
