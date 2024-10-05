function status(resquest, response) {
  response.status(200).json({ chave: "ola" });
}

export default status;
