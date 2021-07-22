import CustomError from '../../classes/CustomError'

interface IMustSelectOne {
  obj: any
  name: string
  pageIndex?: number
}

interface ICurrentMultipleSelection {
  [key: string] :{
    [key: string]: {value: boolean}
  }
}

const mustSelectOne = ({
  obj,
  name,
  pageIndex
} :IMustSelectOne
): any => {
  const currentMultipleSelection: ICurrentMultipleSelection = obj[name]

  let trueValues = 0

  Object.values(currentMultipleSelection)
    .forEach(bool => {
      if (bool) {
        trueValues += 1
      }
    })

  if (trueValues === 0) {
    throw new CustomError({
      name: 'CustomError',
      message: `You Must Select One at ${name}`,
      pageIndex,
      nameOfObject: name
    })
  }

}

export default mustSelectOne