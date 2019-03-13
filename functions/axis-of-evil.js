exports.handler = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify([
      { id: "pekkis", name: "Abu Pekkis", slug: "abu-pekkis" },
      { id: "aatu", name: "Adolf Hitler", slug: "adolf-hitler" },
      { id: "kim", name: "Kim Jong-Un", slug: "kim-jong-un" },
      { id: "sadu", name: "Saddam Hussein", slug: "saddam-hussein" },
      { id: "bashar", name: "Bashar al-Assad", slug: "bashar-al-assad" },
    ]),
  }
}
