import Reserve from "../models/Reserve";
import House from "../models/House";
import User from "../models/User";

class ReserveController {
  async store(req, res) {
    const { user_id } = req.headers;
    const { house_id } = req.params;
    const { date } = req.body;

    const user = await User.findById(user_id);
    const houses = await House.findById(house_id);

    if (!houses) {
      return res.status(400).json({ error: "Casa não encontrada" });
    }
    if (houses.status !== true) {
      return res.status(400).json({ error: "Casa indisponível" });
    }

    if (String(user._id) == String(houses.user)) {
      return res.status(401).json({ error: "Reserva não permitida" });
    }

    const reserve = await Reserve.create({
      user: user_id,
      house: house_id,
      date,
    });

    await reserve.populate("house").populate("user").execPopulate();

    return res.json(reserve);
  }

  async index(req, res) {
    const { user_id } = req.headers;

    const reserves = await Reserve.find({
      user: user_id,
    });

    reserves.populate("house").execPopulate();

    return res.json(reserves);
  }
}

export default new ReserveController();
