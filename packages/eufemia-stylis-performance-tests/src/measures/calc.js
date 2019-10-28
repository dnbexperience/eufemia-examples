export const calcMeasures = title => {
  const ret = {}

  performance.measure(
    `measure ${title} Render`,
    `${title} Render evaluation-Start`
  )

  ret.totalDuration = performance
    .getEntriesByName(`measure ${title} Render`)
    .reduce((acc, { duration }) => (acc += duration), 0)

  try {
    ret.withProperties = performance
      .getEntriesByName('measure withProperties')
      .reduce((acc, { duration }) => (acc += duration), 0)
    ret.matchAll = performance
      .getEntriesByName('measure matchAll')
      .reduce((acc, { duration }) => (acc += duration), 0)
    ret.fillVars = performance
      .getEntriesByName('measure fillVars')
      .reduce((acc, { duration }) => (acc += duration), 0)
    ret.replaceVars = performance
      .getEntriesByName('measure replaceVars')
      .reduce((acc, { duration }) => (acc += duration), 0)
  } catch (e) {
    //
    console.warn(e)
  }

  // Pull out all of the measurements.
  // console.log(performance.getEntriesByType('measure'))

  return JSON.stringify(ret, null, 4)
}
