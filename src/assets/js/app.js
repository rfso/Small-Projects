const myFunc = () => {
  return (myFunc2 = () => {
    const testing = 'teste'
    console.log(testing)
  })
}

myFunc()
myFunc(2)
