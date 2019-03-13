exports.handler = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify([
      { name: "Abu Pekkis" },
      { name: "Adolf Hitler" },
      { name: "Kim Jong-Un" },
      { name: "Saddam Hussein" },
      { name: "Bashar al-Assad" },
    ]),
  }
}
