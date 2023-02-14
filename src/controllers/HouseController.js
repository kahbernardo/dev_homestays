//methods: index, show, update, store,destroy
/*
index:listagem de sessoes
store:cria sessao
show:lista unica sessao
update:atualizar sessao
destroy: deletar sessao 
*/

import House from "../models/House";

class HouseController {
  async store(req, res) {
    console.log("body", req.body);
    console.log("file", req.file);
    //   const { email } = req.body;
    //   let user = await User.findOne({ email });

    //   if (!user) {
    //     user = await User.create({ email });
    //   }

    return res.json({ ok: true });
  }
}

export default new HouseController();
