exports.handler = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify([
      { id: "pekkis", name: "Abu Pekkis" },
      { id: "aatu", name: "Adolf Hitler" },
      { id: "kim", name: "Kim Jong-Un" },
      { id: "sadu", name: "Saddam Hussein" },
      { id: "bashar", name: "Bashar al-Assad" },
    ]),
  }
}
