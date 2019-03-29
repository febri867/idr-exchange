function mapShards(data) {
  const {
    base: {
      value
    },
    shards
  } = data

  let baseValue = parseInt(value) || 0

  const mappedShards = shards.map((e) => {
      const mod = Math.floor(baseValue / e)
      if (mod > 0) baseValue = baseValue % e

      return {
        shard: e,
        count: mod
      }
  })

  if (baseValue) mappedShards.push({
    shard:'Difference',
    count: baseValue
  })

  return mappedShards
}

export default mapShards
