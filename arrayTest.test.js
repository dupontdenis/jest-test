const {
  
    reduce,
    myReduce
  
  } = require("./array.js")
  
  describe("myReduce", () => {
    it("with a starting value", () => {
      const func = jest.fn((sum, elem) => sum + elem)
      const startingArray = [1, 10, 100]
      const total = myReduce(startingArray, func, -111),
           tot = reduce(startingArray, func, -111)
  
      expect(total).toEqual(tot)

      expect(func).toHaveBeenNthCalledWith(1, -111, 1, 0, startingArray)
      expect(func).toHaveBeenNthCalledWith(2, -110, 10, 1, startingArray)
      expect(func).toHaveBeenNthCalledWith(3, -100, 100, 2, startingArray)
      
      expect(func).toHaveBeenCalledTimes(6)
    })
  
    it("with no starting value", () => {
      const func = jest.fn((sum, elem) => sum + elem)
      const startingArray = [5, 3, 7]
      const total = myReduce(startingArray, func)
  
      expect(total).toEqual(15)
      expect(func).toHaveBeenNthCalledWith(1, 5, 3, 1, startingArray)
      expect(func).toHaveBeenNthCalledWith(2, 8, 7, 2, startingArray)
      expect(func).toHaveBeenCalledTimes(2)
    })
  })
  
  
  
  
  